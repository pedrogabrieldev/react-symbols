import IconFormatListNumberedFill0Wght100Grad0Opsz48 from '../components/FormatListNumberedFill0Wght100Grad0Opsz48'
import IconFormatListNumberedFill0Wght200Grad0Opsz48 from '../components/FormatListNumberedFill0Wght200Grad0Opsz48'
import IconFormatListNumberedFill0Wght300Grad0Opsz48 from '../components/FormatListNumberedFill0Wght300Grad0Opsz48'
import IconFormatListNumberedFill0Wght400Grad0Opsz48 from '../components/FormatListNumberedFill0Wght400Grad0Opsz48'
import IconFormatListNumberedFill0Wght500Grad0Opsz48 from '../components/FormatListNumberedFill0Wght500Grad0Opsz48'
import IconFormatListNumberedFill0Wght600Grad0Opsz48 from '../components/FormatListNumberedFill0Wght600Grad0Opsz48'
import IconFormatListNumberedFill0Wght700Grad0Opsz48 from '../components/FormatListNumberedFill0Wght700Grad0Opsz48'
import IconFormatListNumberedFill1Wght100Grad0Opsz48 from '../components/FormatListNumberedFill1Wght100Grad0Opsz48'
import IconFormatListNumberedFill1Wght200Grad0Opsz48 from '../components/FormatListNumberedFill1Wght200Grad0Opsz48'
import IconFormatListNumberedFill1Wght300Grad0Opsz48 from '../components/FormatListNumberedFill1Wght300Grad0Opsz48'
import IconFormatListNumberedFill1Wght400Grad0Opsz48 from '../components/FormatListNumberedFill1Wght400Grad0Opsz48'
import IconFormatListNumberedFill1Wght500Grad0Opsz48 from '../components/FormatListNumberedFill1Wght500Grad0Opsz48'
import IconFormatListNumberedFill1Wght600Grad0Opsz48 from '../components/FormatListNumberedFill1Wght600Grad0Opsz48'
import IconFormatListNumberedFill1Wght700Grad0Opsz48 from '../components/FormatListNumberedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFormatListNumbered = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFormatListNumberedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFormatListNumberedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFormatListNumberedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFormatListNumberedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFormatListNumberedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFormatListNumberedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFormatListNumberedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFormatListNumberedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFormatListNumberedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFormatListNumberedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFormatListNumberedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFormatListNumberedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFormatListNumberedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFormatListNumberedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
