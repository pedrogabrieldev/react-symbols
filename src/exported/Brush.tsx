import IconBrushFill0Wght100Grad0Opsz48 from '../components/BrushFill0Wght100Grad0Opsz48'
import IconBrushFill0Wght200Grad0Opsz48 from '../components/BrushFill0Wght200Grad0Opsz48'
import IconBrushFill0Wght300Grad0Opsz48 from '../components/BrushFill0Wght300Grad0Opsz48'
import IconBrushFill0Wght400Grad0Opsz48 from '../components/BrushFill0Wght400Grad0Opsz48'
import IconBrushFill0Wght500Grad0Opsz48 from '../components/BrushFill0Wght500Grad0Opsz48'
import IconBrushFill0Wght600Grad0Opsz48 from '../components/BrushFill0Wght600Grad0Opsz48'
import IconBrushFill0Wght700Grad0Opsz48 from '../components/BrushFill0Wght700Grad0Opsz48'
import IconBrushFill1Wght100Grad0Opsz48 from '../components/BrushFill1Wght100Grad0Opsz48'
import IconBrushFill1Wght200Grad0Opsz48 from '../components/BrushFill1Wght200Grad0Opsz48'
import IconBrushFill1Wght300Grad0Opsz48 from '../components/BrushFill1Wght300Grad0Opsz48'
import IconBrushFill1Wght400Grad0Opsz48 from '../components/BrushFill1Wght400Grad0Opsz48'
import IconBrushFill1Wght500Grad0Opsz48 from '../components/BrushFill1Wght500Grad0Opsz48'
import IconBrushFill1Wght600Grad0Opsz48 from '../components/BrushFill1Wght600Grad0Opsz48'
import IconBrushFill1Wght700Grad0Opsz48 from '../components/BrushFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBrush = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBrushFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBrushFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBrushFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBrushFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBrushFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBrushFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBrushFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBrushFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBrushFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBrushFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBrushFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBrushFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBrushFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBrushFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
