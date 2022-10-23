import IconTodayFill0Wght100Grad0Opsz48 from '../components/TodayFill0Wght100Grad0Opsz48'
import IconTodayFill0Wght200Grad0Opsz48 from '../components/TodayFill0Wght200Grad0Opsz48'
import IconTodayFill0Wght300Grad0Opsz48 from '../components/TodayFill0Wght300Grad0Opsz48'
import IconTodayFill0Wght400Grad0Opsz48 from '../components/TodayFill0Wght400Grad0Opsz48'
import IconTodayFill0Wght500Grad0Opsz48 from '../components/TodayFill0Wght500Grad0Opsz48'
import IconTodayFill0Wght600Grad0Opsz48 from '../components/TodayFill0Wght600Grad0Opsz48'
import IconTodayFill0Wght700Grad0Opsz48 from '../components/TodayFill0Wght700Grad0Opsz48'
import IconTodayFill1Wght100Grad0Opsz48 from '../components/TodayFill1Wght100Grad0Opsz48'
import IconTodayFill1Wght200Grad0Opsz48 from '../components/TodayFill1Wght200Grad0Opsz48'
import IconTodayFill1Wght300Grad0Opsz48 from '../components/TodayFill1Wght300Grad0Opsz48'
import IconTodayFill1Wght400Grad0Opsz48 from '../components/TodayFill1Wght400Grad0Opsz48'
import IconTodayFill1Wght500Grad0Opsz48 from '../components/TodayFill1Wght500Grad0Opsz48'
import IconTodayFill1Wght600Grad0Opsz48 from '../components/TodayFill1Wght600Grad0Opsz48'
import IconTodayFill1Wght700Grad0Opsz48 from '../components/TodayFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconToday = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTodayFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTodayFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTodayFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTodayFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTodayFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTodayFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTodayFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTodayFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTodayFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTodayFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTodayFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTodayFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTodayFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTodayFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
