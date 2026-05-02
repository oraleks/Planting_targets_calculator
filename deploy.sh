#!/usr/bin/env bash
# Deploy the calculator to GitHub Pages.
#
# Pipeline:
#   1. npm run build:prod in <ExB>/client
#   2. copy compiled bundles into cdn/7/widgets/...
#   3. create a gh-pages worktree
#   4. copy cdn/7/* into the worktree
#   5. apply production tweaks to index.html (the file in cdn/7/ uses
#      dev-edition values like isDevEdition:true, mountPath:/, base href:./;
#      gh-pages needs production values — we patch them here every deploy)
#   6. commit and push gh-pages
#   7. clean up worktree
#
# Usage:   ./deploy.sh                # full deploy (build + push)
#          ./deploy.sh --no-build     # skip the prod build (use existing
#                                       cdn/7 artifacts as-is)
#          ./deploy.sh --dry-run      # do everything except git push
set -euo pipefail

REPO="$(cd "$(dirname "$0")" && pwd)"
EXB_CLIENT="${EXB_CLIENT:-c:/Users/user/ExB/client}"
WORKTREE="${WORKTREE:-${REPO}/../planting_targets_gh-pages}"
SKIP_BUILD=0
DRY_RUN=0

for arg in "$@"; do
  case "$arg" in
    --no-build) SKIP_BUILD=1 ;;
    --dry-run)  DRY_RUN=1 ;;
    -h|--help)
      sed -n '2,/^set/p' "$0" | sed 's/^# \?//' ; exit 0 ;;
    *) echo "Unknown arg: $arg"; exit 1 ;;
  esac
done

log() { printf '\033[1;36m[deploy]\033[0m %s\n' "$*"; }
err() { printf '\033[1;31m[deploy]\033[0m %s\n' "$*" >&2; exit 1; }

# ---- 0. preflight -----------------------------------------------------------
[ -d "$REPO/cdn/7" ] || err "cdn/7 not found in $REPO"
[ -d "$EXB_CLIENT" ] || err "ExB client not found at $EXB_CLIENT (set EXB_CLIENT)"

# Stop on a dirty repo so we don't mix unrelated changes into the deploy commit
if [ -n "$(cd "$REPO" && git status --porcelain | grep -v '^??' || true)" ]; then
  log "WARNING: working tree has uncommitted changes. Continuing — the deploy"
  log "         only touches gh-pages, not the current branch."
fi

# ---- 1. production build ----------------------------------------------------
if [ "$SKIP_BUILD" -eq 0 ]; then
  log "Running build:prod in $EXB_CLIENT ..."
  ( cd "$EXB_CLIENT" && npm run build:prod )
else
  log "Skipping build (--no-build)"
fi

# ---- 2. copy compiled bundles into cdn/7 -----------------------------------
log "Copying compiled widgets into cdn/7/widgets/ ..."
WIDGETS=( tree_potential_v2 filter-layer-sync map-tools )
for w in "${WIDGETS[@]}"; do
  src="$EXB_CLIENT/dist/widgets/$w/dist/runtime/widget.js"
  dst="$REPO/cdn/7/widgets/$w/dist/runtime/widget.js"
  if [ -f "$src" ]; then
    cp "$src" "$dst"
    log "  $w/runtime/widget.js"
  fi
  setting_src="$EXB_CLIENT/dist/widgets/$w/dist/setting/setting.js"
  setting_dst="$REPO/cdn/7/widgets/$w/dist/setting/setting.js"
  if [ -f "$setting_src" ] && [ -f "$setting_dst" ]; then
    cp "$setting_src" "$setting_dst"
    log "  $w/setting/setting.js"
  fi
done

# ---- 3. create gh-pages worktree -------------------------------------------
log "Setting up gh-pages worktree at $WORKTREE ..."
( cd "$REPO" && git fetch origin gh-pages )
if [ -d "$WORKTREE" ]; then
  ( cd "$REPO" && git worktree remove --force "$WORKTREE" 2>/dev/null || true )
  rm -rf "$WORKTREE" 2>/dev/null || true
fi
( cd "$REPO" && git worktree add "$WORKTREE" gh-pages )

# ---- 4. copy cdn/7/* into worktree -----------------------------------------
# Files NOT to overwrite on gh-pages (they contain production-only patches
# the dev edition doesn't have):
#   index.html        - prod base href / mountPath / isDevEdition / buildNumber
#                       (we patch these in step 5 separately)
#   service-worker.js - skipWaiting + clients.claim added on gh-pages so
#                       cache updates take effect on first reload
log "Copying cdn/7/* into worktree (excluding service-worker.js) ..."
EXCLUDES=( --exclude='.git/' --exclude='service-worker.js' )
if command -v rsync >/dev/null 2>&1; then
  rsync -a "${EXCLUDES[@]}" "$REPO/cdn/7/" "$WORKTREE/"
else
  # Fallback: cp + delete the unwanted file from the destination.
  ( cd "$REPO/cdn/7" && cp -r . "$WORKTREE/" )
  # Restore the gh-pages service worker from HEAD
  ( cd "$WORKTREE" && git checkout HEAD -- service-worker.js 2>/dev/null || true )
fi

# ---- 5. patch index.html with production tweaks ----------------------------
log "Applying production tweaks to gh-pages index.html ..."
INDEX="$WORKTREE/index.html"
[ -f "$INDEX" ] || err "index.html not found in worktree"

# These four substitutions turn the dev-edition index.html into the
# gh-pages production version. Each replacement is idempotent — running
# it again on already-patched content is a no-op.
node - "$INDEX" <<'EOF'
const fs = require('fs');
const path = process.argv[2];
let html = fs.readFileSync(path, 'utf8');

const patches = [
  // base href: ./ -> /Planting_targets_calculator/
  [/<base href="\.\/"\/>/, '<base href="/Planting_targets_calculator/"/>'],
  // mountPath: "/" -> "/Planting_targets_calculator/"
  [/"mountPath":\s*"\/"/, '"mountPath": "/Planting_targets_calculator/"'],
  // isDevEdition: true -> false
  [/"isDevEdition":\s*true/, '"isDevEdition": false'],
  // buildNumber: "7" -> ""
  [/"buildNumber":\s*"7"/, '"buildNumber": ""']
];

let changed = 0;
for (const [re, repl] of patches) {
  const before = html;
  html = html.replace(re, repl);
  if (html !== before) changed++;
}
fs.writeFileSync(path, html);
console.log(`  patched ${changed}/${patches.length} settings`);

// Sanity-check that all four production values are present (idempotency)
const checks = [
  ['<base href="/Planting_targets_calculator/"/>', '<base href>'],
  ['"mountPath": "/Planting_targets_calculator/"', 'mountPath'],
  ['"isDevEdition": false', 'isDevEdition'],
  ['"buildNumber": ""', 'buildNumber']
];
let bad = 0;
for (const [needle, name] of checks) {
  if (!html.includes(needle)) {
    console.error(`  MISSING: ${name} — index.html may have changed format`);
    bad++;
  }
}
if (bad > 0) process.exit(1);
EOF

# ---- 6. commit + push -------------------------------------------------------
cd "$WORKTREE"
git add -A
if git diff --cached --quiet; then
  log "No changes to deploy — gh-pages already up to date."
else
  COMMIT_MSG="${COMMIT_MSG:-Deploy: $(date +%Y-%m-%d) production build}"
  git commit -m "$COMMIT_MSG" >/dev/null
  log "Committed: $(git log -1 --oneline)"
  if [ "$DRY_RUN" -eq 0 ]; then
    git push origin gh-pages
    log "Pushed to origin/gh-pages"
  else
    log "Dry run — skipping push. Worktree left at $WORKTREE for inspection."
    exit 0
  fi
fi

# ---- 7. cleanup -------------------------------------------------------------
cd "$REPO"
git worktree remove --force "$WORKTREE" 2>/dev/null || true
rm -rf "$WORKTREE" 2>/dev/null || true
log "Done. Live at https://oraleks.github.io/Planting_targets_calculator/"
log "(GitHub Pages takes ~1 minute to publish.)"
