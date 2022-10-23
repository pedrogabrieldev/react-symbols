import IconCompressFill0Wght100Grad0Opsz48 from '../components/CompressFill0Wght100Grad0Opsz48'
import IconCompressFill0Wght200Grad0Opsz48 from '../components/CompressFill0Wght200Grad0Opsz48'
import IconCompressFill0Wght300Grad0Opsz48 from '../components/CompressFill0Wght300Grad0Opsz48'
import IconCompressFill0Wght400Grad0Opsz48 from '../components/CompressFill0Wght400Grad0Opsz48'
import IconCompressFill0Wght500Grad0Opsz48 from '../components/CompressFill0Wght500Grad0Opsz48'
import IconCompressFill0Wght600Grad0Opsz48 from '../components/CompressFill0Wght600Grad0Opsz48'
import IconCompressFill0Wght700Grad0Opsz48 from '../components/CompressFill0Wght700Grad0Opsz48'
import IconCompressFill1Wght100Grad0Opsz48 from '../components/CompressFill1Wght100Grad0Opsz48'
import IconCompressFill1Wght200Grad0Opsz48 from '../components/CompressFill1Wght200Grad0Opsz48'
import IconCompressFill1Wght300Grad0Opsz48 from '../components/CompressFill1Wght300Grad0Opsz48'
import IconCompressFill1Wght400Grad0Opsz48 from '../components/CompressFill1Wght400Grad0Opsz48'
import IconCompressFill1Wght500Grad0Opsz48 from '../components/CompressFill1Wght500Grad0Opsz48'
import IconCompressFill1Wght600Grad0Opsz48 from '../components/CompressFill1Wght600Grad0Opsz48'
import IconCompressFill1Wght700Grad0Opsz48 from '../components/CompressFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCompress = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCompressFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCompressFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCompressFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCompressFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCompressFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCompressFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCompressFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCompressFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCompressFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCompressFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCompressFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCompressFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCompressFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCompressFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
