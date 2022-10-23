import IconHdrOffSelectFill0Wght100Grad0Opsz48 from '../components/HdrOffSelectFill0Wght100Grad0Opsz48'
import IconHdrOffSelectFill0Wght200Grad0Opsz48 from '../components/HdrOffSelectFill0Wght200Grad0Opsz48'
import IconHdrOffSelectFill0Wght300Grad0Opsz48 from '../components/HdrOffSelectFill0Wght300Grad0Opsz48'
import IconHdrOffSelectFill0Wght400Grad0Opsz48 from '../components/HdrOffSelectFill0Wght400Grad0Opsz48'
import IconHdrOffSelectFill0Wght500Grad0Opsz48 from '../components/HdrOffSelectFill0Wght500Grad0Opsz48'
import IconHdrOffSelectFill0Wght600Grad0Opsz48 from '../components/HdrOffSelectFill0Wght600Grad0Opsz48'
import IconHdrOffSelectFill0Wght700Grad0Opsz48 from '../components/HdrOffSelectFill0Wght700Grad0Opsz48'
import IconHdrOffSelectFill1Wght100Grad0Opsz48 from '../components/HdrOffSelectFill1Wght100Grad0Opsz48'
import IconHdrOffSelectFill1Wght200Grad0Opsz48 from '../components/HdrOffSelectFill1Wght200Grad0Opsz48'
import IconHdrOffSelectFill1Wght300Grad0Opsz48 from '../components/HdrOffSelectFill1Wght300Grad0Opsz48'
import IconHdrOffSelectFill1Wght400Grad0Opsz48 from '../components/HdrOffSelectFill1Wght400Grad0Opsz48'
import IconHdrOffSelectFill1Wght500Grad0Opsz48 from '../components/HdrOffSelectFill1Wght500Grad0Opsz48'
import IconHdrOffSelectFill1Wght600Grad0Opsz48 from '../components/HdrOffSelectFill1Wght600Grad0Opsz48'
import IconHdrOffSelectFill1Wght700Grad0Opsz48 from '../components/HdrOffSelectFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHdrOffSelect = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHdrOffSelectFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHdrOffSelectFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHdrOffSelectFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHdrOffSelectFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHdrOffSelectFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHdrOffSelectFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHdrOffSelectFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHdrOffSelectFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHdrOffSelectFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHdrOffSelectFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHdrOffSelectFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHdrOffSelectFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHdrOffSelectFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHdrOffSelectFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
