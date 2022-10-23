import IconFormatParagraphFill0Wght100Grad0Opsz48 from '../components/FormatParagraphFill0Wght100Grad0Opsz48'
import IconFormatParagraphFill0Wght200Grad0Opsz48 from '../components/FormatParagraphFill0Wght200Grad0Opsz48'
import IconFormatParagraphFill0Wght300Grad0Opsz48 from '../components/FormatParagraphFill0Wght300Grad0Opsz48'
import IconFormatParagraphFill0Wght400Grad0Opsz48 from '../components/FormatParagraphFill0Wght400Grad0Opsz48'
import IconFormatParagraphFill0Wght500Grad0Opsz48 from '../components/FormatParagraphFill0Wght500Grad0Opsz48'
import IconFormatParagraphFill0Wght600Grad0Opsz48 from '../components/FormatParagraphFill0Wght600Grad0Opsz48'
import IconFormatParagraphFill0Wght700Grad0Opsz48 from '../components/FormatParagraphFill0Wght700Grad0Opsz48'
import IconFormatParagraphFill1Wght100Grad0Opsz48 from '../components/FormatParagraphFill1Wght100Grad0Opsz48'
import IconFormatParagraphFill1Wght200Grad0Opsz48 from '../components/FormatParagraphFill1Wght200Grad0Opsz48'
import IconFormatParagraphFill1Wght300Grad0Opsz48 from '../components/FormatParagraphFill1Wght300Grad0Opsz48'
import IconFormatParagraphFill1Wght400Grad0Opsz48 from '../components/FormatParagraphFill1Wght400Grad0Opsz48'
import IconFormatParagraphFill1Wght500Grad0Opsz48 from '../components/FormatParagraphFill1Wght500Grad0Opsz48'
import IconFormatParagraphFill1Wght600Grad0Opsz48 from '../components/FormatParagraphFill1Wght600Grad0Opsz48'
import IconFormatParagraphFill1Wght700Grad0Opsz48 from '../components/FormatParagraphFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFormatParagraph = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFormatParagraphFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFormatParagraphFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFormatParagraphFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFormatParagraphFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFormatParagraphFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFormatParagraphFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFormatParagraphFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFormatParagraphFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFormatParagraphFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFormatParagraphFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFormatParagraphFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFormatParagraphFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFormatParagraphFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFormatParagraphFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
