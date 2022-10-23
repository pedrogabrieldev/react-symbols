import IconCalendarViewWeekFill0Wght100Grad0Opsz48 from '../components/CalendarViewWeekFill0Wght100Grad0Opsz48'
import IconCalendarViewWeekFill0Wght200Grad0Opsz48 from '../components/CalendarViewWeekFill0Wght200Grad0Opsz48'
import IconCalendarViewWeekFill0Wght300Grad0Opsz48 from '../components/CalendarViewWeekFill0Wght300Grad0Opsz48'
import IconCalendarViewWeekFill0Wght400Grad0Opsz48 from '../components/CalendarViewWeekFill0Wght400Grad0Opsz48'
import IconCalendarViewWeekFill0Wght500Grad0Opsz48 from '../components/CalendarViewWeekFill0Wght500Grad0Opsz48'
import IconCalendarViewWeekFill0Wght600Grad0Opsz48 from '../components/CalendarViewWeekFill0Wght600Grad0Opsz48'
import IconCalendarViewWeekFill0Wght700Grad0Opsz48 from '../components/CalendarViewWeekFill0Wght700Grad0Opsz48'
import IconCalendarViewWeekFill1Wght100Grad0Opsz48 from '../components/CalendarViewWeekFill1Wght100Grad0Opsz48'
import IconCalendarViewWeekFill1Wght200Grad0Opsz48 from '../components/CalendarViewWeekFill1Wght200Grad0Opsz48'
import IconCalendarViewWeekFill1Wght300Grad0Opsz48 from '../components/CalendarViewWeekFill1Wght300Grad0Opsz48'
import IconCalendarViewWeekFill1Wght400Grad0Opsz48 from '../components/CalendarViewWeekFill1Wght400Grad0Opsz48'
import IconCalendarViewWeekFill1Wght500Grad0Opsz48 from '../components/CalendarViewWeekFill1Wght500Grad0Opsz48'
import IconCalendarViewWeekFill1Wght600Grad0Opsz48 from '../components/CalendarViewWeekFill1Wght600Grad0Opsz48'
import IconCalendarViewWeekFill1Wght700Grad0Opsz48 from '../components/CalendarViewWeekFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCalendarViewWeek = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCalendarViewWeekFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCalendarViewWeekFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCalendarViewWeekFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCalendarViewWeekFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCalendarViewWeekFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCalendarViewWeekFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCalendarViewWeekFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCalendarViewWeekFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCalendarViewWeekFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCalendarViewWeekFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCalendarViewWeekFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCalendarViewWeekFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCalendarViewWeekFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCalendarViewWeekFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
