import IconSwipeFill0Wght100Grad0Opsz48 from '../components/SwipeFill0Wght100Grad0Opsz48'
import IconSwipeFill0Wght200Grad0Opsz48 from '../components/SwipeFill0Wght200Grad0Opsz48'
import IconSwipeFill0Wght300Grad0Opsz48 from '../components/SwipeFill0Wght300Grad0Opsz48'
import IconSwipeFill0Wght400Grad0Opsz48 from '../components/SwipeFill0Wght400Grad0Opsz48'
import IconSwipeFill0Wght500Grad0Opsz48 from '../components/SwipeFill0Wght500Grad0Opsz48'
import IconSwipeFill0Wght600Grad0Opsz48 from '../components/SwipeFill0Wght600Grad0Opsz48'
import IconSwipeFill0Wght700Grad0Opsz48 from '../components/SwipeFill0Wght700Grad0Opsz48'
import IconSwipeFill1Wght100Grad0Opsz48 from '../components/SwipeFill1Wght100Grad0Opsz48'
import IconSwipeFill1Wght200Grad0Opsz48 from '../components/SwipeFill1Wght200Grad0Opsz48'
import IconSwipeFill1Wght300Grad0Opsz48 from '../components/SwipeFill1Wght300Grad0Opsz48'
import IconSwipeFill1Wght400Grad0Opsz48 from '../components/SwipeFill1Wght400Grad0Opsz48'
import IconSwipeFill1Wght500Grad0Opsz48 from '../components/SwipeFill1Wght500Grad0Opsz48'
import IconSwipeFill1Wght600Grad0Opsz48 from '../components/SwipeFill1Wght600Grad0Opsz48'
import IconSwipeFill1Wght700Grad0Opsz48 from '../components/SwipeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSwipe = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSwipeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSwipeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSwipeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSwipeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSwipeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSwipeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSwipeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSwipeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSwipeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSwipeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSwipeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSwipeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSwipeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSwipeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
