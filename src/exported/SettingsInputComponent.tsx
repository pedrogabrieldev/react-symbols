import IconSettingsInputComponentFill0Wght100Grad0Opsz48 from '../components/SettingsInputComponentFill0Wght100Grad0Opsz48'
import IconSettingsInputComponentFill0Wght200Grad0Opsz48 from '../components/SettingsInputComponentFill0Wght200Grad0Opsz48'
import IconSettingsInputComponentFill0Wght300Grad0Opsz48 from '../components/SettingsInputComponentFill0Wght300Grad0Opsz48'
import IconSettingsInputComponentFill0Wght400Grad0Opsz48 from '../components/SettingsInputComponentFill0Wght400Grad0Opsz48'
import IconSettingsInputComponentFill0Wght500Grad0Opsz48 from '../components/SettingsInputComponentFill0Wght500Grad0Opsz48'
import IconSettingsInputComponentFill0Wght600Grad0Opsz48 from '../components/SettingsInputComponentFill0Wght600Grad0Opsz48'
import IconSettingsInputComponentFill0Wght700Grad0Opsz48 from '../components/SettingsInputComponentFill0Wght700Grad0Opsz48'
import IconSettingsInputComponentFill1Wght100Grad0Opsz48 from '../components/SettingsInputComponentFill1Wght100Grad0Opsz48'
import IconSettingsInputComponentFill1Wght200Grad0Opsz48 from '../components/SettingsInputComponentFill1Wght200Grad0Opsz48'
import IconSettingsInputComponentFill1Wght300Grad0Opsz48 from '../components/SettingsInputComponentFill1Wght300Grad0Opsz48'
import IconSettingsInputComponentFill1Wght400Grad0Opsz48 from '../components/SettingsInputComponentFill1Wght400Grad0Opsz48'
import IconSettingsInputComponentFill1Wght500Grad0Opsz48 from '../components/SettingsInputComponentFill1Wght500Grad0Opsz48'
import IconSettingsInputComponentFill1Wght600Grad0Opsz48 from '../components/SettingsInputComponentFill1Wght600Grad0Opsz48'
import IconSettingsInputComponentFill1Wght700Grad0Opsz48 from '../components/SettingsInputComponentFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSettingsInputComponent = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSettingsInputComponentFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSettingsInputComponentFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSettingsInputComponentFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSettingsInputComponentFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSettingsInputComponentFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSettingsInputComponentFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSettingsInputComponentFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSettingsInputComponentFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSettingsInputComponentFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSettingsInputComponentFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSettingsInputComponentFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSettingsInputComponentFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSettingsInputComponentFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSettingsInputComponentFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
