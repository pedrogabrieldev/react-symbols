import IconSettingsFill0Wght100Grad0Opsz48 from '../components/SettingsFill0Wght100Grad0Opsz48'
import IconSettingsFill0Wght200Grad0Opsz48 from '../components/SettingsFill0Wght200Grad0Opsz48'
import IconSettingsFill0Wght300Grad0Opsz48 from '../components/SettingsFill0Wght300Grad0Opsz48'
import IconSettingsFill0Wght400Grad0Opsz48 from '../components/SettingsFill0Wght400Grad0Opsz48'
import IconSettingsFill0Wght500Grad0Opsz48 from '../components/SettingsFill0Wght500Grad0Opsz48'
import IconSettingsFill0Wght600Grad0Opsz48 from '../components/SettingsFill0Wght600Grad0Opsz48'
import IconSettingsFill0Wght700Grad0Opsz48 from '../components/SettingsFill0Wght700Grad0Opsz48'
import IconSettingsFill1Wght100Grad0Opsz48 from '../components/SettingsFill1Wght100Grad0Opsz48'
import IconSettingsFill1Wght200Grad0Opsz48 from '../components/SettingsFill1Wght200Grad0Opsz48'
import IconSettingsFill1Wght300Grad0Opsz48 from '../components/SettingsFill1Wght300Grad0Opsz48'
import IconSettingsFill1Wght400Grad0Opsz48 from '../components/SettingsFill1Wght400Grad0Opsz48'
import IconSettingsFill1Wght500Grad0Opsz48 from '../components/SettingsFill1Wght500Grad0Opsz48'
import IconSettingsFill1Wght600Grad0Opsz48 from '../components/SettingsFill1Wght600Grad0Opsz48'
import IconSettingsFill1Wght700Grad0Opsz48 from '../components/SettingsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSettings = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSettingsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSettingsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSettingsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSettingsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSettingsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSettingsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSettingsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSettingsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSettingsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSettingsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSettingsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSettingsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSettingsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSettingsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
