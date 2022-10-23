import IconSegmentFill0Wght100Grad0Opsz48 from '../components/SegmentFill0Wght100Grad0Opsz48'
import IconSegmentFill0Wght200Grad0Opsz48 from '../components/SegmentFill0Wght200Grad0Opsz48'
import IconSegmentFill0Wght300Grad0Opsz48 from '../components/SegmentFill0Wght300Grad0Opsz48'
import IconSegmentFill0Wght400Grad0Opsz48 from '../components/SegmentFill0Wght400Grad0Opsz48'
import IconSegmentFill0Wght500Grad0Opsz48 from '../components/SegmentFill0Wght500Grad0Opsz48'
import IconSegmentFill0Wght600Grad0Opsz48 from '../components/SegmentFill0Wght600Grad0Opsz48'
import IconSegmentFill0Wght700Grad0Opsz48 from '../components/SegmentFill0Wght700Grad0Opsz48'
import IconSegmentFill1Wght100Grad0Opsz48 from '../components/SegmentFill1Wght100Grad0Opsz48'
import IconSegmentFill1Wght200Grad0Opsz48 from '../components/SegmentFill1Wght200Grad0Opsz48'
import IconSegmentFill1Wght300Grad0Opsz48 from '../components/SegmentFill1Wght300Grad0Opsz48'
import IconSegmentFill1Wght400Grad0Opsz48 from '../components/SegmentFill1Wght400Grad0Opsz48'
import IconSegmentFill1Wght500Grad0Opsz48 from '../components/SegmentFill1Wght500Grad0Opsz48'
import IconSegmentFill1Wght600Grad0Opsz48 from '../components/SegmentFill1Wght600Grad0Opsz48'
import IconSegmentFill1Wght700Grad0Opsz48 from '../components/SegmentFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSegment = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSegmentFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSegmentFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSegmentFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSegmentFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSegmentFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSegmentFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSegmentFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSegmentFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSegmentFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSegmentFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSegmentFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSegmentFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSegmentFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSegmentFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
