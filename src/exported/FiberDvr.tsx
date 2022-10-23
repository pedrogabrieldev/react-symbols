import IconFiberDvrFill0Wght100Grad0Opsz48 from '../components/FiberDvrFill0Wght100Grad0Opsz48'
import IconFiberDvrFill0Wght200Grad0Opsz48 from '../components/FiberDvrFill0Wght200Grad0Opsz48'
import IconFiberDvrFill0Wght300Grad0Opsz48 from '../components/FiberDvrFill0Wght300Grad0Opsz48'
import IconFiberDvrFill0Wght400Grad0Opsz48 from '../components/FiberDvrFill0Wght400Grad0Opsz48'
import IconFiberDvrFill0Wght500Grad0Opsz48 from '../components/FiberDvrFill0Wght500Grad0Opsz48'
import IconFiberDvrFill0Wght600Grad0Opsz48 from '../components/FiberDvrFill0Wght600Grad0Opsz48'
import IconFiberDvrFill0Wght700Grad0Opsz48 from '../components/FiberDvrFill0Wght700Grad0Opsz48'
import IconFiberDvrFill1Wght100Grad0Opsz48 from '../components/FiberDvrFill1Wght100Grad0Opsz48'
import IconFiberDvrFill1Wght200Grad0Opsz48 from '../components/FiberDvrFill1Wght200Grad0Opsz48'
import IconFiberDvrFill1Wght300Grad0Opsz48 from '../components/FiberDvrFill1Wght300Grad0Opsz48'
import IconFiberDvrFill1Wght400Grad0Opsz48 from '../components/FiberDvrFill1Wght400Grad0Opsz48'
import IconFiberDvrFill1Wght500Grad0Opsz48 from '../components/FiberDvrFill1Wght500Grad0Opsz48'
import IconFiberDvrFill1Wght600Grad0Opsz48 from '../components/FiberDvrFill1Wght600Grad0Opsz48'
import IconFiberDvrFill1Wght700Grad0Opsz48 from '../components/FiberDvrFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFiberDvr = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFiberDvrFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFiberDvrFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFiberDvrFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFiberDvrFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFiberDvrFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFiberDvrFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFiberDvrFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFiberDvrFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFiberDvrFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFiberDvrFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFiberDvrFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFiberDvrFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFiberDvrFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFiberDvrFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
