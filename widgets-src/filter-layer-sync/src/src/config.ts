import { ImmutableObject } from 'seamless-immutable'

export interface FilterLayerMapping {
  filterField: string
  layerTitle: string
}

export interface Config {
  filterWidgetId: string
  selectedSegmentsLayerTitle: string
  mappings: FilterLayerMapping[]
}

export type IMConfig = ImmutableObject<Config>
