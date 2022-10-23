import IconSwipeVerticalFill0Wght100Grad0Opsz48 from '../components/SwipeVerticalFill0Wght100Grad0Opsz48'
import IconSwipeVerticalFill0Wght200Grad0Opsz48 from '../components/SwipeVerticalFill0Wght200Grad0Opsz48'
import IconSwipeVerticalFill0Wght300Grad0Opsz48 from '../components/SwipeVerticalFill0Wght300Grad0Opsz48'
import IconSwipeVerticalFill0Wght400Grad0Opsz48 from '../components/SwipeVerticalFill0Wght400Grad0Opsz48'
import IconSwipeVerticalFill0Wght500Grad0Opsz48 from '../components/SwipeVerticalFill0Wght500Grad0Opsz48'
import IconSwipeVerticalFill0Wght600Grad0Opsz48 from '../components/SwipeVerticalFill0Wght600Grad0Opsz48'
import IconSwipeVerticalFill0Wght700Grad0Opsz48 from '../components/SwipeVerticalFill0Wght700Grad0Opsz48'
import IconSwipeVerticalFill1Wght100Grad0Opsz48 from '../components/SwipeVerticalFill1Wght100Grad0Opsz48'
import IconSwipeVerticalFill1Wght200Grad0Opsz48 from '../components/SwipeVerticalFill1Wght200Grad0Opsz48'
import IconSwipeVerticalFill1Wght300Grad0Opsz48 from '../components/SwipeVerticalFill1Wght300Grad0Opsz48'
import IconSwipeVerticalFill1Wght400Grad0Opsz48 from '../components/SwipeVerticalFill1Wght400Grad0Opsz48'
import IconSwipeVerticalFill1Wght500Grad0Opsz48 from '../components/SwipeVerticalFill1Wght500Grad0Opsz48'
import IconSwipeVerticalFill1Wght600Grad0Opsz48 from '../components/SwipeVerticalFill1Wght600Grad0Opsz48'
import IconSwipeVerticalFill1Wght700Grad0Opsz48 from '../components/SwipeVerticalFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSwipeVertical = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSwipeVerticalFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSwipeVerticalFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSwipeVerticalFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSwipeVerticalFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSwipeVerticalFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSwipeVerticalFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSwipeVerticalFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSwipeVerticalFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSwipeVerticalFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSwipeVerticalFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSwipeVerticalFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSwipeVerticalFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSwipeVerticalFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSwipeVerticalFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
