import IconFindReplaceFill0Wght100Grad0Opsz48 from '../components/FindReplaceFill0Wght100Grad0Opsz48'
import IconFindReplaceFill0Wght200Grad0Opsz48 from '../components/FindReplaceFill0Wght200Grad0Opsz48'
import IconFindReplaceFill0Wght300Grad0Opsz48 from '../components/FindReplaceFill0Wght300Grad0Opsz48'
import IconFindReplaceFill0Wght400Grad0Opsz48 from '../components/FindReplaceFill0Wght400Grad0Opsz48'
import IconFindReplaceFill0Wght500Grad0Opsz48 from '../components/FindReplaceFill0Wght500Grad0Opsz48'
import IconFindReplaceFill0Wght600Grad0Opsz48 from '../components/FindReplaceFill0Wght600Grad0Opsz48'
import IconFindReplaceFill0Wght700Grad0Opsz48 from '../components/FindReplaceFill0Wght700Grad0Opsz48'
import IconFindReplaceFill1Wght100Grad0Opsz48 from '../components/FindReplaceFill1Wght100Grad0Opsz48'
import IconFindReplaceFill1Wght200Grad0Opsz48 from '../components/FindReplaceFill1Wght200Grad0Opsz48'
import IconFindReplaceFill1Wght300Grad0Opsz48 from '../components/FindReplaceFill1Wght300Grad0Opsz48'
import IconFindReplaceFill1Wght400Grad0Opsz48 from '../components/FindReplaceFill1Wght400Grad0Opsz48'
import IconFindReplaceFill1Wght500Grad0Opsz48 from '../components/FindReplaceFill1Wght500Grad0Opsz48'
import IconFindReplaceFill1Wght600Grad0Opsz48 from '../components/FindReplaceFill1Wght600Grad0Opsz48'
import IconFindReplaceFill1Wght700Grad0Opsz48 from '../components/FindReplaceFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFindReplace = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFindReplaceFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFindReplaceFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFindReplaceFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFindReplaceFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFindReplaceFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFindReplaceFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFindReplaceFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFindReplaceFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFindReplaceFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFindReplaceFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFindReplaceFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFindReplaceFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFindReplaceFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFindReplaceFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
