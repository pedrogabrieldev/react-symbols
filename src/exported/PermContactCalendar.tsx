import IconPermContactCalendarFill0Wght100Grad0Opsz48 from '../components/PermContactCalendarFill0Wght100Grad0Opsz48'
import IconPermContactCalendarFill0Wght200Grad0Opsz48 from '../components/PermContactCalendarFill0Wght200Grad0Opsz48'
import IconPermContactCalendarFill0Wght300Grad0Opsz48 from '../components/PermContactCalendarFill0Wght300Grad0Opsz48'
import IconPermContactCalendarFill0Wght400Grad0Opsz48 from '../components/PermContactCalendarFill0Wght400Grad0Opsz48'
import IconPermContactCalendarFill0Wght500Grad0Opsz48 from '../components/PermContactCalendarFill0Wght500Grad0Opsz48'
import IconPermContactCalendarFill0Wght600Grad0Opsz48 from '../components/PermContactCalendarFill0Wght600Grad0Opsz48'
import IconPermContactCalendarFill0Wght700Grad0Opsz48 from '../components/PermContactCalendarFill0Wght700Grad0Opsz48'
import IconPermContactCalendarFill1Wght100Grad0Opsz48 from '../components/PermContactCalendarFill1Wght100Grad0Opsz48'
import IconPermContactCalendarFill1Wght200Grad0Opsz48 from '../components/PermContactCalendarFill1Wght200Grad0Opsz48'
import IconPermContactCalendarFill1Wght300Grad0Opsz48 from '../components/PermContactCalendarFill1Wght300Grad0Opsz48'
import IconPermContactCalendarFill1Wght400Grad0Opsz48 from '../components/PermContactCalendarFill1Wght400Grad0Opsz48'
import IconPermContactCalendarFill1Wght500Grad0Opsz48 from '../components/PermContactCalendarFill1Wght500Grad0Opsz48'
import IconPermContactCalendarFill1Wght600Grad0Opsz48 from '../components/PermContactCalendarFill1Wght600Grad0Opsz48'
import IconPermContactCalendarFill1Wght700Grad0Opsz48 from '../components/PermContactCalendarFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPermContactCalendar = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPermContactCalendarFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPermContactCalendarFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPermContactCalendarFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPermContactCalendarFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPermContactCalendarFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPermContactCalendarFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPermContactCalendarFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPermContactCalendarFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPermContactCalendarFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPermContactCalendarFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPermContactCalendarFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPermContactCalendarFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPermContactCalendarFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPermContactCalendarFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
