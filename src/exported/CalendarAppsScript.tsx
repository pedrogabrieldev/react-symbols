import IconCalendarAppsScriptFill0Wght100Grad0Opsz48 from '../components/CalendarAppsScriptFill0Wght100Grad0Opsz48'
import IconCalendarAppsScriptFill0Wght200Grad0Opsz48 from '../components/CalendarAppsScriptFill0Wght200Grad0Opsz48'
import IconCalendarAppsScriptFill0Wght300Grad0Opsz48 from '../components/CalendarAppsScriptFill0Wght300Grad0Opsz48'
import IconCalendarAppsScriptFill0Wght400Grad0Opsz48 from '../components/CalendarAppsScriptFill0Wght400Grad0Opsz48'
import IconCalendarAppsScriptFill0Wght500Grad0Opsz48 from '../components/CalendarAppsScriptFill0Wght500Grad0Opsz48'
import IconCalendarAppsScriptFill0Wght600Grad0Opsz48 from '../components/CalendarAppsScriptFill0Wght600Grad0Opsz48'
import IconCalendarAppsScriptFill0Wght700Grad0Opsz48 from '../components/CalendarAppsScriptFill0Wght700Grad0Opsz48'
import IconCalendarAppsScriptFill1Wght100Grad0Opsz48 from '../components/CalendarAppsScriptFill1Wght100Grad0Opsz48'
import IconCalendarAppsScriptFill1Wght200Grad0Opsz48 from '../components/CalendarAppsScriptFill1Wght200Grad0Opsz48'
import IconCalendarAppsScriptFill1Wght300Grad0Opsz48 from '../components/CalendarAppsScriptFill1Wght300Grad0Opsz48'
import IconCalendarAppsScriptFill1Wght400Grad0Opsz48 from '../components/CalendarAppsScriptFill1Wght400Grad0Opsz48'
import IconCalendarAppsScriptFill1Wght500Grad0Opsz48 from '../components/CalendarAppsScriptFill1Wght500Grad0Opsz48'
import IconCalendarAppsScriptFill1Wght600Grad0Opsz48 from '../components/CalendarAppsScriptFill1Wght600Grad0Opsz48'
import IconCalendarAppsScriptFill1Wght700Grad0Opsz48 from '../components/CalendarAppsScriptFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCalendarAppsScript = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCalendarAppsScriptFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCalendarAppsScriptFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCalendarAppsScriptFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCalendarAppsScriptFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCalendarAppsScriptFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCalendarAppsScriptFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCalendarAppsScriptFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCalendarAppsScriptFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCalendarAppsScriptFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCalendarAppsScriptFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCalendarAppsScriptFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCalendarAppsScriptFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCalendarAppsScriptFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCalendarAppsScriptFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
