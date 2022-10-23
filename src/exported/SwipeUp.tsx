import IconSwipeUpFill0Wght100Grad0Opsz48 from '../components/SwipeUpFill0Wght100Grad0Opsz48'
import IconSwipeUpFill0Wght200Grad0Opsz48 from '../components/SwipeUpFill0Wght200Grad0Opsz48'
import IconSwipeUpFill0Wght300Grad0Opsz48 from '../components/SwipeUpFill0Wght300Grad0Opsz48'
import IconSwipeUpFill0Wght400Grad0Opsz48 from '../components/SwipeUpFill0Wght400Grad0Opsz48'
import IconSwipeUpFill0Wght500Grad0Opsz48 from '../components/SwipeUpFill0Wght500Grad0Opsz48'
import IconSwipeUpFill0Wght600Grad0Opsz48 from '../components/SwipeUpFill0Wght600Grad0Opsz48'
import IconSwipeUpFill0Wght700Grad0Opsz48 from '../components/SwipeUpFill0Wght700Grad0Opsz48'
import IconSwipeUpFill1Wght100Grad0Opsz48 from '../components/SwipeUpFill1Wght100Grad0Opsz48'
import IconSwipeUpFill1Wght200Grad0Opsz48 from '../components/SwipeUpFill1Wght200Grad0Opsz48'
import IconSwipeUpFill1Wght300Grad0Opsz48 from '../components/SwipeUpFill1Wght300Grad0Opsz48'
import IconSwipeUpFill1Wght400Grad0Opsz48 from '../components/SwipeUpFill1Wght400Grad0Opsz48'
import IconSwipeUpFill1Wght500Grad0Opsz48 from '../components/SwipeUpFill1Wght500Grad0Opsz48'
import IconSwipeUpFill1Wght600Grad0Opsz48 from '../components/SwipeUpFill1Wght600Grad0Opsz48'
import IconSwipeUpFill1Wght700Grad0Opsz48 from '../components/SwipeUpFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSwipeUp = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSwipeUpFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSwipeUpFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSwipeUpFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSwipeUpFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSwipeUpFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSwipeUpFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSwipeUpFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSwipeUpFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSwipeUpFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSwipeUpFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSwipeUpFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSwipeUpFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSwipeUpFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSwipeUpFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
