import IconHdrAutoFill0Wght100Grad0Opsz48 from '../components/HdrAutoFill0Wght100Grad0Opsz48'
import IconHdrAutoFill0Wght200Grad0Opsz48 from '../components/HdrAutoFill0Wght200Grad0Opsz48'
import IconHdrAutoFill0Wght300Grad0Opsz48 from '../components/HdrAutoFill0Wght300Grad0Opsz48'
import IconHdrAutoFill0Wght400Grad0Opsz48 from '../components/HdrAutoFill0Wght400Grad0Opsz48'
import IconHdrAutoFill0Wght500Grad0Opsz48 from '../components/HdrAutoFill0Wght500Grad0Opsz48'
import IconHdrAutoFill0Wght600Grad0Opsz48 from '../components/HdrAutoFill0Wght600Grad0Opsz48'
import IconHdrAutoFill0Wght700Grad0Opsz48 from '../components/HdrAutoFill0Wght700Grad0Opsz48'
import IconHdrAutoFill1Wght100Grad0Opsz48 from '../components/HdrAutoFill1Wght100Grad0Opsz48'
import IconHdrAutoFill1Wght200Grad0Opsz48 from '../components/HdrAutoFill1Wght200Grad0Opsz48'
import IconHdrAutoFill1Wght300Grad0Opsz48 from '../components/HdrAutoFill1Wght300Grad0Opsz48'
import IconHdrAutoFill1Wght400Grad0Opsz48 from '../components/HdrAutoFill1Wght400Grad0Opsz48'
import IconHdrAutoFill1Wght500Grad0Opsz48 from '../components/HdrAutoFill1Wght500Grad0Opsz48'
import IconHdrAutoFill1Wght600Grad0Opsz48 from '../components/HdrAutoFill1Wght600Grad0Opsz48'
import IconHdrAutoFill1Wght700Grad0Opsz48 from '../components/HdrAutoFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHdrAuto = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHdrAutoFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHdrAutoFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHdrAutoFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHdrAutoFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHdrAutoFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHdrAutoFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHdrAutoFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHdrAutoFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHdrAutoFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHdrAutoFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHdrAutoFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHdrAutoFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHdrAutoFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHdrAutoFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
