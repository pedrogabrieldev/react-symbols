import IconHdrOffFill0Wght100Grad0Opsz48 from '../components/HdrOffFill0Wght100Grad0Opsz48'
import IconHdrOffFill0Wght200Grad0Opsz48 from '../components/HdrOffFill0Wght200Grad0Opsz48'
import IconHdrOffFill0Wght300Grad0Opsz48 from '../components/HdrOffFill0Wght300Grad0Opsz48'
import IconHdrOffFill0Wght400Grad0Opsz48 from '../components/HdrOffFill0Wght400Grad0Opsz48'
import IconHdrOffFill0Wght500Grad0Opsz48 from '../components/HdrOffFill0Wght500Grad0Opsz48'
import IconHdrOffFill0Wght600Grad0Opsz48 from '../components/HdrOffFill0Wght600Grad0Opsz48'
import IconHdrOffFill0Wght700Grad0Opsz48 from '../components/HdrOffFill0Wght700Grad0Opsz48'
import IconHdrOffFill1Wght100Grad0Opsz48 from '../components/HdrOffFill1Wght100Grad0Opsz48'
import IconHdrOffFill1Wght200Grad0Opsz48 from '../components/HdrOffFill1Wght200Grad0Opsz48'
import IconHdrOffFill1Wght300Grad0Opsz48 from '../components/HdrOffFill1Wght300Grad0Opsz48'
import IconHdrOffFill1Wght400Grad0Opsz48 from '../components/HdrOffFill1Wght400Grad0Opsz48'
import IconHdrOffFill1Wght500Grad0Opsz48 from '../components/HdrOffFill1Wght500Grad0Opsz48'
import IconHdrOffFill1Wght600Grad0Opsz48 from '../components/HdrOffFill1Wght600Grad0Opsz48'
import IconHdrOffFill1Wght700Grad0Opsz48 from '../components/HdrOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHdrOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHdrOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHdrOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHdrOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHdrOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHdrOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHdrOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHdrOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHdrOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHdrOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHdrOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHdrOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHdrOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHdrOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHdrOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
