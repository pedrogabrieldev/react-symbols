import IconFiberPinFill0Wght100Grad0Opsz48 from '../components/FiberPinFill0Wght100Grad0Opsz48'
import IconFiberPinFill0Wght200Grad0Opsz48 from '../components/FiberPinFill0Wght200Grad0Opsz48'
import IconFiberPinFill0Wght300Grad0Opsz48 from '../components/FiberPinFill0Wght300Grad0Opsz48'
import IconFiberPinFill0Wght400Grad0Opsz48 from '../components/FiberPinFill0Wght400Grad0Opsz48'
import IconFiberPinFill0Wght500Grad0Opsz48 from '../components/FiberPinFill0Wght500Grad0Opsz48'
import IconFiberPinFill0Wght600Grad0Opsz48 from '../components/FiberPinFill0Wght600Grad0Opsz48'
import IconFiberPinFill0Wght700Grad0Opsz48 from '../components/FiberPinFill0Wght700Grad0Opsz48'
import IconFiberPinFill1Wght100Grad0Opsz48 from '../components/FiberPinFill1Wght100Grad0Opsz48'
import IconFiberPinFill1Wght200Grad0Opsz48 from '../components/FiberPinFill1Wght200Grad0Opsz48'
import IconFiberPinFill1Wght300Grad0Opsz48 from '../components/FiberPinFill1Wght300Grad0Opsz48'
import IconFiberPinFill1Wght400Grad0Opsz48 from '../components/FiberPinFill1Wght400Grad0Opsz48'
import IconFiberPinFill1Wght500Grad0Opsz48 from '../components/FiberPinFill1Wght500Grad0Opsz48'
import IconFiberPinFill1Wght600Grad0Opsz48 from '../components/FiberPinFill1Wght600Grad0Opsz48'
import IconFiberPinFill1Wght700Grad0Opsz48 from '../components/FiberPinFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFiberPin = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFiberPinFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFiberPinFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFiberPinFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFiberPinFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFiberPinFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFiberPinFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFiberPinFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFiberPinFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFiberPinFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFiberPinFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFiberPinFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFiberPinFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFiberPinFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFiberPinFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
