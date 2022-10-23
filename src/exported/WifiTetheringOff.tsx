import IconWifiTetheringOffFill0Wght100Grad0Opsz48 from '../components/WifiTetheringOffFill0Wght100Grad0Opsz48'
import IconWifiTetheringOffFill0Wght200Grad0Opsz48 from '../components/WifiTetheringOffFill0Wght200Grad0Opsz48'
import IconWifiTetheringOffFill0Wght300Grad0Opsz48 from '../components/WifiTetheringOffFill0Wght300Grad0Opsz48'
import IconWifiTetheringOffFill0Wght400Grad0Opsz48 from '../components/WifiTetheringOffFill0Wght400Grad0Opsz48'
import IconWifiTetheringOffFill0Wght500Grad0Opsz48 from '../components/WifiTetheringOffFill0Wght500Grad0Opsz48'
import IconWifiTetheringOffFill0Wght600Grad0Opsz48 from '../components/WifiTetheringOffFill0Wght600Grad0Opsz48'
import IconWifiTetheringOffFill0Wght700Grad0Opsz48 from '../components/WifiTetheringOffFill0Wght700Grad0Opsz48'
import IconWifiTetheringOffFill1Wght100Grad0Opsz48 from '../components/WifiTetheringOffFill1Wght100Grad0Opsz48'
import IconWifiTetheringOffFill1Wght200Grad0Opsz48 from '../components/WifiTetheringOffFill1Wght200Grad0Opsz48'
import IconWifiTetheringOffFill1Wght300Grad0Opsz48 from '../components/WifiTetheringOffFill1Wght300Grad0Opsz48'
import IconWifiTetheringOffFill1Wght400Grad0Opsz48 from '../components/WifiTetheringOffFill1Wght400Grad0Opsz48'
import IconWifiTetheringOffFill1Wght500Grad0Opsz48 from '../components/WifiTetheringOffFill1Wght500Grad0Opsz48'
import IconWifiTetheringOffFill1Wght600Grad0Opsz48 from '../components/WifiTetheringOffFill1Wght600Grad0Opsz48'
import IconWifiTetheringOffFill1Wght700Grad0Opsz48 from '../components/WifiTetheringOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWifiTetheringOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWifiTetheringOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWifiTetheringOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWifiTetheringOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWifiTetheringOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWifiTetheringOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWifiTetheringOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWifiTetheringOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWifiTetheringOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWifiTetheringOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWifiTetheringOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWifiTetheringOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWifiTetheringOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWifiTetheringOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWifiTetheringOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
