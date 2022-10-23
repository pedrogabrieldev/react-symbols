import IconSettingsNightSightFill0Wght100Grad0Opsz48 from '../components/SettingsNightSightFill0Wght100Grad0Opsz48'
import IconSettingsNightSightFill0Wght200Grad0Opsz48 from '../components/SettingsNightSightFill0Wght200Grad0Opsz48'
import IconSettingsNightSightFill0Wght300Grad0Opsz48 from '../components/SettingsNightSightFill0Wght300Grad0Opsz48'
import IconSettingsNightSightFill0Wght400Grad0Opsz48 from '../components/SettingsNightSightFill0Wght400Grad0Opsz48'
import IconSettingsNightSightFill0Wght500Grad0Opsz48 from '../components/SettingsNightSightFill0Wght500Grad0Opsz48'
import IconSettingsNightSightFill0Wght600Grad0Opsz48 from '../components/SettingsNightSightFill0Wght600Grad0Opsz48'
import IconSettingsNightSightFill0Wght700Grad0Opsz48 from '../components/SettingsNightSightFill0Wght700Grad0Opsz48'
import IconSettingsNightSightFill1Wght100Grad0Opsz48 from '../components/SettingsNightSightFill1Wght100Grad0Opsz48'
import IconSettingsNightSightFill1Wght200Grad0Opsz48 from '../components/SettingsNightSightFill1Wght200Grad0Opsz48'
import IconSettingsNightSightFill1Wght300Grad0Opsz48 from '../components/SettingsNightSightFill1Wght300Grad0Opsz48'
import IconSettingsNightSightFill1Wght400Grad0Opsz48 from '../components/SettingsNightSightFill1Wght400Grad0Opsz48'
import IconSettingsNightSightFill1Wght500Grad0Opsz48 from '../components/SettingsNightSightFill1Wght500Grad0Opsz48'
import IconSettingsNightSightFill1Wght600Grad0Opsz48 from '../components/SettingsNightSightFill1Wght600Grad0Opsz48'
import IconSettingsNightSightFill1Wght700Grad0Opsz48 from '../components/SettingsNightSightFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSettingsNightSight = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSettingsNightSightFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSettingsNightSightFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSettingsNightSightFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSettingsNightSightFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSettingsNightSightFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSettingsNightSightFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSettingsNightSightFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSettingsNightSightFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSettingsNightSightFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSettingsNightSightFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSettingsNightSightFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSettingsNightSightFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSettingsNightSightFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSettingsNightSightFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
