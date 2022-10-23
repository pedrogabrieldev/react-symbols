import IconFormatShapesFill0Wght100Grad0Opsz48 from '../components/FormatShapesFill0Wght100Grad0Opsz48'
import IconFormatShapesFill0Wght200Grad0Opsz48 from '../components/FormatShapesFill0Wght200Grad0Opsz48'
import IconFormatShapesFill0Wght300Grad0Opsz48 from '../components/FormatShapesFill0Wght300Grad0Opsz48'
import IconFormatShapesFill0Wght400Grad0Opsz48 from '../components/FormatShapesFill0Wght400Grad0Opsz48'
import IconFormatShapesFill0Wght500Grad0Opsz48 from '../components/FormatShapesFill0Wght500Grad0Opsz48'
import IconFormatShapesFill0Wght600Grad0Opsz48 from '../components/FormatShapesFill0Wght600Grad0Opsz48'
import IconFormatShapesFill0Wght700Grad0Opsz48 from '../components/FormatShapesFill0Wght700Grad0Opsz48'
import IconFormatShapesFill1Wght100Grad0Opsz48 from '../components/FormatShapesFill1Wght100Grad0Opsz48'
import IconFormatShapesFill1Wght200Grad0Opsz48 from '../components/FormatShapesFill1Wght200Grad0Opsz48'
import IconFormatShapesFill1Wght300Grad0Opsz48 from '../components/FormatShapesFill1Wght300Grad0Opsz48'
import IconFormatShapesFill1Wght400Grad0Opsz48 from '../components/FormatShapesFill1Wght400Grad0Opsz48'
import IconFormatShapesFill1Wght500Grad0Opsz48 from '../components/FormatShapesFill1Wght500Grad0Opsz48'
import IconFormatShapesFill1Wght600Grad0Opsz48 from '../components/FormatShapesFill1Wght600Grad0Opsz48'
import IconFormatShapesFill1Wght700Grad0Opsz48 from '../components/FormatShapesFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFormatShapes = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFormatShapesFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFormatShapesFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFormatShapesFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFormatShapesFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFormatShapesFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFormatShapesFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFormatShapesFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFormatShapesFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFormatShapesFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFormatShapesFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFormatShapesFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFormatShapesFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFormatShapesFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFormatShapesFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
