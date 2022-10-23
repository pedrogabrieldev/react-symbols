import IconFormatAlignLeftFill0Wght100Grad0Opsz48 from '../components/FormatAlignLeftFill0Wght100Grad0Opsz48'
import IconFormatAlignLeftFill0Wght200Grad0Opsz48 from '../components/FormatAlignLeftFill0Wght200Grad0Opsz48'
import IconFormatAlignLeftFill0Wght300Grad0Opsz48 from '../components/FormatAlignLeftFill0Wght300Grad0Opsz48'
import IconFormatAlignLeftFill0Wght400Grad0Opsz48 from '../components/FormatAlignLeftFill0Wght400Grad0Opsz48'
import IconFormatAlignLeftFill0Wght500Grad0Opsz48 from '../components/FormatAlignLeftFill0Wght500Grad0Opsz48'
import IconFormatAlignLeftFill0Wght600Grad0Opsz48 from '../components/FormatAlignLeftFill0Wght600Grad0Opsz48'
import IconFormatAlignLeftFill0Wght700Grad0Opsz48 from '../components/FormatAlignLeftFill0Wght700Grad0Opsz48'
import IconFormatAlignLeftFill1Wght100Grad0Opsz48 from '../components/FormatAlignLeftFill1Wght100Grad0Opsz48'
import IconFormatAlignLeftFill1Wght200Grad0Opsz48 from '../components/FormatAlignLeftFill1Wght200Grad0Opsz48'
import IconFormatAlignLeftFill1Wght300Grad0Opsz48 from '../components/FormatAlignLeftFill1Wght300Grad0Opsz48'
import IconFormatAlignLeftFill1Wght400Grad0Opsz48 from '../components/FormatAlignLeftFill1Wght400Grad0Opsz48'
import IconFormatAlignLeftFill1Wght500Grad0Opsz48 from '../components/FormatAlignLeftFill1Wght500Grad0Opsz48'
import IconFormatAlignLeftFill1Wght600Grad0Opsz48 from '../components/FormatAlignLeftFill1Wght600Grad0Opsz48'
import IconFormatAlignLeftFill1Wght700Grad0Opsz48 from '../components/FormatAlignLeftFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFormatAlignLeft = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFormatAlignLeftFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFormatAlignLeftFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFormatAlignLeftFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFormatAlignLeftFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFormatAlignLeftFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFormatAlignLeftFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFormatAlignLeftFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFormatAlignLeftFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFormatAlignLeftFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFormatAlignLeftFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFormatAlignLeftFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFormatAlignLeftFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFormatAlignLeftFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFormatAlignLeftFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
