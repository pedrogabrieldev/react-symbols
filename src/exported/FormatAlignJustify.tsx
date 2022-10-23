import IconFormatAlignJustifyFill0Wght100Grad0Opsz48 from '../components/FormatAlignJustifyFill0Wght100Grad0Opsz48'
import IconFormatAlignJustifyFill0Wght200Grad0Opsz48 from '../components/FormatAlignJustifyFill0Wght200Grad0Opsz48'
import IconFormatAlignJustifyFill0Wght300Grad0Opsz48 from '../components/FormatAlignJustifyFill0Wght300Grad0Opsz48'
import IconFormatAlignJustifyFill0Wght400Grad0Opsz48 from '../components/FormatAlignJustifyFill0Wght400Grad0Opsz48'
import IconFormatAlignJustifyFill0Wght500Grad0Opsz48 from '../components/FormatAlignJustifyFill0Wght500Grad0Opsz48'
import IconFormatAlignJustifyFill0Wght600Grad0Opsz48 from '../components/FormatAlignJustifyFill0Wght600Grad0Opsz48'
import IconFormatAlignJustifyFill0Wght700Grad0Opsz48 from '../components/FormatAlignJustifyFill0Wght700Grad0Opsz48'
import IconFormatAlignJustifyFill1Wght100Grad0Opsz48 from '../components/FormatAlignJustifyFill1Wght100Grad0Opsz48'
import IconFormatAlignJustifyFill1Wght200Grad0Opsz48 from '../components/FormatAlignJustifyFill1Wght200Grad0Opsz48'
import IconFormatAlignJustifyFill1Wght300Grad0Opsz48 from '../components/FormatAlignJustifyFill1Wght300Grad0Opsz48'
import IconFormatAlignJustifyFill1Wght400Grad0Opsz48 from '../components/FormatAlignJustifyFill1Wght400Grad0Opsz48'
import IconFormatAlignJustifyFill1Wght500Grad0Opsz48 from '../components/FormatAlignJustifyFill1Wght500Grad0Opsz48'
import IconFormatAlignJustifyFill1Wght600Grad0Opsz48 from '../components/FormatAlignJustifyFill1Wght600Grad0Opsz48'
import IconFormatAlignJustifyFill1Wght700Grad0Opsz48 from '../components/FormatAlignJustifyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFormatAlignJustify = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFormatAlignJustifyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFormatAlignJustifyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFormatAlignJustifyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFormatAlignJustifyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFormatAlignJustifyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFormatAlignJustifyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFormatAlignJustifyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFormatAlignJustifyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFormatAlignJustifyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFormatAlignJustifyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFormatAlignJustifyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFormatAlignJustifyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFormatAlignJustifyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFormatAlignJustifyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
