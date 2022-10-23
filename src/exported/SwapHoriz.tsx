import IconSwapHorizFill0Wght100Grad0Opsz48 from '../components/SwapHorizFill0Wght100Grad0Opsz48'
import IconSwapHorizFill0Wght200Grad0Opsz48 from '../components/SwapHorizFill0Wght200Grad0Opsz48'
import IconSwapHorizFill0Wght300Grad0Opsz48 from '../components/SwapHorizFill0Wght300Grad0Opsz48'
import IconSwapHorizFill0Wght400Grad0Opsz48 from '../components/SwapHorizFill0Wght400Grad0Opsz48'
import IconSwapHorizFill0Wght500Grad0Opsz48 from '../components/SwapHorizFill0Wght500Grad0Opsz48'
import IconSwapHorizFill0Wght600Grad0Opsz48 from '../components/SwapHorizFill0Wght600Grad0Opsz48'
import IconSwapHorizFill0Wght700Grad0Opsz48 from '../components/SwapHorizFill0Wght700Grad0Opsz48'
import IconSwapHorizFill1Wght100Grad0Opsz48 from '../components/SwapHorizFill1Wght100Grad0Opsz48'
import IconSwapHorizFill1Wght200Grad0Opsz48 from '../components/SwapHorizFill1Wght200Grad0Opsz48'
import IconSwapHorizFill1Wght300Grad0Opsz48 from '../components/SwapHorizFill1Wght300Grad0Opsz48'
import IconSwapHorizFill1Wght400Grad0Opsz48 from '../components/SwapHorizFill1Wght400Grad0Opsz48'
import IconSwapHorizFill1Wght500Grad0Opsz48 from '../components/SwapHorizFill1Wght500Grad0Opsz48'
import IconSwapHorizFill1Wght600Grad0Opsz48 from '../components/SwapHorizFill1Wght600Grad0Opsz48'
import IconSwapHorizFill1Wght700Grad0Opsz48 from '../components/SwapHorizFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSwapHoriz = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSwapHorizFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSwapHorizFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSwapHorizFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSwapHorizFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSwapHorizFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSwapHorizFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSwapHorizFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSwapHorizFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSwapHorizFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSwapHorizFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSwapHorizFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSwapHorizFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSwapHorizFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSwapHorizFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
