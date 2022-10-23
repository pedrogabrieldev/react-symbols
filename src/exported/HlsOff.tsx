import IconHlsOffFill0Wght100Grad0Opsz48 from '../components/HlsOffFill0Wght100Grad0Opsz48'
import IconHlsOffFill0Wght200Grad0Opsz48 from '../components/HlsOffFill0Wght200Grad0Opsz48'
import IconHlsOffFill0Wght300Grad0Opsz48 from '../components/HlsOffFill0Wght300Grad0Opsz48'
import IconHlsOffFill0Wght400Grad0Opsz48 from '../components/HlsOffFill0Wght400Grad0Opsz48'
import IconHlsOffFill0Wght500Grad0Opsz48 from '../components/HlsOffFill0Wght500Grad0Opsz48'
import IconHlsOffFill0Wght600Grad0Opsz48 from '../components/HlsOffFill0Wght600Grad0Opsz48'
import IconHlsOffFill0Wght700Grad0Opsz48 from '../components/HlsOffFill0Wght700Grad0Opsz48'
import IconHlsOffFill1Wght100Grad0Opsz48 from '../components/HlsOffFill1Wght100Grad0Opsz48'
import IconHlsOffFill1Wght200Grad0Opsz48 from '../components/HlsOffFill1Wght200Grad0Opsz48'
import IconHlsOffFill1Wght300Grad0Opsz48 from '../components/HlsOffFill1Wght300Grad0Opsz48'
import IconHlsOffFill1Wght400Grad0Opsz48 from '../components/HlsOffFill1Wght400Grad0Opsz48'
import IconHlsOffFill1Wght500Grad0Opsz48 from '../components/HlsOffFill1Wght500Grad0Opsz48'
import IconHlsOffFill1Wght600Grad0Opsz48 from '../components/HlsOffFill1Wght600Grad0Opsz48'
import IconHlsOffFill1Wght700Grad0Opsz48 from '../components/HlsOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHlsOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHlsOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHlsOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHlsOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHlsOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHlsOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHlsOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHlsOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHlsOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHlsOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHlsOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHlsOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHlsOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHlsOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHlsOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
