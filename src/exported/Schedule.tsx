import IconScheduleFill0Wght100Grad0Opsz48 from '../components/ScheduleFill0Wght100Grad0Opsz48'
import IconScheduleFill0Wght200Grad0Opsz48 from '../components/ScheduleFill0Wght200Grad0Opsz48'
import IconScheduleFill0Wght300Grad0Opsz48 from '../components/ScheduleFill0Wght300Grad0Opsz48'
import IconScheduleFill0Wght400Grad0Opsz48 from '../components/ScheduleFill0Wght400Grad0Opsz48'
import IconScheduleFill0Wght500Grad0Opsz48 from '../components/ScheduleFill0Wght500Grad0Opsz48'
import IconScheduleFill0Wght600Grad0Opsz48 from '../components/ScheduleFill0Wght600Grad0Opsz48'
import IconScheduleFill0Wght700Grad0Opsz48 from '../components/ScheduleFill0Wght700Grad0Opsz48'
import IconScheduleFill1Wght100Grad0Opsz48 from '../components/ScheduleFill1Wght100Grad0Opsz48'
import IconScheduleFill1Wght200Grad0Opsz48 from '../components/ScheduleFill1Wght200Grad0Opsz48'
import IconScheduleFill1Wght300Grad0Opsz48 from '../components/ScheduleFill1Wght300Grad0Opsz48'
import IconScheduleFill1Wght400Grad0Opsz48 from '../components/ScheduleFill1Wght400Grad0Opsz48'
import IconScheduleFill1Wght500Grad0Opsz48 from '../components/ScheduleFill1Wght500Grad0Opsz48'
import IconScheduleFill1Wght600Grad0Opsz48 from '../components/ScheduleFill1Wght600Grad0Opsz48'
import IconScheduleFill1Wght700Grad0Opsz48 from '../components/ScheduleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSchedule = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconScheduleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconScheduleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconScheduleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconScheduleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconScheduleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconScheduleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconScheduleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconScheduleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconScheduleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconScheduleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconScheduleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconScheduleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconScheduleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconScheduleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
