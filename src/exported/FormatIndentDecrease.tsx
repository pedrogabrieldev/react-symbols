import IconFormatIndentDecreaseFill0Wght100Grad0Opsz48 from '../components/FormatIndentDecreaseFill0Wght100Grad0Opsz48'
import IconFormatIndentDecreaseFill0Wght200Grad0Opsz48 from '../components/FormatIndentDecreaseFill0Wght200Grad0Opsz48'
import IconFormatIndentDecreaseFill0Wght300Grad0Opsz48 from '../components/FormatIndentDecreaseFill0Wght300Grad0Opsz48'
import IconFormatIndentDecreaseFill0Wght400Grad0Opsz48 from '../components/FormatIndentDecreaseFill0Wght400Grad0Opsz48'
import IconFormatIndentDecreaseFill0Wght500Grad0Opsz48 from '../components/FormatIndentDecreaseFill0Wght500Grad0Opsz48'
import IconFormatIndentDecreaseFill0Wght600Grad0Opsz48 from '../components/FormatIndentDecreaseFill0Wght600Grad0Opsz48'
import IconFormatIndentDecreaseFill0Wght700Grad0Opsz48 from '../components/FormatIndentDecreaseFill0Wght700Grad0Opsz48'
import IconFormatIndentDecreaseFill1Wght100Grad0Opsz48 from '../components/FormatIndentDecreaseFill1Wght100Grad0Opsz48'
import IconFormatIndentDecreaseFill1Wght200Grad0Opsz48 from '../components/FormatIndentDecreaseFill1Wght200Grad0Opsz48'
import IconFormatIndentDecreaseFill1Wght300Grad0Opsz48 from '../components/FormatIndentDecreaseFill1Wght300Grad0Opsz48'
import IconFormatIndentDecreaseFill1Wght400Grad0Opsz48 from '../components/FormatIndentDecreaseFill1Wght400Grad0Opsz48'
import IconFormatIndentDecreaseFill1Wght500Grad0Opsz48 from '../components/FormatIndentDecreaseFill1Wght500Grad0Opsz48'
import IconFormatIndentDecreaseFill1Wght600Grad0Opsz48 from '../components/FormatIndentDecreaseFill1Wght600Grad0Opsz48'
import IconFormatIndentDecreaseFill1Wght700Grad0Opsz48 from '../components/FormatIndentDecreaseFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFormatIndentDecrease = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFormatIndentDecreaseFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFormatIndentDecreaseFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFormatIndentDecreaseFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFormatIndentDecreaseFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFormatIndentDecreaseFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFormatIndentDecreaseFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFormatIndentDecreaseFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFormatIndentDecreaseFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFormatIndentDecreaseFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFormatIndentDecreaseFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFormatIndentDecreaseFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFormatIndentDecreaseFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFormatIndentDecreaseFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFormatIndentDecreaseFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
