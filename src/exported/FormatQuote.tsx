import IconFormatQuoteFill0Wght100Grad0Opsz48 from '../components/FormatQuoteFill0Wght100Grad0Opsz48'
import IconFormatQuoteFill0Wght200Grad0Opsz48 from '../components/FormatQuoteFill0Wght200Grad0Opsz48'
import IconFormatQuoteFill0Wght300Grad0Opsz48 from '../components/FormatQuoteFill0Wght300Grad0Opsz48'
import IconFormatQuoteFill0Wght400Grad0Opsz48 from '../components/FormatQuoteFill0Wght400Grad0Opsz48'
import IconFormatQuoteFill0Wght500Grad0Opsz48 from '../components/FormatQuoteFill0Wght500Grad0Opsz48'
import IconFormatQuoteFill0Wght600Grad0Opsz48 from '../components/FormatQuoteFill0Wght600Grad0Opsz48'
import IconFormatQuoteFill0Wght700Grad0Opsz48 from '../components/FormatQuoteFill0Wght700Grad0Opsz48'
import IconFormatQuoteFill1Wght100Grad0Opsz48 from '../components/FormatQuoteFill1Wght100Grad0Opsz48'
import IconFormatQuoteFill1Wght200Grad0Opsz48 from '../components/FormatQuoteFill1Wght200Grad0Opsz48'
import IconFormatQuoteFill1Wght300Grad0Opsz48 from '../components/FormatQuoteFill1Wght300Grad0Opsz48'
import IconFormatQuoteFill1Wght400Grad0Opsz48 from '../components/FormatQuoteFill1Wght400Grad0Opsz48'
import IconFormatQuoteFill1Wght500Grad0Opsz48 from '../components/FormatQuoteFill1Wght500Grad0Opsz48'
import IconFormatQuoteFill1Wght600Grad0Opsz48 from '../components/FormatQuoteFill1Wght600Grad0Opsz48'
import IconFormatQuoteFill1Wght700Grad0Opsz48 from '../components/FormatQuoteFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFormatQuote = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFormatQuoteFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFormatQuoteFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFormatQuoteFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFormatQuoteFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFormatQuoteFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFormatQuoteFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFormatQuoteFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFormatQuoteFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFormatQuoteFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFormatQuoteFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFormatQuoteFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFormatQuoteFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFormatQuoteFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFormatQuoteFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
