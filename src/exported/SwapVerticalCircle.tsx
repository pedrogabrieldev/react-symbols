import IconSwapVerticalCircleFill0Wght100Grad0Opsz48 from '../components/SwapVerticalCircleFill0Wght100Grad0Opsz48'
import IconSwapVerticalCircleFill0Wght200Grad0Opsz48 from '../components/SwapVerticalCircleFill0Wght200Grad0Opsz48'
import IconSwapVerticalCircleFill0Wght300Grad0Opsz48 from '../components/SwapVerticalCircleFill0Wght300Grad0Opsz48'
import IconSwapVerticalCircleFill0Wght400Grad0Opsz48 from '../components/SwapVerticalCircleFill0Wght400Grad0Opsz48'
import IconSwapVerticalCircleFill0Wght500Grad0Opsz48 from '../components/SwapVerticalCircleFill0Wght500Grad0Opsz48'
import IconSwapVerticalCircleFill0Wght600Grad0Opsz48 from '../components/SwapVerticalCircleFill0Wght600Grad0Opsz48'
import IconSwapVerticalCircleFill0Wght700Grad0Opsz48 from '../components/SwapVerticalCircleFill0Wght700Grad0Opsz48'
import IconSwapVerticalCircleFill1Wght100Grad0Opsz48 from '../components/SwapVerticalCircleFill1Wght100Grad0Opsz48'
import IconSwapVerticalCircleFill1Wght200Grad0Opsz48 from '../components/SwapVerticalCircleFill1Wght200Grad0Opsz48'
import IconSwapVerticalCircleFill1Wght300Grad0Opsz48 from '../components/SwapVerticalCircleFill1Wght300Grad0Opsz48'
import IconSwapVerticalCircleFill1Wght400Grad0Opsz48 from '../components/SwapVerticalCircleFill1Wght400Grad0Opsz48'
import IconSwapVerticalCircleFill1Wght500Grad0Opsz48 from '../components/SwapVerticalCircleFill1Wght500Grad0Opsz48'
import IconSwapVerticalCircleFill1Wght600Grad0Opsz48 from '../components/SwapVerticalCircleFill1Wght600Grad0Opsz48'
import IconSwapVerticalCircleFill1Wght700Grad0Opsz48 from '../components/SwapVerticalCircleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSwapVerticalCircle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSwapVerticalCircleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSwapVerticalCircleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSwapVerticalCircleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSwapVerticalCircleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSwapVerticalCircleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSwapVerticalCircleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSwapVerticalCircleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSwapVerticalCircleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSwapVerticalCircleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSwapVerticalCircleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSwapVerticalCircleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSwapVerticalCircleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSwapVerticalCircleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSwapVerticalCircleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
