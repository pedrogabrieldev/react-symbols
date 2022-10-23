import IconSettingsOverscanFill0Wght100Grad0Opsz48 from '../components/SettingsOverscanFill0Wght100Grad0Opsz48'
import IconSettingsOverscanFill0Wght200Grad0Opsz48 from '../components/SettingsOverscanFill0Wght200Grad0Opsz48'
import IconSettingsOverscanFill0Wght300Grad0Opsz48 from '../components/SettingsOverscanFill0Wght300Grad0Opsz48'
import IconSettingsOverscanFill0Wght400Grad0Opsz48 from '../components/SettingsOverscanFill0Wght400Grad0Opsz48'
import IconSettingsOverscanFill0Wght500Grad0Opsz48 from '../components/SettingsOverscanFill0Wght500Grad0Opsz48'
import IconSettingsOverscanFill0Wght600Grad0Opsz48 from '../components/SettingsOverscanFill0Wght600Grad0Opsz48'
import IconSettingsOverscanFill0Wght700Grad0Opsz48 from '../components/SettingsOverscanFill0Wght700Grad0Opsz48'
import IconSettingsOverscanFill1Wght100Grad0Opsz48 from '../components/SettingsOverscanFill1Wght100Grad0Opsz48'
import IconSettingsOverscanFill1Wght200Grad0Opsz48 from '../components/SettingsOverscanFill1Wght200Grad0Opsz48'
import IconSettingsOverscanFill1Wght300Grad0Opsz48 from '../components/SettingsOverscanFill1Wght300Grad0Opsz48'
import IconSettingsOverscanFill1Wght400Grad0Opsz48 from '../components/SettingsOverscanFill1Wght400Grad0Opsz48'
import IconSettingsOverscanFill1Wght500Grad0Opsz48 from '../components/SettingsOverscanFill1Wght500Grad0Opsz48'
import IconSettingsOverscanFill1Wght600Grad0Opsz48 from '../components/SettingsOverscanFill1Wght600Grad0Opsz48'
import IconSettingsOverscanFill1Wght700Grad0Opsz48 from '../components/SettingsOverscanFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSettingsOverscan = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSettingsOverscanFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSettingsOverscanFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSettingsOverscanFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSettingsOverscanFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSettingsOverscanFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSettingsOverscanFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSettingsOverscanFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSettingsOverscanFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSettingsOverscanFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSettingsOverscanFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSettingsOverscanFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSettingsOverscanFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSettingsOverscanFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSettingsOverscanFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
