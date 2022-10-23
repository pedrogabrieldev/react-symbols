import IconMicExternalOnFill0Wght100Grad0Opsz48 from '../components/MicExternalOnFill0Wght100Grad0Opsz48'
import IconMicExternalOnFill0Wght200Grad0Opsz48 from '../components/MicExternalOnFill0Wght200Grad0Opsz48'
import IconMicExternalOnFill0Wght300Grad0Opsz48 from '../components/MicExternalOnFill0Wght300Grad0Opsz48'
import IconMicExternalOnFill0Wght400Grad0Opsz48 from '../components/MicExternalOnFill0Wght400Grad0Opsz48'
import IconMicExternalOnFill0Wght500Grad0Opsz48 from '../components/MicExternalOnFill0Wght500Grad0Opsz48'
import IconMicExternalOnFill0Wght600Grad0Opsz48 from '../components/MicExternalOnFill0Wght600Grad0Opsz48'
import IconMicExternalOnFill0Wght700Grad0Opsz48 from '../components/MicExternalOnFill0Wght700Grad0Opsz48'
import IconMicExternalOnFill1Wght100Grad0Opsz48 from '../components/MicExternalOnFill1Wght100Grad0Opsz48'
import IconMicExternalOnFill1Wght200Grad0Opsz48 from '../components/MicExternalOnFill1Wght200Grad0Opsz48'
import IconMicExternalOnFill1Wght300Grad0Opsz48 from '../components/MicExternalOnFill1Wght300Grad0Opsz48'
import IconMicExternalOnFill1Wght400Grad0Opsz48 from '../components/MicExternalOnFill1Wght400Grad0Opsz48'
import IconMicExternalOnFill1Wght500Grad0Opsz48 from '../components/MicExternalOnFill1Wght500Grad0Opsz48'
import IconMicExternalOnFill1Wght600Grad0Opsz48 from '../components/MicExternalOnFill1Wght600Grad0Opsz48'
import IconMicExternalOnFill1Wght700Grad0Opsz48 from '../components/MicExternalOnFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMicExternalOn = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMicExternalOnFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMicExternalOnFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMicExternalOnFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMicExternalOnFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMicExternalOnFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMicExternalOnFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMicExternalOnFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMicExternalOnFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMicExternalOnFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMicExternalOnFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMicExternalOnFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMicExternalOnFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMicExternalOnFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMicExternalOnFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
