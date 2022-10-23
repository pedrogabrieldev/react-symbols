import IconNetworkWifiFill0Wght100Grad0Opsz48 from '../components/NetworkWifiFill0Wght100Grad0Opsz48'
import IconNetworkWifiFill0Wght200Grad0Opsz48 from '../components/NetworkWifiFill0Wght200Grad0Opsz48'
import IconNetworkWifiFill0Wght300Grad0Opsz48 from '../components/NetworkWifiFill0Wght300Grad0Opsz48'
import IconNetworkWifiFill0Wght400Grad0Opsz48 from '../components/NetworkWifiFill0Wght400Grad0Opsz48'
import IconNetworkWifiFill0Wght500Grad0Opsz48 from '../components/NetworkWifiFill0Wght500Grad0Opsz48'
import IconNetworkWifiFill0Wght600Grad0Opsz48 from '../components/NetworkWifiFill0Wght600Grad0Opsz48'
import IconNetworkWifiFill0Wght700Grad0Opsz48 from '../components/NetworkWifiFill0Wght700Grad0Opsz48'
import IconNetworkWifiFill1Wght100Grad0Opsz48 from '../components/NetworkWifiFill1Wght100Grad0Opsz48'
import IconNetworkWifiFill1Wght200Grad0Opsz48 from '../components/NetworkWifiFill1Wght200Grad0Opsz48'
import IconNetworkWifiFill1Wght300Grad0Opsz48 from '../components/NetworkWifiFill1Wght300Grad0Opsz48'
import IconNetworkWifiFill1Wght400Grad0Opsz48 from '../components/NetworkWifiFill1Wght400Grad0Opsz48'
import IconNetworkWifiFill1Wght500Grad0Opsz48 from '../components/NetworkWifiFill1Wght500Grad0Opsz48'
import IconNetworkWifiFill1Wght600Grad0Opsz48 from '../components/NetworkWifiFill1Wght600Grad0Opsz48'
import IconNetworkWifiFill1Wght700Grad0Opsz48 from '../components/NetworkWifiFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNetworkWifi = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNetworkWifiFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNetworkWifiFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNetworkWifiFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNetworkWifiFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNetworkWifiFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNetworkWifiFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNetworkWifiFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNetworkWifiFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNetworkWifiFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNetworkWifiFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNetworkWifiFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNetworkWifiFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNetworkWifiFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNetworkWifiFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
