import IconFormatClearFill0Wght100Grad0Opsz48 from '../components/FormatClearFill0Wght100Grad0Opsz48'
import IconFormatClearFill0Wght200Grad0Opsz48 from '../components/FormatClearFill0Wght200Grad0Opsz48'
import IconFormatClearFill0Wght300Grad0Opsz48 from '../components/FormatClearFill0Wght300Grad0Opsz48'
import IconFormatClearFill0Wght400Grad0Opsz48 from '../components/FormatClearFill0Wght400Grad0Opsz48'
import IconFormatClearFill0Wght500Grad0Opsz48 from '../components/FormatClearFill0Wght500Grad0Opsz48'
import IconFormatClearFill0Wght600Grad0Opsz48 from '../components/FormatClearFill0Wght600Grad0Opsz48'
import IconFormatClearFill0Wght700Grad0Opsz48 from '../components/FormatClearFill0Wght700Grad0Opsz48'
import IconFormatClearFill1Wght100Grad0Opsz48 from '../components/FormatClearFill1Wght100Grad0Opsz48'
import IconFormatClearFill1Wght200Grad0Opsz48 from '../components/FormatClearFill1Wght200Grad0Opsz48'
import IconFormatClearFill1Wght300Grad0Opsz48 from '../components/FormatClearFill1Wght300Grad0Opsz48'
import IconFormatClearFill1Wght400Grad0Opsz48 from '../components/FormatClearFill1Wght400Grad0Opsz48'
import IconFormatClearFill1Wght500Grad0Opsz48 from '../components/FormatClearFill1Wght500Grad0Opsz48'
import IconFormatClearFill1Wght600Grad0Opsz48 from '../components/FormatClearFill1Wght600Grad0Opsz48'
import IconFormatClearFill1Wght700Grad0Opsz48 from '../components/FormatClearFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFormatClear = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFormatClearFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFormatClearFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFormatClearFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFormatClearFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFormatClearFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFormatClearFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFormatClearFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFormatClearFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFormatClearFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFormatClearFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFormatClearFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFormatClearFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFormatClearFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFormatClearFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
