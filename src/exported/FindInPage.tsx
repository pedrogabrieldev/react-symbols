import IconFindInPageFill0Wght100Grad0Opsz48 from '../components/FindInPageFill0Wght100Grad0Opsz48'
import IconFindInPageFill0Wght200Grad0Opsz48 from '../components/FindInPageFill0Wght200Grad0Opsz48'
import IconFindInPageFill0Wght300Grad0Opsz48 from '../components/FindInPageFill0Wght300Grad0Opsz48'
import IconFindInPageFill0Wght400Grad0Opsz48 from '../components/FindInPageFill0Wght400Grad0Opsz48'
import IconFindInPageFill0Wght500Grad0Opsz48 from '../components/FindInPageFill0Wght500Grad0Opsz48'
import IconFindInPageFill0Wght600Grad0Opsz48 from '../components/FindInPageFill0Wght600Grad0Opsz48'
import IconFindInPageFill0Wght700Grad0Opsz48 from '../components/FindInPageFill0Wght700Grad0Opsz48'
import IconFindInPageFill1Wght100Grad0Opsz48 from '../components/FindInPageFill1Wght100Grad0Opsz48'
import IconFindInPageFill1Wght200Grad0Opsz48 from '../components/FindInPageFill1Wght200Grad0Opsz48'
import IconFindInPageFill1Wght300Grad0Opsz48 from '../components/FindInPageFill1Wght300Grad0Opsz48'
import IconFindInPageFill1Wght400Grad0Opsz48 from '../components/FindInPageFill1Wght400Grad0Opsz48'
import IconFindInPageFill1Wght500Grad0Opsz48 from '../components/FindInPageFill1Wght500Grad0Opsz48'
import IconFindInPageFill1Wght600Grad0Opsz48 from '../components/FindInPageFill1Wght600Grad0Opsz48'
import IconFindInPageFill1Wght700Grad0Opsz48 from '../components/FindInPageFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFindInPage = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFindInPageFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFindInPageFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFindInPageFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFindInPageFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFindInPageFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFindInPageFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFindInPageFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFindInPageFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFindInPageFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFindInPageFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFindInPageFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFindInPageFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFindInPageFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFindInPageFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
