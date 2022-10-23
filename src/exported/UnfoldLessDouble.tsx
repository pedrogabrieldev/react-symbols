import IconUnfoldLessDoubleFill0Wght100Grad0Opsz48 from '../components/UnfoldLessDoubleFill0Wght100Grad0Opsz48'
import IconUnfoldLessDoubleFill0Wght200Grad0Opsz48 from '../components/UnfoldLessDoubleFill0Wght200Grad0Opsz48'
import IconUnfoldLessDoubleFill0Wght300Grad0Opsz48 from '../components/UnfoldLessDoubleFill0Wght300Grad0Opsz48'
import IconUnfoldLessDoubleFill0Wght400Grad0Opsz48 from '../components/UnfoldLessDoubleFill0Wght400Grad0Opsz48'
import IconUnfoldLessDoubleFill0Wght500Grad0Opsz48 from '../components/UnfoldLessDoubleFill0Wght500Grad0Opsz48'
import IconUnfoldLessDoubleFill0Wght600Grad0Opsz48 from '../components/UnfoldLessDoubleFill0Wght600Grad0Opsz48'
import IconUnfoldLessDoubleFill0Wght700Grad0Opsz48 from '../components/UnfoldLessDoubleFill0Wght700Grad0Opsz48'
import IconUnfoldLessDoubleFill1Wght100Grad0Opsz48 from '../components/UnfoldLessDoubleFill1Wght100Grad0Opsz48'
import IconUnfoldLessDoubleFill1Wght200Grad0Opsz48 from '../components/UnfoldLessDoubleFill1Wght200Grad0Opsz48'
import IconUnfoldLessDoubleFill1Wght300Grad0Opsz48 from '../components/UnfoldLessDoubleFill1Wght300Grad0Opsz48'
import IconUnfoldLessDoubleFill1Wght400Grad0Opsz48 from '../components/UnfoldLessDoubleFill1Wght400Grad0Opsz48'
import IconUnfoldLessDoubleFill1Wght500Grad0Opsz48 from '../components/UnfoldLessDoubleFill1Wght500Grad0Opsz48'
import IconUnfoldLessDoubleFill1Wght600Grad0Opsz48 from '../components/UnfoldLessDoubleFill1Wght600Grad0Opsz48'
import IconUnfoldLessDoubleFill1Wght700Grad0Opsz48 from '../components/UnfoldLessDoubleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconUnfoldLessDouble = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconUnfoldLessDoubleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconUnfoldLessDoubleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconUnfoldLessDoubleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconUnfoldLessDoubleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconUnfoldLessDoubleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconUnfoldLessDoubleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconUnfoldLessDoubleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconUnfoldLessDoubleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconUnfoldLessDoubleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconUnfoldLessDoubleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconUnfoldLessDoubleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconUnfoldLessDoubleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconUnfoldLessDoubleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconUnfoldLessDoubleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
