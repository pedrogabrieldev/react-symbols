import IconFormatItalicFill0Wght100Grad0Opsz48 from '../components/FormatItalicFill0Wght100Grad0Opsz48'
import IconFormatItalicFill0Wght200Grad0Opsz48 from '../components/FormatItalicFill0Wght200Grad0Opsz48'
import IconFormatItalicFill0Wght300Grad0Opsz48 from '../components/FormatItalicFill0Wght300Grad0Opsz48'
import IconFormatItalicFill0Wght400Grad0Opsz48 from '../components/FormatItalicFill0Wght400Grad0Opsz48'
import IconFormatItalicFill0Wght500Grad0Opsz48 from '../components/FormatItalicFill0Wght500Grad0Opsz48'
import IconFormatItalicFill0Wght600Grad0Opsz48 from '../components/FormatItalicFill0Wght600Grad0Opsz48'
import IconFormatItalicFill0Wght700Grad0Opsz48 from '../components/FormatItalicFill0Wght700Grad0Opsz48'
import IconFormatItalicFill1Wght100Grad0Opsz48 from '../components/FormatItalicFill1Wght100Grad0Opsz48'
import IconFormatItalicFill1Wght200Grad0Opsz48 from '../components/FormatItalicFill1Wght200Grad0Opsz48'
import IconFormatItalicFill1Wght300Grad0Opsz48 from '../components/FormatItalicFill1Wght300Grad0Opsz48'
import IconFormatItalicFill1Wght400Grad0Opsz48 from '../components/FormatItalicFill1Wght400Grad0Opsz48'
import IconFormatItalicFill1Wght500Grad0Opsz48 from '../components/FormatItalicFill1Wght500Grad0Opsz48'
import IconFormatItalicFill1Wght600Grad0Opsz48 from '../components/FormatItalicFill1Wght600Grad0Opsz48'
import IconFormatItalicFill1Wght700Grad0Opsz48 from '../components/FormatItalicFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFormatItalic = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFormatItalicFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFormatItalicFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFormatItalicFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFormatItalicFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFormatItalicFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFormatItalicFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFormatItalicFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFormatItalicFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFormatItalicFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFormatItalicFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFormatItalicFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFormatItalicFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFormatItalicFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFormatItalicFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
