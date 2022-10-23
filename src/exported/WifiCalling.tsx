import IconWifiCallingFill0Wght100Grad0Opsz48 from '../components/WifiCallingFill0Wght100Grad0Opsz48'
import IconWifiCallingFill0Wght200Grad0Opsz48 from '../components/WifiCallingFill0Wght200Grad0Opsz48'
import IconWifiCallingFill0Wght300Grad0Opsz48 from '../components/WifiCallingFill0Wght300Grad0Opsz48'
import IconWifiCallingFill0Wght400Grad0Opsz48 from '../components/WifiCallingFill0Wght400Grad0Opsz48'
import IconWifiCallingFill0Wght500Grad0Opsz48 from '../components/WifiCallingFill0Wght500Grad0Opsz48'
import IconWifiCallingFill0Wght600Grad0Opsz48 from '../components/WifiCallingFill0Wght600Grad0Opsz48'
import IconWifiCallingFill0Wght700Grad0Opsz48 from '../components/WifiCallingFill0Wght700Grad0Opsz48'
import IconWifiCallingFill1Wght100Grad0Opsz48 from '../components/WifiCallingFill1Wght100Grad0Opsz48'
import IconWifiCallingFill1Wght200Grad0Opsz48 from '../components/WifiCallingFill1Wght200Grad0Opsz48'
import IconWifiCallingFill1Wght300Grad0Opsz48 from '../components/WifiCallingFill1Wght300Grad0Opsz48'
import IconWifiCallingFill1Wght400Grad0Opsz48 from '../components/WifiCallingFill1Wght400Grad0Opsz48'
import IconWifiCallingFill1Wght500Grad0Opsz48 from '../components/WifiCallingFill1Wght500Grad0Opsz48'
import IconWifiCallingFill1Wght600Grad0Opsz48 from '../components/WifiCallingFill1Wght600Grad0Opsz48'
import IconWifiCallingFill1Wght700Grad0Opsz48 from '../components/WifiCallingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWifiCalling = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWifiCallingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWifiCallingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWifiCallingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWifiCallingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWifiCallingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWifiCallingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWifiCallingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWifiCallingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWifiCallingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWifiCallingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWifiCallingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWifiCallingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWifiCallingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWifiCallingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
