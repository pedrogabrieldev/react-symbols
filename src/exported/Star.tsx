import IconStarFill0Wght100Grad0Opsz48 from '../components/StarFill0Wght100Grad0Opsz48'
import IconStarFill0Wght200Grad0Opsz48 from '../components/StarFill0Wght200Grad0Opsz48'
import IconStarFill0Wght300Grad0Opsz48 from '../components/StarFill0Wght300Grad0Opsz48'
import IconStarFill0Wght400Grad0Opsz48 from '../components/StarFill0Wght400Grad0Opsz48'
import IconStarFill0Wght500Grad0Opsz48 from '../components/StarFill0Wght500Grad0Opsz48'
import IconStarFill0Wght600Grad0Opsz48 from '../components/StarFill0Wght600Grad0Opsz48'
import IconStarFill0Wght700Grad0Opsz48 from '../components/StarFill0Wght700Grad0Opsz48'
import IconStarFill1Wght100Grad0Opsz48 from '../components/StarFill1Wght100Grad0Opsz48'
import IconStarFill1Wght200Grad0Opsz48 from '../components/StarFill1Wght200Grad0Opsz48'
import IconStarFill1Wght300Grad0Opsz48 from '../components/StarFill1Wght300Grad0Opsz48'
import IconStarFill1Wght400Grad0Opsz48 from '../components/StarFill1Wght400Grad0Opsz48'
import IconStarFill1Wght500Grad0Opsz48 from '../components/StarFill1Wght500Grad0Opsz48'
import IconStarFill1Wght600Grad0Opsz48 from '../components/StarFill1Wght600Grad0Opsz48'
import IconStarFill1Wght700Grad0Opsz48 from '../components/StarFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconStar = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconStarFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconStarFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconStarFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconStarFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconStarFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconStarFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconStarFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconStarFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconStarFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconStarFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconStarFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconStarFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconStarFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconStarFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
