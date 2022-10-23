import IconSwipeUpAltFill0Wght100Grad0Opsz48 from '../components/SwipeUpAltFill0Wght100Grad0Opsz48'
import IconSwipeUpAltFill0Wght200Grad0Opsz48 from '../components/SwipeUpAltFill0Wght200Grad0Opsz48'
import IconSwipeUpAltFill0Wght300Grad0Opsz48 from '../components/SwipeUpAltFill0Wght300Grad0Opsz48'
import IconSwipeUpAltFill0Wght400Grad0Opsz48 from '../components/SwipeUpAltFill0Wght400Grad0Opsz48'
import IconSwipeUpAltFill0Wght500Grad0Opsz48 from '../components/SwipeUpAltFill0Wght500Grad0Opsz48'
import IconSwipeUpAltFill0Wght600Grad0Opsz48 from '../components/SwipeUpAltFill0Wght600Grad0Opsz48'
import IconSwipeUpAltFill0Wght700Grad0Opsz48 from '../components/SwipeUpAltFill0Wght700Grad0Opsz48'
import IconSwipeUpAltFill1Wght100Grad0Opsz48 from '../components/SwipeUpAltFill1Wght100Grad0Opsz48'
import IconSwipeUpAltFill1Wght200Grad0Opsz48 from '../components/SwipeUpAltFill1Wght200Grad0Opsz48'
import IconSwipeUpAltFill1Wght300Grad0Opsz48 from '../components/SwipeUpAltFill1Wght300Grad0Opsz48'
import IconSwipeUpAltFill1Wght400Grad0Opsz48 from '../components/SwipeUpAltFill1Wght400Grad0Opsz48'
import IconSwipeUpAltFill1Wght500Grad0Opsz48 from '../components/SwipeUpAltFill1Wght500Grad0Opsz48'
import IconSwipeUpAltFill1Wght600Grad0Opsz48 from '../components/SwipeUpAltFill1Wght600Grad0Opsz48'
import IconSwipeUpAltFill1Wght700Grad0Opsz48 from '../components/SwipeUpAltFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSwipeUpAlt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSwipeUpAltFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSwipeUpAltFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSwipeUpAltFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSwipeUpAltFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSwipeUpAltFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSwipeUpAltFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSwipeUpAltFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSwipeUpAltFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSwipeUpAltFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSwipeUpAltFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSwipeUpAltFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSwipeUpAltFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSwipeUpAltFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSwipeUpAltFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
