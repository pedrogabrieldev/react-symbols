import IconMicOffFill0Wght100Grad0Opsz48 from '../components/MicOffFill0Wght100Grad0Opsz48'
import IconMicOffFill0Wght200Grad0Opsz48 from '../components/MicOffFill0Wght200Grad0Opsz48'
import IconMicOffFill0Wght300Grad0Opsz48 from '../components/MicOffFill0Wght300Grad0Opsz48'
import IconMicOffFill0Wght400Grad0Opsz48 from '../components/MicOffFill0Wght400Grad0Opsz48'
import IconMicOffFill0Wght500Grad0Opsz48 from '../components/MicOffFill0Wght500Grad0Opsz48'
import IconMicOffFill0Wght600Grad0Opsz48 from '../components/MicOffFill0Wght600Grad0Opsz48'
import IconMicOffFill0Wght700Grad0Opsz48 from '../components/MicOffFill0Wght700Grad0Opsz48'
import IconMicOffFill1Wght100Grad0Opsz48 from '../components/MicOffFill1Wght100Grad0Opsz48'
import IconMicOffFill1Wght200Grad0Opsz48 from '../components/MicOffFill1Wght200Grad0Opsz48'
import IconMicOffFill1Wght300Grad0Opsz48 from '../components/MicOffFill1Wght300Grad0Opsz48'
import IconMicOffFill1Wght400Grad0Opsz48 from '../components/MicOffFill1Wght400Grad0Opsz48'
import IconMicOffFill1Wght500Grad0Opsz48 from '../components/MicOffFill1Wght500Grad0Opsz48'
import IconMicOffFill1Wght600Grad0Opsz48 from '../components/MicOffFill1Wght600Grad0Opsz48'
import IconMicOffFill1Wght700Grad0Opsz48 from '../components/MicOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMicOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMicOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMicOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMicOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMicOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMicOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMicOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMicOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMicOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMicOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMicOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMicOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMicOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMicOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMicOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
