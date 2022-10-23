import IconSwapCallsFill0Wght100Grad0Opsz48 from '../components/SwapCallsFill0Wght100Grad0Opsz48'
import IconSwapCallsFill0Wght200Grad0Opsz48 from '../components/SwapCallsFill0Wght200Grad0Opsz48'
import IconSwapCallsFill0Wght300Grad0Opsz48 from '../components/SwapCallsFill0Wght300Grad0Opsz48'
import IconSwapCallsFill0Wght400Grad0Opsz48 from '../components/SwapCallsFill0Wght400Grad0Opsz48'
import IconSwapCallsFill0Wght500Grad0Opsz48 from '../components/SwapCallsFill0Wght500Grad0Opsz48'
import IconSwapCallsFill0Wght600Grad0Opsz48 from '../components/SwapCallsFill0Wght600Grad0Opsz48'
import IconSwapCallsFill0Wght700Grad0Opsz48 from '../components/SwapCallsFill0Wght700Grad0Opsz48'
import IconSwapCallsFill1Wght100Grad0Opsz48 from '../components/SwapCallsFill1Wght100Grad0Opsz48'
import IconSwapCallsFill1Wght200Grad0Opsz48 from '../components/SwapCallsFill1Wght200Grad0Opsz48'
import IconSwapCallsFill1Wght300Grad0Opsz48 from '../components/SwapCallsFill1Wght300Grad0Opsz48'
import IconSwapCallsFill1Wght400Grad0Opsz48 from '../components/SwapCallsFill1Wght400Grad0Opsz48'
import IconSwapCallsFill1Wght500Grad0Opsz48 from '../components/SwapCallsFill1Wght500Grad0Opsz48'
import IconSwapCallsFill1Wght600Grad0Opsz48 from '../components/SwapCallsFill1Wght600Grad0Opsz48'
import IconSwapCallsFill1Wght700Grad0Opsz48 from '../components/SwapCallsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSwapCalls = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSwapCallsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSwapCallsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSwapCallsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSwapCallsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSwapCallsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSwapCallsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSwapCallsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSwapCallsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSwapCallsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSwapCallsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSwapCallsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSwapCallsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSwapCallsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSwapCallsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
