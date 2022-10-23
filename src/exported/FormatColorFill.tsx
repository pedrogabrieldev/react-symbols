import IconFormatColorFillFill0Wght100Grad0Opsz48 from '../components/FormatColorFillFill0Wght100Grad0Opsz48'
import IconFormatColorFillFill0Wght200Grad0Opsz48 from '../components/FormatColorFillFill0Wght200Grad0Opsz48'
import IconFormatColorFillFill0Wght300Grad0Opsz48 from '../components/FormatColorFillFill0Wght300Grad0Opsz48'
import IconFormatColorFillFill0Wght400Grad0Opsz48 from '../components/FormatColorFillFill0Wght400Grad0Opsz48'
import IconFormatColorFillFill0Wght500Grad0Opsz48 from '../components/FormatColorFillFill0Wght500Grad0Opsz48'
import IconFormatColorFillFill0Wght600Grad0Opsz48 from '../components/FormatColorFillFill0Wght600Grad0Opsz48'
import IconFormatColorFillFill0Wght700Grad0Opsz48 from '../components/FormatColorFillFill0Wght700Grad0Opsz48'
import IconFormatColorFillFill1Wght100Grad0Opsz48 from '../components/FormatColorFillFill1Wght100Grad0Opsz48'
import IconFormatColorFillFill1Wght200Grad0Opsz48 from '../components/FormatColorFillFill1Wght200Grad0Opsz48'
import IconFormatColorFillFill1Wght300Grad0Opsz48 from '../components/FormatColorFillFill1Wght300Grad0Opsz48'
import IconFormatColorFillFill1Wght400Grad0Opsz48 from '../components/FormatColorFillFill1Wght400Grad0Opsz48'
import IconFormatColorFillFill1Wght500Grad0Opsz48 from '../components/FormatColorFillFill1Wght500Grad0Opsz48'
import IconFormatColorFillFill1Wght600Grad0Opsz48 from '../components/FormatColorFillFill1Wght600Grad0Opsz48'
import IconFormatColorFillFill1Wght700Grad0Opsz48 from '../components/FormatColorFillFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFormatColorFill = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFormatColorFillFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFormatColorFillFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFormatColorFillFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFormatColorFillFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFormatColorFillFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFormatColorFillFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFormatColorFillFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFormatColorFillFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFormatColorFillFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFormatColorFillFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFormatColorFillFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFormatColorFillFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFormatColorFillFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFormatColorFillFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
