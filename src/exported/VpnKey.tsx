import IconVpnKeyFill0Wght100Grad0Opsz48 from '../components/VpnKeyFill0Wght100Grad0Opsz48'
import IconVpnKeyFill0Wght200Grad0Opsz48 from '../components/VpnKeyFill0Wght200Grad0Opsz48'
import IconVpnKeyFill0Wght300Grad0Opsz48 from '../components/VpnKeyFill0Wght300Grad0Opsz48'
import IconVpnKeyFill0Wght400Grad0Opsz48 from '../components/VpnKeyFill0Wght400Grad0Opsz48'
import IconVpnKeyFill0Wght500Grad0Opsz48 from '../components/VpnKeyFill0Wght500Grad0Opsz48'
import IconVpnKeyFill0Wght600Grad0Opsz48 from '../components/VpnKeyFill0Wght600Grad0Opsz48'
import IconVpnKeyFill0Wght700Grad0Opsz48 from '../components/VpnKeyFill0Wght700Grad0Opsz48'
import IconVpnKeyFill1Wght100Grad0Opsz48 from '../components/VpnKeyFill1Wght100Grad0Opsz48'
import IconVpnKeyFill1Wght200Grad0Opsz48 from '../components/VpnKeyFill1Wght200Grad0Opsz48'
import IconVpnKeyFill1Wght300Grad0Opsz48 from '../components/VpnKeyFill1Wght300Grad0Opsz48'
import IconVpnKeyFill1Wght400Grad0Opsz48 from '../components/VpnKeyFill1Wght400Grad0Opsz48'
import IconVpnKeyFill1Wght500Grad0Opsz48 from '../components/VpnKeyFill1Wght500Grad0Opsz48'
import IconVpnKeyFill1Wght600Grad0Opsz48 from '../components/VpnKeyFill1Wght600Grad0Opsz48'
import IconVpnKeyFill1Wght700Grad0Opsz48 from '../components/VpnKeyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVpnKey = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVpnKeyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVpnKeyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVpnKeyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVpnKeyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVpnKeyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVpnKeyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVpnKeyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVpnKeyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVpnKeyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVpnKeyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVpnKeyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVpnKeyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVpnKeyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVpnKeyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
