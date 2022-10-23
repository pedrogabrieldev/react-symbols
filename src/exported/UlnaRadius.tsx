import IconUlnaRadiusFill0Wght100Grad0Opsz48 from '../components/UlnaRadiusFill0Wght100Grad0Opsz48'
import IconUlnaRadiusFill0Wght200Grad0Opsz48 from '../components/UlnaRadiusFill0Wght200Grad0Opsz48'
import IconUlnaRadiusFill0Wght300Grad0Opsz48 from '../components/UlnaRadiusFill0Wght300Grad0Opsz48'
import IconUlnaRadiusFill0Wght400Grad0Opsz48 from '../components/UlnaRadiusFill0Wght400Grad0Opsz48'
import IconUlnaRadiusFill0Wght500Grad0Opsz48 from '../components/UlnaRadiusFill0Wght500Grad0Opsz48'
import IconUlnaRadiusFill0Wght600Grad0Opsz48 from '../components/UlnaRadiusFill0Wght600Grad0Opsz48'
import IconUlnaRadiusFill0Wght700Grad0Opsz48 from '../components/UlnaRadiusFill0Wght700Grad0Opsz48'
import IconUlnaRadiusFill1Wght100Grad0Opsz48 from '../components/UlnaRadiusFill1Wght100Grad0Opsz48'
import IconUlnaRadiusFill1Wght200Grad0Opsz48 from '../components/UlnaRadiusFill1Wght200Grad0Opsz48'
import IconUlnaRadiusFill1Wght300Grad0Opsz48 from '../components/UlnaRadiusFill1Wght300Grad0Opsz48'
import IconUlnaRadiusFill1Wght400Grad0Opsz48 from '../components/UlnaRadiusFill1Wght400Grad0Opsz48'
import IconUlnaRadiusFill1Wght500Grad0Opsz48 from '../components/UlnaRadiusFill1Wght500Grad0Opsz48'
import IconUlnaRadiusFill1Wght600Grad0Opsz48 from '../components/UlnaRadiusFill1Wght600Grad0Opsz48'
import IconUlnaRadiusFill1Wght700Grad0Opsz48 from '../components/UlnaRadiusFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconUlnaRadius = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconUlnaRadiusFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconUlnaRadiusFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconUlnaRadiusFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconUlnaRadiusFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconUlnaRadiusFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconUlnaRadiusFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconUlnaRadiusFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconUlnaRadiusFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconUlnaRadiusFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconUlnaRadiusFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconUlnaRadiusFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconUlnaRadiusFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconUlnaRadiusFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconUlnaRadiusFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
