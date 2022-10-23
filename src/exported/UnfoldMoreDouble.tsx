import IconUnfoldMoreDoubleFill0Wght100Grad0Opsz48 from '../components/UnfoldMoreDoubleFill0Wght100Grad0Opsz48'
import IconUnfoldMoreDoubleFill0Wght200Grad0Opsz48 from '../components/UnfoldMoreDoubleFill0Wght200Grad0Opsz48'
import IconUnfoldMoreDoubleFill0Wght300Grad0Opsz48 from '../components/UnfoldMoreDoubleFill0Wght300Grad0Opsz48'
import IconUnfoldMoreDoubleFill0Wght400Grad0Opsz48 from '../components/UnfoldMoreDoubleFill0Wght400Grad0Opsz48'
import IconUnfoldMoreDoubleFill0Wght500Grad0Opsz48 from '../components/UnfoldMoreDoubleFill0Wght500Grad0Opsz48'
import IconUnfoldMoreDoubleFill0Wght600Grad0Opsz48 from '../components/UnfoldMoreDoubleFill0Wght600Grad0Opsz48'
import IconUnfoldMoreDoubleFill0Wght700Grad0Opsz48 from '../components/UnfoldMoreDoubleFill0Wght700Grad0Opsz48'
import IconUnfoldMoreDoubleFill1Wght100Grad0Opsz48 from '../components/UnfoldMoreDoubleFill1Wght100Grad0Opsz48'
import IconUnfoldMoreDoubleFill1Wght200Grad0Opsz48 from '../components/UnfoldMoreDoubleFill1Wght200Grad0Opsz48'
import IconUnfoldMoreDoubleFill1Wght300Grad0Opsz48 from '../components/UnfoldMoreDoubleFill1Wght300Grad0Opsz48'
import IconUnfoldMoreDoubleFill1Wght400Grad0Opsz48 from '../components/UnfoldMoreDoubleFill1Wght400Grad0Opsz48'
import IconUnfoldMoreDoubleFill1Wght500Grad0Opsz48 from '../components/UnfoldMoreDoubleFill1Wght500Grad0Opsz48'
import IconUnfoldMoreDoubleFill1Wght600Grad0Opsz48 from '../components/UnfoldMoreDoubleFill1Wght600Grad0Opsz48'
import IconUnfoldMoreDoubleFill1Wght700Grad0Opsz48 from '../components/UnfoldMoreDoubleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconUnfoldMoreDouble = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconUnfoldMoreDoubleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconUnfoldMoreDoubleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconUnfoldMoreDoubleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconUnfoldMoreDoubleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconUnfoldMoreDoubleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconUnfoldMoreDoubleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconUnfoldMoreDoubleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconUnfoldMoreDoubleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconUnfoldMoreDoubleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconUnfoldMoreDoubleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconUnfoldMoreDoubleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconUnfoldMoreDoubleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconUnfoldMoreDoubleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconUnfoldMoreDoubleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
