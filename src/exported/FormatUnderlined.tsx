import IconFormatUnderlinedFill0Wght100Grad0Opsz48 from '../components/FormatUnderlinedFill0Wght100Grad0Opsz48'
import IconFormatUnderlinedFill0Wght200Grad0Opsz48 from '../components/FormatUnderlinedFill0Wght200Grad0Opsz48'
import IconFormatUnderlinedFill0Wght300Grad0Opsz48 from '../components/FormatUnderlinedFill0Wght300Grad0Opsz48'
import IconFormatUnderlinedFill0Wght400Grad0Opsz48 from '../components/FormatUnderlinedFill0Wght400Grad0Opsz48'
import IconFormatUnderlinedFill0Wght500Grad0Opsz48 from '../components/FormatUnderlinedFill0Wght500Grad0Opsz48'
import IconFormatUnderlinedFill0Wght600Grad0Opsz48 from '../components/FormatUnderlinedFill0Wght600Grad0Opsz48'
import IconFormatUnderlinedFill0Wght700Grad0Opsz48 from '../components/FormatUnderlinedFill0Wght700Grad0Opsz48'
import IconFormatUnderlinedFill1Wght100Grad0Opsz48 from '../components/FormatUnderlinedFill1Wght100Grad0Opsz48'
import IconFormatUnderlinedFill1Wght200Grad0Opsz48 from '../components/FormatUnderlinedFill1Wght200Grad0Opsz48'
import IconFormatUnderlinedFill1Wght300Grad0Opsz48 from '../components/FormatUnderlinedFill1Wght300Grad0Opsz48'
import IconFormatUnderlinedFill1Wght400Grad0Opsz48 from '../components/FormatUnderlinedFill1Wght400Grad0Opsz48'
import IconFormatUnderlinedFill1Wght500Grad0Opsz48 from '../components/FormatUnderlinedFill1Wght500Grad0Opsz48'
import IconFormatUnderlinedFill1Wght600Grad0Opsz48 from '../components/FormatUnderlinedFill1Wght600Grad0Opsz48'
import IconFormatUnderlinedFill1Wght700Grad0Opsz48 from '../components/FormatUnderlinedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFormatUnderlined = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFormatUnderlinedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFormatUnderlinedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFormatUnderlinedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFormatUnderlinedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFormatUnderlinedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFormatUnderlinedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFormatUnderlinedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFormatUnderlinedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFormatUnderlinedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFormatUnderlinedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFormatUnderlinedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFormatUnderlinedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFormatUnderlinedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFormatUnderlinedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
