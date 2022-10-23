import IconPunchClockFill0Wght100Grad0Opsz48 from '../components/PunchClockFill0Wght100Grad0Opsz48'
import IconPunchClockFill0Wght200Grad0Opsz48 from '../components/PunchClockFill0Wght200Grad0Opsz48'
import IconPunchClockFill0Wght300Grad0Opsz48 from '../components/PunchClockFill0Wght300Grad0Opsz48'
import IconPunchClockFill0Wght400Grad0Opsz48 from '../components/PunchClockFill0Wght400Grad0Opsz48'
import IconPunchClockFill0Wght500Grad0Opsz48 from '../components/PunchClockFill0Wght500Grad0Opsz48'
import IconPunchClockFill0Wght600Grad0Opsz48 from '../components/PunchClockFill0Wght600Grad0Opsz48'
import IconPunchClockFill0Wght700Grad0Opsz48 from '../components/PunchClockFill0Wght700Grad0Opsz48'
import IconPunchClockFill1Wght100Grad0Opsz48 from '../components/PunchClockFill1Wght100Grad0Opsz48'
import IconPunchClockFill1Wght200Grad0Opsz48 from '../components/PunchClockFill1Wght200Grad0Opsz48'
import IconPunchClockFill1Wght300Grad0Opsz48 from '../components/PunchClockFill1Wght300Grad0Opsz48'
import IconPunchClockFill1Wght400Grad0Opsz48 from '../components/PunchClockFill1Wght400Grad0Opsz48'
import IconPunchClockFill1Wght500Grad0Opsz48 from '../components/PunchClockFill1Wght500Grad0Opsz48'
import IconPunchClockFill1Wght600Grad0Opsz48 from '../components/PunchClockFill1Wght600Grad0Opsz48'
import IconPunchClockFill1Wght700Grad0Opsz48 from '../components/PunchClockFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPunchClock = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPunchClockFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPunchClockFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPunchClockFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPunchClockFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPunchClockFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPunchClockFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPunchClockFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPunchClockFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPunchClockFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPunchClockFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPunchClockFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPunchClockFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPunchClockFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPunchClockFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
