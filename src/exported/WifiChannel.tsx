import IconWifiChannelFill0Wght100Grad0Opsz48 from '../components/WifiChannelFill0Wght100Grad0Opsz48'
import IconWifiChannelFill0Wght200Grad0Opsz48 from '../components/WifiChannelFill0Wght200Grad0Opsz48'
import IconWifiChannelFill0Wght300Grad0Opsz48 from '../components/WifiChannelFill0Wght300Grad0Opsz48'
import IconWifiChannelFill0Wght400Grad0Opsz48 from '../components/WifiChannelFill0Wght400Grad0Opsz48'
import IconWifiChannelFill0Wght500Grad0Opsz48 from '../components/WifiChannelFill0Wght500Grad0Opsz48'
import IconWifiChannelFill0Wght600Grad0Opsz48 from '../components/WifiChannelFill0Wght600Grad0Opsz48'
import IconWifiChannelFill0Wght700Grad0Opsz48 from '../components/WifiChannelFill0Wght700Grad0Opsz48'
import IconWifiChannelFill1Wght100Grad0Opsz48 from '../components/WifiChannelFill1Wght100Grad0Opsz48'
import IconWifiChannelFill1Wght200Grad0Opsz48 from '../components/WifiChannelFill1Wght200Grad0Opsz48'
import IconWifiChannelFill1Wght300Grad0Opsz48 from '../components/WifiChannelFill1Wght300Grad0Opsz48'
import IconWifiChannelFill1Wght400Grad0Opsz48 from '../components/WifiChannelFill1Wght400Grad0Opsz48'
import IconWifiChannelFill1Wght500Grad0Opsz48 from '../components/WifiChannelFill1Wght500Grad0Opsz48'
import IconWifiChannelFill1Wght600Grad0Opsz48 from '../components/WifiChannelFill1Wght600Grad0Opsz48'
import IconWifiChannelFill1Wght700Grad0Opsz48 from '../components/WifiChannelFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWifiChannel = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWifiChannelFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWifiChannelFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWifiChannelFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWifiChannelFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWifiChannelFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWifiChannelFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWifiChannelFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWifiChannelFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWifiChannelFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWifiChannelFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWifiChannelFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWifiChannelFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWifiChannelFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWifiChannelFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
