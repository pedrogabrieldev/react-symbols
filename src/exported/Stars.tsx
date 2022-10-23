import IconStarsFill0Wght100Grad0Opsz48 from '../components/StarsFill0Wght100Grad0Opsz48'
import IconStarsFill0Wght200Grad0Opsz48 from '../components/StarsFill0Wght200Grad0Opsz48'
import IconStarsFill0Wght300Grad0Opsz48 from '../components/StarsFill0Wght300Grad0Opsz48'
import IconStarsFill0Wght400Grad0Opsz48 from '../components/StarsFill0Wght400Grad0Opsz48'
import IconStarsFill0Wght500Grad0Opsz48 from '../components/StarsFill0Wght500Grad0Opsz48'
import IconStarsFill0Wght600Grad0Opsz48 from '../components/StarsFill0Wght600Grad0Opsz48'
import IconStarsFill0Wght700Grad0Opsz48 from '../components/StarsFill0Wght700Grad0Opsz48'
import IconStarsFill1Wght100Grad0Opsz48 from '../components/StarsFill1Wght100Grad0Opsz48'
import IconStarsFill1Wght200Grad0Opsz48 from '../components/StarsFill1Wght200Grad0Opsz48'
import IconStarsFill1Wght300Grad0Opsz48 from '../components/StarsFill1Wght300Grad0Opsz48'
import IconStarsFill1Wght400Grad0Opsz48 from '../components/StarsFill1Wght400Grad0Opsz48'
import IconStarsFill1Wght500Grad0Opsz48 from '../components/StarsFill1Wght500Grad0Opsz48'
import IconStarsFill1Wght600Grad0Opsz48 from '../components/StarsFill1Wght600Grad0Opsz48'
import IconStarsFill1Wght700Grad0Opsz48 from '../components/StarsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconStars = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconStarsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconStarsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconStarsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconStarsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconStarsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconStarsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconStarsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconStarsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconStarsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconStarsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconStarsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconStarsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconStarsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconStarsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
