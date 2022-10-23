import IconCalendarTodayFill0Wght100Grad0Opsz48 from '../components/CalendarTodayFill0Wght100Grad0Opsz48'
import IconCalendarTodayFill0Wght200Grad0Opsz48 from '../components/CalendarTodayFill0Wght200Grad0Opsz48'
import IconCalendarTodayFill0Wght300Grad0Opsz48 from '../components/CalendarTodayFill0Wght300Grad0Opsz48'
import IconCalendarTodayFill0Wght400Grad0Opsz48 from '../components/CalendarTodayFill0Wght400Grad0Opsz48'
import IconCalendarTodayFill0Wght500Grad0Opsz48 from '../components/CalendarTodayFill0Wght500Grad0Opsz48'
import IconCalendarTodayFill0Wght600Grad0Opsz48 from '../components/CalendarTodayFill0Wght600Grad0Opsz48'
import IconCalendarTodayFill0Wght700Grad0Opsz48 from '../components/CalendarTodayFill0Wght700Grad0Opsz48'
import IconCalendarTodayFill1Wght100Grad0Opsz48 from '../components/CalendarTodayFill1Wght100Grad0Opsz48'
import IconCalendarTodayFill1Wght200Grad0Opsz48 from '../components/CalendarTodayFill1Wght200Grad0Opsz48'
import IconCalendarTodayFill1Wght300Grad0Opsz48 from '../components/CalendarTodayFill1Wght300Grad0Opsz48'
import IconCalendarTodayFill1Wght400Grad0Opsz48 from '../components/CalendarTodayFill1Wght400Grad0Opsz48'
import IconCalendarTodayFill1Wght500Grad0Opsz48 from '../components/CalendarTodayFill1Wght500Grad0Opsz48'
import IconCalendarTodayFill1Wght600Grad0Opsz48 from '../components/CalendarTodayFill1Wght600Grad0Opsz48'
import IconCalendarTodayFill1Wght700Grad0Opsz48 from '../components/CalendarTodayFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCalendarToday = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCalendarTodayFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCalendarTodayFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCalendarTodayFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCalendarTodayFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCalendarTodayFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCalendarTodayFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCalendarTodayFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCalendarTodayFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCalendarTodayFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCalendarTodayFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCalendarTodayFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCalendarTodayFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCalendarTodayFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCalendarTodayFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
