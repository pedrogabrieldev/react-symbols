import IconMicFill0Wght100Grad0Opsz48 from '../components/MicFill0Wght100Grad0Opsz48'
import IconMicFill0Wght200Grad0Opsz48 from '../components/MicFill0Wght200Grad0Opsz48'
import IconMicFill0Wght300Grad0Opsz48 from '../components/MicFill0Wght300Grad0Opsz48'
import IconMicFill0Wght400Grad0Opsz48 from '../components/MicFill0Wght400Grad0Opsz48'
import IconMicFill0Wght500Grad0Opsz48 from '../components/MicFill0Wght500Grad0Opsz48'
import IconMicFill0Wght600Grad0Opsz48 from '../components/MicFill0Wght600Grad0Opsz48'
import IconMicFill0Wght700Grad0Opsz48 from '../components/MicFill0Wght700Grad0Opsz48'
import IconMicFill1Wght100Grad0Opsz48 from '../components/MicFill1Wght100Grad0Opsz48'
import IconMicFill1Wght200Grad0Opsz48 from '../components/MicFill1Wght200Grad0Opsz48'
import IconMicFill1Wght300Grad0Opsz48 from '../components/MicFill1Wght300Grad0Opsz48'
import IconMicFill1Wght400Grad0Opsz48 from '../components/MicFill1Wght400Grad0Opsz48'
import IconMicFill1Wght500Grad0Opsz48 from '../components/MicFill1Wght500Grad0Opsz48'
import IconMicFill1Wght600Grad0Opsz48 from '../components/MicFill1Wght600Grad0Opsz48'
import IconMicFill1Wght700Grad0Opsz48 from '../components/MicFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMic = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMicFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMicFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMicFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMicFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMicFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMicFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMicFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMicFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMicFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMicFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMicFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMicFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMicFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMicFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
