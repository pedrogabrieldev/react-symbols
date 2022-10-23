import IconMicExternalOffFill0Wght100Grad0Opsz48 from '../components/MicExternalOffFill0Wght100Grad0Opsz48'
import IconMicExternalOffFill0Wght200Grad0Opsz48 from '../components/MicExternalOffFill0Wght200Grad0Opsz48'
import IconMicExternalOffFill0Wght300Grad0Opsz48 from '../components/MicExternalOffFill0Wght300Grad0Opsz48'
import IconMicExternalOffFill0Wght400Grad0Opsz48 from '../components/MicExternalOffFill0Wght400Grad0Opsz48'
import IconMicExternalOffFill0Wght500Grad0Opsz48 from '../components/MicExternalOffFill0Wght500Grad0Opsz48'
import IconMicExternalOffFill0Wght600Grad0Opsz48 from '../components/MicExternalOffFill0Wght600Grad0Opsz48'
import IconMicExternalOffFill0Wght700Grad0Opsz48 from '../components/MicExternalOffFill0Wght700Grad0Opsz48'
import IconMicExternalOffFill1Wght100Grad0Opsz48 from '../components/MicExternalOffFill1Wght100Grad0Opsz48'
import IconMicExternalOffFill1Wght200Grad0Opsz48 from '../components/MicExternalOffFill1Wght200Grad0Opsz48'
import IconMicExternalOffFill1Wght300Grad0Opsz48 from '../components/MicExternalOffFill1Wght300Grad0Opsz48'
import IconMicExternalOffFill1Wght400Grad0Opsz48 from '../components/MicExternalOffFill1Wght400Grad0Opsz48'
import IconMicExternalOffFill1Wght500Grad0Opsz48 from '../components/MicExternalOffFill1Wght500Grad0Opsz48'
import IconMicExternalOffFill1Wght600Grad0Opsz48 from '../components/MicExternalOffFill1Wght600Grad0Opsz48'
import IconMicExternalOffFill1Wght700Grad0Opsz48 from '../components/MicExternalOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMicExternalOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMicExternalOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMicExternalOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMicExternalOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMicExternalOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMicExternalOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMicExternalOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMicExternalOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMicExternalOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMicExternalOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMicExternalOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMicExternalOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMicExternalOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMicExternalOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMicExternalOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
