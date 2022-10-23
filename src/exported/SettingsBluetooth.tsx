import IconSettingsBluetoothFill0Wght100Grad0Opsz48 from '../components/SettingsBluetoothFill0Wght100Grad0Opsz48'
import IconSettingsBluetoothFill0Wght200Grad0Opsz48 from '../components/SettingsBluetoothFill0Wght200Grad0Opsz48'
import IconSettingsBluetoothFill0Wght300Grad0Opsz48 from '../components/SettingsBluetoothFill0Wght300Grad0Opsz48'
import IconSettingsBluetoothFill0Wght400Grad0Opsz48 from '../components/SettingsBluetoothFill0Wght400Grad0Opsz48'
import IconSettingsBluetoothFill0Wght500Grad0Opsz48 from '../components/SettingsBluetoothFill0Wght500Grad0Opsz48'
import IconSettingsBluetoothFill0Wght600Grad0Opsz48 from '../components/SettingsBluetoothFill0Wght600Grad0Opsz48'
import IconSettingsBluetoothFill0Wght700Grad0Opsz48 from '../components/SettingsBluetoothFill0Wght700Grad0Opsz48'
import IconSettingsBluetoothFill1Wght100Grad0Opsz48 from '../components/SettingsBluetoothFill1Wght100Grad0Opsz48'
import IconSettingsBluetoothFill1Wght200Grad0Opsz48 from '../components/SettingsBluetoothFill1Wght200Grad0Opsz48'
import IconSettingsBluetoothFill1Wght300Grad0Opsz48 from '../components/SettingsBluetoothFill1Wght300Grad0Opsz48'
import IconSettingsBluetoothFill1Wght400Grad0Opsz48 from '../components/SettingsBluetoothFill1Wght400Grad0Opsz48'
import IconSettingsBluetoothFill1Wght500Grad0Opsz48 from '../components/SettingsBluetoothFill1Wght500Grad0Opsz48'
import IconSettingsBluetoothFill1Wght600Grad0Opsz48 from '../components/SettingsBluetoothFill1Wght600Grad0Opsz48'
import IconSettingsBluetoothFill1Wght700Grad0Opsz48 from '../components/SettingsBluetoothFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSettingsBluetooth = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSettingsBluetoothFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSettingsBluetoothFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSettingsBluetoothFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSettingsBluetoothFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSettingsBluetoothFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSettingsBluetoothFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSettingsBluetoothFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSettingsBluetoothFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSettingsBluetoothFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSettingsBluetoothFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSettingsBluetoothFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSettingsBluetoothFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSettingsBluetoothFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSettingsBluetoothFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
