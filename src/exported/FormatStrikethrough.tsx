import IconFormatStrikethroughFill0Wght100Grad0Opsz48 from '../components/FormatStrikethroughFill0Wght100Grad0Opsz48'
import IconFormatStrikethroughFill0Wght200Grad0Opsz48 from '../components/FormatStrikethroughFill0Wght200Grad0Opsz48'
import IconFormatStrikethroughFill0Wght300Grad0Opsz48 from '../components/FormatStrikethroughFill0Wght300Grad0Opsz48'
import IconFormatStrikethroughFill0Wght400Grad0Opsz48 from '../components/FormatStrikethroughFill0Wght400Grad0Opsz48'
import IconFormatStrikethroughFill0Wght500Grad0Opsz48 from '../components/FormatStrikethroughFill0Wght500Grad0Opsz48'
import IconFormatStrikethroughFill0Wght600Grad0Opsz48 from '../components/FormatStrikethroughFill0Wght600Grad0Opsz48'
import IconFormatStrikethroughFill0Wght700Grad0Opsz48 from '../components/FormatStrikethroughFill0Wght700Grad0Opsz48'
import IconFormatStrikethroughFill1Wght100Grad0Opsz48 from '../components/FormatStrikethroughFill1Wght100Grad0Opsz48'
import IconFormatStrikethroughFill1Wght200Grad0Opsz48 from '../components/FormatStrikethroughFill1Wght200Grad0Opsz48'
import IconFormatStrikethroughFill1Wght300Grad0Opsz48 from '../components/FormatStrikethroughFill1Wght300Grad0Opsz48'
import IconFormatStrikethroughFill1Wght400Grad0Opsz48 from '../components/FormatStrikethroughFill1Wght400Grad0Opsz48'
import IconFormatStrikethroughFill1Wght500Grad0Opsz48 from '../components/FormatStrikethroughFill1Wght500Grad0Opsz48'
import IconFormatStrikethroughFill1Wght600Grad0Opsz48 from '../components/FormatStrikethroughFill1Wght600Grad0Opsz48'
import IconFormatStrikethroughFill1Wght700Grad0Opsz48 from '../components/FormatStrikethroughFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFormatStrikethrough = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFormatStrikethroughFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFormatStrikethroughFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFormatStrikethroughFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFormatStrikethroughFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFormatStrikethroughFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFormatStrikethroughFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFormatStrikethroughFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFormatStrikethroughFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFormatStrikethroughFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFormatStrikethroughFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFormatStrikethroughFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFormatStrikethroughFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFormatStrikethroughFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFormatStrikethroughFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
