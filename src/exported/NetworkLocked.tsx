import IconNetworkLockedFill0Wght100Grad0Opsz48 from '../components/NetworkLockedFill0Wght100Grad0Opsz48'
import IconNetworkLockedFill0Wght200Grad0Opsz48 from '../components/NetworkLockedFill0Wght200Grad0Opsz48'
import IconNetworkLockedFill0Wght300Grad0Opsz48 from '../components/NetworkLockedFill0Wght300Grad0Opsz48'
import IconNetworkLockedFill0Wght400Grad0Opsz48 from '../components/NetworkLockedFill0Wght400Grad0Opsz48'
import IconNetworkLockedFill0Wght500Grad0Opsz48 from '../components/NetworkLockedFill0Wght500Grad0Opsz48'
import IconNetworkLockedFill0Wght600Grad0Opsz48 from '../components/NetworkLockedFill0Wght600Grad0Opsz48'
import IconNetworkLockedFill0Wght700Grad0Opsz48 from '../components/NetworkLockedFill0Wght700Grad0Opsz48'
import IconNetworkLockedFill1Wght100Grad0Opsz48 from '../components/NetworkLockedFill1Wght100Grad0Opsz48'
import IconNetworkLockedFill1Wght200Grad0Opsz48 from '../components/NetworkLockedFill1Wght200Grad0Opsz48'
import IconNetworkLockedFill1Wght300Grad0Opsz48 from '../components/NetworkLockedFill1Wght300Grad0Opsz48'
import IconNetworkLockedFill1Wght400Grad0Opsz48 from '../components/NetworkLockedFill1Wght400Grad0Opsz48'
import IconNetworkLockedFill1Wght500Grad0Opsz48 from '../components/NetworkLockedFill1Wght500Grad0Opsz48'
import IconNetworkLockedFill1Wght600Grad0Opsz48 from '../components/NetworkLockedFill1Wght600Grad0Opsz48'
import IconNetworkLockedFill1Wght700Grad0Opsz48 from '../components/NetworkLockedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNetworkLocked = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNetworkLockedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNetworkLockedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNetworkLockedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNetworkLockedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNetworkLockedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNetworkLockedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNetworkLockedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNetworkLockedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNetworkLockedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNetworkLockedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNetworkLockedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNetworkLockedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNetworkLockedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNetworkLockedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
