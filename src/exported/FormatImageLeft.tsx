import IconFormatImageLeftFill0Wght100Grad0Opsz48 from '../components/FormatImageLeftFill0Wght100Grad0Opsz48'
import IconFormatImageLeftFill0Wght200Grad0Opsz48 from '../components/FormatImageLeftFill0Wght200Grad0Opsz48'
import IconFormatImageLeftFill0Wght300Grad0Opsz48 from '../components/FormatImageLeftFill0Wght300Grad0Opsz48'
import IconFormatImageLeftFill0Wght400Grad0Opsz48 from '../components/FormatImageLeftFill0Wght400Grad0Opsz48'
import IconFormatImageLeftFill0Wght500Grad0Opsz48 from '../components/FormatImageLeftFill0Wght500Grad0Opsz48'
import IconFormatImageLeftFill0Wght600Grad0Opsz48 from '../components/FormatImageLeftFill0Wght600Grad0Opsz48'
import IconFormatImageLeftFill0Wght700Grad0Opsz48 from '../components/FormatImageLeftFill0Wght700Grad0Opsz48'
import IconFormatImageLeftFill1Wght100Grad0Opsz48 from '../components/FormatImageLeftFill1Wght100Grad0Opsz48'
import IconFormatImageLeftFill1Wght200Grad0Opsz48 from '../components/FormatImageLeftFill1Wght200Grad0Opsz48'
import IconFormatImageLeftFill1Wght300Grad0Opsz48 from '../components/FormatImageLeftFill1Wght300Grad0Opsz48'
import IconFormatImageLeftFill1Wght400Grad0Opsz48 from '../components/FormatImageLeftFill1Wght400Grad0Opsz48'
import IconFormatImageLeftFill1Wght500Grad0Opsz48 from '../components/FormatImageLeftFill1Wght500Grad0Opsz48'
import IconFormatImageLeftFill1Wght600Grad0Opsz48 from '../components/FormatImageLeftFill1Wght600Grad0Opsz48'
import IconFormatImageLeftFill1Wght700Grad0Opsz48 from '../components/FormatImageLeftFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFormatImageLeft = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFormatImageLeftFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFormatImageLeftFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFormatImageLeftFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFormatImageLeftFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFormatImageLeftFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFormatImageLeftFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFormatImageLeftFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFormatImageLeftFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFormatImageLeftFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFormatImageLeftFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFormatImageLeftFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFormatImageLeftFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFormatImageLeftFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFormatImageLeftFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
