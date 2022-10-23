import IconFiberSmartRecordFill0Wght100Grad0Opsz48 from '../components/FiberSmartRecordFill0Wght100Grad0Opsz48'
import IconFiberSmartRecordFill0Wght200Grad0Opsz48 from '../components/FiberSmartRecordFill0Wght200Grad0Opsz48'
import IconFiberSmartRecordFill0Wght300Grad0Opsz48 from '../components/FiberSmartRecordFill0Wght300Grad0Opsz48'
import IconFiberSmartRecordFill0Wght400Grad0Opsz48 from '../components/FiberSmartRecordFill0Wght400Grad0Opsz48'
import IconFiberSmartRecordFill0Wght500Grad0Opsz48 from '../components/FiberSmartRecordFill0Wght500Grad0Opsz48'
import IconFiberSmartRecordFill0Wght600Grad0Opsz48 from '../components/FiberSmartRecordFill0Wght600Grad0Opsz48'
import IconFiberSmartRecordFill0Wght700Grad0Opsz48 from '../components/FiberSmartRecordFill0Wght700Grad0Opsz48'
import IconFiberSmartRecordFill1Wght100Grad0Opsz48 from '../components/FiberSmartRecordFill1Wght100Grad0Opsz48'
import IconFiberSmartRecordFill1Wght200Grad0Opsz48 from '../components/FiberSmartRecordFill1Wght200Grad0Opsz48'
import IconFiberSmartRecordFill1Wght300Grad0Opsz48 from '../components/FiberSmartRecordFill1Wght300Grad0Opsz48'
import IconFiberSmartRecordFill1Wght400Grad0Opsz48 from '../components/FiberSmartRecordFill1Wght400Grad0Opsz48'
import IconFiberSmartRecordFill1Wght500Grad0Opsz48 from '../components/FiberSmartRecordFill1Wght500Grad0Opsz48'
import IconFiberSmartRecordFill1Wght600Grad0Opsz48 from '../components/FiberSmartRecordFill1Wght600Grad0Opsz48'
import IconFiberSmartRecordFill1Wght700Grad0Opsz48 from '../components/FiberSmartRecordFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFiberSmartRecord = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFiberSmartRecordFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFiberSmartRecordFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFiberSmartRecordFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFiberSmartRecordFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFiberSmartRecordFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFiberSmartRecordFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFiberSmartRecordFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFiberSmartRecordFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFiberSmartRecordFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFiberSmartRecordFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFiberSmartRecordFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFiberSmartRecordFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFiberSmartRecordFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFiberSmartRecordFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
