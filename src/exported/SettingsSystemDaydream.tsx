import IconSettingsSystemDaydreamFill0Wght100Grad0Opsz48 from '../components/SettingsSystemDaydreamFill0Wght100Grad0Opsz48'
import IconSettingsSystemDaydreamFill0Wght200Grad0Opsz48 from '../components/SettingsSystemDaydreamFill0Wght200Grad0Opsz48'
import IconSettingsSystemDaydreamFill0Wght300Grad0Opsz48 from '../components/SettingsSystemDaydreamFill0Wght300Grad0Opsz48'
import IconSettingsSystemDaydreamFill0Wght400Grad0Opsz48 from '../components/SettingsSystemDaydreamFill0Wght400Grad0Opsz48'
import IconSettingsSystemDaydreamFill0Wght500Grad0Opsz48 from '../components/SettingsSystemDaydreamFill0Wght500Grad0Opsz48'
import IconSettingsSystemDaydreamFill0Wght600Grad0Opsz48 from '../components/SettingsSystemDaydreamFill0Wght600Grad0Opsz48'
import IconSettingsSystemDaydreamFill0Wght700Grad0Opsz48 from '../components/SettingsSystemDaydreamFill0Wght700Grad0Opsz48'
import IconSettingsSystemDaydreamFill1Wght100Grad0Opsz48 from '../components/SettingsSystemDaydreamFill1Wght100Grad0Opsz48'
import IconSettingsSystemDaydreamFill1Wght200Grad0Opsz48 from '../components/SettingsSystemDaydreamFill1Wght200Grad0Opsz48'
import IconSettingsSystemDaydreamFill1Wght300Grad0Opsz48 from '../components/SettingsSystemDaydreamFill1Wght300Grad0Opsz48'
import IconSettingsSystemDaydreamFill1Wght400Grad0Opsz48 from '../components/SettingsSystemDaydreamFill1Wght400Grad0Opsz48'
import IconSettingsSystemDaydreamFill1Wght500Grad0Opsz48 from '../components/SettingsSystemDaydreamFill1Wght500Grad0Opsz48'
import IconSettingsSystemDaydreamFill1Wght600Grad0Opsz48 from '../components/SettingsSystemDaydreamFill1Wght600Grad0Opsz48'
import IconSettingsSystemDaydreamFill1Wght700Grad0Opsz48 from '../components/SettingsSystemDaydreamFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSettingsSystemDaydream = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSettingsSystemDaydreamFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSettingsSystemDaydreamFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSettingsSystemDaydreamFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSettingsSystemDaydreamFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSettingsSystemDaydreamFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSettingsSystemDaydreamFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSettingsSystemDaydreamFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSettingsSystemDaydreamFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSettingsSystemDaydreamFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSettingsSystemDaydreamFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSettingsSystemDaydreamFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSettingsSystemDaydreamFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSettingsSystemDaydreamFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSettingsSystemDaydreamFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
