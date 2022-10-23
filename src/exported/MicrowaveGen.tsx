import IconMicrowaveGenFill0Wght100Grad0Opsz48 from '../components/MicrowaveGenFill0Wght100Grad0Opsz48'
import IconMicrowaveGenFill0Wght200Grad0Opsz48 from '../components/MicrowaveGenFill0Wght200Grad0Opsz48'
import IconMicrowaveGenFill0Wght300Grad0Opsz48 from '../components/MicrowaveGenFill0Wght300Grad0Opsz48'
import IconMicrowaveGenFill0Wght400Grad0Opsz48 from '../components/MicrowaveGenFill0Wght400Grad0Opsz48'
import IconMicrowaveGenFill0Wght500Grad0Opsz48 from '../components/MicrowaveGenFill0Wght500Grad0Opsz48'
import IconMicrowaveGenFill0Wght600Grad0Opsz48 from '../components/MicrowaveGenFill0Wght600Grad0Opsz48'
import IconMicrowaveGenFill0Wght700Grad0Opsz48 from '../components/MicrowaveGenFill0Wght700Grad0Opsz48'
import IconMicrowaveGenFill1Wght100Grad0Opsz48 from '../components/MicrowaveGenFill1Wght100Grad0Opsz48'
import IconMicrowaveGenFill1Wght200Grad0Opsz48 from '../components/MicrowaveGenFill1Wght200Grad0Opsz48'
import IconMicrowaveGenFill1Wght300Grad0Opsz48 from '../components/MicrowaveGenFill1Wght300Grad0Opsz48'
import IconMicrowaveGenFill1Wght400Grad0Opsz48 from '../components/MicrowaveGenFill1Wght400Grad0Opsz48'
import IconMicrowaveGenFill1Wght500Grad0Opsz48 from '../components/MicrowaveGenFill1Wght500Grad0Opsz48'
import IconMicrowaveGenFill1Wght600Grad0Opsz48 from '../components/MicrowaveGenFill1Wght600Grad0Opsz48'
import IconMicrowaveGenFill1Wght700Grad0Opsz48 from '../components/MicrowaveGenFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMicrowaveGen = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMicrowaveGenFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMicrowaveGenFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMicrowaveGenFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMicrowaveGenFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMicrowaveGenFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMicrowaveGenFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMicrowaveGenFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMicrowaveGenFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMicrowaveGenFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMicrowaveGenFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMicrowaveGenFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMicrowaveGenFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMicrowaveGenFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMicrowaveGenFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
