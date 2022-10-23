import IconHdrStrongFill0Wght100Grad0Opsz48 from '../components/HdrStrongFill0Wght100Grad0Opsz48'
import IconHdrStrongFill0Wght200Grad0Opsz48 from '../components/HdrStrongFill0Wght200Grad0Opsz48'
import IconHdrStrongFill0Wght300Grad0Opsz48 from '../components/HdrStrongFill0Wght300Grad0Opsz48'
import IconHdrStrongFill0Wght400Grad0Opsz48 from '../components/HdrStrongFill0Wght400Grad0Opsz48'
import IconHdrStrongFill0Wght500Grad0Opsz48 from '../components/HdrStrongFill0Wght500Grad0Opsz48'
import IconHdrStrongFill0Wght600Grad0Opsz48 from '../components/HdrStrongFill0Wght600Grad0Opsz48'
import IconHdrStrongFill0Wght700Grad0Opsz48 from '../components/HdrStrongFill0Wght700Grad0Opsz48'
import IconHdrStrongFill1Wght100Grad0Opsz48 from '../components/HdrStrongFill1Wght100Grad0Opsz48'
import IconHdrStrongFill1Wght200Grad0Opsz48 from '../components/HdrStrongFill1Wght200Grad0Opsz48'
import IconHdrStrongFill1Wght300Grad0Opsz48 from '../components/HdrStrongFill1Wght300Grad0Opsz48'
import IconHdrStrongFill1Wght400Grad0Opsz48 from '../components/HdrStrongFill1Wght400Grad0Opsz48'
import IconHdrStrongFill1Wght500Grad0Opsz48 from '../components/HdrStrongFill1Wght500Grad0Opsz48'
import IconHdrStrongFill1Wght600Grad0Opsz48 from '../components/HdrStrongFill1Wght600Grad0Opsz48'
import IconHdrStrongFill1Wght700Grad0Opsz48 from '../components/HdrStrongFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHdrStrong = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHdrStrongFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHdrStrongFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHdrStrongFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHdrStrongFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHdrStrongFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHdrStrongFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHdrStrongFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHdrStrongFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHdrStrongFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHdrStrongFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHdrStrongFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHdrStrongFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHdrStrongFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHdrStrongFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
