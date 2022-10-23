import IconSortFill0Wght100Grad0Opsz48 from '../components/SortFill0Wght100Grad0Opsz48'
import IconSortFill0Wght200Grad0Opsz48 from '../components/SortFill0Wght200Grad0Opsz48'
import IconSortFill0Wght300Grad0Opsz48 from '../components/SortFill0Wght300Grad0Opsz48'
import IconSortFill0Wght400Grad0Opsz48 from '../components/SortFill0Wght400Grad0Opsz48'
import IconSortFill0Wght500Grad0Opsz48 from '../components/SortFill0Wght500Grad0Opsz48'
import IconSortFill0Wght600Grad0Opsz48 from '../components/SortFill0Wght600Grad0Opsz48'
import IconSortFill0Wght700Grad0Opsz48 from '../components/SortFill0Wght700Grad0Opsz48'
import IconSortFill1Wght100Grad0Opsz48 from '../components/SortFill1Wght100Grad0Opsz48'
import IconSortFill1Wght200Grad0Opsz48 from '../components/SortFill1Wght200Grad0Opsz48'
import IconSortFill1Wght300Grad0Opsz48 from '../components/SortFill1Wght300Grad0Opsz48'
import IconSortFill1Wght400Grad0Opsz48 from '../components/SortFill1Wght400Grad0Opsz48'
import IconSortFill1Wght500Grad0Opsz48 from '../components/SortFill1Wght500Grad0Opsz48'
import IconSortFill1Wght600Grad0Opsz48 from '../components/SortFill1Wght600Grad0Opsz48'
import IconSortFill1Wght700Grad0Opsz48 from '../components/SortFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSort = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSortFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSortFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSortFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSortFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSortFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSortFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSortFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSortFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSortFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSortFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSortFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSortFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSortFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSortFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
