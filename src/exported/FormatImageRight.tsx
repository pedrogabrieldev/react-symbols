import IconFormatImageRightFill0Wght100Grad0Opsz48 from '../components/FormatImageRightFill0Wght100Grad0Opsz48'
import IconFormatImageRightFill0Wght200Grad0Opsz48 from '../components/FormatImageRightFill0Wght200Grad0Opsz48'
import IconFormatImageRightFill0Wght300Grad0Opsz48 from '../components/FormatImageRightFill0Wght300Grad0Opsz48'
import IconFormatImageRightFill0Wght400Grad0Opsz48 from '../components/FormatImageRightFill0Wght400Grad0Opsz48'
import IconFormatImageRightFill0Wght500Grad0Opsz48 from '../components/FormatImageRightFill0Wght500Grad0Opsz48'
import IconFormatImageRightFill0Wght600Grad0Opsz48 from '../components/FormatImageRightFill0Wght600Grad0Opsz48'
import IconFormatImageRightFill0Wght700Grad0Opsz48 from '../components/FormatImageRightFill0Wght700Grad0Opsz48'
import IconFormatImageRightFill1Wght100Grad0Opsz48 from '../components/FormatImageRightFill1Wght100Grad0Opsz48'
import IconFormatImageRightFill1Wght200Grad0Opsz48 from '../components/FormatImageRightFill1Wght200Grad0Opsz48'
import IconFormatImageRightFill1Wght300Grad0Opsz48 from '../components/FormatImageRightFill1Wght300Grad0Opsz48'
import IconFormatImageRightFill1Wght400Grad0Opsz48 from '../components/FormatImageRightFill1Wght400Grad0Opsz48'
import IconFormatImageRightFill1Wght500Grad0Opsz48 from '../components/FormatImageRightFill1Wght500Grad0Opsz48'
import IconFormatImageRightFill1Wght600Grad0Opsz48 from '../components/FormatImageRightFill1Wght600Grad0Opsz48'
import IconFormatImageRightFill1Wght700Grad0Opsz48 from '../components/FormatImageRightFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFormatImageRight = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFormatImageRightFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFormatImageRightFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFormatImageRightFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFormatImageRightFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFormatImageRightFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFormatImageRightFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFormatImageRightFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFormatImageRightFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFormatImageRightFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFormatImageRightFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFormatImageRightFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFormatImageRightFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFormatImageRightFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFormatImageRightFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
