import IconMicrowaveFill0Wght100Grad0Opsz48 from '../components/MicrowaveFill0Wght100Grad0Opsz48'
import IconMicrowaveFill0Wght200Grad0Opsz48 from '../components/MicrowaveFill0Wght200Grad0Opsz48'
import IconMicrowaveFill0Wght300Grad0Opsz48 from '../components/MicrowaveFill0Wght300Grad0Opsz48'
import IconMicrowaveFill0Wght400Grad0Opsz48 from '../components/MicrowaveFill0Wght400Grad0Opsz48'
import IconMicrowaveFill0Wght500Grad0Opsz48 from '../components/MicrowaveFill0Wght500Grad0Opsz48'
import IconMicrowaveFill0Wght600Grad0Opsz48 from '../components/MicrowaveFill0Wght600Grad0Opsz48'
import IconMicrowaveFill0Wght700Grad0Opsz48 from '../components/MicrowaveFill0Wght700Grad0Opsz48'
import IconMicrowaveFill1Wght100Grad0Opsz48 from '../components/MicrowaveFill1Wght100Grad0Opsz48'
import IconMicrowaveFill1Wght200Grad0Opsz48 from '../components/MicrowaveFill1Wght200Grad0Opsz48'
import IconMicrowaveFill1Wght300Grad0Opsz48 from '../components/MicrowaveFill1Wght300Grad0Opsz48'
import IconMicrowaveFill1Wght400Grad0Opsz48 from '../components/MicrowaveFill1Wght400Grad0Opsz48'
import IconMicrowaveFill1Wght500Grad0Opsz48 from '../components/MicrowaveFill1Wght500Grad0Opsz48'
import IconMicrowaveFill1Wght600Grad0Opsz48 from '../components/MicrowaveFill1Wght600Grad0Opsz48'
import IconMicrowaveFill1Wght700Grad0Opsz48 from '../components/MicrowaveFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMicrowave = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMicrowaveFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMicrowaveFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMicrowaveFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMicrowaveFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMicrowaveFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMicrowaveFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMicrowaveFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMicrowaveFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMicrowaveFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMicrowaveFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMicrowaveFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMicrowaveFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMicrowaveFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMicrowaveFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
