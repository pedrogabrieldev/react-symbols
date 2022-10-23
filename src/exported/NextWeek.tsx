import IconNextWeekFill0Wght100Grad0Opsz48 from '../components/NextWeekFill0Wght100Grad0Opsz48'
import IconNextWeekFill0Wght200Grad0Opsz48 from '../components/NextWeekFill0Wght200Grad0Opsz48'
import IconNextWeekFill0Wght300Grad0Opsz48 from '../components/NextWeekFill0Wght300Grad0Opsz48'
import IconNextWeekFill0Wght400Grad0Opsz48 from '../components/NextWeekFill0Wght400Grad0Opsz48'
import IconNextWeekFill0Wght500Grad0Opsz48 from '../components/NextWeekFill0Wght500Grad0Opsz48'
import IconNextWeekFill0Wght600Grad0Opsz48 from '../components/NextWeekFill0Wght600Grad0Opsz48'
import IconNextWeekFill0Wght700Grad0Opsz48 from '../components/NextWeekFill0Wght700Grad0Opsz48'
import IconNextWeekFill1Wght100Grad0Opsz48 from '../components/NextWeekFill1Wght100Grad0Opsz48'
import IconNextWeekFill1Wght200Grad0Opsz48 from '../components/NextWeekFill1Wght200Grad0Opsz48'
import IconNextWeekFill1Wght300Grad0Opsz48 from '../components/NextWeekFill1Wght300Grad0Opsz48'
import IconNextWeekFill1Wght400Grad0Opsz48 from '../components/NextWeekFill1Wght400Grad0Opsz48'
import IconNextWeekFill1Wght500Grad0Opsz48 from '../components/NextWeekFill1Wght500Grad0Opsz48'
import IconNextWeekFill1Wght600Grad0Opsz48 from '../components/NextWeekFill1Wght600Grad0Opsz48'
import IconNextWeekFill1Wght700Grad0Opsz48 from '../components/NextWeekFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNextWeek = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNextWeekFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNextWeekFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNextWeekFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNextWeekFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNextWeekFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNextWeekFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNextWeekFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNextWeekFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNextWeekFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNextWeekFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNextWeekFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNextWeekFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNextWeekFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNextWeekFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
