import IconFilterListOffFill0Wght100Grad0Opsz48 from '../components/FilterListOffFill0Wght100Grad0Opsz48'
import IconFilterListOffFill0Wght200Grad0Opsz48 from '../components/FilterListOffFill0Wght200Grad0Opsz48'
import IconFilterListOffFill0Wght300Grad0Opsz48 from '../components/FilterListOffFill0Wght300Grad0Opsz48'
import IconFilterListOffFill0Wght400Grad0Opsz48 from '../components/FilterListOffFill0Wght400Grad0Opsz48'
import IconFilterListOffFill0Wght500Grad0Opsz48 from '../components/FilterListOffFill0Wght500Grad0Opsz48'
import IconFilterListOffFill0Wght600Grad0Opsz48 from '../components/FilterListOffFill0Wght600Grad0Opsz48'
import IconFilterListOffFill0Wght700Grad0Opsz48 from '../components/FilterListOffFill0Wght700Grad0Opsz48'
import IconFilterListOffFill1Wght100Grad0Opsz48 from '../components/FilterListOffFill1Wght100Grad0Opsz48'
import IconFilterListOffFill1Wght200Grad0Opsz48 from '../components/FilterListOffFill1Wght200Grad0Opsz48'
import IconFilterListOffFill1Wght300Grad0Opsz48 from '../components/FilterListOffFill1Wght300Grad0Opsz48'
import IconFilterListOffFill1Wght400Grad0Opsz48 from '../components/FilterListOffFill1Wght400Grad0Opsz48'
import IconFilterListOffFill1Wght500Grad0Opsz48 from '../components/FilterListOffFill1Wght500Grad0Opsz48'
import IconFilterListOffFill1Wght600Grad0Opsz48 from '../components/FilterListOffFill1Wght600Grad0Opsz48'
import IconFilterListOffFill1Wght700Grad0Opsz48 from '../components/FilterListOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFilterListOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFilterListOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFilterListOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFilterListOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFilterListOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFilterListOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFilterListOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFilterListOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFilterListOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFilterListOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFilterListOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFilterListOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFilterListOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFilterListOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFilterListOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
