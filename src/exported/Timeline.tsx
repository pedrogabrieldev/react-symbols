import IconTimelineFill0Wght100Grad0Opsz48 from '../components/TimelineFill0Wght100Grad0Opsz48'
import IconTimelineFill0Wght200Grad0Opsz48 from '../components/TimelineFill0Wght200Grad0Opsz48'
import IconTimelineFill0Wght300Grad0Opsz48 from '../components/TimelineFill0Wght300Grad0Opsz48'
import IconTimelineFill0Wght400Grad0Opsz48 from '../components/TimelineFill0Wght400Grad0Opsz48'
import IconTimelineFill0Wght500Grad0Opsz48 from '../components/TimelineFill0Wght500Grad0Opsz48'
import IconTimelineFill0Wght600Grad0Opsz48 from '../components/TimelineFill0Wght600Grad0Opsz48'
import IconTimelineFill0Wght700Grad0Opsz48 from '../components/TimelineFill0Wght700Grad0Opsz48'
import IconTimelineFill1Wght100Grad0Opsz48 from '../components/TimelineFill1Wght100Grad0Opsz48'
import IconTimelineFill1Wght200Grad0Opsz48 from '../components/TimelineFill1Wght200Grad0Opsz48'
import IconTimelineFill1Wght300Grad0Opsz48 from '../components/TimelineFill1Wght300Grad0Opsz48'
import IconTimelineFill1Wght400Grad0Opsz48 from '../components/TimelineFill1Wght400Grad0Opsz48'
import IconTimelineFill1Wght500Grad0Opsz48 from '../components/TimelineFill1Wght500Grad0Opsz48'
import IconTimelineFill1Wght600Grad0Opsz48 from '../components/TimelineFill1Wght600Grad0Opsz48'
import IconTimelineFill1Wght700Grad0Opsz48 from '../components/TimelineFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTimeline = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTimelineFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTimelineFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTimelineFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTimelineFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTimelineFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTimelineFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTimelineFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTimelineFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTimelineFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTimelineFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTimelineFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTimelineFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTimelineFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTimelineFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
