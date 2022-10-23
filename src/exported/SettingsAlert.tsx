import IconSettingsAlertFill0Wght100Grad0Opsz48 from '../components/SettingsAlertFill0Wght100Grad0Opsz48'
import IconSettingsAlertFill0Wght200Grad0Opsz48 from '../components/SettingsAlertFill0Wght200Grad0Opsz48'
import IconSettingsAlertFill0Wght300Grad0Opsz48 from '../components/SettingsAlertFill0Wght300Grad0Opsz48'
import IconSettingsAlertFill0Wght400Grad0Opsz48 from '../components/SettingsAlertFill0Wght400Grad0Opsz48'
import IconSettingsAlertFill0Wght500Grad0Opsz48 from '../components/SettingsAlertFill0Wght500Grad0Opsz48'
import IconSettingsAlertFill0Wght600Grad0Opsz48 from '../components/SettingsAlertFill0Wght600Grad0Opsz48'
import IconSettingsAlertFill0Wght700Grad0Opsz48 from '../components/SettingsAlertFill0Wght700Grad0Opsz48'
import IconSettingsAlertFill1Wght100Grad0Opsz48 from '../components/SettingsAlertFill1Wght100Grad0Opsz48'
import IconSettingsAlertFill1Wght200Grad0Opsz48 from '../components/SettingsAlertFill1Wght200Grad0Opsz48'
import IconSettingsAlertFill1Wght300Grad0Opsz48 from '../components/SettingsAlertFill1Wght300Grad0Opsz48'
import IconSettingsAlertFill1Wght400Grad0Opsz48 from '../components/SettingsAlertFill1Wght400Grad0Opsz48'
import IconSettingsAlertFill1Wght500Grad0Opsz48 from '../components/SettingsAlertFill1Wght500Grad0Opsz48'
import IconSettingsAlertFill1Wght600Grad0Opsz48 from '../components/SettingsAlertFill1Wght600Grad0Opsz48'
import IconSettingsAlertFill1Wght700Grad0Opsz48 from '../components/SettingsAlertFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSettingsAlert = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSettingsAlertFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSettingsAlertFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSettingsAlertFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSettingsAlertFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSettingsAlertFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSettingsAlertFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSettingsAlertFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSettingsAlertFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSettingsAlertFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSettingsAlertFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSettingsAlertFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSettingsAlertFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSettingsAlertFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSettingsAlertFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
