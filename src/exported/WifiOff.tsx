import IconWifiOffFill0Wght100Grad0Opsz48 from '../components/WifiOffFill0Wght100Grad0Opsz48'
import IconWifiOffFill0Wght200Grad0Opsz48 from '../components/WifiOffFill0Wght200Grad0Opsz48'
import IconWifiOffFill0Wght300Grad0Opsz48 from '../components/WifiOffFill0Wght300Grad0Opsz48'
import IconWifiOffFill0Wght400Grad0Opsz48 from '../components/WifiOffFill0Wght400Grad0Opsz48'
import IconWifiOffFill0Wght500Grad0Opsz48 from '../components/WifiOffFill0Wght500Grad0Opsz48'
import IconWifiOffFill0Wght600Grad0Opsz48 from '../components/WifiOffFill0Wght600Grad0Opsz48'
import IconWifiOffFill0Wght700Grad0Opsz48 from '../components/WifiOffFill0Wght700Grad0Opsz48'
import IconWifiOffFill1Wght100Grad0Opsz48 from '../components/WifiOffFill1Wght100Grad0Opsz48'
import IconWifiOffFill1Wght200Grad0Opsz48 from '../components/WifiOffFill1Wght200Grad0Opsz48'
import IconWifiOffFill1Wght300Grad0Opsz48 from '../components/WifiOffFill1Wght300Grad0Opsz48'
import IconWifiOffFill1Wght400Grad0Opsz48 from '../components/WifiOffFill1Wght400Grad0Opsz48'
import IconWifiOffFill1Wght500Grad0Opsz48 from '../components/WifiOffFill1Wght500Grad0Opsz48'
import IconWifiOffFill1Wght600Grad0Opsz48 from '../components/WifiOffFill1Wght600Grad0Opsz48'
import IconWifiOffFill1Wght700Grad0Opsz48 from '../components/WifiOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWifiOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWifiOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWifiOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWifiOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWifiOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWifiOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWifiOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWifiOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWifiOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWifiOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWifiOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWifiOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWifiOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWifiOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWifiOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
