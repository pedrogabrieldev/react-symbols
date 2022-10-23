import IconWifiPasswordFill0Wght100Grad0Opsz48 from '../components/WifiPasswordFill0Wght100Grad0Opsz48'
import IconWifiPasswordFill0Wght200Grad0Opsz48 from '../components/WifiPasswordFill0Wght200Grad0Opsz48'
import IconWifiPasswordFill0Wght300Grad0Opsz48 from '../components/WifiPasswordFill0Wght300Grad0Opsz48'
import IconWifiPasswordFill0Wght400Grad0Opsz48 from '../components/WifiPasswordFill0Wght400Grad0Opsz48'
import IconWifiPasswordFill0Wght500Grad0Opsz48 from '../components/WifiPasswordFill0Wght500Grad0Opsz48'
import IconWifiPasswordFill0Wght600Grad0Opsz48 from '../components/WifiPasswordFill0Wght600Grad0Opsz48'
import IconWifiPasswordFill0Wght700Grad0Opsz48 from '../components/WifiPasswordFill0Wght700Grad0Opsz48'
import IconWifiPasswordFill1Wght100Grad0Opsz48 from '../components/WifiPasswordFill1Wght100Grad0Opsz48'
import IconWifiPasswordFill1Wght200Grad0Opsz48 from '../components/WifiPasswordFill1Wght200Grad0Opsz48'
import IconWifiPasswordFill1Wght300Grad0Opsz48 from '../components/WifiPasswordFill1Wght300Grad0Opsz48'
import IconWifiPasswordFill1Wght400Grad0Opsz48 from '../components/WifiPasswordFill1Wght400Grad0Opsz48'
import IconWifiPasswordFill1Wght500Grad0Opsz48 from '../components/WifiPasswordFill1Wght500Grad0Opsz48'
import IconWifiPasswordFill1Wght600Grad0Opsz48 from '../components/WifiPasswordFill1Wght600Grad0Opsz48'
import IconWifiPasswordFill1Wght700Grad0Opsz48 from '../components/WifiPasswordFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWifiPassword = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWifiPasswordFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWifiPasswordFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWifiPasswordFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWifiPasswordFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWifiPasswordFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWifiPasswordFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWifiPasswordFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWifiPasswordFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWifiPasswordFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWifiPasswordFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWifiPasswordFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWifiPasswordFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWifiPasswordFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWifiPasswordFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
