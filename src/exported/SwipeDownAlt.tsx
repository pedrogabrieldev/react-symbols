import IconSwipeDownAltFill0Wght100Grad0Opsz48 from '../components/SwipeDownAltFill0Wght100Grad0Opsz48'
import IconSwipeDownAltFill0Wght200Grad0Opsz48 from '../components/SwipeDownAltFill0Wght200Grad0Opsz48'
import IconSwipeDownAltFill0Wght300Grad0Opsz48 from '../components/SwipeDownAltFill0Wght300Grad0Opsz48'
import IconSwipeDownAltFill0Wght400Grad0Opsz48 from '../components/SwipeDownAltFill0Wght400Grad0Opsz48'
import IconSwipeDownAltFill0Wght500Grad0Opsz48 from '../components/SwipeDownAltFill0Wght500Grad0Opsz48'
import IconSwipeDownAltFill0Wght600Grad0Opsz48 from '../components/SwipeDownAltFill0Wght600Grad0Opsz48'
import IconSwipeDownAltFill0Wght700Grad0Opsz48 from '../components/SwipeDownAltFill0Wght700Grad0Opsz48'
import IconSwipeDownAltFill1Wght100Grad0Opsz48 from '../components/SwipeDownAltFill1Wght100Grad0Opsz48'
import IconSwipeDownAltFill1Wght200Grad0Opsz48 from '../components/SwipeDownAltFill1Wght200Grad0Opsz48'
import IconSwipeDownAltFill1Wght300Grad0Opsz48 from '../components/SwipeDownAltFill1Wght300Grad0Opsz48'
import IconSwipeDownAltFill1Wght400Grad0Opsz48 from '../components/SwipeDownAltFill1Wght400Grad0Opsz48'
import IconSwipeDownAltFill1Wght500Grad0Opsz48 from '../components/SwipeDownAltFill1Wght500Grad0Opsz48'
import IconSwipeDownAltFill1Wght600Grad0Opsz48 from '../components/SwipeDownAltFill1Wght600Grad0Opsz48'
import IconSwipeDownAltFill1Wght700Grad0Opsz48 from '../components/SwipeDownAltFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSwipeDownAlt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSwipeDownAltFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSwipeDownAltFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSwipeDownAltFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSwipeDownAltFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSwipeDownAltFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSwipeDownAltFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSwipeDownAltFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSwipeDownAltFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSwipeDownAltFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSwipeDownAltFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSwipeDownAltFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSwipeDownAltFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSwipeDownAltFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSwipeDownAltFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
