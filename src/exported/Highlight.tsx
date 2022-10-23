import IconHighlightFill0Wght100Grad0Opsz48 from '../components/HighlightFill0Wght100Grad0Opsz48'
import IconHighlightFill0Wght200Grad0Opsz48 from '../components/HighlightFill0Wght200Grad0Opsz48'
import IconHighlightFill0Wght300Grad0Opsz48 from '../components/HighlightFill0Wght300Grad0Opsz48'
import IconHighlightFill0Wght400Grad0Opsz48 from '../components/HighlightFill0Wght400Grad0Opsz48'
import IconHighlightFill0Wght500Grad0Opsz48 from '../components/HighlightFill0Wght500Grad0Opsz48'
import IconHighlightFill0Wght600Grad0Opsz48 from '../components/HighlightFill0Wght600Grad0Opsz48'
import IconHighlightFill0Wght700Grad0Opsz48 from '../components/HighlightFill0Wght700Grad0Opsz48'
import IconHighlightFill1Wght100Grad0Opsz48 from '../components/HighlightFill1Wght100Grad0Opsz48'
import IconHighlightFill1Wght200Grad0Opsz48 from '../components/HighlightFill1Wght200Grad0Opsz48'
import IconHighlightFill1Wght300Grad0Opsz48 from '../components/HighlightFill1Wght300Grad0Opsz48'
import IconHighlightFill1Wght400Grad0Opsz48 from '../components/HighlightFill1Wght400Grad0Opsz48'
import IconHighlightFill1Wght500Grad0Opsz48 from '../components/HighlightFill1Wght500Grad0Opsz48'
import IconHighlightFill1Wght600Grad0Opsz48 from '../components/HighlightFill1Wght600Grad0Opsz48'
import IconHighlightFill1Wght700Grad0Opsz48 from '../components/HighlightFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHighlight = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHighlightFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHighlightFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHighlightFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHighlightFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHighlightFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHighlightFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHighlightFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHighlightFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHighlightFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHighlightFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHighlightFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHighlightFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHighlightFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHighlightFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
