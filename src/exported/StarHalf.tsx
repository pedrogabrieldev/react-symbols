import IconStarHalfFill0Wght100Grad0Opsz48 from '../components/StarHalfFill0Wght100Grad0Opsz48'
import IconStarHalfFill0Wght200Grad0Opsz48 from '../components/StarHalfFill0Wght200Grad0Opsz48'
import IconStarHalfFill0Wght300Grad0Opsz48 from '../components/StarHalfFill0Wght300Grad0Opsz48'
import IconStarHalfFill0Wght400Grad0Opsz48 from '../components/StarHalfFill0Wght400Grad0Opsz48'
import IconStarHalfFill0Wght500Grad0Opsz48 from '../components/StarHalfFill0Wght500Grad0Opsz48'
import IconStarHalfFill0Wght600Grad0Opsz48 from '../components/StarHalfFill0Wght600Grad0Opsz48'
import IconStarHalfFill0Wght700Grad0Opsz48 from '../components/StarHalfFill0Wght700Grad0Opsz48'
import IconStarHalfFill1Wght100Grad0Opsz48 from '../components/StarHalfFill1Wght100Grad0Opsz48'
import IconStarHalfFill1Wght200Grad0Opsz48 from '../components/StarHalfFill1Wght200Grad0Opsz48'
import IconStarHalfFill1Wght300Grad0Opsz48 from '../components/StarHalfFill1Wght300Grad0Opsz48'
import IconStarHalfFill1Wght400Grad0Opsz48 from '../components/StarHalfFill1Wght400Grad0Opsz48'
import IconStarHalfFill1Wght500Grad0Opsz48 from '../components/StarHalfFill1Wght500Grad0Opsz48'
import IconStarHalfFill1Wght600Grad0Opsz48 from '../components/StarHalfFill1Wght600Grad0Opsz48'
import IconStarHalfFill1Wght700Grad0Opsz48 from '../components/StarHalfFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconStarHalf = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconStarHalfFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconStarHalfFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconStarHalfFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconStarHalfFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconStarHalfFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconStarHalfFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconStarHalfFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconStarHalfFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconStarHalfFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconStarHalfFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconStarHalfFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconStarHalfFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconStarHalfFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconStarHalfFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
