import IconHlsFill0Wght100Grad0Opsz48 from '../components/HlsFill0Wght100Grad0Opsz48'
import IconHlsFill0Wght200Grad0Opsz48 from '../components/HlsFill0Wght200Grad0Opsz48'
import IconHlsFill0Wght300Grad0Opsz48 from '../components/HlsFill0Wght300Grad0Opsz48'
import IconHlsFill0Wght400Grad0Opsz48 from '../components/HlsFill0Wght400Grad0Opsz48'
import IconHlsFill0Wght500Grad0Opsz48 from '../components/HlsFill0Wght500Grad0Opsz48'
import IconHlsFill0Wght600Grad0Opsz48 from '../components/HlsFill0Wght600Grad0Opsz48'
import IconHlsFill0Wght700Grad0Opsz48 from '../components/HlsFill0Wght700Grad0Opsz48'
import IconHlsFill1Wght100Grad0Opsz48 from '../components/HlsFill1Wght100Grad0Opsz48'
import IconHlsFill1Wght200Grad0Opsz48 from '../components/HlsFill1Wght200Grad0Opsz48'
import IconHlsFill1Wght300Grad0Opsz48 from '../components/HlsFill1Wght300Grad0Opsz48'
import IconHlsFill1Wght400Grad0Opsz48 from '../components/HlsFill1Wght400Grad0Opsz48'
import IconHlsFill1Wght500Grad0Opsz48 from '../components/HlsFill1Wght500Grad0Opsz48'
import IconHlsFill1Wght600Grad0Opsz48 from '../components/HlsFill1Wght600Grad0Opsz48'
import IconHlsFill1Wght700Grad0Opsz48 from '../components/HlsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHls = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHlsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHlsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHlsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHlsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHlsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHlsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHlsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHlsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHlsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHlsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHlsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHlsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHlsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHlsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
