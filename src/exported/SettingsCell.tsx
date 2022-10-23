import IconSettingsCellFill0Wght100Grad0Opsz48 from '../components/SettingsCellFill0Wght100Grad0Opsz48'
import IconSettingsCellFill0Wght200Grad0Opsz48 from '../components/SettingsCellFill0Wght200Grad0Opsz48'
import IconSettingsCellFill0Wght300Grad0Opsz48 from '../components/SettingsCellFill0Wght300Grad0Opsz48'
import IconSettingsCellFill0Wght400Grad0Opsz48 from '../components/SettingsCellFill0Wght400Grad0Opsz48'
import IconSettingsCellFill0Wght500Grad0Opsz48 from '../components/SettingsCellFill0Wght500Grad0Opsz48'
import IconSettingsCellFill0Wght600Grad0Opsz48 from '../components/SettingsCellFill0Wght600Grad0Opsz48'
import IconSettingsCellFill0Wght700Grad0Opsz48 from '../components/SettingsCellFill0Wght700Grad0Opsz48'
import IconSettingsCellFill1Wght100Grad0Opsz48 from '../components/SettingsCellFill1Wght100Grad0Opsz48'
import IconSettingsCellFill1Wght200Grad0Opsz48 from '../components/SettingsCellFill1Wght200Grad0Opsz48'
import IconSettingsCellFill1Wght300Grad0Opsz48 from '../components/SettingsCellFill1Wght300Grad0Opsz48'
import IconSettingsCellFill1Wght400Grad0Opsz48 from '../components/SettingsCellFill1Wght400Grad0Opsz48'
import IconSettingsCellFill1Wght500Grad0Opsz48 from '../components/SettingsCellFill1Wght500Grad0Opsz48'
import IconSettingsCellFill1Wght600Grad0Opsz48 from '../components/SettingsCellFill1Wght600Grad0Opsz48'
import IconSettingsCellFill1Wght700Grad0Opsz48 from '../components/SettingsCellFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSettingsCell = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSettingsCellFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSettingsCellFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSettingsCellFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSettingsCellFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSettingsCellFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSettingsCellFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSettingsCellFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSettingsCellFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSettingsCellFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSettingsCellFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSettingsCellFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSettingsCellFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSettingsCellFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSettingsCellFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
