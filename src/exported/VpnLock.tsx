import IconVpnLockFill0Wght100Grad0Opsz48 from '../components/VpnLockFill0Wght100Grad0Opsz48'
import IconVpnLockFill0Wght200Grad0Opsz48 from '../components/VpnLockFill0Wght200Grad0Opsz48'
import IconVpnLockFill0Wght300Grad0Opsz48 from '../components/VpnLockFill0Wght300Grad0Opsz48'
import IconVpnLockFill0Wght400Grad0Opsz48 from '../components/VpnLockFill0Wght400Grad0Opsz48'
import IconVpnLockFill0Wght500Grad0Opsz48 from '../components/VpnLockFill0Wght500Grad0Opsz48'
import IconVpnLockFill0Wght600Grad0Opsz48 from '../components/VpnLockFill0Wght600Grad0Opsz48'
import IconVpnLockFill0Wght700Grad0Opsz48 from '../components/VpnLockFill0Wght700Grad0Opsz48'
import IconVpnLockFill1Wght100Grad0Opsz48 from '../components/VpnLockFill1Wght100Grad0Opsz48'
import IconVpnLockFill1Wght200Grad0Opsz48 from '../components/VpnLockFill1Wght200Grad0Opsz48'
import IconVpnLockFill1Wght300Grad0Opsz48 from '../components/VpnLockFill1Wght300Grad0Opsz48'
import IconVpnLockFill1Wght400Grad0Opsz48 from '../components/VpnLockFill1Wght400Grad0Opsz48'
import IconVpnLockFill1Wght500Grad0Opsz48 from '../components/VpnLockFill1Wght500Grad0Opsz48'
import IconVpnLockFill1Wght600Grad0Opsz48 from '../components/VpnLockFill1Wght600Grad0Opsz48'
import IconVpnLockFill1Wght700Grad0Opsz48 from '../components/VpnLockFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVpnLock = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVpnLockFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVpnLockFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVpnLockFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVpnLockFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVpnLockFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVpnLockFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVpnLockFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVpnLockFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVpnLockFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVpnLockFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVpnLockFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVpnLockFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVpnLockFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVpnLockFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
