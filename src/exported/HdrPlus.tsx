import IconHdrPlusFill0Wght100Grad0Opsz48 from '../components/HdrPlusFill0Wght100Grad0Opsz48'
import IconHdrPlusFill0Wght200Grad0Opsz48 from '../components/HdrPlusFill0Wght200Grad0Opsz48'
import IconHdrPlusFill0Wght300Grad0Opsz48 from '../components/HdrPlusFill0Wght300Grad0Opsz48'
import IconHdrPlusFill0Wght400Grad0Opsz48 from '../components/HdrPlusFill0Wght400Grad0Opsz48'
import IconHdrPlusFill0Wght500Grad0Opsz48 from '../components/HdrPlusFill0Wght500Grad0Opsz48'
import IconHdrPlusFill0Wght600Grad0Opsz48 from '../components/HdrPlusFill0Wght600Grad0Opsz48'
import IconHdrPlusFill0Wght700Grad0Opsz48 from '../components/HdrPlusFill0Wght700Grad0Opsz48'
import IconHdrPlusFill1Wght100Grad0Opsz48 from '../components/HdrPlusFill1Wght100Grad0Opsz48'
import IconHdrPlusFill1Wght200Grad0Opsz48 from '../components/HdrPlusFill1Wght200Grad0Opsz48'
import IconHdrPlusFill1Wght300Grad0Opsz48 from '../components/HdrPlusFill1Wght300Grad0Opsz48'
import IconHdrPlusFill1Wght400Grad0Opsz48 from '../components/HdrPlusFill1Wght400Grad0Opsz48'
import IconHdrPlusFill1Wght500Grad0Opsz48 from '../components/HdrPlusFill1Wght500Grad0Opsz48'
import IconHdrPlusFill1Wght600Grad0Opsz48 from '../components/HdrPlusFill1Wght600Grad0Opsz48'
import IconHdrPlusFill1Wght700Grad0Opsz48 from '../components/HdrPlusFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHdrPlus = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHdrPlusFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHdrPlusFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHdrPlusFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHdrPlusFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHdrPlusFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHdrPlusFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHdrPlusFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHdrPlusFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHdrPlusFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHdrPlusFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHdrPlusFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHdrPlusFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHdrPlusFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHdrPlusFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
