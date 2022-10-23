import IconFilterHdrFill0Wght100Grad0Opsz48 from '../components/FilterHdrFill0Wght100Grad0Opsz48'
import IconFilterHdrFill0Wght200Grad0Opsz48 from '../components/FilterHdrFill0Wght200Grad0Opsz48'
import IconFilterHdrFill0Wght300Grad0Opsz48 from '../components/FilterHdrFill0Wght300Grad0Opsz48'
import IconFilterHdrFill0Wght400Grad0Opsz48 from '../components/FilterHdrFill0Wght400Grad0Opsz48'
import IconFilterHdrFill0Wght500Grad0Opsz48 from '../components/FilterHdrFill0Wght500Grad0Opsz48'
import IconFilterHdrFill0Wght600Grad0Opsz48 from '../components/FilterHdrFill0Wght600Grad0Opsz48'
import IconFilterHdrFill0Wght700Grad0Opsz48 from '../components/FilterHdrFill0Wght700Grad0Opsz48'
import IconFilterHdrFill1Wght100Grad0Opsz48 from '../components/FilterHdrFill1Wght100Grad0Opsz48'
import IconFilterHdrFill1Wght200Grad0Opsz48 from '../components/FilterHdrFill1Wght200Grad0Opsz48'
import IconFilterHdrFill1Wght300Grad0Opsz48 from '../components/FilterHdrFill1Wght300Grad0Opsz48'
import IconFilterHdrFill1Wght400Grad0Opsz48 from '../components/FilterHdrFill1Wght400Grad0Opsz48'
import IconFilterHdrFill1Wght500Grad0Opsz48 from '../components/FilterHdrFill1Wght500Grad0Opsz48'
import IconFilterHdrFill1Wght600Grad0Opsz48 from '../components/FilterHdrFill1Wght600Grad0Opsz48'
import IconFilterHdrFill1Wght700Grad0Opsz48 from '../components/FilterHdrFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFilterHdr = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFilterHdrFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFilterHdrFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFilterHdrFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFilterHdrFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFilterHdrFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFilterHdrFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFilterHdrFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFilterHdrFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFilterHdrFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFilterHdrFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFilterHdrFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFilterHdrFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFilterHdrFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFilterHdrFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
