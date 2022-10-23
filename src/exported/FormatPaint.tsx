import IconFormatPaintFill0Wght100Grad0Opsz48 from '../components/FormatPaintFill0Wght100Grad0Opsz48'
import IconFormatPaintFill0Wght200Grad0Opsz48 from '../components/FormatPaintFill0Wght200Grad0Opsz48'
import IconFormatPaintFill0Wght300Grad0Opsz48 from '../components/FormatPaintFill0Wght300Grad0Opsz48'
import IconFormatPaintFill0Wght400Grad0Opsz48 from '../components/FormatPaintFill0Wght400Grad0Opsz48'
import IconFormatPaintFill0Wght500Grad0Opsz48 from '../components/FormatPaintFill0Wght500Grad0Opsz48'
import IconFormatPaintFill0Wght600Grad0Opsz48 from '../components/FormatPaintFill0Wght600Grad0Opsz48'
import IconFormatPaintFill0Wght700Grad0Opsz48 from '../components/FormatPaintFill0Wght700Grad0Opsz48'
import IconFormatPaintFill1Wght100Grad0Opsz48 from '../components/FormatPaintFill1Wght100Grad0Opsz48'
import IconFormatPaintFill1Wght200Grad0Opsz48 from '../components/FormatPaintFill1Wght200Grad0Opsz48'
import IconFormatPaintFill1Wght300Grad0Opsz48 from '../components/FormatPaintFill1Wght300Grad0Opsz48'
import IconFormatPaintFill1Wght400Grad0Opsz48 from '../components/FormatPaintFill1Wght400Grad0Opsz48'
import IconFormatPaintFill1Wght500Grad0Opsz48 from '../components/FormatPaintFill1Wght500Grad0Opsz48'
import IconFormatPaintFill1Wght600Grad0Opsz48 from '../components/FormatPaintFill1Wght600Grad0Opsz48'
import IconFormatPaintFill1Wght700Grad0Opsz48 from '../components/FormatPaintFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFormatPaint = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFormatPaintFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFormatPaintFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFormatPaintFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFormatPaintFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFormatPaintFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFormatPaintFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFormatPaintFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFormatPaintFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFormatPaintFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFormatPaintFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFormatPaintFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFormatPaintFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFormatPaintFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFormatPaintFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
