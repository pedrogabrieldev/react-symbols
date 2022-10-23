import IconNetworkPingFill0Wght100Grad0Opsz48 from '../components/NetworkPingFill0Wght100Grad0Opsz48'
import IconNetworkPingFill0Wght200Grad0Opsz48 from '../components/NetworkPingFill0Wght200Grad0Opsz48'
import IconNetworkPingFill0Wght300Grad0Opsz48 from '../components/NetworkPingFill0Wght300Grad0Opsz48'
import IconNetworkPingFill0Wght400Grad0Opsz48 from '../components/NetworkPingFill0Wght400Grad0Opsz48'
import IconNetworkPingFill0Wght500Grad0Opsz48 from '../components/NetworkPingFill0Wght500Grad0Opsz48'
import IconNetworkPingFill0Wght600Grad0Opsz48 from '../components/NetworkPingFill0Wght600Grad0Opsz48'
import IconNetworkPingFill0Wght700Grad0Opsz48 from '../components/NetworkPingFill0Wght700Grad0Opsz48'
import IconNetworkPingFill1Wght100Grad0Opsz48 from '../components/NetworkPingFill1Wght100Grad0Opsz48'
import IconNetworkPingFill1Wght200Grad0Opsz48 from '../components/NetworkPingFill1Wght200Grad0Opsz48'
import IconNetworkPingFill1Wght300Grad0Opsz48 from '../components/NetworkPingFill1Wght300Grad0Opsz48'
import IconNetworkPingFill1Wght400Grad0Opsz48 from '../components/NetworkPingFill1Wght400Grad0Opsz48'
import IconNetworkPingFill1Wght500Grad0Opsz48 from '../components/NetworkPingFill1Wght500Grad0Opsz48'
import IconNetworkPingFill1Wght600Grad0Opsz48 from '../components/NetworkPingFill1Wght600Grad0Opsz48'
import IconNetworkPingFill1Wght700Grad0Opsz48 from '../components/NetworkPingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNetworkPing = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNetworkPingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNetworkPingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNetworkPingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNetworkPingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNetworkPingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNetworkPingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNetworkPingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNetworkPingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNetworkPingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNetworkPingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNetworkPingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNetworkPingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNetworkPingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNetworkPingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
