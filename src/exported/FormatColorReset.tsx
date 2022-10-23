import IconFormatColorResetFill0Wght100Grad0Opsz48 from '../components/FormatColorResetFill0Wght100Grad0Opsz48'
import IconFormatColorResetFill0Wght200Grad0Opsz48 from '../components/FormatColorResetFill0Wght200Grad0Opsz48'
import IconFormatColorResetFill0Wght300Grad0Opsz48 from '../components/FormatColorResetFill0Wght300Grad0Opsz48'
import IconFormatColorResetFill0Wght400Grad0Opsz48 from '../components/FormatColorResetFill0Wght400Grad0Opsz48'
import IconFormatColorResetFill0Wght500Grad0Opsz48 from '../components/FormatColorResetFill0Wght500Grad0Opsz48'
import IconFormatColorResetFill0Wght600Grad0Opsz48 from '../components/FormatColorResetFill0Wght600Grad0Opsz48'
import IconFormatColorResetFill0Wght700Grad0Opsz48 from '../components/FormatColorResetFill0Wght700Grad0Opsz48'
import IconFormatColorResetFill1Wght100Grad0Opsz48 from '../components/FormatColorResetFill1Wght100Grad0Opsz48'
import IconFormatColorResetFill1Wght200Grad0Opsz48 from '../components/FormatColorResetFill1Wght200Grad0Opsz48'
import IconFormatColorResetFill1Wght300Grad0Opsz48 from '../components/FormatColorResetFill1Wght300Grad0Opsz48'
import IconFormatColorResetFill1Wght400Grad0Opsz48 from '../components/FormatColorResetFill1Wght400Grad0Opsz48'
import IconFormatColorResetFill1Wght500Grad0Opsz48 from '../components/FormatColorResetFill1Wght500Grad0Opsz48'
import IconFormatColorResetFill1Wght600Grad0Opsz48 from '../components/FormatColorResetFill1Wght600Grad0Opsz48'
import IconFormatColorResetFill1Wght700Grad0Opsz48 from '../components/FormatColorResetFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFormatColorReset = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFormatColorResetFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFormatColorResetFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFormatColorResetFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFormatColorResetFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFormatColorResetFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFormatColorResetFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFormatColorResetFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFormatColorResetFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFormatColorResetFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFormatColorResetFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFormatColorResetFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFormatColorResetFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFormatColorResetFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFormatColorResetFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
