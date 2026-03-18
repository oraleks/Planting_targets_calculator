export type FilterType = 'slider' | 'range-slider' | 'multi-select'

export interface SliderFilterDef {
  type: 'slider'
  field: string
  name: string
  operator: '<' | '>'
  min: number
  max: number
  step: number
  defaultValue: number
  unit?: string
  iconType: 'svg' | 'png'
  iconSvg?: string
  iconPng?: string
}

export interface RangeSliderFilterDef {
  type: 'range-slider'
  field: string
  name: string
  min: number
  max: number
  step: number
  defaultValue: [number, number]
  unit?: string
  iconType: 'svg' | 'png'
  iconSvg?: string
  iconPng?: string
}

export interface MultiSelectFilterDef {
  type: 'multi-select'
  field: string
  name: string
  options: number[]
  defaultValue: number[]
  iconType: 'svg' | 'png'
  iconSvg?: string
  iconPng?: string
}

export type FilterDef = SliderFilterDef | RangeSliderFilterDef | MultiSelectFilterDef

// --- SVG icons ---

const sunSvg = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 17"><g clip-path="url(#a)"><path fill="currentColor" d="m12.153 6.054-.707-.707 2.2-2.2.708.707zm-9.507 8.092.707.707 2.2-2.2-.706-.707zm8.8-1.493 2.2 2.2.707-.706-2.2-2.2zM5.554 5.347l-2.2-2.2-.707.706 2.2 2.2zM9 1.5H8v3h1zm-1 15h1v-3H8zm8-7v-1h-3v1zm-15 0h3v-1H1zM5 9a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m1 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 .5h16v16H0z"/></clipPath></defs></svg>'

const pedestrianSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><circle cx="9" cy="2.5" r="1.5" fill="currentColor"/><path fill="currentColor" d="M11.5 6.5 9.7 5.2a1.5 1.5 0 0 0-1.7 0L6.5 6.3a1 1 0 0 0-.4.8v2.4h1.2V7.7l1.2-.8-.8 3.6-2.4 2.4.8.8 2.2-2.2 1 2.5h1.3l-1.3-3.5 1-2.5.9 1v2.5h1.2V8.3a1 1 0 0 0-.4-.8z"/></svg>'

const carSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M13.4 5.5l-.9-2.7A1.5 1.5 0 0 0 11.1 2H4.9a1.5 1.5 0 0 0-1.4 1l-.9 2.6A1.5 1.5 0 0 0 2 6.8V11a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-.5h6V11a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V6.8c0-.5-.2-.9-.6-1.2zM4.9 3h6.2l.8 2.5H4.1zM4.5 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2m7 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>'

const buildingsSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M2 14V3h5v3h7v8zm1-1h3V4H3zm4 0h2v-2H7zm3 0h2v-2h-2zm3 0h1V7H8V4h1v2h6zM4 6h1V5H4zm0 2h1V7H4zm0 2h1V9H4zm0 2h1v-1H4zm5-4h1V7H9zm0 2h1V9H9zm2-2h1V7h-1zm0 2h1V9h-1z"/></svg>'

const shoppingSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M5 14.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m7 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M2.3 2H.5v1h1.2l2.1 7.4a1 1 0 0 0 1 .6h6.4a1 1 0 0 0 1-.6L14.5 4H4l.6 2h8l-1.4 4H5.2z"/></svg>'

const measureSvg = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="m15.18 3.89-2.85 2.85-.71-.7 1.61-1.65H9v-1h4.32l-1.7-1.69.71-.7zM0 14.39v-6h16v6zm14-3h1v-2H1v4h1v-2h1v2h1v-3h1v3h1v-2h1v2h1v-3h1v3h1v-2h1v2h1v-3h1v3h1zm-7-8H2.68l1.7-1.65-.71-.7L.82 3.89l2.85 2.85.71-.7-1.61-1.65H7z" clip-rule="evenodd"/></svg>'

export const FILTER_DEFINITIONS: FilterDef[] = [
  {
    type: 'slider', field: 'summer_SI', name: 'Shade Index',
    operator: '<', min: 0, max: 1, step: 0.05, defaultValue: 0.4,
    iconType: 'svg', iconSvg: sunSvg
  },
  {
    type: 'slider', field: 'class_2k', name: 'Neighbourhood transit',
    operator: '>', min: 0, max: 7, step: 1, defaultValue: 4,
    iconType: 'svg', iconSvg: pedestrianSvg
  },
  {
    type: 'slider', field: 'class_5k', name: 'City transit',
    operator: '>', min: 0, max: 7, step: 1, defaultValue: 4,
    iconType: 'svg', iconSvg: carSvg
  },
  {
    type: 'slider', field: 'class_ai1k', name: 'Local centers',
    operator: '>', min: 0, max: 7, step: 1, defaultValue: 5,
    iconType: 'png', iconPng: 'walking.png'
  },
  {
    type: 'slider', field: 'FSI500_mea', name: 'Building density',
    operator: '>', min: 0, max: 5, step: 0.1, defaultValue: 1.5,
    iconType: 'svg', iconSvg: buildingsSvg
  },
  {
    type: 'slider', field: 'ARw500lm_1', name: 'Commercial proximity',
    operator: '>', min: 0, max: 200, step: 5, defaultValue: 60,
    iconType: 'svg', iconSvg: shoppingSvg
  },
  {
    type: 'slider', field: 'ADws_mean', name: 'School proximity',
    operator: '<', min: 0, max: 1000, step: 25, defaultValue: 300, unit: 'm',
    iconType: 'png', iconPng: 'education.png'
  },
  {
    type: 'slider', field: 'ADwm_mean', name: 'Tram/metro proximity',
    operator: '<', min: 0, max: 1000, step: 25, defaultValue: 300, unit: 'm',
    iconType: 'png', iconPng: 'transport.png'
  },
  {
    type: 'slider', field: 'ADwbu_mean', name: 'Bus stop proximity',
    operator: '<', min: 0, max: 1000, step: 25, defaultValue: 300, unit: 'm',
    iconType: 'png', iconPng: 'bus.png'
  },
  {
    type: 'range-slider', field: 'width', name: 'Street width',
    min: 0, max: 60, step: 1, defaultValue: [20, 30] as [number, number], unit: 'm',
    iconType: 'svg', iconSvg: measureSvg
  }
]
