import IconFilterFill0Wght100Grad0Opsz48 from '../components/FilterFill0Wght100Grad0Opsz48'
import IconFilterFill0Wght200Grad0Opsz48 from '../components/FilterFill0Wght200Grad0Opsz48'
import IconFilterFill0Wght300Grad0Opsz48 from '../components/FilterFill0Wght300Grad0Opsz48'
import IconFilterFill0Wght400Grad0Opsz48 from '../components/FilterFill0Wght400Grad0Opsz48'
import IconFilterFill0Wght500Grad0Opsz48 from '../components/FilterFill0Wght500Grad0Opsz48'
import IconFilterFill0Wght600Grad0Opsz48 from '../components/FilterFill0Wght600Grad0Opsz48'
import IconFilterFill0Wght700Grad0Opsz48 from '../components/FilterFill0Wght700Grad0Opsz48'
import IconFilterFill1Wght100Grad0Opsz48 from '../components/FilterFill1Wght100Grad0Opsz48'
import IconFilterFill1Wght200Grad0Opsz48 from '../components/FilterFill1Wght200Grad0Opsz48'
import IconFilterFill1Wght300Grad0Opsz48 from '../components/FilterFill1Wght300Grad0Opsz48'
import IconFilterFill1Wght400Grad0Opsz48 from '../components/FilterFill1Wght400Grad0Opsz48'
import IconFilterFill1Wght500Grad0Opsz48 from '../components/FilterFill1Wght500Grad0Opsz48'
import IconFilterFill1Wght600Grad0Opsz48 from '../components/FilterFill1Wght600Grad0Opsz48'
import IconFilterFill1Wght700Grad0Opsz48 from '../components/FilterFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFilter = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFilterFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFilterFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFilterFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFilterFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFilterFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFilterFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFilterFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFilterFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFilterFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFilterFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFilterFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFilterFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFilterFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFilterFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
