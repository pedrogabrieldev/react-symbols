import IconSwipeRightFill0Wght100Grad0Opsz48 from '../components/SwipeRightFill0Wght100Grad0Opsz48'
import IconSwipeRightFill0Wght200Grad0Opsz48 from '../components/SwipeRightFill0Wght200Grad0Opsz48'
import IconSwipeRightFill0Wght300Grad0Opsz48 from '../components/SwipeRightFill0Wght300Grad0Opsz48'
import IconSwipeRightFill0Wght400Grad0Opsz48 from '../components/SwipeRightFill0Wght400Grad0Opsz48'
import IconSwipeRightFill0Wght500Grad0Opsz48 from '../components/SwipeRightFill0Wght500Grad0Opsz48'
import IconSwipeRightFill0Wght600Grad0Opsz48 from '../components/SwipeRightFill0Wght600Grad0Opsz48'
import IconSwipeRightFill0Wght700Grad0Opsz48 from '../components/SwipeRightFill0Wght700Grad0Opsz48'
import IconSwipeRightFill1Wght100Grad0Opsz48 from '../components/SwipeRightFill1Wght100Grad0Opsz48'
import IconSwipeRightFill1Wght200Grad0Opsz48 from '../components/SwipeRightFill1Wght200Grad0Opsz48'
import IconSwipeRightFill1Wght300Grad0Opsz48 from '../components/SwipeRightFill1Wght300Grad0Opsz48'
import IconSwipeRightFill1Wght400Grad0Opsz48 from '../components/SwipeRightFill1Wght400Grad0Opsz48'
import IconSwipeRightFill1Wght500Grad0Opsz48 from '../components/SwipeRightFill1Wght500Grad0Opsz48'
import IconSwipeRightFill1Wght600Grad0Opsz48 from '../components/SwipeRightFill1Wght600Grad0Opsz48'
import IconSwipeRightFill1Wght700Grad0Opsz48 from '../components/SwipeRightFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSwipeRight = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSwipeRightFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSwipeRightFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSwipeRightFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSwipeRightFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSwipeRightFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSwipeRightFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSwipeRightFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSwipeRightFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSwipeRightFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSwipeRightFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSwipeRightFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSwipeRightFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSwipeRightFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSwipeRightFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
