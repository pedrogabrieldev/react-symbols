import IconCallSplitFill0Wght100Grad0Opsz48 from '../components/CallSplitFill0Wght100Grad0Opsz48'
import IconCallSplitFill0Wght200Grad0Opsz48 from '../components/CallSplitFill0Wght200Grad0Opsz48'
import IconCallSplitFill0Wght300Grad0Opsz48 from '../components/CallSplitFill0Wght300Grad0Opsz48'
import IconCallSplitFill0Wght400Grad0Opsz48 from '../components/CallSplitFill0Wght400Grad0Opsz48'
import IconCallSplitFill0Wght500Grad0Opsz48 from '../components/CallSplitFill0Wght500Grad0Opsz48'
import IconCallSplitFill0Wght600Grad0Opsz48 from '../components/CallSplitFill0Wght600Grad0Opsz48'
import IconCallSplitFill0Wght700Grad0Opsz48 from '../components/CallSplitFill0Wght700Grad0Opsz48'
import IconCallSplitFill1Wght100Grad0Opsz48 from '../components/CallSplitFill1Wght100Grad0Opsz48'
import IconCallSplitFill1Wght200Grad0Opsz48 from '../components/CallSplitFill1Wght200Grad0Opsz48'
import IconCallSplitFill1Wght300Grad0Opsz48 from '../components/CallSplitFill1Wght300Grad0Opsz48'
import IconCallSplitFill1Wght400Grad0Opsz48 from '../components/CallSplitFill1Wght400Grad0Opsz48'
import IconCallSplitFill1Wght500Grad0Opsz48 from '../components/CallSplitFill1Wght500Grad0Opsz48'
import IconCallSplitFill1Wght600Grad0Opsz48 from '../components/CallSplitFill1Wght600Grad0Opsz48'
import IconCallSplitFill1Wght700Grad0Opsz48 from '../components/CallSplitFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCallSplit = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCallSplitFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCallSplitFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCallSplitFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCallSplitFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCallSplitFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCallSplitFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCallSplitFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCallSplitFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCallSplitFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCallSplitFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCallSplitFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCallSplitFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCallSplitFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCallSplitFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
