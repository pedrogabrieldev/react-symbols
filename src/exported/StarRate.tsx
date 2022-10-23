import IconStarRateFill0Wght100Grad0Opsz48 from '../components/StarRateFill0Wght100Grad0Opsz48'
import IconStarRateFill0Wght200Grad0Opsz48 from '../components/StarRateFill0Wght200Grad0Opsz48'
import IconStarRateFill0Wght300Grad0Opsz48 from '../components/StarRateFill0Wght300Grad0Opsz48'
import IconStarRateFill0Wght400Grad0Opsz48 from '../components/StarRateFill0Wght400Grad0Opsz48'
import IconStarRateFill0Wght500Grad0Opsz48 from '../components/StarRateFill0Wght500Grad0Opsz48'
import IconStarRateFill0Wght600Grad0Opsz48 from '../components/StarRateFill0Wght600Grad0Opsz48'
import IconStarRateFill0Wght700Grad0Opsz48 from '../components/StarRateFill0Wght700Grad0Opsz48'
import IconStarRateFill1Wght100Grad0Opsz48 from '../components/StarRateFill1Wght100Grad0Opsz48'
import IconStarRateFill1Wght200Grad0Opsz48 from '../components/StarRateFill1Wght200Grad0Opsz48'
import IconStarRateFill1Wght300Grad0Opsz48 from '../components/StarRateFill1Wght300Grad0Opsz48'
import IconStarRateFill1Wght400Grad0Opsz48 from '../components/StarRateFill1Wght400Grad0Opsz48'
import IconStarRateFill1Wght500Grad0Opsz48 from '../components/StarRateFill1Wght500Grad0Opsz48'
import IconStarRateFill1Wght600Grad0Opsz48 from '../components/StarRateFill1Wght600Grad0Opsz48'
import IconStarRateFill1Wght700Grad0Opsz48 from '../components/StarRateFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconStarRate = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconStarRateFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconStarRateFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconStarRateFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconStarRateFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconStarRateFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconStarRateFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconStarRateFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconStarRateFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconStarRateFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconStarRateFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconStarRateFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconStarRateFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconStarRateFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconStarRateFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
