import IconFormatOverlineFill0Wght100Grad0Opsz48 from '../components/FormatOverlineFill0Wght100Grad0Opsz48'
import IconFormatOverlineFill0Wght200Grad0Opsz48 from '../components/FormatOverlineFill0Wght200Grad0Opsz48'
import IconFormatOverlineFill0Wght300Grad0Opsz48 from '../components/FormatOverlineFill0Wght300Grad0Opsz48'
import IconFormatOverlineFill0Wght400Grad0Opsz48 from '../components/FormatOverlineFill0Wght400Grad0Opsz48'
import IconFormatOverlineFill0Wght500Grad0Opsz48 from '../components/FormatOverlineFill0Wght500Grad0Opsz48'
import IconFormatOverlineFill0Wght600Grad0Opsz48 from '../components/FormatOverlineFill0Wght600Grad0Opsz48'
import IconFormatOverlineFill0Wght700Grad0Opsz48 from '../components/FormatOverlineFill0Wght700Grad0Opsz48'
import IconFormatOverlineFill1Wght100Grad0Opsz48 from '../components/FormatOverlineFill1Wght100Grad0Opsz48'
import IconFormatOverlineFill1Wght200Grad0Opsz48 from '../components/FormatOverlineFill1Wght200Grad0Opsz48'
import IconFormatOverlineFill1Wght300Grad0Opsz48 from '../components/FormatOverlineFill1Wght300Grad0Opsz48'
import IconFormatOverlineFill1Wght400Grad0Opsz48 from '../components/FormatOverlineFill1Wght400Grad0Opsz48'
import IconFormatOverlineFill1Wght500Grad0Opsz48 from '../components/FormatOverlineFill1Wght500Grad0Opsz48'
import IconFormatOverlineFill1Wght600Grad0Opsz48 from '../components/FormatOverlineFill1Wght600Grad0Opsz48'
import IconFormatOverlineFill1Wght700Grad0Opsz48 from '../components/FormatOverlineFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFormatOverline = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFormatOverlineFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFormatOverlineFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFormatOverlineFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFormatOverlineFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFormatOverlineFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFormatOverlineFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFormatOverlineFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFormatOverlineFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFormatOverlineFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFormatOverlineFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFormatOverlineFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFormatOverlineFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFormatOverlineFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFormatOverlineFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
