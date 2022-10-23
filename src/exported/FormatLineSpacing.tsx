import IconFormatLineSpacingFill0Wght100Grad0Opsz48 from '../components/FormatLineSpacingFill0Wght100Grad0Opsz48'
import IconFormatLineSpacingFill0Wght200Grad0Opsz48 from '../components/FormatLineSpacingFill0Wght200Grad0Opsz48'
import IconFormatLineSpacingFill0Wght300Grad0Opsz48 from '../components/FormatLineSpacingFill0Wght300Grad0Opsz48'
import IconFormatLineSpacingFill0Wght400Grad0Opsz48 from '../components/FormatLineSpacingFill0Wght400Grad0Opsz48'
import IconFormatLineSpacingFill0Wght500Grad0Opsz48 from '../components/FormatLineSpacingFill0Wght500Grad0Opsz48'
import IconFormatLineSpacingFill0Wght600Grad0Opsz48 from '../components/FormatLineSpacingFill0Wght600Grad0Opsz48'
import IconFormatLineSpacingFill0Wght700Grad0Opsz48 from '../components/FormatLineSpacingFill0Wght700Grad0Opsz48'
import IconFormatLineSpacingFill1Wght100Grad0Opsz48 from '../components/FormatLineSpacingFill1Wght100Grad0Opsz48'
import IconFormatLineSpacingFill1Wght200Grad0Opsz48 from '../components/FormatLineSpacingFill1Wght200Grad0Opsz48'
import IconFormatLineSpacingFill1Wght300Grad0Opsz48 from '../components/FormatLineSpacingFill1Wght300Grad0Opsz48'
import IconFormatLineSpacingFill1Wght400Grad0Opsz48 from '../components/FormatLineSpacingFill1Wght400Grad0Opsz48'
import IconFormatLineSpacingFill1Wght500Grad0Opsz48 from '../components/FormatLineSpacingFill1Wght500Grad0Opsz48'
import IconFormatLineSpacingFill1Wght600Grad0Opsz48 from '../components/FormatLineSpacingFill1Wght600Grad0Opsz48'
import IconFormatLineSpacingFill1Wght700Grad0Opsz48 from '../components/FormatLineSpacingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFormatLineSpacing = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFormatLineSpacingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFormatLineSpacingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFormatLineSpacingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFormatLineSpacingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFormatLineSpacingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFormatLineSpacingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFormatLineSpacingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFormatLineSpacingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFormatLineSpacingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFormatLineSpacingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFormatLineSpacingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFormatLineSpacingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFormatLineSpacingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFormatLineSpacingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
