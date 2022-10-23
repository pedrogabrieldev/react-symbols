import IconSettingsAccountBoxFill0Wght100Grad0Opsz48 from '../components/SettingsAccountBoxFill0Wght100Grad0Opsz48'
import IconSettingsAccountBoxFill0Wght200Grad0Opsz48 from '../components/SettingsAccountBoxFill0Wght200Grad0Opsz48'
import IconSettingsAccountBoxFill0Wght300Grad0Opsz48 from '../components/SettingsAccountBoxFill0Wght300Grad0Opsz48'
import IconSettingsAccountBoxFill0Wght400Grad0Opsz48 from '../components/SettingsAccountBoxFill0Wght400Grad0Opsz48'
import IconSettingsAccountBoxFill0Wght500Grad0Opsz48 from '../components/SettingsAccountBoxFill0Wght500Grad0Opsz48'
import IconSettingsAccountBoxFill0Wght600Grad0Opsz48 from '../components/SettingsAccountBoxFill0Wght600Grad0Opsz48'
import IconSettingsAccountBoxFill0Wght700Grad0Opsz48 from '../components/SettingsAccountBoxFill0Wght700Grad0Opsz48'
import IconSettingsAccountBoxFill1Wght100Grad0Opsz48 from '../components/SettingsAccountBoxFill1Wght100Grad0Opsz48'
import IconSettingsAccountBoxFill1Wght200Grad0Opsz48 from '../components/SettingsAccountBoxFill1Wght200Grad0Opsz48'
import IconSettingsAccountBoxFill1Wght300Grad0Opsz48 from '../components/SettingsAccountBoxFill1Wght300Grad0Opsz48'
import IconSettingsAccountBoxFill1Wght400Grad0Opsz48 from '../components/SettingsAccountBoxFill1Wght400Grad0Opsz48'
import IconSettingsAccountBoxFill1Wght500Grad0Opsz48 from '../components/SettingsAccountBoxFill1Wght500Grad0Opsz48'
import IconSettingsAccountBoxFill1Wght600Grad0Opsz48 from '../components/SettingsAccountBoxFill1Wght600Grad0Opsz48'
import IconSettingsAccountBoxFill1Wght700Grad0Opsz48 from '../components/SettingsAccountBoxFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSettingsAccountBox = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSettingsAccountBoxFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSettingsAccountBoxFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSettingsAccountBoxFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSettingsAccountBoxFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSettingsAccountBoxFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSettingsAccountBoxFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSettingsAccountBoxFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSettingsAccountBoxFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSettingsAccountBoxFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSettingsAccountBoxFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSettingsAccountBoxFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSettingsAccountBoxFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSettingsAccountBoxFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSettingsAccountBoxFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
