import IconStarRateHalfFill0Wght100Grad0Opsz48 from '../components/StarRateHalfFill0Wght100Grad0Opsz48'
import IconStarRateHalfFill0Wght200Grad0Opsz48 from '../components/StarRateHalfFill0Wght200Grad0Opsz48'
import IconStarRateHalfFill0Wght300Grad0Opsz48 from '../components/StarRateHalfFill0Wght300Grad0Opsz48'
import IconStarRateHalfFill0Wght400Grad0Opsz48 from '../components/StarRateHalfFill0Wght400Grad0Opsz48'
import IconStarRateHalfFill0Wght500Grad0Opsz48 from '../components/StarRateHalfFill0Wght500Grad0Opsz48'
import IconStarRateHalfFill0Wght600Grad0Opsz48 from '../components/StarRateHalfFill0Wght600Grad0Opsz48'
import IconStarRateHalfFill0Wght700Grad0Opsz48 from '../components/StarRateHalfFill0Wght700Grad0Opsz48'
import IconStarRateHalfFill1Wght100Grad0Opsz48 from '../components/StarRateHalfFill1Wght100Grad0Opsz48'
import IconStarRateHalfFill1Wght200Grad0Opsz48 from '../components/StarRateHalfFill1Wght200Grad0Opsz48'
import IconStarRateHalfFill1Wght300Grad0Opsz48 from '../components/StarRateHalfFill1Wght300Grad0Opsz48'
import IconStarRateHalfFill1Wght400Grad0Opsz48 from '../components/StarRateHalfFill1Wght400Grad0Opsz48'
import IconStarRateHalfFill1Wght500Grad0Opsz48 from '../components/StarRateHalfFill1Wght500Grad0Opsz48'
import IconStarRateHalfFill1Wght600Grad0Opsz48 from '../components/StarRateHalfFill1Wght600Grad0Opsz48'
import IconStarRateHalfFill1Wght700Grad0Opsz48 from '../components/StarRateHalfFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconStarRateHalf = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconStarRateHalfFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconStarRateHalfFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconStarRateHalfFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconStarRateHalfFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconStarRateHalfFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconStarRateHalfFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconStarRateHalfFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconStarRateHalfFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconStarRateHalfFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconStarRateHalfFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconStarRateHalfFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconStarRateHalfFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconStarRateHalfFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconStarRateHalfFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
