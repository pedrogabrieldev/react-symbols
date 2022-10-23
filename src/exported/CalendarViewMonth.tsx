import IconCalendarViewMonthFill0Wght100Grad0Opsz48 from '../components/CalendarViewMonthFill0Wght100Grad0Opsz48'
import IconCalendarViewMonthFill0Wght200Grad0Opsz48 from '../components/CalendarViewMonthFill0Wght200Grad0Opsz48'
import IconCalendarViewMonthFill0Wght300Grad0Opsz48 from '../components/CalendarViewMonthFill0Wght300Grad0Opsz48'
import IconCalendarViewMonthFill0Wght400Grad0Opsz48 from '../components/CalendarViewMonthFill0Wght400Grad0Opsz48'
import IconCalendarViewMonthFill0Wght500Grad0Opsz48 from '../components/CalendarViewMonthFill0Wght500Grad0Opsz48'
import IconCalendarViewMonthFill0Wght600Grad0Opsz48 from '../components/CalendarViewMonthFill0Wght600Grad0Opsz48'
import IconCalendarViewMonthFill0Wght700Grad0Opsz48 from '../components/CalendarViewMonthFill0Wght700Grad0Opsz48'
import IconCalendarViewMonthFill1Wght100Grad0Opsz48 from '../components/CalendarViewMonthFill1Wght100Grad0Opsz48'
import IconCalendarViewMonthFill1Wght200Grad0Opsz48 from '../components/CalendarViewMonthFill1Wght200Grad0Opsz48'
import IconCalendarViewMonthFill1Wght300Grad0Opsz48 from '../components/CalendarViewMonthFill1Wght300Grad0Opsz48'
import IconCalendarViewMonthFill1Wght400Grad0Opsz48 from '../components/CalendarViewMonthFill1Wght400Grad0Opsz48'
import IconCalendarViewMonthFill1Wght500Grad0Opsz48 from '../components/CalendarViewMonthFill1Wght500Grad0Opsz48'
import IconCalendarViewMonthFill1Wght600Grad0Opsz48 from '../components/CalendarViewMonthFill1Wght600Grad0Opsz48'
import IconCalendarViewMonthFill1Wght700Grad0Opsz48 from '../components/CalendarViewMonthFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCalendarViewMonth = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCalendarViewMonthFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCalendarViewMonthFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCalendarViewMonthFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCalendarViewMonthFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCalendarViewMonthFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCalendarViewMonthFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCalendarViewMonthFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCalendarViewMonthFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCalendarViewMonthFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCalendarViewMonthFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCalendarViewMonthFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCalendarViewMonthFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCalendarViewMonthFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCalendarViewMonthFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
