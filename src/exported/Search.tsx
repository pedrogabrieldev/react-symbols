import SearchFill0Wght100Grad0Opsz48 from '../components/SearchFill0Wght100Grad0Opsz48'
import SearchFill0Wght200Grad0Opsz48 from '../components/SearchFill0Wght200Grad0Opsz48'
import SearchFill0Wght300Grad0Opsz48 from '../components/SearchFill0Wght300Grad0Opsz48'
import SearchFill0Wght400Grad0Opsz48 from '../components/SearchFill0Wght400Grad0Opsz48'
import SearchFill0Wght500Grad0Opsz48 from '../components/SearchFill0Wght500Grad0Opsz48'
import SearchFill0Wght600Grad0Opsz48 from '../components/SearchFill0Wght600Grad0Opsz48'
import SearchFill0Wght700Grad0Opsz48 from '../components/SearchFill0Wght700Grad0Opsz48'
import SearchFill1Wght100Grad0Opsz48 from '../components/SearchFill1Wght100Grad0Opsz48'
import SearchFill1Wght200Grad0Opsz48 from '../components/SearchFill1Wght200Grad0Opsz48'
import SearchFill1Wght300Grad0Opsz48 from '../components/SearchFill1Wght300Grad0Opsz48'
import SearchFill1Wght400Grad0Opsz48 from '../components/SearchFill1Wght400Grad0Opsz48'
import SearchFill1Wght500Grad0Opsz48 from '../components/SearchFill1Wght500Grad0Opsz48'
import SearchFill1Wght600Grad0Opsz48 from '../components/SearchFill1Wght600Grad0Opsz48'
import SearchFill1Wght700Grad0Opsz48 from '../components/SearchFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const Search = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <SearchFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <SearchFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <SearchFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <SearchFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <SearchFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <SearchFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <SearchFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <SearchFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <SearchFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <SearchFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <SearchFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <SearchFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <SearchFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <SearchFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
