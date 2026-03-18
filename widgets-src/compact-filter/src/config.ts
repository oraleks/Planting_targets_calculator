import { ImmutableObject } from 'seamless-immutable'

export interface Config {
  dataSourceId?: string
}

export type IMConfig = ImmutableObject<Config>
