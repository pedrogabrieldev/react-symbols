import IconCalendarAddOnFill0Wght100Grad0Opsz48 from '../components/CalendarAddOnFill0Wght100Grad0Opsz48'
import IconCalendarAddOnFill0Wght200Grad0Opsz48 from '../components/CalendarAddOnFill0Wght200Grad0Opsz48'
import IconCalendarAddOnFill0Wght300Grad0Opsz48 from '../components/CalendarAddOnFill0Wght300Grad0Opsz48'
import IconCalendarAddOnFill0Wght400Grad0Opsz48 from '../components/CalendarAddOnFill0Wght400Grad0Opsz48'
import IconCalendarAddOnFill0Wght500Grad0Opsz48 from '../components/CalendarAddOnFill0Wght500Grad0Opsz48'
import IconCalendarAddOnFill0Wght600Grad0Opsz48 from '../components/CalendarAddOnFill0Wght600Grad0Opsz48'
import IconCalendarAddOnFill0Wght700Grad0Opsz48 from '../components/CalendarAddOnFill0Wght700Grad0Opsz48'
import IconCalendarAddOnFill1Wght100Grad0Opsz48 from '../components/CalendarAddOnFill1Wght100Grad0Opsz48'
import IconCalendarAddOnFill1Wght200Grad0Opsz48 from '../components/CalendarAddOnFill1Wght200Grad0Opsz48'
import IconCalendarAddOnFill1Wght300Grad0Opsz48 from '../components/CalendarAddOnFill1Wght300Grad0Opsz48'
import IconCalendarAddOnFill1Wght400Grad0Opsz48 from '../components/CalendarAddOnFill1Wght400Grad0Opsz48'
import IconCalendarAddOnFill1Wght500Grad0Opsz48 from '../components/CalendarAddOnFill1Wght500Grad0Opsz48'
import IconCalendarAddOnFill1Wght600Grad0Opsz48 from '../components/CalendarAddOnFill1Wght600Grad0Opsz48'
import IconCalendarAddOnFill1Wght700Grad0Opsz48 from '../components/CalendarAddOnFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCalendarAddOn = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCalendarAddOnFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCalendarAddOnFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCalendarAddOnFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCalendarAddOnFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCalendarAddOnFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCalendarAddOnFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCalendarAddOnFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCalendarAddOnFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCalendarAddOnFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCalendarAddOnFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCalendarAddOnFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCalendarAddOnFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCalendarAddOnFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCalendarAddOnFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
