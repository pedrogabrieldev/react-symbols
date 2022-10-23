import IconSettingsEthernetFill0Wght100Grad0Opsz48 from '../components/SettingsEthernetFill0Wght100Grad0Opsz48'
import IconSettingsEthernetFill0Wght200Grad0Opsz48 from '../components/SettingsEthernetFill0Wght200Grad0Opsz48'
import IconSettingsEthernetFill0Wght300Grad0Opsz48 from '../components/SettingsEthernetFill0Wght300Grad0Opsz48'
import IconSettingsEthernetFill0Wght400Grad0Opsz48 from '../components/SettingsEthernetFill0Wght400Grad0Opsz48'
import IconSettingsEthernetFill0Wght500Grad0Opsz48 from '../components/SettingsEthernetFill0Wght500Grad0Opsz48'
import IconSettingsEthernetFill0Wght600Grad0Opsz48 from '../components/SettingsEthernetFill0Wght600Grad0Opsz48'
import IconSettingsEthernetFill0Wght700Grad0Opsz48 from '../components/SettingsEthernetFill0Wght700Grad0Opsz48'
import IconSettingsEthernetFill1Wght100Grad0Opsz48 from '../components/SettingsEthernetFill1Wght100Grad0Opsz48'
import IconSettingsEthernetFill1Wght200Grad0Opsz48 from '../components/SettingsEthernetFill1Wght200Grad0Opsz48'
import IconSettingsEthernetFill1Wght300Grad0Opsz48 from '../components/SettingsEthernetFill1Wght300Grad0Opsz48'
import IconSettingsEthernetFill1Wght400Grad0Opsz48 from '../components/SettingsEthernetFill1Wght400Grad0Opsz48'
import IconSettingsEthernetFill1Wght500Grad0Opsz48 from '../components/SettingsEthernetFill1Wght500Grad0Opsz48'
import IconSettingsEthernetFill1Wght600Grad0Opsz48 from '../components/SettingsEthernetFill1Wght600Grad0Opsz48'
import IconSettingsEthernetFill1Wght700Grad0Opsz48 from '../components/SettingsEthernetFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSettingsEthernet = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSettingsEthernetFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSettingsEthernetFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSettingsEthernetFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSettingsEthernetFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSettingsEthernetFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSettingsEthernetFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSettingsEthernetFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSettingsEthernetFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSettingsEthernetFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSettingsEthernetFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSettingsEthernetFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSettingsEthernetFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSettingsEthernetFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSettingsEthernetFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
