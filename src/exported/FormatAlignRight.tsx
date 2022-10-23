import IconFormatAlignRightFill0Wght100Grad0Opsz48 from '../components/FormatAlignRightFill0Wght100Grad0Opsz48'
import IconFormatAlignRightFill0Wght200Grad0Opsz48 from '../components/FormatAlignRightFill0Wght200Grad0Opsz48'
import IconFormatAlignRightFill0Wght300Grad0Opsz48 from '../components/FormatAlignRightFill0Wght300Grad0Opsz48'
import IconFormatAlignRightFill0Wght400Grad0Opsz48 from '../components/FormatAlignRightFill0Wght400Grad0Opsz48'
import IconFormatAlignRightFill0Wght500Grad0Opsz48 from '../components/FormatAlignRightFill0Wght500Grad0Opsz48'
import IconFormatAlignRightFill0Wght600Grad0Opsz48 from '../components/FormatAlignRightFill0Wght600Grad0Opsz48'
import IconFormatAlignRightFill0Wght700Grad0Opsz48 from '../components/FormatAlignRightFill0Wght700Grad0Opsz48'
import IconFormatAlignRightFill1Wght100Grad0Opsz48 from '../components/FormatAlignRightFill1Wght100Grad0Opsz48'
import IconFormatAlignRightFill1Wght200Grad0Opsz48 from '../components/FormatAlignRightFill1Wght200Grad0Opsz48'
import IconFormatAlignRightFill1Wght300Grad0Opsz48 from '../components/FormatAlignRightFill1Wght300Grad0Opsz48'
import IconFormatAlignRightFill1Wght400Grad0Opsz48 from '../components/FormatAlignRightFill1Wght400Grad0Opsz48'
import IconFormatAlignRightFill1Wght500Grad0Opsz48 from '../components/FormatAlignRightFill1Wght500Grad0Opsz48'
import IconFormatAlignRightFill1Wght600Grad0Opsz48 from '../components/FormatAlignRightFill1Wght600Grad0Opsz48'
import IconFormatAlignRightFill1Wght700Grad0Opsz48 from '../components/FormatAlignRightFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFormatAlignRight = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFormatAlignRightFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFormatAlignRightFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFormatAlignRightFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFormatAlignRightFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFormatAlignRightFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFormatAlignRightFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFormatAlignRightFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFormatAlignRightFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFormatAlignRightFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFormatAlignRightFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFormatAlignRightFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFormatAlignRightFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFormatAlignRightFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFormatAlignRightFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
