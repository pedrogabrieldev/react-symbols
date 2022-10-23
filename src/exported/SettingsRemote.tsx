import IconSettingsRemoteFill0Wght100Grad0Opsz48 from '../components/SettingsRemoteFill0Wght100Grad0Opsz48'
import IconSettingsRemoteFill0Wght200Grad0Opsz48 from '../components/SettingsRemoteFill0Wght200Grad0Opsz48'
import IconSettingsRemoteFill0Wght300Grad0Opsz48 from '../components/SettingsRemoteFill0Wght300Grad0Opsz48'
import IconSettingsRemoteFill0Wght400Grad0Opsz48 from '../components/SettingsRemoteFill0Wght400Grad0Opsz48'
import IconSettingsRemoteFill0Wght500Grad0Opsz48 from '../components/SettingsRemoteFill0Wght500Grad0Opsz48'
import IconSettingsRemoteFill0Wght600Grad0Opsz48 from '../components/SettingsRemoteFill0Wght600Grad0Opsz48'
import IconSettingsRemoteFill0Wght700Grad0Opsz48 from '../components/SettingsRemoteFill0Wght700Grad0Opsz48'
import IconSettingsRemoteFill1Wght100Grad0Opsz48 from '../components/SettingsRemoteFill1Wght100Grad0Opsz48'
import IconSettingsRemoteFill1Wght200Grad0Opsz48 from '../components/SettingsRemoteFill1Wght200Grad0Opsz48'
import IconSettingsRemoteFill1Wght300Grad0Opsz48 from '../components/SettingsRemoteFill1Wght300Grad0Opsz48'
import IconSettingsRemoteFill1Wght400Grad0Opsz48 from '../components/SettingsRemoteFill1Wght400Grad0Opsz48'
import IconSettingsRemoteFill1Wght500Grad0Opsz48 from '../components/SettingsRemoteFill1Wght500Grad0Opsz48'
import IconSettingsRemoteFill1Wght600Grad0Opsz48 from '../components/SettingsRemoteFill1Wght600Grad0Opsz48'
import IconSettingsRemoteFill1Wght700Grad0Opsz48 from '../components/SettingsRemoteFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSettingsRemote = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSettingsRemoteFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSettingsRemoteFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSettingsRemoteFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSettingsRemoteFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSettingsRemoteFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSettingsRemoteFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSettingsRemoteFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSettingsRemoteFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSettingsRemoteFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSettingsRemoteFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSettingsRemoteFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSettingsRemoteFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSettingsRemoteFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSettingsRemoteFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
