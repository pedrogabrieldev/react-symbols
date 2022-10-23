import IconDangerousFill0Wght100Grad0Opsz48 from '../components/DangerousFill0Wght100Grad0Opsz48'
import IconDangerousFill0Wght200Grad0Opsz48 from '../components/DangerousFill0Wght200Grad0Opsz48'
import IconDangerousFill0Wght300Grad0Opsz48 from '../components/DangerousFill0Wght300Grad0Opsz48'
import IconDangerousFill0Wght400Grad0Opsz48 from '../components/DangerousFill0Wght400Grad0Opsz48'
import IconDangerousFill0Wght500Grad0Opsz48 from '../components/DangerousFill0Wght500Grad0Opsz48'
import IconDangerousFill0Wght600Grad0Opsz48 from '../components/DangerousFill0Wght600Grad0Opsz48'
import IconDangerousFill0Wght700Grad0Opsz48 from '../components/DangerousFill0Wght700Grad0Opsz48'
import IconDangerousFill1Wght100Grad0Opsz48 from '../components/DangerousFill1Wght100Grad0Opsz48'
import IconDangerousFill1Wght200Grad0Opsz48 from '../components/DangerousFill1Wght200Grad0Opsz48'
import IconDangerousFill1Wght300Grad0Opsz48 from '../components/DangerousFill1Wght300Grad0Opsz48'
import IconDangerousFill1Wght400Grad0Opsz48 from '../components/DangerousFill1Wght400Grad0Opsz48'
import IconDangerousFill1Wght500Grad0Opsz48 from '../components/DangerousFill1Wght500Grad0Opsz48'
import IconDangerousFill1Wght600Grad0Opsz48 from '../components/DangerousFill1Wght600Grad0Opsz48'
import IconDangerousFill1Wght700Grad0Opsz48 from '../components/DangerousFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDangerous = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDangerousFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDangerousFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDangerousFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDangerousFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDangerousFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDangerousFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDangerousFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDangerousFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDangerousFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDangerousFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDangerousFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDangerousFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDangerousFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDangerousFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
