import IconSwipeLeftAltFill0Wght100Grad0Opsz48 from '../components/SwipeLeftAltFill0Wght100Grad0Opsz48'
import IconSwipeLeftAltFill0Wght200Grad0Opsz48 from '../components/SwipeLeftAltFill0Wght200Grad0Opsz48'
import IconSwipeLeftAltFill0Wght300Grad0Opsz48 from '../components/SwipeLeftAltFill0Wght300Grad0Opsz48'
import IconSwipeLeftAltFill0Wght400Grad0Opsz48 from '../components/SwipeLeftAltFill0Wght400Grad0Opsz48'
import IconSwipeLeftAltFill0Wght500Grad0Opsz48 from '../components/SwipeLeftAltFill0Wght500Grad0Opsz48'
import IconSwipeLeftAltFill0Wght600Grad0Opsz48 from '../components/SwipeLeftAltFill0Wght600Grad0Opsz48'
import IconSwipeLeftAltFill0Wght700Grad0Opsz48 from '../components/SwipeLeftAltFill0Wght700Grad0Opsz48'
import IconSwipeLeftAltFill1Wght100Grad0Opsz48 from '../components/SwipeLeftAltFill1Wght100Grad0Opsz48'
import IconSwipeLeftAltFill1Wght200Grad0Opsz48 from '../components/SwipeLeftAltFill1Wght200Grad0Opsz48'
import IconSwipeLeftAltFill1Wght300Grad0Opsz48 from '../components/SwipeLeftAltFill1Wght300Grad0Opsz48'
import IconSwipeLeftAltFill1Wght400Grad0Opsz48 from '../components/SwipeLeftAltFill1Wght400Grad0Opsz48'
import IconSwipeLeftAltFill1Wght500Grad0Opsz48 from '../components/SwipeLeftAltFill1Wght500Grad0Opsz48'
import IconSwipeLeftAltFill1Wght600Grad0Opsz48 from '../components/SwipeLeftAltFill1Wght600Grad0Opsz48'
import IconSwipeLeftAltFill1Wght700Grad0Opsz48 from '../components/SwipeLeftAltFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSwipeLeftAlt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSwipeLeftAltFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSwipeLeftAltFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSwipeLeftAltFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSwipeLeftAltFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSwipeLeftAltFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSwipeLeftAltFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSwipeLeftAltFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSwipeLeftAltFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSwipeLeftAltFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSwipeLeftAltFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSwipeLeftAltFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSwipeLeftAltFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSwipeLeftAltFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSwipeLeftAltFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
