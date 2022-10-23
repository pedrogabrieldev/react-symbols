import IconSettingsPhotoCameraFill0Wght100Grad0Opsz48 from '../components/SettingsPhotoCameraFill0Wght100Grad0Opsz48'
import IconSettingsPhotoCameraFill0Wght200Grad0Opsz48 from '../components/SettingsPhotoCameraFill0Wght200Grad0Opsz48'
import IconSettingsPhotoCameraFill0Wght300Grad0Opsz48 from '../components/SettingsPhotoCameraFill0Wght300Grad0Opsz48'
import IconSettingsPhotoCameraFill0Wght400Grad0Opsz48 from '../components/SettingsPhotoCameraFill0Wght400Grad0Opsz48'
import IconSettingsPhotoCameraFill0Wght500Grad0Opsz48 from '../components/SettingsPhotoCameraFill0Wght500Grad0Opsz48'
import IconSettingsPhotoCameraFill0Wght600Grad0Opsz48 from '../components/SettingsPhotoCameraFill0Wght600Grad0Opsz48'
import IconSettingsPhotoCameraFill0Wght700Grad0Opsz48 from '../components/SettingsPhotoCameraFill0Wght700Grad0Opsz48'
import IconSettingsPhotoCameraFill1Wght100Grad0Opsz48 from '../components/SettingsPhotoCameraFill1Wght100Grad0Opsz48'
import IconSettingsPhotoCameraFill1Wght200Grad0Opsz48 from '../components/SettingsPhotoCameraFill1Wght200Grad0Opsz48'
import IconSettingsPhotoCameraFill1Wght300Grad0Opsz48 from '../components/SettingsPhotoCameraFill1Wght300Grad0Opsz48'
import IconSettingsPhotoCameraFill1Wght400Grad0Opsz48 from '../components/SettingsPhotoCameraFill1Wght400Grad0Opsz48'
import IconSettingsPhotoCameraFill1Wght500Grad0Opsz48 from '../components/SettingsPhotoCameraFill1Wght500Grad0Opsz48'
import IconSettingsPhotoCameraFill1Wght600Grad0Opsz48 from '../components/SettingsPhotoCameraFill1Wght600Grad0Opsz48'
import IconSettingsPhotoCameraFill1Wght700Grad0Opsz48 from '../components/SettingsPhotoCameraFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSettingsPhotoCamera = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSettingsPhotoCameraFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSettingsPhotoCameraFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSettingsPhotoCameraFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSettingsPhotoCameraFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSettingsPhotoCameraFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSettingsPhotoCameraFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSettingsPhotoCameraFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSettingsPhotoCameraFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSettingsPhotoCameraFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSettingsPhotoCameraFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSettingsPhotoCameraFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSettingsPhotoCameraFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSettingsPhotoCameraFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSettingsPhotoCameraFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
