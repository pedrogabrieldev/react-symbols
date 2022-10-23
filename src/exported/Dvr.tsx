import IconDvrFill0Wght100Grad0Opsz48 from '../components/DvrFill0Wght100Grad0Opsz48'
import IconDvrFill0Wght200Grad0Opsz48 from '../components/DvrFill0Wght200Grad0Opsz48'
import IconDvrFill0Wght300Grad0Opsz48 from '../components/DvrFill0Wght300Grad0Opsz48'
import IconDvrFill0Wght400Grad0Opsz48 from '../components/DvrFill0Wght400Grad0Opsz48'
import IconDvrFill0Wght500Grad0Opsz48 from '../components/DvrFill0Wght500Grad0Opsz48'
import IconDvrFill0Wght600Grad0Opsz48 from '../components/DvrFill0Wght600Grad0Opsz48'
import IconDvrFill0Wght700Grad0Opsz48 from '../components/DvrFill0Wght700Grad0Opsz48'
import IconDvrFill1Wght100Grad0Opsz48 from '../components/DvrFill1Wght100Grad0Opsz48'
import IconDvrFill1Wght200Grad0Opsz48 from '../components/DvrFill1Wght200Grad0Opsz48'
import IconDvrFill1Wght300Grad0Opsz48 from '../components/DvrFill1Wght300Grad0Opsz48'
import IconDvrFill1Wght400Grad0Opsz48 from '../components/DvrFill1Wght400Grad0Opsz48'
import IconDvrFill1Wght500Grad0Opsz48 from '../components/DvrFill1Wght500Grad0Opsz48'
import IconDvrFill1Wght600Grad0Opsz48 from '../components/DvrFill1Wght600Grad0Opsz48'
import IconDvrFill1Wght700Grad0Opsz48 from '../components/DvrFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDvr = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDvrFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDvrFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDvrFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDvrFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDvrFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDvrFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDvrFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDvrFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDvrFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDvrFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDvrFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDvrFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDvrFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDvrFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
