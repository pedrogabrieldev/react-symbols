import IconSelectAllFill0Wght100Grad0Opsz48 from '../components/SelectAllFill0Wght100Grad0Opsz48'
import IconSelectAllFill0Wght200Grad0Opsz48 from '../components/SelectAllFill0Wght200Grad0Opsz48'
import IconSelectAllFill0Wght300Grad0Opsz48 from '../components/SelectAllFill0Wght300Grad0Opsz48'
import IconSelectAllFill0Wght400Grad0Opsz48 from '../components/SelectAllFill0Wght400Grad0Opsz48'
import IconSelectAllFill0Wght500Grad0Opsz48 from '../components/SelectAllFill0Wght500Grad0Opsz48'
import IconSelectAllFill0Wght600Grad0Opsz48 from '../components/SelectAllFill0Wght600Grad0Opsz48'
import IconSelectAllFill0Wght700Grad0Opsz48 from '../components/SelectAllFill0Wght700Grad0Opsz48'
import IconSelectAllFill1Wght100Grad0Opsz48 from '../components/SelectAllFill1Wght100Grad0Opsz48'
import IconSelectAllFill1Wght200Grad0Opsz48 from '../components/SelectAllFill1Wght200Grad0Opsz48'
import IconSelectAllFill1Wght300Grad0Opsz48 from '../components/SelectAllFill1Wght300Grad0Opsz48'
import IconSelectAllFill1Wght400Grad0Opsz48 from '../components/SelectAllFill1Wght400Grad0Opsz48'
import IconSelectAllFill1Wght500Grad0Opsz48 from '../components/SelectAllFill1Wght500Grad0Opsz48'
import IconSelectAllFill1Wght600Grad0Opsz48 from '../components/SelectAllFill1Wght600Grad0Opsz48'
import IconSelectAllFill1Wght700Grad0Opsz48 from '../components/SelectAllFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSelectAll = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSelectAllFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSelectAllFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSelectAllFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSelectAllFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSelectAllFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSelectAllFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSelectAllFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSelectAllFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSelectAllFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSelectAllFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSelectAllFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSelectAllFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSelectAllFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSelectAllFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
