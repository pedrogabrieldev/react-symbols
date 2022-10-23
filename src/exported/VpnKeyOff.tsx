import IconVpnKeyOffFill0Wght100Grad0Opsz48 from '../components/VpnKeyOffFill0Wght100Grad0Opsz48'
import IconVpnKeyOffFill0Wght200Grad0Opsz48 from '../components/VpnKeyOffFill0Wght200Grad0Opsz48'
import IconVpnKeyOffFill0Wght300Grad0Opsz48 from '../components/VpnKeyOffFill0Wght300Grad0Opsz48'
import IconVpnKeyOffFill0Wght400Grad0Opsz48 from '../components/VpnKeyOffFill0Wght400Grad0Opsz48'
import IconVpnKeyOffFill0Wght500Grad0Opsz48 from '../components/VpnKeyOffFill0Wght500Grad0Opsz48'
import IconVpnKeyOffFill0Wght600Grad0Opsz48 from '../components/VpnKeyOffFill0Wght600Grad0Opsz48'
import IconVpnKeyOffFill0Wght700Grad0Opsz48 from '../components/VpnKeyOffFill0Wght700Grad0Opsz48'
import IconVpnKeyOffFill1Wght100Grad0Opsz48 from '../components/VpnKeyOffFill1Wght100Grad0Opsz48'
import IconVpnKeyOffFill1Wght200Grad0Opsz48 from '../components/VpnKeyOffFill1Wght200Grad0Opsz48'
import IconVpnKeyOffFill1Wght300Grad0Opsz48 from '../components/VpnKeyOffFill1Wght300Grad0Opsz48'
import IconVpnKeyOffFill1Wght400Grad0Opsz48 from '../components/VpnKeyOffFill1Wght400Grad0Opsz48'
import IconVpnKeyOffFill1Wght500Grad0Opsz48 from '../components/VpnKeyOffFill1Wght500Grad0Opsz48'
import IconVpnKeyOffFill1Wght600Grad0Opsz48 from '../components/VpnKeyOffFill1Wght600Grad0Opsz48'
import IconVpnKeyOffFill1Wght700Grad0Opsz48 from '../components/VpnKeyOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVpnKeyOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVpnKeyOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVpnKeyOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVpnKeyOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVpnKeyOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVpnKeyOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVpnKeyOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVpnKeyOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVpnKeyOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVpnKeyOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVpnKeyOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVpnKeyOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVpnKeyOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVpnKeyOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVpnKeyOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
