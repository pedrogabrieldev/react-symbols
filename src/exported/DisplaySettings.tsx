import IconDisplaySettingsFill0Wght100Grad0Opsz48 from '../components/DisplaySettingsFill0Wght100Grad0Opsz48'
import IconDisplaySettingsFill0Wght200Grad0Opsz48 from '../components/DisplaySettingsFill0Wght200Grad0Opsz48'
import IconDisplaySettingsFill0Wght300Grad0Opsz48 from '../components/DisplaySettingsFill0Wght300Grad0Opsz48'
import IconDisplaySettingsFill0Wght400Grad0Opsz48 from '../components/DisplaySettingsFill0Wght400Grad0Opsz48'
import IconDisplaySettingsFill0Wght500Grad0Opsz48 from '../components/DisplaySettingsFill0Wght500Grad0Opsz48'
import IconDisplaySettingsFill0Wght600Grad0Opsz48 from '../components/DisplaySettingsFill0Wght600Grad0Opsz48'
import IconDisplaySettingsFill0Wght700Grad0Opsz48 from '../components/DisplaySettingsFill0Wght700Grad0Opsz48'
import IconDisplaySettingsFill1Wght100Grad0Opsz48 from '../components/DisplaySettingsFill1Wght100Grad0Opsz48'
import IconDisplaySettingsFill1Wght200Grad0Opsz48 from '../components/DisplaySettingsFill1Wght200Grad0Opsz48'
import IconDisplaySettingsFill1Wght300Grad0Opsz48 from '../components/DisplaySettingsFill1Wght300Grad0Opsz48'
import IconDisplaySettingsFill1Wght400Grad0Opsz48 from '../components/DisplaySettingsFill1Wght400Grad0Opsz48'
import IconDisplaySettingsFill1Wght500Grad0Opsz48 from '../components/DisplaySettingsFill1Wght500Grad0Opsz48'
import IconDisplaySettingsFill1Wght600Grad0Opsz48 from '../components/DisplaySettingsFill1Wght600Grad0Opsz48'
import IconDisplaySettingsFill1Wght700Grad0Opsz48 from '../components/DisplaySettingsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDisplaySettings = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDisplaySettingsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDisplaySettingsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDisplaySettingsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDisplaySettingsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDisplaySettingsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDisplaySettingsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDisplaySettingsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDisplaySettingsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDisplaySettingsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDisplaySettingsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDisplaySettingsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDisplaySettingsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDisplaySettingsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDisplaySettingsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
