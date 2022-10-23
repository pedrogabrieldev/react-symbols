import IconSettingsBrightnessFill0Wght100Grad0Opsz48 from '../components/SettingsBrightnessFill0Wght100Grad0Opsz48'
import IconSettingsBrightnessFill0Wght200Grad0Opsz48 from '../components/SettingsBrightnessFill0Wght200Grad0Opsz48'
import IconSettingsBrightnessFill0Wght300Grad0Opsz48 from '../components/SettingsBrightnessFill0Wght300Grad0Opsz48'
import IconSettingsBrightnessFill0Wght400Grad0Opsz48 from '../components/SettingsBrightnessFill0Wght400Grad0Opsz48'
import IconSettingsBrightnessFill0Wght500Grad0Opsz48 from '../components/SettingsBrightnessFill0Wght500Grad0Opsz48'
import IconSettingsBrightnessFill0Wght600Grad0Opsz48 from '../components/SettingsBrightnessFill0Wght600Grad0Opsz48'
import IconSettingsBrightnessFill0Wght700Grad0Opsz48 from '../components/SettingsBrightnessFill0Wght700Grad0Opsz48'
import IconSettingsBrightnessFill1Wght100Grad0Opsz48 from '../components/SettingsBrightnessFill1Wght100Grad0Opsz48'
import IconSettingsBrightnessFill1Wght200Grad0Opsz48 from '../components/SettingsBrightnessFill1Wght200Grad0Opsz48'
import IconSettingsBrightnessFill1Wght300Grad0Opsz48 from '../components/SettingsBrightnessFill1Wght300Grad0Opsz48'
import IconSettingsBrightnessFill1Wght400Grad0Opsz48 from '../components/SettingsBrightnessFill1Wght400Grad0Opsz48'
import IconSettingsBrightnessFill1Wght500Grad0Opsz48 from '../components/SettingsBrightnessFill1Wght500Grad0Opsz48'
import IconSettingsBrightnessFill1Wght600Grad0Opsz48 from '../components/SettingsBrightnessFill1Wght600Grad0Opsz48'
import IconSettingsBrightnessFill1Wght700Grad0Opsz48 from '../components/SettingsBrightnessFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSettingsBrightness = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSettingsBrightnessFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSettingsBrightnessFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSettingsBrightnessFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSettingsBrightnessFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSettingsBrightnessFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSettingsBrightnessFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSettingsBrightnessFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSettingsBrightnessFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSettingsBrightnessFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSettingsBrightnessFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSettingsBrightnessFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSettingsBrightnessFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSettingsBrightnessFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSettingsBrightnessFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
