import IconSwipeLeftFill0Wght100Grad0Opsz48 from '../components/SwipeLeftFill0Wght100Grad0Opsz48'
import IconSwipeLeftFill0Wght200Grad0Opsz48 from '../components/SwipeLeftFill0Wght200Grad0Opsz48'
import IconSwipeLeftFill0Wght300Grad0Opsz48 from '../components/SwipeLeftFill0Wght300Grad0Opsz48'
import IconSwipeLeftFill0Wght400Grad0Opsz48 from '../components/SwipeLeftFill0Wght400Grad0Opsz48'
import IconSwipeLeftFill0Wght500Grad0Opsz48 from '../components/SwipeLeftFill0Wght500Grad0Opsz48'
import IconSwipeLeftFill0Wght600Grad0Opsz48 from '../components/SwipeLeftFill0Wght600Grad0Opsz48'
import IconSwipeLeftFill0Wght700Grad0Opsz48 from '../components/SwipeLeftFill0Wght700Grad0Opsz48'
import IconSwipeLeftFill1Wght100Grad0Opsz48 from '../components/SwipeLeftFill1Wght100Grad0Opsz48'
import IconSwipeLeftFill1Wght200Grad0Opsz48 from '../components/SwipeLeftFill1Wght200Grad0Opsz48'
import IconSwipeLeftFill1Wght300Grad0Opsz48 from '../components/SwipeLeftFill1Wght300Grad0Opsz48'
import IconSwipeLeftFill1Wght400Grad0Opsz48 from '../components/SwipeLeftFill1Wght400Grad0Opsz48'
import IconSwipeLeftFill1Wght500Grad0Opsz48 from '../components/SwipeLeftFill1Wght500Grad0Opsz48'
import IconSwipeLeftFill1Wght600Grad0Opsz48 from '../components/SwipeLeftFill1Wght600Grad0Opsz48'
import IconSwipeLeftFill1Wght700Grad0Opsz48 from '../components/SwipeLeftFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSwipeLeft = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSwipeLeftFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSwipeLeftFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSwipeLeftFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSwipeLeftFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSwipeLeftFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSwipeLeftFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSwipeLeftFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSwipeLeftFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSwipeLeftFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSwipeLeftFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSwipeLeftFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSwipeLeftFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSwipeLeftFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSwipeLeftFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
