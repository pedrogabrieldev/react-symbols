import IconSwapHorizontalCircleFill0Wght100Grad0Opsz48 from '../components/SwapHorizontalCircleFill0Wght100Grad0Opsz48'
import IconSwapHorizontalCircleFill0Wght200Grad0Opsz48 from '../components/SwapHorizontalCircleFill0Wght200Grad0Opsz48'
import IconSwapHorizontalCircleFill0Wght300Grad0Opsz48 from '../components/SwapHorizontalCircleFill0Wght300Grad0Opsz48'
import IconSwapHorizontalCircleFill0Wght400Grad0Opsz48 from '../components/SwapHorizontalCircleFill0Wght400Grad0Opsz48'
import IconSwapHorizontalCircleFill0Wght500Grad0Opsz48 from '../components/SwapHorizontalCircleFill0Wght500Grad0Opsz48'
import IconSwapHorizontalCircleFill0Wght600Grad0Opsz48 from '../components/SwapHorizontalCircleFill0Wght600Grad0Opsz48'
import IconSwapHorizontalCircleFill0Wght700Grad0Opsz48 from '../components/SwapHorizontalCircleFill0Wght700Grad0Opsz48'
import IconSwapHorizontalCircleFill1Wght100Grad0Opsz48 from '../components/SwapHorizontalCircleFill1Wght100Grad0Opsz48'
import IconSwapHorizontalCircleFill1Wght200Grad0Opsz48 from '../components/SwapHorizontalCircleFill1Wght200Grad0Opsz48'
import IconSwapHorizontalCircleFill1Wght300Grad0Opsz48 from '../components/SwapHorizontalCircleFill1Wght300Grad0Opsz48'
import IconSwapHorizontalCircleFill1Wght400Grad0Opsz48 from '../components/SwapHorizontalCircleFill1Wght400Grad0Opsz48'
import IconSwapHorizontalCircleFill1Wght500Grad0Opsz48 from '../components/SwapHorizontalCircleFill1Wght500Grad0Opsz48'
import IconSwapHorizontalCircleFill1Wght600Grad0Opsz48 from '../components/SwapHorizontalCircleFill1Wght600Grad0Opsz48'
import IconSwapHorizontalCircleFill1Wght700Grad0Opsz48 from '../components/SwapHorizontalCircleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSwapHorizontalCircle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSwapHorizontalCircleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSwapHorizontalCircleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSwapHorizontalCircleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSwapHorizontalCircleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSwapHorizontalCircleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSwapHorizontalCircleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSwapHorizontalCircleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSwapHorizontalCircleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSwapHorizontalCircleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSwapHorizontalCircleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSwapHorizontalCircleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSwapHorizontalCircleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSwapHorizontalCircleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSwapHorizontalCircleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
