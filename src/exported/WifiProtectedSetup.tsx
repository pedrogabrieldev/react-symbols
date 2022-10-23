import IconWifiProtectedSetupFill0Wght100Grad0Opsz48 from '../components/WifiProtectedSetupFill0Wght100Grad0Opsz48'
import IconWifiProtectedSetupFill0Wght200Grad0Opsz48 from '../components/WifiProtectedSetupFill0Wght200Grad0Opsz48'
import IconWifiProtectedSetupFill0Wght300Grad0Opsz48 from '../components/WifiProtectedSetupFill0Wght300Grad0Opsz48'
import IconWifiProtectedSetupFill0Wght400Grad0Opsz48 from '../components/WifiProtectedSetupFill0Wght400Grad0Opsz48'
import IconWifiProtectedSetupFill0Wght500Grad0Opsz48 from '../components/WifiProtectedSetupFill0Wght500Grad0Opsz48'
import IconWifiProtectedSetupFill0Wght600Grad0Opsz48 from '../components/WifiProtectedSetupFill0Wght600Grad0Opsz48'
import IconWifiProtectedSetupFill0Wght700Grad0Opsz48 from '../components/WifiProtectedSetupFill0Wght700Grad0Opsz48'
import IconWifiProtectedSetupFill1Wght100Grad0Opsz48 from '../components/WifiProtectedSetupFill1Wght100Grad0Opsz48'
import IconWifiProtectedSetupFill1Wght200Grad0Opsz48 from '../components/WifiProtectedSetupFill1Wght200Grad0Opsz48'
import IconWifiProtectedSetupFill1Wght300Grad0Opsz48 from '../components/WifiProtectedSetupFill1Wght300Grad0Opsz48'
import IconWifiProtectedSetupFill1Wght400Grad0Opsz48 from '../components/WifiProtectedSetupFill1Wght400Grad0Opsz48'
import IconWifiProtectedSetupFill1Wght500Grad0Opsz48 from '../components/WifiProtectedSetupFill1Wght500Grad0Opsz48'
import IconWifiProtectedSetupFill1Wght600Grad0Opsz48 from '../components/WifiProtectedSetupFill1Wght600Grad0Opsz48'
import IconWifiProtectedSetupFill1Wght700Grad0Opsz48 from '../components/WifiProtectedSetupFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWifiProtectedSetup = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWifiProtectedSetupFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWifiProtectedSetupFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWifiProtectedSetupFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWifiProtectedSetupFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWifiProtectedSetupFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWifiProtectedSetupFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWifiProtectedSetupFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWifiProtectedSetupFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWifiProtectedSetupFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWifiProtectedSetupFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWifiProtectedSetupFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWifiProtectedSetupFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWifiProtectedSetupFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWifiProtectedSetupFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
