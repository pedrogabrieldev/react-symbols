import IconCalendarMonthFill0Wght100Grad0Opsz48 from '../components/CalendarMonthFill0Wght100Grad0Opsz48'
import IconCalendarMonthFill0Wght200Grad0Opsz48 from '../components/CalendarMonthFill0Wght200Grad0Opsz48'
import IconCalendarMonthFill0Wght300Grad0Opsz48 from '../components/CalendarMonthFill0Wght300Grad0Opsz48'
import IconCalendarMonthFill0Wght400Grad0Opsz48 from '../components/CalendarMonthFill0Wght400Grad0Opsz48'
import IconCalendarMonthFill0Wght500Grad0Opsz48 from '../components/CalendarMonthFill0Wght500Grad0Opsz48'
import IconCalendarMonthFill0Wght600Grad0Opsz48 from '../components/CalendarMonthFill0Wght600Grad0Opsz48'
import IconCalendarMonthFill0Wght700Grad0Opsz48 from '../components/CalendarMonthFill0Wght700Grad0Opsz48'
import IconCalendarMonthFill1Wght100Grad0Opsz48 from '../components/CalendarMonthFill1Wght100Grad0Opsz48'
import IconCalendarMonthFill1Wght200Grad0Opsz48 from '../components/CalendarMonthFill1Wght200Grad0Opsz48'
import IconCalendarMonthFill1Wght300Grad0Opsz48 from '../components/CalendarMonthFill1Wght300Grad0Opsz48'
import IconCalendarMonthFill1Wght400Grad0Opsz48 from '../components/CalendarMonthFill1Wght400Grad0Opsz48'
import IconCalendarMonthFill1Wght500Grad0Opsz48 from '../components/CalendarMonthFill1Wght500Grad0Opsz48'
import IconCalendarMonthFill1Wght600Grad0Opsz48 from '../components/CalendarMonthFill1Wght600Grad0Opsz48'
import IconCalendarMonthFill1Wght700Grad0Opsz48 from '../components/CalendarMonthFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCalendarMonth = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCalendarMonthFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCalendarMonthFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCalendarMonthFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCalendarMonthFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCalendarMonthFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCalendarMonthFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCalendarMonthFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCalendarMonthFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCalendarMonthFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCalendarMonthFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCalendarMonthFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCalendarMonthFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCalendarMonthFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCalendarMonthFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
