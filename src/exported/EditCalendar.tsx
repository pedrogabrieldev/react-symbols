import IconEditCalendarFill0Wght100Grad0Opsz48 from '../components/EditCalendarFill0Wght100Grad0Opsz48'
import IconEditCalendarFill0Wght200Grad0Opsz48 from '../components/EditCalendarFill0Wght200Grad0Opsz48'
import IconEditCalendarFill0Wght300Grad0Opsz48 from '../components/EditCalendarFill0Wght300Grad0Opsz48'
import IconEditCalendarFill0Wght400Grad0Opsz48 from '../components/EditCalendarFill0Wght400Grad0Opsz48'
import IconEditCalendarFill0Wght500Grad0Opsz48 from '../components/EditCalendarFill0Wght500Grad0Opsz48'
import IconEditCalendarFill0Wght600Grad0Opsz48 from '../components/EditCalendarFill0Wght600Grad0Opsz48'
import IconEditCalendarFill0Wght700Grad0Opsz48 from '../components/EditCalendarFill0Wght700Grad0Opsz48'
import IconEditCalendarFill1Wght100Grad0Opsz48 from '../components/EditCalendarFill1Wght100Grad0Opsz48'
import IconEditCalendarFill1Wght200Grad0Opsz48 from '../components/EditCalendarFill1Wght200Grad0Opsz48'
import IconEditCalendarFill1Wght300Grad0Opsz48 from '../components/EditCalendarFill1Wght300Grad0Opsz48'
import IconEditCalendarFill1Wght400Grad0Opsz48 from '../components/EditCalendarFill1Wght400Grad0Opsz48'
import IconEditCalendarFill1Wght500Grad0Opsz48 from '../components/EditCalendarFill1Wght500Grad0Opsz48'
import IconEditCalendarFill1Wght600Grad0Opsz48 from '../components/EditCalendarFill1Wght600Grad0Opsz48'
import IconEditCalendarFill1Wght700Grad0Opsz48 from '../components/EditCalendarFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEditCalendar = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEditCalendarFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEditCalendarFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEditCalendarFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEditCalendarFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEditCalendarFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEditCalendarFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEditCalendarFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEditCalendarFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEditCalendarFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEditCalendarFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEditCalendarFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEditCalendarFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEditCalendarFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEditCalendarFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
