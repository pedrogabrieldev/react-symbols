import IconWifiTetheringErrorFill0Wght100Grad0Opsz48 from '../components/WifiTetheringErrorFill0Wght100Grad0Opsz48'
import IconWifiTetheringErrorFill0Wght200Grad0Opsz48 from '../components/WifiTetheringErrorFill0Wght200Grad0Opsz48'
import IconWifiTetheringErrorFill0Wght300Grad0Opsz48 from '../components/WifiTetheringErrorFill0Wght300Grad0Opsz48'
import IconWifiTetheringErrorFill0Wght400Grad0Opsz48 from '../components/WifiTetheringErrorFill0Wght400Grad0Opsz48'
import IconWifiTetheringErrorFill0Wght500Grad0Opsz48 from '../components/WifiTetheringErrorFill0Wght500Grad0Opsz48'
import IconWifiTetheringErrorFill0Wght600Grad0Opsz48 from '../components/WifiTetheringErrorFill0Wght600Grad0Opsz48'
import IconWifiTetheringErrorFill0Wght700Grad0Opsz48 from '../components/WifiTetheringErrorFill0Wght700Grad0Opsz48'
import IconWifiTetheringErrorFill1Wght100Grad0Opsz48 from '../components/WifiTetheringErrorFill1Wght100Grad0Opsz48'
import IconWifiTetheringErrorFill1Wght200Grad0Opsz48 from '../components/WifiTetheringErrorFill1Wght200Grad0Opsz48'
import IconWifiTetheringErrorFill1Wght300Grad0Opsz48 from '../components/WifiTetheringErrorFill1Wght300Grad0Opsz48'
import IconWifiTetheringErrorFill1Wght400Grad0Opsz48 from '../components/WifiTetheringErrorFill1Wght400Grad0Opsz48'
import IconWifiTetheringErrorFill1Wght500Grad0Opsz48 from '../components/WifiTetheringErrorFill1Wght500Grad0Opsz48'
import IconWifiTetheringErrorFill1Wght600Grad0Opsz48 from '../components/WifiTetheringErrorFill1Wght600Grad0Opsz48'
import IconWifiTetheringErrorFill1Wght700Grad0Opsz48 from '../components/WifiTetheringErrorFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWifiTetheringError = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWifiTetheringErrorFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWifiTetheringErrorFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWifiTetheringErrorFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWifiTetheringErrorFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWifiTetheringErrorFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWifiTetheringErrorFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWifiTetheringErrorFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWifiTetheringErrorFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWifiTetheringErrorFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWifiTetheringErrorFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWifiTetheringErrorFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWifiTetheringErrorFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWifiTetheringErrorFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWifiTetheringErrorFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
