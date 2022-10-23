import IconFormatUnderlinedSquiggleFill0Wght100Grad0Opsz48 from '../components/FormatUnderlinedSquiggleFill0Wght100Grad0Opsz48'
import IconFormatUnderlinedSquiggleFill0Wght200Grad0Opsz48 from '../components/FormatUnderlinedSquiggleFill0Wght200Grad0Opsz48'
import IconFormatUnderlinedSquiggleFill0Wght300Grad0Opsz48 from '../components/FormatUnderlinedSquiggleFill0Wght300Grad0Opsz48'
import IconFormatUnderlinedSquiggleFill0Wght400Grad0Opsz48 from '../components/FormatUnderlinedSquiggleFill0Wght400Grad0Opsz48'
import IconFormatUnderlinedSquiggleFill0Wght500Grad0Opsz48 from '../components/FormatUnderlinedSquiggleFill0Wght500Grad0Opsz48'
import IconFormatUnderlinedSquiggleFill0Wght600Grad0Opsz48 from '../components/FormatUnderlinedSquiggleFill0Wght600Grad0Opsz48'
import IconFormatUnderlinedSquiggleFill0Wght700Grad0Opsz48 from '../components/FormatUnderlinedSquiggleFill0Wght700Grad0Opsz48'
import IconFormatUnderlinedSquiggleFill1Wght100Grad0Opsz48 from '../components/FormatUnderlinedSquiggleFill1Wght100Grad0Opsz48'
import IconFormatUnderlinedSquiggleFill1Wght200Grad0Opsz48 from '../components/FormatUnderlinedSquiggleFill1Wght200Grad0Opsz48'
import IconFormatUnderlinedSquiggleFill1Wght300Grad0Opsz48 from '../components/FormatUnderlinedSquiggleFill1Wght300Grad0Opsz48'
import IconFormatUnderlinedSquiggleFill1Wght400Grad0Opsz48 from '../components/FormatUnderlinedSquiggleFill1Wght400Grad0Opsz48'
import IconFormatUnderlinedSquiggleFill1Wght500Grad0Opsz48 from '../components/FormatUnderlinedSquiggleFill1Wght500Grad0Opsz48'
import IconFormatUnderlinedSquiggleFill1Wght600Grad0Opsz48 from '../components/FormatUnderlinedSquiggleFill1Wght600Grad0Opsz48'
import IconFormatUnderlinedSquiggleFill1Wght700Grad0Opsz48 from '../components/FormatUnderlinedSquiggleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFormatUnderlinedSquiggle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFormatUnderlinedSquiggleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFormatUnderlinedSquiggleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFormatUnderlinedSquiggleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFormatUnderlinedSquiggleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFormatUnderlinedSquiggleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFormatUnderlinedSquiggleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFormatUnderlinedSquiggleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFormatUnderlinedSquiggleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFormatUnderlinedSquiggleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFormatUnderlinedSquiggleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFormatUnderlinedSquiggleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFormatUnderlinedSquiggleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFormatUnderlinedSquiggleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFormatUnderlinedSquiggleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
