import IconFiberManualRecordFill0Wght100Grad0Opsz48 from '../components/FiberManualRecordFill0Wght100Grad0Opsz48'
import IconFiberManualRecordFill0Wght200Grad0Opsz48 from '../components/FiberManualRecordFill0Wght200Grad0Opsz48'
import IconFiberManualRecordFill0Wght300Grad0Opsz48 from '../components/FiberManualRecordFill0Wght300Grad0Opsz48'
import IconFiberManualRecordFill0Wght400Grad0Opsz48 from '../components/FiberManualRecordFill0Wght400Grad0Opsz48'
import IconFiberManualRecordFill0Wght500Grad0Opsz48 from '../components/FiberManualRecordFill0Wght500Grad0Opsz48'
import IconFiberManualRecordFill0Wght600Grad0Opsz48 from '../components/FiberManualRecordFill0Wght600Grad0Opsz48'
import IconFiberManualRecordFill0Wght700Grad0Opsz48 from '../components/FiberManualRecordFill0Wght700Grad0Opsz48'
import IconFiberManualRecordFill1Wght100Grad0Opsz48 from '../components/FiberManualRecordFill1Wght100Grad0Opsz48'
import IconFiberManualRecordFill1Wght200Grad0Opsz48 from '../components/FiberManualRecordFill1Wght200Grad0Opsz48'
import IconFiberManualRecordFill1Wght300Grad0Opsz48 from '../components/FiberManualRecordFill1Wght300Grad0Opsz48'
import IconFiberManualRecordFill1Wght400Grad0Opsz48 from '../components/FiberManualRecordFill1Wght400Grad0Opsz48'
import IconFiberManualRecordFill1Wght500Grad0Opsz48 from '../components/FiberManualRecordFill1Wght500Grad0Opsz48'
import IconFiberManualRecordFill1Wght600Grad0Opsz48 from '../components/FiberManualRecordFill1Wght600Grad0Opsz48'
import IconFiberManualRecordFill1Wght700Grad0Opsz48 from '../components/FiberManualRecordFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFiberManualRecord = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFiberManualRecordFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFiberManualRecordFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFiberManualRecordFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFiberManualRecordFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFiberManualRecordFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFiberManualRecordFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFiberManualRecordFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFiberManualRecordFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFiberManualRecordFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFiberManualRecordFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFiberManualRecordFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFiberManualRecordFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFiberManualRecordFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFiberManualRecordFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
