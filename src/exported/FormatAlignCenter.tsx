import IconFormatAlignCenterFill0Wght100Grad0Opsz48 from '../components/FormatAlignCenterFill0Wght100Grad0Opsz48'
import IconFormatAlignCenterFill0Wght200Grad0Opsz48 from '../components/FormatAlignCenterFill0Wght200Grad0Opsz48'
import IconFormatAlignCenterFill0Wght300Grad0Opsz48 from '../components/FormatAlignCenterFill0Wght300Grad0Opsz48'
import IconFormatAlignCenterFill0Wght400Grad0Opsz48 from '../components/FormatAlignCenterFill0Wght400Grad0Opsz48'
import IconFormatAlignCenterFill0Wght500Grad0Opsz48 from '../components/FormatAlignCenterFill0Wght500Grad0Opsz48'
import IconFormatAlignCenterFill0Wght600Grad0Opsz48 from '../components/FormatAlignCenterFill0Wght600Grad0Opsz48'
import IconFormatAlignCenterFill0Wght700Grad0Opsz48 from '../components/FormatAlignCenterFill0Wght700Grad0Opsz48'
import IconFormatAlignCenterFill1Wght100Grad0Opsz48 from '../components/FormatAlignCenterFill1Wght100Grad0Opsz48'
import IconFormatAlignCenterFill1Wght200Grad0Opsz48 from '../components/FormatAlignCenterFill1Wght200Grad0Opsz48'
import IconFormatAlignCenterFill1Wght300Grad0Opsz48 from '../components/FormatAlignCenterFill1Wght300Grad0Opsz48'
import IconFormatAlignCenterFill1Wght400Grad0Opsz48 from '../components/FormatAlignCenterFill1Wght400Grad0Opsz48'
import IconFormatAlignCenterFill1Wght500Grad0Opsz48 from '../components/FormatAlignCenterFill1Wght500Grad0Opsz48'
import IconFormatAlignCenterFill1Wght600Grad0Opsz48 from '../components/FormatAlignCenterFill1Wght600Grad0Opsz48'
import IconFormatAlignCenterFill1Wght700Grad0Opsz48 from '../components/FormatAlignCenterFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFormatAlignCenter = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFormatAlignCenterFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFormatAlignCenterFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFormatAlignCenterFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFormatAlignCenterFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFormatAlignCenterFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFormatAlignCenterFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFormatAlignCenterFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFormatAlignCenterFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFormatAlignCenterFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFormatAlignCenterFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFormatAlignCenterFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFormatAlignCenterFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFormatAlignCenterFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFormatAlignCenterFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
