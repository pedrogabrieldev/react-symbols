import IconHardwareFill0Wght100Grad0Opsz48 from '../components/HardwareFill0Wght100Grad0Opsz48'
import IconHardwareFill0Wght200Grad0Opsz48 from '../components/HardwareFill0Wght200Grad0Opsz48'
import IconHardwareFill0Wght300Grad0Opsz48 from '../components/HardwareFill0Wght300Grad0Opsz48'
import IconHardwareFill0Wght400Grad0Opsz48 from '../components/HardwareFill0Wght400Grad0Opsz48'
import IconHardwareFill0Wght500Grad0Opsz48 from '../components/HardwareFill0Wght500Grad0Opsz48'
import IconHardwareFill0Wght600Grad0Opsz48 from '../components/HardwareFill0Wght600Grad0Opsz48'
import IconHardwareFill0Wght700Grad0Opsz48 from '../components/HardwareFill0Wght700Grad0Opsz48'
import IconHardwareFill1Wght100Grad0Opsz48 from '../components/HardwareFill1Wght100Grad0Opsz48'
import IconHardwareFill1Wght200Grad0Opsz48 from '../components/HardwareFill1Wght200Grad0Opsz48'
import IconHardwareFill1Wght300Grad0Opsz48 from '../components/HardwareFill1Wght300Grad0Opsz48'
import IconHardwareFill1Wght400Grad0Opsz48 from '../components/HardwareFill1Wght400Grad0Opsz48'
import IconHardwareFill1Wght500Grad0Opsz48 from '../components/HardwareFill1Wght500Grad0Opsz48'
import IconHardwareFill1Wght600Grad0Opsz48 from '../components/HardwareFill1Wght600Grad0Opsz48'
import IconHardwareFill1Wght700Grad0Opsz48 from '../components/HardwareFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHardware = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHardwareFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHardwareFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHardwareFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHardwareFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHardwareFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHardwareFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHardwareFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHardwareFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHardwareFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHardwareFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHardwareFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHardwareFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHardwareFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHardwareFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
