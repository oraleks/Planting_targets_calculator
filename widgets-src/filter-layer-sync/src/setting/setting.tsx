/** @jsx jsx */
import { React, jsx, Immutable, type ImmutableArray } from 'jimu-core'
import { type AllWidgetSettingProps } from 'jimu-for-builder'
import {
  MapWidgetSelector,
  SettingSection,
  SettingRow
} from 'jimu-ui/advanced/setting-components'
import { TextInput, Label } from 'jimu-ui'
import { type IMConfig, type FilterLayerMapping } from '../config'

export default class Setting extends React.PureComponent<
  AllWidgetSettingProps<IMConfig>
> {
  onMapWidgetSelected = (useMapWidgetIds: string[]) => {
    this.props.onSettingChange({
      id: this.props.id,
      useMapWidgetIds
    })
  }

  onFilterWidgetIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set('filterWidgetId', e.target.value)
    })
  }

  onSelectedLayerTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set(
        'selectedSegmentsLayerTitle',
        e.target.value
      )
    })
  }

  onMappingFieldChange = (index: number, value: string) => {
    const mappings = this.props.config.mappings.asMutable({ deep: true })
    mappings[index] = { ...mappings[index], filterField: value }
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set(
        'mappings',
        Immutable(mappings) as ImmutableArray<FilterLayerMapping>
      )
    })
  }

  onMappingLayerChange = (index: number, value: string) => {
    const mappings = this.props.config.mappings.asMutable({ deep: true })
    mappings[index] = { ...mappings[index], layerTitle: value }
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set(
        'mappings',
        Immutable(mappings) as ImmutableArray<FilterLayerMapping>
      )
    })
  }

  addMapping = () => {
    const mappings = this.props.config.mappings.asMutable({ deep: true })
    mappings.push({ filterField: '', layerTitle: '' })
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set(
        'mappings',
        Immutable(mappings) as ImmutableArray<FilterLayerMapping>
      )
    })
  }

  removeMapping = (index: number) => {
    const mappings = this.props.config.mappings.asMutable({ deep: true })
    mappings.splice(index, 1)
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set(
        'mappings',
        Immutable(mappings) as ImmutableArray<FilterLayerMapping>
      )
    })
  }

  render () {
    const { config, useMapWidgetIds } = this.props

    return (
      <div className='widget-setting-filter-layer-sync p-3'>
        <SettingSection title='Map Widget'>
          <SettingRow>
            <MapWidgetSelector
              useMapWidgetIds={useMapWidgetIds}
              onSelect={this.onMapWidgetSelected}
            />
          </SettingRow>
        </SettingSection>

        <SettingSection title='Filter Widget'>
          <SettingRow label='Filter Widget ID'>
            <TextInput
              value={config?.filterWidgetId || ''}
              onChange={this.onFilterWidgetIdChange}
              placeholder='e.g., widget_4'
            />
          </SettingRow>
        </SettingSection>

        <SettingSection title='Selected Segments Layer'>
          <SettingRow label='Layer Title in Web Map'>
            <TextInput
              value={config?.selectedSegmentsLayerTitle || ''}
              onChange={this.onSelectedLayerTitleChange}
              placeholder='e.g., Selected segments'
            />
          </SettingRow>
        </SettingSection>

        <SettingSection title='Filter-to-Layer Mappings'>
          {config?.mappings?.map((mapping, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #ddd',
                borderRadius: 4,
                padding: 8,
                marginBottom: 8
              }}
            >
              <SettingRow label='Filter Field'>
                <TextInput
                  size='sm'
                  value={mapping.filterField}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    this.onMappingFieldChange(index, e.target.value)
                  }
                  placeholder='e.g., summer_SI'
                />
              </SettingRow>
              <SettingRow label='Layer Title'>
                <TextInput
                  size='sm'
                  value={mapping.layerTitle}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    this.onMappingLayerChange(index, e.target.value)
                  }
                  placeholder='e.g., Summer Shade Index'
                />
              </SettingRow>
              <button
                onClick={() => this.removeMapping(index)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#c00',
                  cursor: 'pointer',
                  fontSize: 12
                }}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={this.addMapping}
            style={{
              background: '#0079c1',
              color: '#fff',
              border: 'none',
              borderRadius: 4,
              padding: '4px 12px',
              cursor: 'pointer',
              fontSize: 12
            }}
          >
            + Add Mapping
          </button>
        </SettingSection>
      </div>
    )
  }
}
