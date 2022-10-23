import IconSettingsPowerFill0Wght100Grad0Opsz48 from '../components/SettingsPowerFill0Wght100Grad0Opsz48'
import IconSettingsPowerFill0Wght200Grad0Opsz48 from '../components/SettingsPowerFill0Wght200Grad0Opsz48'
import IconSettingsPowerFill0Wght300Grad0Opsz48 from '../components/SettingsPowerFill0Wght300Grad0Opsz48'
import IconSettingsPowerFill0Wght400Grad0Opsz48 from '../components/SettingsPowerFill0Wght400Grad0Opsz48'
import IconSettingsPowerFill0Wght500Grad0Opsz48 from '../components/SettingsPowerFill0Wght500Grad0Opsz48'
import IconSettingsPowerFill0Wght600Grad0Opsz48 from '../components/SettingsPowerFill0Wght600Grad0Opsz48'
import IconSettingsPowerFill0Wght700Grad0Opsz48 from '../components/SettingsPowerFill0Wght700Grad0Opsz48'
import IconSettingsPowerFill1Wght100Grad0Opsz48 from '../components/SettingsPowerFill1Wght100Grad0Opsz48'
import IconSettingsPowerFill1Wght200Grad0Opsz48 from '../components/SettingsPowerFill1Wght200Grad0Opsz48'
import IconSettingsPowerFill1Wght300Grad0Opsz48 from '../components/SettingsPowerFill1Wght300Grad0Opsz48'
import IconSettingsPowerFill1Wght400Grad0Opsz48 from '../components/SettingsPowerFill1Wght400Grad0Opsz48'
import IconSettingsPowerFill1Wght500Grad0Opsz48 from '../components/SettingsPowerFill1Wght500Grad0Opsz48'
import IconSettingsPowerFill1Wght600Grad0Opsz48 from '../components/SettingsPowerFill1Wght600Grad0Opsz48'
import IconSettingsPowerFill1Wght700Grad0Opsz48 from '../components/SettingsPowerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSettingsPower = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSettingsPowerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSettingsPowerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSettingsPowerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSettingsPowerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSettingsPowerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSettingsPowerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSettingsPowerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSettingsPowerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSettingsPowerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSettingsPowerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSettingsPowerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSettingsPowerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSettingsPowerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSettingsPowerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
