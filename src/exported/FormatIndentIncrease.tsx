import IconFormatIndentIncreaseFill0Wght100Grad0Opsz48 from '../components/FormatIndentIncreaseFill0Wght100Grad0Opsz48'
import IconFormatIndentIncreaseFill0Wght200Grad0Opsz48 from '../components/FormatIndentIncreaseFill0Wght200Grad0Opsz48'
import IconFormatIndentIncreaseFill0Wght300Grad0Opsz48 from '../components/FormatIndentIncreaseFill0Wght300Grad0Opsz48'
import IconFormatIndentIncreaseFill0Wght400Grad0Opsz48 from '../components/FormatIndentIncreaseFill0Wght400Grad0Opsz48'
import IconFormatIndentIncreaseFill0Wght500Grad0Opsz48 from '../components/FormatIndentIncreaseFill0Wght500Grad0Opsz48'
import IconFormatIndentIncreaseFill0Wght600Grad0Opsz48 from '../components/FormatIndentIncreaseFill0Wght600Grad0Opsz48'
import IconFormatIndentIncreaseFill0Wght700Grad0Opsz48 from '../components/FormatIndentIncreaseFill0Wght700Grad0Opsz48'
import IconFormatIndentIncreaseFill1Wght100Grad0Opsz48 from '../components/FormatIndentIncreaseFill1Wght100Grad0Opsz48'
import IconFormatIndentIncreaseFill1Wght200Grad0Opsz48 from '../components/FormatIndentIncreaseFill1Wght200Grad0Opsz48'
import IconFormatIndentIncreaseFill1Wght300Grad0Opsz48 from '../components/FormatIndentIncreaseFill1Wght300Grad0Opsz48'
import IconFormatIndentIncreaseFill1Wght400Grad0Opsz48 from '../components/FormatIndentIncreaseFill1Wght400Grad0Opsz48'
import IconFormatIndentIncreaseFill1Wght500Grad0Opsz48 from '../components/FormatIndentIncreaseFill1Wght500Grad0Opsz48'
import IconFormatIndentIncreaseFill1Wght600Grad0Opsz48 from '../components/FormatIndentIncreaseFill1Wght600Grad0Opsz48'
import IconFormatIndentIncreaseFill1Wght700Grad0Opsz48 from '../components/FormatIndentIncreaseFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFormatIndentIncrease = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFormatIndentIncreaseFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFormatIndentIncreaseFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFormatIndentIncreaseFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFormatIndentIncreaseFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFormatIndentIncreaseFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFormatIndentIncreaseFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFormatIndentIncreaseFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFormatIndentIncreaseFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFormatIndentIncreaseFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFormatIndentIncreaseFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFormatIndentIncreaseFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFormatIndentIncreaseFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFormatIndentIncreaseFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFormatIndentIncreaseFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
