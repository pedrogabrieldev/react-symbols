import IconDateRangeFill0Wght100Grad0Opsz48 from '../components/DateRangeFill0Wght100Grad0Opsz48'
import IconDateRangeFill0Wght200Grad0Opsz48 from '../components/DateRangeFill0Wght200Grad0Opsz48'
import IconDateRangeFill0Wght300Grad0Opsz48 from '../components/DateRangeFill0Wght300Grad0Opsz48'
import IconDateRangeFill0Wght400Grad0Opsz48 from '../components/DateRangeFill0Wght400Grad0Opsz48'
import IconDateRangeFill0Wght500Grad0Opsz48 from '../components/DateRangeFill0Wght500Grad0Opsz48'
import IconDateRangeFill0Wght600Grad0Opsz48 from '../components/DateRangeFill0Wght600Grad0Opsz48'
import IconDateRangeFill0Wght700Grad0Opsz48 from '../components/DateRangeFill0Wght700Grad0Opsz48'
import IconDateRangeFill1Wght100Grad0Opsz48 from '../components/DateRangeFill1Wght100Grad0Opsz48'
import IconDateRangeFill1Wght200Grad0Opsz48 from '../components/DateRangeFill1Wght200Grad0Opsz48'
import IconDateRangeFill1Wght300Grad0Opsz48 from '../components/DateRangeFill1Wght300Grad0Opsz48'
import IconDateRangeFill1Wght400Grad0Opsz48 from '../components/DateRangeFill1Wght400Grad0Opsz48'
import IconDateRangeFill1Wght500Grad0Opsz48 from '../components/DateRangeFill1Wght500Grad0Opsz48'
import IconDateRangeFill1Wght600Grad0Opsz48 from '../components/DateRangeFill1Wght600Grad0Opsz48'
import IconDateRangeFill1Wght700Grad0Opsz48 from '../components/DateRangeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDateRange = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDateRangeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDateRangeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDateRangeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDateRangeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDateRangeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDateRangeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDateRangeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDateRangeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDateRangeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDateRangeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDateRangeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDateRangeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDateRangeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDateRangeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
