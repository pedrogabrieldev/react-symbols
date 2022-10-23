import IconLanFill0Wght100Grad0Opsz48 from '../components/LanFill0Wght100Grad0Opsz48'
import IconLanFill0Wght200Grad0Opsz48 from '../components/LanFill0Wght200Grad0Opsz48'
import IconLanFill0Wght300Grad0Opsz48 from '../components/LanFill0Wght300Grad0Opsz48'
import IconLanFill0Wght400Grad0Opsz48 from '../components/LanFill0Wght400Grad0Opsz48'
import IconLanFill0Wght500Grad0Opsz48 from '../components/LanFill0Wght500Grad0Opsz48'
import IconLanFill0Wght600Grad0Opsz48 from '../components/LanFill0Wght600Grad0Opsz48'
import IconLanFill0Wght700Grad0Opsz48 from '../components/LanFill0Wght700Grad0Opsz48'
import IconLanFill1Wght100Grad0Opsz48 from '../components/LanFill1Wght100Grad0Opsz48'
import IconLanFill1Wght200Grad0Opsz48 from '../components/LanFill1Wght200Grad0Opsz48'
import IconLanFill1Wght300Grad0Opsz48 from '../components/LanFill1Wght300Grad0Opsz48'
import IconLanFill1Wght400Grad0Opsz48 from '../components/LanFill1Wght400Grad0Opsz48'
import IconLanFill1Wght500Grad0Opsz48 from '../components/LanFill1Wght500Grad0Opsz48'
import IconLanFill1Wght600Grad0Opsz48 from '../components/LanFill1Wght600Grad0Opsz48'
import IconLanFill1Wght700Grad0Opsz48 from '../components/LanFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLan = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLanFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLanFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLanFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLanFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLanFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLanFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLanFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLanFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLanFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLanFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLanFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLanFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLanFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLanFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
