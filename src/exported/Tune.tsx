import IconTuneFill0Wght100Grad0Opsz48 from '../components/TuneFill0Wght100Grad0Opsz48'
import IconTuneFill0Wght200Grad0Opsz48 from '../components/TuneFill0Wght200Grad0Opsz48'
import IconTuneFill0Wght300Grad0Opsz48 from '../components/TuneFill0Wght300Grad0Opsz48'
import IconTuneFill0Wght400Grad0Opsz48 from '../components/TuneFill0Wght400Grad0Opsz48'
import IconTuneFill0Wght500Grad0Opsz48 from '../components/TuneFill0Wght500Grad0Opsz48'
import IconTuneFill0Wght600Grad0Opsz48 from '../components/TuneFill0Wght600Grad0Opsz48'
import IconTuneFill0Wght700Grad0Opsz48 from '../components/TuneFill0Wght700Grad0Opsz48'
import IconTuneFill1Wght100Grad0Opsz48 from '../components/TuneFill1Wght100Grad0Opsz48'
import IconTuneFill1Wght200Grad0Opsz48 from '../components/TuneFill1Wght200Grad0Opsz48'
import IconTuneFill1Wght300Grad0Opsz48 from '../components/TuneFill1Wght300Grad0Opsz48'
import IconTuneFill1Wght400Grad0Opsz48 from '../components/TuneFill1Wght400Grad0Opsz48'
import IconTuneFill1Wght500Grad0Opsz48 from '../components/TuneFill1Wght500Grad0Opsz48'
import IconTuneFill1Wght600Grad0Opsz48 from '../components/TuneFill1Wght600Grad0Opsz48'
import IconTuneFill1Wght700Grad0Opsz48 from '../components/TuneFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTune = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTuneFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTuneFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTuneFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTuneFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTuneFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTuneFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTuneFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTuneFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTuneFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTuneFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTuneFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTuneFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTuneFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTuneFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
