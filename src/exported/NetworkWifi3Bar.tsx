import IconNetworkWifi3BarFill0Wght100Grad0Opsz48 from '../components/NetworkWifi3BarFill0Wght100Grad0Opsz48'
import IconNetworkWifi3BarFill0Wght200Grad0Opsz48 from '../components/NetworkWifi3BarFill0Wght200Grad0Opsz48'
import IconNetworkWifi3BarFill0Wght300Grad0Opsz48 from '../components/NetworkWifi3BarFill0Wght300Grad0Opsz48'
import IconNetworkWifi3BarFill0Wght400Grad0Opsz48 from '../components/NetworkWifi3BarFill0Wght400Grad0Opsz48'
import IconNetworkWifi3BarFill0Wght500Grad0Opsz48 from '../components/NetworkWifi3BarFill0Wght500Grad0Opsz48'
import IconNetworkWifi3BarFill0Wght600Grad0Opsz48 from '../components/NetworkWifi3BarFill0Wght600Grad0Opsz48'
import IconNetworkWifi3BarFill0Wght700Grad0Opsz48 from '../components/NetworkWifi3BarFill0Wght700Grad0Opsz48'
import IconNetworkWifi3BarFill1Wght100Grad0Opsz48 from '../components/NetworkWifi3BarFill1Wght100Grad0Opsz48'
import IconNetworkWifi3BarFill1Wght200Grad0Opsz48 from '../components/NetworkWifi3BarFill1Wght200Grad0Opsz48'
import IconNetworkWifi3BarFill1Wght300Grad0Opsz48 from '../components/NetworkWifi3BarFill1Wght300Grad0Opsz48'
import IconNetworkWifi3BarFill1Wght400Grad0Opsz48 from '../components/NetworkWifi3BarFill1Wght400Grad0Opsz48'
import IconNetworkWifi3BarFill1Wght500Grad0Opsz48 from '../components/NetworkWifi3BarFill1Wght500Grad0Opsz48'
import IconNetworkWifi3BarFill1Wght600Grad0Opsz48 from '../components/NetworkWifi3BarFill1Wght600Grad0Opsz48'
import IconNetworkWifi3BarFill1Wght700Grad0Opsz48 from '../components/NetworkWifi3BarFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNetworkWifi3Bar = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNetworkWifi3BarFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNetworkWifi3BarFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNetworkWifi3BarFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNetworkWifi3BarFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNetworkWifi3BarFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNetworkWifi3BarFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNetworkWifi3BarFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNetworkWifi3BarFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNetworkWifi3BarFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNetworkWifi3BarFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNetworkWifi3BarFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNetworkWifi3BarFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNetworkWifi3BarFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNetworkWifi3BarFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
