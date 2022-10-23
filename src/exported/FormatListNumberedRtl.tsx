import IconFormatListNumberedRtlFill0Wght100Grad0Opsz48 from '../components/FormatListNumberedRtlFill0Wght100Grad0Opsz48'
import IconFormatListNumberedRtlFill0Wght200Grad0Opsz48 from '../components/FormatListNumberedRtlFill0Wght200Grad0Opsz48'
import IconFormatListNumberedRtlFill0Wght300Grad0Opsz48 from '../components/FormatListNumberedRtlFill0Wght300Grad0Opsz48'
import IconFormatListNumberedRtlFill0Wght400Grad0Opsz48 from '../components/FormatListNumberedRtlFill0Wght400Grad0Opsz48'
import IconFormatListNumberedRtlFill0Wght500Grad0Opsz48 from '../components/FormatListNumberedRtlFill0Wght500Grad0Opsz48'
import IconFormatListNumberedRtlFill0Wght600Grad0Opsz48 from '../components/FormatListNumberedRtlFill0Wght600Grad0Opsz48'
import IconFormatListNumberedRtlFill0Wght700Grad0Opsz48 from '../components/FormatListNumberedRtlFill0Wght700Grad0Opsz48'
import IconFormatListNumberedRtlFill1Wght100Grad0Opsz48 from '../components/FormatListNumberedRtlFill1Wght100Grad0Opsz48'
import IconFormatListNumberedRtlFill1Wght200Grad0Opsz48 from '../components/FormatListNumberedRtlFill1Wght200Grad0Opsz48'
import IconFormatListNumberedRtlFill1Wght300Grad0Opsz48 from '../components/FormatListNumberedRtlFill1Wght300Grad0Opsz48'
import IconFormatListNumberedRtlFill1Wght400Grad0Opsz48 from '../components/FormatListNumberedRtlFill1Wght400Grad0Opsz48'
import IconFormatListNumberedRtlFill1Wght500Grad0Opsz48 from '../components/FormatListNumberedRtlFill1Wght500Grad0Opsz48'
import IconFormatListNumberedRtlFill1Wght600Grad0Opsz48 from '../components/FormatListNumberedRtlFill1Wght600Grad0Opsz48'
import IconFormatListNumberedRtlFill1Wght700Grad0Opsz48 from '../components/FormatListNumberedRtlFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFormatListNumberedRtl = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFormatListNumberedRtlFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFormatListNumberedRtlFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFormatListNumberedRtlFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFormatListNumberedRtlFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFormatListNumberedRtlFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFormatListNumberedRtlFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFormatListNumberedRtlFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFormatListNumberedRtlFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFormatListNumberedRtlFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFormatListNumberedRtlFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFormatListNumberedRtlFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFormatListNumberedRtlFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFormatListNumberedRtlFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFormatListNumberedRtlFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
