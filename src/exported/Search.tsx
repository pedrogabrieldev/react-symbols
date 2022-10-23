import IconSearchFill0Wght100Grad0Opsz48 from '../components/SearchFill0Wght100Grad0Opsz48'
import IconSearchFill0Wght200Grad0Opsz48 from '../components/SearchFill0Wght200Grad0Opsz48'
import IconSearchFill0Wght300Grad0Opsz48 from '../components/SearchFill0Wght300Grad0Opsz48'
import IconSearchFill0Wght400Grad0Opsz48 from '../components/SearchFill0Wght400Grad0Opsz48'
import IconSearchFill0Wght500Grad0Opsz48 from '../components/SearchFill0Wght500Grad0Opsz48'
import IconSearchFill0Wght600Grad0Opsz48 from '../components/SearchFill0Wght600Grad0Opsz48'
import IconSearchFill0Wght700Grad0Opsz48 from '../components/SearchFill0Wght700Grad0Opsz48'
import IconSearchFill1Wght100Grad0Opsz48 from '../components/SearchFill1Wght100Grad0Opsz48'
import IconSearchFill1Wght200Grad0Opsz48 from '../components/SearchFill1Wght200Grad0Opsz48'
import IconSearchFill1Wght300Grad0Opsz48 from '../components/SearchFill1Wght300Grad0Opsz48'
import IconSearchFill1Wght400Grad0Opsz48 from '../components/SearchFill1Wght400Grad0Opsz48'
import IconSearchFill1Wght500Grad0Opsz48 from '../components/SearchFill1Wght500Grad0Opsz48'
import IconSearchFill1Wght600Grad0Opsz48 from '../components/SearchFill1Wght600Grad0Opsz48'
import IconSearchFill1Wght700Grad0Opsz48 from '../components/SearchFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSearch = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSearchFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSearchFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSearchFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSearchFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSearchFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSearchFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSearchFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSearchFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSearchFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSearchFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSearchFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSearchFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSearchFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSearchFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
