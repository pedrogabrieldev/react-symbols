import IconSwipeDownFill0Wght100Grad0Opsz48 from '../components/SwipeDownFill0Wght100Grad0Opsz48'
import IconSwipeDownFill0Wght200Grad0Opsz48 from '../components/SwipeDownFill0Wght200Grad0Opsz48'
import IconSwipeDownFill0Wght300Grad0Opsz48 from '../components/SwipeDownFill0Wght300Grad0Opsz48'
import IconSwipeDownFill0Wght400Grad0Opsz48 from '../components/SwipeDownFill0Wght400Grad0Opsz48'
import IconSwipeDownFill0Wght500Grad0Opsz48 from '../components/SwipeDownFill0Wght500Grad0Opsz48'
import IconSwipeDownFill0Wght600Grad0Opsz48 from '../components/SwipeDownFill0Wght600Grad0Opsz48'
import IconSwipeDownFill0Wght700Grad0Opsz48 from '../components/SwipeDownFill0Wght700Grad0Opsz48'
import IconSwipeDownFill1Wght100Grad0Opsz48 from '../components/SwipeDownFill1Wght100Grad0Opsz48'
import IconSwipeDownFill1Wght200Grad0Opsz48 from '../components/SwipeDownFill1Wght200Grad0Opsz48'
import IconSwipeDownFill1Wght300Grad0Opsz48 from '../components/SwipeDownFill1Wght300Grad0Opsz48'
import IconSwipeDownFill1Wght400Grad0Opsz48 from '../components/SwipeDownFill1Wght400Grad0Opsz48'
import IconSwipeDownFill1Wght500Grad0Opsz48 from '../components/SwipeDownFill1Wght500Grad0Opsz48'
import IconSwipeDownFill1Wght600Grad0Opsz48 from '../components/SwipeDownFill1Wght600Grad0Opsz48'
import IconSwipeDownFill1Wght700Grad0Opsz48 from '../components/SwipeDownFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSwipeDown = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSwipeDownFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSwipeDownFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSwipeDownFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSwipeDownFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSwipeDownFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSwipeDownFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSwipeDownFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSwipeDownFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSwipeDownFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSwipeDownFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSwipeDownFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSwipeDownFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSwipeDownFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSwipeDownFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
