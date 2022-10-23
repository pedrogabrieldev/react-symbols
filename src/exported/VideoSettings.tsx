import IconVideoSettingsFill0Wght100Grad0Opsz48 from '../components/VideoSettingsFill0Wght100Grad0Opsz48'
import IconVideoSettingsFill0Wght200Grad0Opsz48 from '../components/VideoSettingsFill0Wght200Grad0Opsz48'
import IconVideoSettingsFill0Wght300Grad0Opsz48 from '../components/VideoSettingsFill0Wght300Grad0Opsz48'
import IconVideoSettingsFill0Wght400Grad0Opsz48 from '../components/VideoSettingsFill0Wght400Grad0Opsz48'
import IconVideoSettingsFill0Wght500Grad0Opsz48 from '../components/VideoSettingsFill0Wght500Grad0Opsz48'
import IconVideoSettingsFill0Wght600Grad0Opsz48 from '../components/VideoSettingsFill0Wght600Grad0Opsz48'
import IconVideoSettingsFill0Wght700Grad0Opsz48 from '../components/VideoSettingsFill0Wght700Grad0Opsz48'
import IconVideoSettingsFill1Wght100Grad0Opsz48 from '../components/VideoSettingsFill1Wght100Grad0Opsz48'
import IconVideoSettingsFill1Wght200Grad0Opsz48 from '../components/VideoSettingsFill1Wght200Grad0Opsz48'
import IconVideoSettingsFill1Wght300Grad0Opsz48 from '../components/VideoSettingsFill1Wght300Grad0Opsz48'
import IconVideoSettingsFill1Wght400Grad0Opsz48 from '../components/VideoSettingsFill1Wght400Grad0Opsz48'
import IconVideoSettingsFill1Wght500Grad0Opsz48 from '../components/VideoSettingsFill1Wght500Grad0Opsz48'
import IconVideoSettingsFill1Wght600Grad0Opsz48 from '../components/VideoSettingsFill1Wght600Grad0Opsz48'
import IconVideoSettingsFill1Wght700Grad0Opsz48 from '../components/VideoSettingsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVideoSettings = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVideoSettingsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVideoSettingsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVideoSettingsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVideoSettingsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVideoSettingsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVideoSettingsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVideoSettingsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVideoSettingsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVideoSettingsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVideoSettingsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVideoSettingsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVideoSettingsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVideoSettingsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVideoSettingsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
