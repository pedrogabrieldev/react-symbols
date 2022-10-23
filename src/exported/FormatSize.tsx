import IconFormatSizeFill0Wght100Grad0Opsz48 from '../components/FormatSizeFill0Wght100Grad0Opsz48'
import IconFormatSizeFill0Wght200Grad0Opsz48 from '../components/FormatSizeFill0Wght200Grad0Opsz48'
import IconFormatSizeFill0Wght300Grad0Opsz48 from '../components/FormatSizeFill0Wght300Grad0Opsz48'
import IconFormatSizeFill0Wght400Grad0Opsz48 from '../components/FormatSizeFill0Wght400Grad0Opsz48'
import IconFormatSizeFill0Wght500Grad0Opsz48 from '../components/FormatSizeFill0Wght500Grad0Opsz48'
import IconFormatSizeFill0Wght600Grad0Opsz48 from '../components/FormatSizeFill0Wght600Grad0Opsz48'
import IconFormatSizeFill0Wght700Grad0Opsz48 from '../components/FormatSizeFill0Wght700Grad0Opsz48'
import IconFormatSizeFill1Wght100Grad0Opsz48 from '../components/FormatSizeFill1Wght100Grad0Opsz48'
import IconFormatSizeFill1Wght200Grad0Opsz48 from '../components/FormatSizeFill1Wght200Grad0Opsz48'
import IconFormatSizeFill1Wght300Grad0Opsz48 from '../components/FormatSizeFill1Wght300Grad0Opsz48'
import IconFormatSizeFill1Wght400Grad0Opsz48 from '../components/FormatSizeFill1Wght400Grad0Opsz48'
import IconFormatSizeFill1Wght500Grad0Opsz48 from '../components/FormatSizeFill1Wght500Grad0Opsz48'
import IconFormatSizeFill1Wght600Grad0Opsz48 from '../components/FormatSizeFill1Wght600Grad0Opsz48'
import IconFormatSizeFill1Wght700Grad0Opsz48 from '../components/FormatSizeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFormatSize = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFormatSizeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFormatSizeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFormatSizeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFormatSizeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFormatSizeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFormatSizeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFormatSizeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFormatSizeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFormatSizeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFormatSizeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFormatSizeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFormatSizeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFormatSizeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFormatSizeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
