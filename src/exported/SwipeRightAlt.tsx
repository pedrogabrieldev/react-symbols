import IconSwipeRightAltFill0Wght100Grad0Opsz48 from '../components/SwipeRightAltFill0Wght100Grad0Opsz48'
import IconSwipeRightAltFill0Wght200Grad0Opsz48 from '../components/SwipeRightAltFill0Wght200Grad0Opsz48'
import IconSwipeRightAltFill0Wght300Grad0Opsz48 from '../components/SwipeRightAltFill0Wght300Grad0Opsz48'
import IconSwipeRightAltFill0Wght400Grad0Opsz48 from '../components/SwipeRightAltFill0Wght400Grad0Opsz48'
import IconSwipeRightAltFill0Wght500Grad0Opsz48 from '../components/SwipeRightAltFill0Wght500Grad0Opsz48'
import IconSwipeRightAltFill0Wght600Grad0Opsz48 from '../components/SwipeRightAltFill0Wght600Grad0Opsz48'
import IconSwipeRightAltFill0Wght700Grad0Opsz48 from '../components/SwipeRightAltFill0Wght700Grad0Opsz48'
import IconSwipeRightAltFill1Wght100Grad0Opsz48 from '../components/SwipeRightAltFill1Wght100Grad0Opsz48'
import IconSwipeRightAltFill1Wght200Grad0Opsz48 from '../components/SwipeRightAltFill1Wght200Grad0Opsz48'
import IconSwipeRightAltFill1Wght300Grad0Opsz48 from '../components/SwipeRightAltFill1Wght300Grad0Opsz48'
import IconSwipeRightAltFill1Wght400Grad0Opsz48 from '../components/SwipeRightAltFill1Wght400Grad0Opsz48'
import IconSwipeRightAltFill1Wght500Grad0Opsz48 from '../components/SwipeRightAltFill1Wght500Grad0Opsz48'
import IconSwipeRightAltFill1Wght600Grad0Opsz48 from '../components/SwipeRightAltFill1Wght600Grad0Opsz48'
import IconSwipeRightAltFill1Wght700Grad0Opsz48 from '../components/SwipeRightAltFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSwipeRightAlt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSwipeRightAltFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSwipeRightAltFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSwipeRightAltFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSwipeRightAltFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSwipeRightAltFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSwipeRightAltFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSwipeRightAltFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSwipeRightAltFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSwipeRightAltFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSwipeRightAltFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSwipeRightAltFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSwipeRightAltFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSwipeRightAltFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSwipeRightAltFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
