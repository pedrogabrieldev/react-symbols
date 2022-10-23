import IconShapeLineFill0Wght100Grad0Opsz48 from '../components/ShapeLineFill0Wght100Grad0Opsz48'
import IconShapeLineFill0Wght200Grad0Opsz48 from '../components/ShapeLineFill0Wght200Grad0Opsz48'
import IconShapeLineFill0Wght300Grad0Opsz48 from '../components/ShapeLineFill0Wght300Grad0Opsz48'
import IconShapeLineFill0Wght400Grad0Opsz48 from '../components/ShapeLineFill0Wght400Grad0Opsz48'
import IconShapeLineFill0Wght500Grad0Opsz48 from '../components/ShapeLineFill0Wght500Grad0Opsz48'
import IconShapeLineFill0Wght600Grad0Opsz48 from '../components/ShapeLineFill0Wght600Grad0Opsz48'
import IconShapeLineFill0Wght700Grad0Opsz48 from '../components/ShapeLineFill0Wght700Grad0Opsz48'
import IconShapeLineFill1Wght100Grad0Opsz48 from '../components/ShapeLineFill1Wght100Grad0Opsz48'
import IconShapeLineFill1Wght200Grad0Opsz48 from '../components/ShapeLineFill1Wght200Grad0Opsz48'
import IconShapeLineFill1Wght300Grad0Opsz48 from '../components/ShapeLineFill1Wght300Grad0Opsz48'
import IconShapeLineFill1Wght400Grad0Opsz48 from '../components/ShapeLineFill1Wght400Grad0Opsz48'
import IconShapeLineFill1Wght500Grad0Opsz48 from '../components/ShapeLineFill1Wght500Grad0Opsz48'
import IconShapeLineFill1Wght600Grad0Opsz48 from '../components/ShapeLineFill1Wght600Grad0Opsz48'
import IconShapeLineFill1Wght700Grad0Opsz48 from '../components/ShapeLineFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconShapeLine = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconShapeLineFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconShapeLineFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconShapeLineFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconShapeLineFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconShapeLineFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconShapeLineFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconShapeLineFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconShapeLineFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconShapeLineFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconShapeLineFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconShapeLineFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconShapeLineFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconShapeLineFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconShapeLineFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
