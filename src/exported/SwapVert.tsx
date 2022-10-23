import IconSwapVertFill0Wght100Grad0Opsz48 from '../components/SwapVertFill0Wght100Grad0Opsz48'
import IconSwapVertFill0Wght200Grad0Opsz48 from '../components/SwapVertFill0Wght200Grad0Opsz48'
import IconSwapVertFill0Wght300Grad0Opsz48 from '../components/SwapVertFill0Wght300Grad0Opsz48'
import IconSwapVertFill0Wght400Grad0Opsz48 from '../components/SwapVertFill0Wght400Grad0Opsz48'
import IconSwapVertFill0Wght500Grad0Opsz48 from '../components/SwapVertFill0Wght500Grad0Opsz48'
import IconSwapVertFill0Wght600Grad0Opsz48 from '../components/SwapVertFill0Wght600Grad0Opsz48'
import IconSwapVertFill0Wght700Grad0Opsz48 from '../components/SwapVertFill0Wght700Grad0Opsz48'
import IconSwapVertFill1Wght100Grad0Opsz48 from '../components/SwapVertFill1Wght100Grad0Opsz48'
import IconSwapVertFill1Wght200Grad0Opsz48 from '../components/SwapVertFill1Wght200Grad0Opsz48'
import IconSwapVertFill1Wght300Grad0Opsz48 from '../components/SwapVertFill1Wght300Grad0Opsz48'
import IconSwapVertFill1Wght400Grad0Opsz48 from '../components/SwapVertFill1Wght400Grad0Opsz48'
import IconSwapVertFill1Wght500Grad0Opsz48 from '../components/SwapVertFill1Wght500Grad0Opsz48'
import IconSwapVertFill1Wght600Grad0Opsz48 from '../components/SwapVertFill1Wght600Grad0Opsz48'
import IconSwapVertFill1Wght700Grad0Opsz48 from '../components/SwapVertFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSwapVert = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSwapVertFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSwapVertFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSwapVertFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSwapVertFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSwapVertFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSwapVertFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSwapVertFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSwapVertFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSwapVertFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSwapVertFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSwapVertFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSwapVertFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSwapVertFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSwapVertFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
