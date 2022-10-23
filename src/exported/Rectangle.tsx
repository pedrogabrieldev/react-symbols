import IconRectangleFill0Wght100Grad0Opsz48 from '../components/RectangleFill0Wght100Grad0Opsz48'
import IconRectangleFill0Wght200Grad0Opsz48 from '../components/RectangleFill0Wght200Grad0Opsz48'
import IconRectangleFill0Wght300Grad0Opsz48 from '../components/RectangleFill0Wght300Grad0Opsz48'
import IconRectangleFill0Wght400Grad0Opsz48 from '../components/RectangleFill0Wght400Grad0Opsz48'
import IconRectangleFill0Wght500Grad0Opsz48 from '../components/RectangleFill0Wght500Grad0Opsz48'
import IconRectangleFill0Wght600Grad0Opsz48 from '../components/RectangleFill0Wght600Grad0Opsz48'
import IconRectangleFill0Wght700Grad0Opsz48 from '../components/RectangleFill0Wght700Grad0Opsz48'
import IconRectangleFill1Wght100Grad0Opsz48 from '../components/RectangleFill1Wght100Grad0Opsz48'
import IconRectangleFill1Wght200Grad0Opsz48 from '../components/RectangleFill1Wght200Grad0Opsz48'
import IconRectangleFill1Wght300Grad0Opsz48 from '../components/RectangleFill1Wght300Grad0Opsz48'
import IconRectangleFill1Wght400Grad0Opsz48 from '../components/RectangleFill1Wght400Grad0Opsz48'
import IconRectangleFill1Wght500Grad0Opsz48 from '../components/RectangleFill1Wght500Grad0Opsz48'
import IconRectangleFill1Wght600Grad0Opsz48 from '../components/RectangleFill1Wght600Grad0Opsz48'
import IconRectangleFill1Wght700Grad0Opsz48 from '../components/RectangleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRectangle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRectangleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRectangleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRectangleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRectangleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRectangleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRectangleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRectangleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRectangleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRectangleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRectangleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRectangleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRectangleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRectangleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRectangleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
