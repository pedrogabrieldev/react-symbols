import IconLastPageFill0Wght100Grad0Opsz48 from '../components/LastPageFill0Wght100Grad0Opsz48'
import IconLastPageFill0Wght200Grad0Opsz48 from '../components/LastPageFill0Wght200Grad0Opsz48'
import IconLastPageFill0Wght300Grad0Opsz48 from '../components/LastPageFill0Wght300Grad0Opsz48'
import IconLastPageFill0Wght400Grad0Opsz48 from '../components/LastPageFill0Wght400Grad0Opsz48'
import IconLastPageFill0Wght500Grad0Opsz48 from '../components/LastPageFill0Wght500Grad0Opsz48'
import IconLastPageFill0Wght600Grad0Opsz48 from '../components/LastPageFill0Wght600Grad0Opsz48'
import IconLastPageFill0Wght700Grad0Opsz48 from '../components/LastPageFill0Wght700Grad0Opsz48'
import IconLastPageFill1Wght100Grad0Opsz48 from '../components/LastPageFill1Wght100Grad0Opsz48'
import IconLastPageFill1Wght200Grad0Opsz48 from '../components/LastPageFill1Wght200Grad0Opsz48'
import IconLastPageFill1Wght300Grad0Opsz48 from '../components/LastPageFill1Wght300Grad0Opsz48'
import IconLastPageFill1Wght400Grad0Opsz48 from '../components/LastPageFill1Wght400Grad0Opsz48'
import IconLastPageFill1Wght500Grad0Opsz48 from '../components/LastPageFill1Wght500Grad0Opsz48'
import IconLastPageFill1Wght600Grad0Opsz48 from '../components/LastPageFill1Wght600Grad0Opsz48'
import IconLastPageFill1Wght700Grad0Opsz48 from '../components/LastPageFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLastPage = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLastPageFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLastPageFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLastPageFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLastPageFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLastPageFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLastPageFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLastPageFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLastPageFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLastPageFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLastPageFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLastPageFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLastPageFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLastPageFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLastPageFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
