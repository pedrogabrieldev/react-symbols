import IconBluetoothFill0Wght100Grad0Opsz48 from '../components/BluetoothFill0Wght100Grad0Opsz48'
import IconBluetoothFill0Wght200Grad0Opsz48 from '../components/BluetoothFill0Wght200Grad0Opsz48'
import IconBluetoothFill0Wght300Grad0Opsz48 from '../components/BluetoothFill0Wght300Grad0Opsz48'
import IconBluetoothFill0Wght400Grad0Opsz48 from '../components/BluetoothFill0Wght400Grad0Opsz48'
import IconBluetoothFill0Wght500Grad0Opsz48 from '../components/BluetoothFill0Wght500Grad0Opsz48'
import IconBluetoothFill0Wght600Grad0Opsz48 from '../components/BluetoothFill0Wght600Grad0Opsz48'
import IconBluetoothFill0Wght700Grad0Opsz48 from '../components/BluetoothFill0Wght700Grad0Opsz48'
import IconBluetoothFill1Wght100Grad0Opsz48 from '../components/BluetoothFill1Wght100Grad0Opsz48'
import IconBluetoothFill1Wght200Grad0Opsz48 from '../components/BluetoothFill1Wght200Grad0Opsz48'
import IconBluetoothFill1Wght300Grad0Opsz48 from '../components/BluetoothFill1Wght300Grad0Opsz48'
import IconBluetoothFill1Wght400Grad0Opsz48 from '../components/BluetoothFill1Wght400Grad0Opsz48'
import IconBluetoothFill1Wght500Grad0Opsz48 from '../components/BluetoothFill1Wght500Grad0Opsz48'
import IconBluetoothFill1Wght600Grad0Opsz48 from '../components/BluetoothFill1Wght600Grad0Opsz48'
import IconBluetoothFill1Wght700Grad0Opsz48 from '../components/BluetoothFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBluetooth = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBluetoothFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBluetoothFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBluetoothFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBluetoothFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBluetoothFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBluetoothFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBluetoothFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBluetoothFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBluetoothFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBluetoothFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBluetoothFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBluetoothFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBluetoothFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBluetoothFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
