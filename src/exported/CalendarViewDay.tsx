import IconCalendarViewDayFill0Wght100Grad0Opsz48 from '../components/CalendarViewDayFill0Wght100Grad0Opsz48'
import IconCalendarViewDayFill0Wght200Grad0Opsz48 from '../components/CalendarViewDayFill0Wght200Grad0Opsz48'
import IconCalendarViewDayFill0Wght300Grad0Opsz48 from '../components/CalendarViewDayFill0Wght300Grad0Opsz48'
import IconCalendarViewDayFill0Wght400Grad0Opsz48 from '../components/CalendarViewDayFill0Wght400Grad0Opsz48'
import IconCalendarViewDayFill0Wght500Grad0Opsz48 from '../components/CalendarViewDayFill0Wght500Grad0Opsz48'
import IconCalendarViewDayFill0Wght600Grad0Opsz48 from '../components/CalendarViewDayFill0Wght600Grad0Opsz48'
import IconCalendarViewDayFill0Wght700Grad0Opsz48 from '../components/CalendarViewDayFill0Wght700Grad0Opsz48'
import IconCalendarViewDayFill1Wght100Grad0Opsz48 from '../components/CalendarViewDayFill1Wght100Grad0Opsz48'
import IconCalendarViewDayFill1Wght200Grad0Opsz48 from '../components/CalendarViewDayFill1Wght200Grad0Opsz48'
import IconCalendarViewDayFill1Wght300Grad0Opsz48 from '../components/CalendarViewDayFill1Wght300Grad0Opsz48'
import IconCalendarViewDayFill1Wght400Grad0Opsz48 from '../components/CalendarViewDayFill1Wght400Grad0Opsz48'
import IconCalendarViewDayFill1Wght500Grad0Opsz48 from '../components/CalendarViewDayFill1Wght500Grad0Opsz48'
import IconCalendarViewDayFill1Wght600Grad0Opsz48 from '../components/CalendarViewDayFill1Wght600Grad0Opsz48'
import IconCalendarViewDayFill1Wght700Grad0Opsz48 from '../components/CalendarViewDayFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCalendarViewDay = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCalendarViewDayFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCalendarViewDayFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCalendarViewDayFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCalendarViewDayFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCalendarViewDayFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCalendarViewDayFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCalendarViewDayFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCalendarViewDayFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCalendarViewDayFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCalendarViewDayFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCalendarViewDayFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCalendarViewDayFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCalendarViewDayFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCalendarViewDayFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
