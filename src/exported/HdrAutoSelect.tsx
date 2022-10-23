import IconHdrAutoSelectFill0Wght100Grad0Opsz48 from '../components/HdrAutoSelectFill0Wght100Grad0Opsz48'
import IconHdrAutoSelectFill0Wght200Grad0Opsz48 from '../components/HdrAutoSelectFill0Wght200Grad0Opsz48'
import IconHdrAutoSelectFill0Wght300Grad0Opsz48 from '../components/HdrAutoSelectFill0Wght300Grad0Opsz48'
import IconHdrAutoSelectFill0Wght400Grad0Opsz48 from '../components/HdrAutoSelectFill0Wght400Grad0Opsz48'
import IconHdrAutoSelectFill0Wght500Grad0Opsz48 from '../components/HdrAutoSelectFill0Wght500Grad0Opsz48'
import IconHdrAutoSelectFill0Wght600Grad0Opsz48 from '../components/HdrAutoSelectFill0Wght600Grad0Opsz48'
import IconHdrAutoSelectFill0Wght700Grad0Opsz48 from '../components/HdrAutoSelectFill0Wght700Grad0Opsz48'
import IconHdrAutoSelectFill1Wght100Grad0Opsz48 from '../components/HdrAutoSelectFill1Wght100Grad0Opsz48'
import IconHdrAutoSelectFill1Wght200Grad0Opsz48 from '../components/HdrAutoSelectFill1Wght200Grad0Opsz48'
import IconHdrAutoSelectFill1Wght300Grad0Opsz48 from '../components/HdrAutoSelectFill1Wght300Grad0Opsz48'
import IconHdrAutoSelectFill1Wght400Grad0Opsz48 from '../components/HdrAutoSelectFill1Wght400Grad0Opsz48'
import IconHdrAutoSelectFill1Wght500Grad0Opsz48 from '../components/HdrAutoSelectFill1Wght500Grad0Opsz48'
import IconHdrAutoSelectFill1Wght600Grad0Opsz48 from '../components/HdrAutoSelectFill1Wght600Grad0Opsz48'
import IconHdrAutoSelectFill1Wght700Grad0Opsz48 from '../components/HdrAutoSelectFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHdrAutoSelect = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHdrAutoSelectFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHdrAutoSelectFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHdrAutoSelectFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHdrAutoSelectFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHdrAutoSelectFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHdrAutoSelectFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHdrAutoSelectFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHdrAutoSelectFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHdrAutoSelectFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHdrAutoSelectFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHdrAutoSelectFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHdrAutoSelectFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHdrAutoSelectFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHdrAutoSelectFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
