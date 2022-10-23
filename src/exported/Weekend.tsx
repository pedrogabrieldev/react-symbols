import IconWeekendFill0Wght100Grad0Opsz48 from '../components/WeekendFill0Wght100Grad0Opsz48'
import IconWeekendFill0Wght200Grad0Opsz48 from '../components/WeekendFill0Wght200Grad0Opsz48'
import IconWeekendFill0Wght300Grad0Opsz48 from '../components/WeekendFill0Wght300Grad0Opsz48'
import IconWeekendFill0Wght400Grad0Opsz48 from '../components/WeekendFill0Wght400Grad0Opsz48'
import IconWeekendFill0Wght500Grad0Opsz48 from '../components/WeekendFill0Wght500Grad0Opsz48'
import IconWeekendFill0Wght600Grad0Opsz48 from '../components/WeekendFill0Wght600Grad0Opsz48'
import IconWeekendFill0Wght700Grad0Opsz48 from '../components/WeekendFill0Wght700Grad0Opsz48'
import IconWeekendFill1Wght100Grad0Opsz48 from '../components/WeekendFill1Wght100Grad0Opsz48'
import IconWeekendFill1Wght200Grad0Opsz48 from '../components/WeekendFill1Wght200Grad0Opsz48'
import IconWeekendFill1Wght300Grad0Opsz48 from '../components/WeekendFill1Wght300Grad0Opsz48'
import IconWeekendFill1Wght400Grad0Opsz48 from '../components/WeekendFill1Wght400Grad0Opsz48'
import IconWeekendFill1Wght500Grad0Opsz48 from '../components/WeekendFill1Wght500Grad0Opsz48'
import IconWeekendFill1Wght600Grad0Opsz48 from '../components/WeekendFill1Wght600Grad0Opsz48'
import IconWeekendFill1Wght700Grad0Opsz48 from '../components/WeekendFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWeekend = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWeekendFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWeekendFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWeekendFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWeekendFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWeekendFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWeekendFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWeekendFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWeekendFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWeekendFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWeekendFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWeekendFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWeekendFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWeekendFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWeekendFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
