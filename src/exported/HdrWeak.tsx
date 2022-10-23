import IconHdrWeakFill0Wght100Grad0Opsz48 from '../components/HdrWeakFill0Wght100Grad0Opsz48'
import IconHdrWeakFill0Wght200Grad0Opsz48 from '../components/HdrWeakFill0Wght200Grad0Opsz48'
import IconHdrWeakFill0Wght300Grad0Opsz48 from '../components/HdrWeakFill0Wght300Grad0Opsz48'
import IconHdrWeakFill0Wght400Grad0Opsz48 from '../components/HdrWeakFill0Wght400Grad0Opsz48'
import IconHdrWeakFill0Wght500Grad0Opsz48 from '../components/HdrWeakFill0Wght500Grad0Opsz48'
import IconHdrWeakFill0Wght600Grad0Opsz48 from '../components/HdrWeakFill0Wght600Grad0Opsz48'
import IconHdrWeakFill0Wght700Grad0Opsz48 from '../components/HdrWeakFill0Wght700Grad0Opsz48'
import IconHdrWeakFill1Wght100Grad0Opsz48 from '../components/HdrWeakFill1Wght100Grad0Opsz48'
import IconHdrWeakFill1Wght200Grad0Opsz48 from '../components/HdrWeakFill1Wght200Grad0Opsz48'
import IconHdrWeakFill1Wght300Grad0Opsz48 from '../components/HdrWeakFill1Wght300Grad0Opsz48'
import IconHdrWeakFill1Wght400Grad0Opsz48 from '../components/HdrWeakFill1Wght400Grad0Opsz48'
import IconHdrWeakFill1Wght500Grad0Opsz48 from '../components/HdrWeakFill1Wght500Grad0Opsz48'
import IconHdrWeakFill1Wght600Grad0Opsz48 from '../components/HdrWeakFill1Wght600Grad0Opsz48'
import IconHdrWeakFill1Wght700Grad0Opsz48 from '../components/HdrWeakFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHdrWeak = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHdrWeakFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHdrWeakFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHdrWeakFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHdrWeakFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHdrWeakFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHdrWeakFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHdrWeakFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHdrWeakFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHdrWeakFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHdrWeakFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHdrWeakFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHdrWeakFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHdrWeakFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHdrWeakFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
