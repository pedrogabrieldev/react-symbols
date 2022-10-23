import IconViewWeekFill0Wght100Grad0Opsz48 from '../components/ViewWeekFill0Wght100Grad0Opsz48'
import IconViewWeekFill0Wght200Grad0Opsz48 from '../components/ViewWeekFill0Wght200Grad0Opsz48'
import IconViewWeekFill0Wght300Grad0Opsz48 from '../components/ViewWeekFill0Wght300Grad0Opsz48'
import IconViewWeekFill0Wght400Grad0Opsz48 from '../components/ViewWeekFill0Wght400Grad0Opsz48'
import IconViewWeekFill0Wght500Grad0Opsz48 from '../components/ViewWeekFill0Wght500Grad0Opsz48'
import IconViewWeekFill0Wght600Grad0Opsz48 from '../components/ViewWeekFill0Wght600Grad0Opsz48'
import IconViewWeekFill0Wght700Grad0Opsz48 from '../components/ViewWeekFill0Wght700Grad0Opsz48'
import IconViewWeekFill1Wght100Grad0Opsz48 from '../components/ViewWeekFill1Wght100Grad0Opsz48'
import IconViewWeekFill1Wght200Grad0Opsz48 from '../components/ViewWeekFill1Wght200Grad0Opsz48'
import IconViewWeekFill1Wght300Grad0Opsz48 from '../components/ViewWeekFill1Wght300Grad0Opsz48'
import IconViewWeekFill1Wght400Grad0Opsz48 from '../components/ViewWeekFill1Wght400Grad0Opsz48'
import IconViewWeekFill1Wght500Grad0Opsz48 from '../components/ViewWeekFill1Wght500Grad0Opsz48'
import IconViewWeekFill1Wght600Grad0Opsz48 from '../components/ViewWeekFill1Wght600Grad0Opsz48'
import IconViewWeekFill1Wght700Grad0Opsz48 from '../components/ViewWeekFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconViewWeek = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconViewWeekFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconViewWeekFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconViewWeekFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconViewWeekFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconViewWeekFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconViewWeekFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconViewWeekFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconViewWeekFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconViewWeekFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconViewWeekFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconViewWeekFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconViewWeekFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconViewWeekFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconViewWeekFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
