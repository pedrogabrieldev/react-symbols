import IconFormatBoldFill0Wght100Grad0Opsz48 from '../components/FormatBoldFill0Wght100Grad0Opsz48'
import IconFormatBoldFill0Wght200Grad0Opsz48 from '../components/FormatBoldFill0Wght200Grad0Opsz48'
import IconFormatBoldFill0Wght300Grad0Opsz48 from '../components/FormatBoldFill0Wght300Grad0Opsz48'
import IconFormatBoldFill0Wght400Grad0Opsz48 from '../components/FormatBoldFill0Wght400Grad0Opsz48'
import IconFormatBoldFill0Wght500Grad0Opsz48 from '../components/FormatBoldFill0Wght500Grad0Opsz48'
import IconFormatBoldFill0Wght600Grad0Opsz48 from '../components/FormatBoldFill0Wght600Grad0Opsz48'
import IconFormatBoldFill0Wght700Grad0Opsz48 from '../components/FormatBoldFill0Wght700Grad0Opsz48'
import IconFormatBoldFill1Wght100Grad0Opsz48 from '../components/FormatBoldFill1Wght100Grad0Opsz48'
import IconFormatBoldFill1Wght200Grad0Opsz48 from '../components/FormatBoldFill1Wght200Grad0Opsz48'
import IconFormatBoldFill1Wght300Grad0Opsz48 from '../components/FormatBoldFill1Wght300Grad0Opsz48'
import IconFormatBoldFill1Wght400Grad0Opsz48 from '../components/FormatBoldFill1Wght400Grad0Opsz48'
import IconFormatBoldFill1Wght500Grad0Opsz48 from '../components/FormatBoldFill1Wght500Grad0Opsz48'
import IconFormatBoldFill1Wght600Grad0Opsz48 from '../components/FormatBoldFill1Wght600Grad0Opsz48'
import IconFormatBoldFill1Wght700Grad0Opsz48 from '../components/FormatBoldFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFormatBold = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFormatBoldFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFormatBoldFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFormatBoldFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFormatBoldFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFormatBoldFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFormatBoldFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFormatBoldFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFormatBoldFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFormatBoldFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFormatBoldFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFormatBoldFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFormatBoldFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFormatBoldFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFormatBoldFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
