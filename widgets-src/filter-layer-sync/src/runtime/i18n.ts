import { type Locale } from './locale'

// Layer panel titles. Keys are the canonical English titles (which match
// what the ArcGIS web map publishes as `layer.title`); values are the
// rendered strings shown in the Map Layers UI.
export const LAYER_TITLES: Record<Locale, Record<string, string>> = {
  en: {
    'Spring/Summer Shade Index': 'Spring/Summer Shade Index',
    'Neighbourhood transit': 'Neighbourhood transit',
    'City transit': 'City transit',
    'Local centers': 'Local centers',
    'Building density': 'Building density',
    'Access to shops and restaurants': 'Access to shops and restaurants',
    'School or preschool proximity': 'School or preschool proximity',
    'Tram, metro or railway station proximity': 'Tram, metro or railway station proximity',
    'Bus stop proximity': 'Bus stop proximity',
    'Existing trees': 'Existing trees',
    'Selected streets': 'Selected streets'
  },
  he: {
    'Spring/Summer Shade Index': 'מדד הצללת אביב/קיץ',
    'Neighbourhood transit': 'תנועה שכונתית',
    'City transit': 'תנועה עירונית',
    'Local centers': 'מרכזים מקומיים',
    'Building density': 'צפיפות בנייה',
    'Access to shops and restaurants': 'נגישות לחנויות ומסעדות',
    'School or preschool proximity': 'קרבה לבית ספר או גן',
    'Tram, metro or railway station proximity': 'קרבה לרכבת קלה, מטרו או תחנת רכבת',
    'Bus stop proximity': 'קרבה לתחנת אוטובוס',
    'Existing trees': 'עצים קיימים',
    'Selected streets': 'רחובות נבחרים'
  }
}

// Header buttons (text rendered inside ExB common/button widgets)
export const HEADER_BUTTONS: Record<Locale, Record<string, string>> = {
  en: {
    instructions: 'Instructions',
    about: 'About'
  },
  he: {
    instructions: 'הוראות',
    about: 'אודות'
  }
}

// Site title shown in the header (widget_105)
export const SITE_TITLE: Record<Locale, string> = {
  en: 'Tel Aviv-Yafo Tree Planting Targets Calculator',
  he: 'מחשבון יעדי נטיעת עצים בתל אביב־יפו'
}

// Language-toggle button label (displayed on the toggle itself).
// Convention: the label shows the language you'll switch TO.
export const TOGGLE_LABEL: Record<Locale, string> = {
  en: 'עברית',
  he: 'English'
}
