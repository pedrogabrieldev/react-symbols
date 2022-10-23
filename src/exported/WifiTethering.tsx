import IconWifiTetheringFill0Wght100Grad0Opsz48 from '../components/WifiTetheringFill0Wght100Grad0Opsz48'
import IconWifiTetheringFill0Wght200Grad0Opsz48 from '../components/WifiTetheringFill0Wght200Grad0Opsz48'
import IconWifiTetheringFill0Wght300Grad0Opsz48 from '../components/WifiTetheringFill0Wght300Grad0Opsz48'
import IconWifiTetheringFill0Wght400Grad0Opsz48 from '../components/WifiTetheringFill0Wght400Grad0Opsz48'
import IconWifiTetheringFill0Wght500Grad0Opsz48 from '../components/WifiTetheringFill0Wght500Grad0Opsz48'
import IconWifiTetheringFill0Wght600Grad0Opsz48 from '../components/WifiTetheringFill0Wght600Grad0Opsz48'
import IconWifiTetheringFill0Wght700Grad0Opsz48 from '../components/WifiTetheringFill0Wght700Grad0Opsz48'
import IconWifiTetheringFill1Wght100Grad0Opsz48 from '../components/WifiTetheringFill1Wght100Grad0Opsz48'
import IconWifiTetheringFill1Wght200Grad0Opsz48 from '../components/WifiTetheringFill1Wght200Grad0Opsz48'
import IconWifiTetheringFill1Wght300Grad0Opsz48 from '../components/WifiTetheringFill1Wght300Grad0Opsz48'
import IconWifiTetheringFill1Wght400Grad0Opsz48 from '../components/WifiTetheringFill1Wght400Grad0Opsz48'
import IconWifiTetheringFill1Wght500Grad0Opsz48 from '../components/WifiTetheringFill1Wght500Grad0Opsz48'
import IconWifiTetheringFill1Wght600Grad0Opsz48 from '../components/WifiTetheringFill1Wght600Grad0Opsz48'
import IconWifiTetheringFill1Wght700Grad0Opsz48 from '../components/WifiTetheringFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWifiTethering = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWifiTetheringFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWifiTetheringFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWifiTetheringFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWifiTetheringFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWifiTetheringFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWifiTetheringFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWifiTetheringFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWifiTetheringFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWifiTetheringFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWifiTetheringFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWifiTetheringFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWifiTetheringFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWifiTetheringFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWifiTetheringFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
