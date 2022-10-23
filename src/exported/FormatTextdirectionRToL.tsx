import IconFormatTextdirectionRToLFill0Wght100Grad0Opsz48 from '../components/FormatTextdirectionRToLFill0Wght100Grad0Opsz48'
import IconFormatTextdirectionRToLFill0Wght200Grad0Opsz48 from '../components/FormatTextdirectionRToLFill0Wght200Grad0Opsz48'
import IconFormatTextdirectionRToLFill0Wght300Grad0Opsz48 from '../components/FormatTextdirectionRToLFill0Wght300Grad0Opsz48'
import IconFormatTextdirectionRToLFill0Wght400Grad0Opsz48 from '../components/FormatTextdirectionRToLFill0Wght400Grad0Opsz48'
import IconFormatTextdirectionRToLFill0Wght500Grad0Opsz48 from '../components/FormatTextdirectionRToLFill0Wght500Grad0Opsz48'
import IconFormatTextdirectionRToLFill0Wght600Grad0Opsz48 from '../components/FormatTextdirectionRToLFill0Wght600Grad0Opsz48'
import IconFormatTextdirectionRToLFill0Wght700Grad0Opsz48 from '../components/FormatTextdirectionRToLFill0Wght700Grad0Opsz48'
import IconFormatTextdirectionRToLFill1Wght100Grad0Opsz48 from '../components/FormatTextdirectionRToLFill1Wght100Grad0Opsz48'
import IconFormatTextdirectionRToLFill1Wght200Grad0Opsz48 from '../components/FormatTextdirectionRToLFill1Wght200Grad0Opsz48'
import IconFormatTextdirectionRToLFill1Wght300Grad0Opsz48 from '../components/FormatTextdirectionRToLFill1Wght300Grad0Opsz48'
import IconFormatTextdirectionRToLFill1Wght400Grad0Opsz48 from '../components/FormatTextdirectionRToLFill1Wght400Grad0Opsz48'
import IconFormatTextdirectionRToLFill1Wght500Grad0Opsz48 from '../components/FormatTextdirectionRToLFill1Wght500Grad0Opsz48'
import IconFormatTextdirectionRToLFill1Wght600Grad0Opsz48 from '../components/FormatTextdirectionRToLFill1Wght600Grad0Opsz48'
import IconFormatTextdirectionRToLFill1Wght700Grad0Opsz48 from '../components/FormatTextdirectionRToLFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFormatTextdirectionRToL = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFormatTextdirectionRToLFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFormatTextdirectionRToLFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFormatTextdirectionRToLFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFormatTextdirectionRToLFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFormatTextdirectionRToLFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFormatTextdirectionRToLFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFormatTextdirectionRToLFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFormatTextdirectionRToLFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFormatTextdirectionRToLFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFormatTextdirectionRToLFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFormatTextdirectionRToLFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFormatTextdirectionRToLFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFormatTextdirectionRToLFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFormatTextdirectionRToLFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
