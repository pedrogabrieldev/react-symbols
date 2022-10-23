import IconFormatColorTextFill0Wght100Grad0Opsz48 from '../components/FormatColorTextFill0Wght100Grad0Opsz48'
import IconFormatColorTextFill0Wght200Grad0Opsz48 from '../components/FormatColorTextFill0Wght200Grad0Opsz48'
import IconFormatColorTextFill0Wght300Grad0Opsz48 from '../components/FormatColorTextFill0Wght300Grad0Opsz48'
import IconFormatColorTextFill0Wght400Grad0Opsz48 from '../components/FormatColorTextFill0Wght400Grad0Opsz48'
import IconFormatColorTextFill0Wght500Grad0Opsz48 from '../components/FormatColorTextFill0Wght500Grad0Opsz48'
import IconFormatColorTextFill0Wght600Grad0Opsz48 from '../components/FormatColorTextFill0Wght600Grad0Opsz48'
import IconFormatColorTextFill0Wght700Grad0Opsz48 from '../components/FormatColorTextFill0Wght700Grad0Opsz48'
import IconFormatColorTextFill1Wght100Grad0Opsz48 from '../components/FormatColorTextFill1Wght100Grad0Opsz48'
import IconFormatColorTextFill1Wght200Grad0Opsz48 from '../components/FormatColorTextFill1Wght200Grad0Opsz48'
import IconFormatColorTextFill1Wght300Grad0Opsz48 from '../components/FormatColorTextFill1Wght300Grad0Opsz48'
import IconFormatColorTextFill1Wght400Grad0Opsz48 from '../components/FormatColorTextFill1Wght400Grad0Opsz48'
import IconFormatColorTextFill1Wght500Grad0Opsz48 from '../components/FormatColorTextFill1Wght500Grad0Opsz48'
import IconFormatColorTextFill1Wght600Grad0Opsz48 from '../components/FormatColorTextFill1Wght600Grad0Opsz48'
import IconFormatColorTextFill1Wght700Grad0Opsz48 from '../components/FormatColorTextFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFormatColorText = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFormatColorTextFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFormatColorTextFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFormatColorTextFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFormatColorTextFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFormatColorTextFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFormatColorTextFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFormatColorTextFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFormatColorTextFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFormatColorTextFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFormatColorTextFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFormatColorTextFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFormatColorTextFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFormatColorTextFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFormatColorTextFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
