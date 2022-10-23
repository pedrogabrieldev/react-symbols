import IconSortByAlphaFill0Wght100Grad0Opsz48 from '../components/SortByAlphaFill0Wght100Grad0Opsz48'
import IconSortByAlphaFill0Wght200Grad0Opsz48 from '../components/SortByAlphaFill0Wght200Grad0Opsz48'
import IconSortByAlphaFill0Wght300Grad0Opsz48 from '../components/SortByAlphaFill0Wght300Grad0Opsz48'
import IconSortByAlphaFill0Wght400Grad0Opsz48 from '../components/SortByAlphaFill0Wght400Grad0Opsz48'
import IconSortByAlphaFill0Wght500Grad0Opsz48 from '../components/SortByAlphaFill0Wght500Grad0Opsz48'
import IconSortByAlphaFill0Wght600Grad0Opsz48 from '../components/SortByAlphaFill0Wght600Grad0Opsz48'
import IconSortByAlphaFill0Wght700Grad0Opsz48 from '../components/SortByAlphaFill0Wght700Grad0Opsz48'
import IconSortByAlphaFill1Wght100Grad0Opsz48 from '../components/SortByAlphaFill1Wght100Grad0Opsz48'
import IconSortByAlphaFill1Wght200Grad0Opsz48 from '../components/SortByAlphaFill1Wght200Grad0Opsz48'
import IconSortByAlphaFill1Wght300Grad0Opsz48 from '../components/SortByAlphaFill1Wght300Grad0Opsz48'
import IconSortByAlphaFill1Wght400Grad0Opsz48 from '../components/SortByAlphaFill1Wght400Grad0Opsz48'
import IconSortByAlphaFill1Wght500Grad0Opsz48 from '../components/SortByAlphaFill1Wght500Grad0Opsz48'
import IconSortByAlphaFill1Wght600Grad0Opsz48 from '../components/SortByAlphaFill1Wght600Grad0Opsz48'
import IconSortByAlphaFill1Wght700Grad0Opsz48 from '../components/SortByAlphaFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSortByAlpha = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSortByAlphaFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSortByAlphaFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSortByAlphaFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSortByAlphaFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSortByAlphaFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSortByAlphaFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSortByAlphaFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSortByAlphaFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSortByAlphaFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSortByAlphaFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSortByAlphaFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSortByAlphaFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSortByAlphaFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSortByAlphaFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
