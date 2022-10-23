import IconClearDayFill0Wght100Grad0Opsz48 from '../components/ClearDayFill0Wght100Grad0Opsz48'
import IconClearDayFill0Wght200Grad0Opsz48 from '../components/ClearDayFill0Wght200Grad0Opsz48'
import IconClearDayFill0Wght300Grad0Opsz48 from '../components/ClearDayFill0Wght300Grad0Opsz48'
import IconClearDayFill0Wght400Grad0Opsz48 from '../components/ClearDayFill0Wght400Grad0Opsz48'
import IconClearDayFill0Wght500Grad0Opsz48 from '../components/ClearDayFill0Wght500Grad0Opsz48'
import IconClearDayFill0Wght600Grad0Opsz48 from '../components/ClearDayFill0Wght600Grad0Opsz48'
import IconClearDayFill0Wght700Grad0Opsz48 from '../components/ClearDayFill0Wght700Grad0Opsz48'
import IconClearDayFill1Wght100Grad0Opsz48 from '../components/ClearDayFill1Wght100Grad0Opsz48'
import IconClearDayFill1Wght200Grad0Opsz48 from '../components/ClearDayFill1Wght200Grad0Opsz48'
import IconClearDayFill1Wght300Grad0Opsz48 from '../components/ClearDayFill1Wght300Grad0Opsz48'
import IconClearDayFill1Wght400Grad0Opsz48 from '../components/ClearDayFill1Wght400Grad0Opsz48'
import IconClearDayFill1Wght500Grad0Opsz48 from '../components/ClearDayFill1Wght500Grad0Opsz48'
import IconClearDayFill1Wght600Grad0Opsz48 from '../components/ClearDayFill1Wght600Grad0Opsz48'
import IconClearDayFill1Wght700Grad0Opsz48 from '../components/ClearDayFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconClearDay = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconClearDayFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconClearDayFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconClearDayFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconClearDayFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconClearDayFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconClearDayFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconClearDayFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconClearDayFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconClearDayFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconClearDayFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconClearDayFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconClearDayFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconClearDayFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconClearDayFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
