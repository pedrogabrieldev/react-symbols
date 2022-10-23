import IconBluetoothConnectedFill0Wght100Grad0Opsz48 from '../components/BluetoothConnectedFill0Wght100Grad0Opsz48'
import IconBluetoothConnectedFill0Wght200Grad0Opsz48 from '../components/BluetoothConnectedFill0Wght200Grad0Opsz48'
import IconBluetoothConnectedFill0Wght300Grad0Opsz48 from '../components/BluetoothConnectedFill0Wght300Grad0Opsz48'
import IconBluetoothConnectedFill0Wght400Grad0Opsz48 from '../components/BluetoothConnectedFill0Wght400Grad0Opsz48'
import IconBluetoothConnectedFill0Wght500Grad0Opsz48 from '../components/BluetoothConnectedFill0Wght500Grad0Opsz48'
import IconBluetoothConnectedFill0Wght600Grad0Opsz48 from '../components/BluetoothConnectedFill0Wght600Grad0Opsz48'
import IconBluetoothConnectedFill0Wght700Grad0Opsz48 from '../components/BluetoothConnectedFill0Wght700Grad0Opsz48'
import IconBluetoothConnectedFill1Wght100Grad0Opsz48 from '../components/BluetoothConnectedFill1Wght100Grad0Opsz48'
import IconBluetoothConnectedFill1Wght200Grad0Opsz48 from '../components/BluetoothConnectedFill1Wght200Grad0Opsz48'
import IconBluetoothConnectedFill1Wght300Grad0Opsz48 from '../components/BluetoothConnectedFill1Wght300Grad0Opsz48'
import IconBluetoothConnectedFill1Wght400Grad0Opsz48 from '../components/BluetoothConnectedFill1Wght400Grad0Opsz48'
import IconBluetoothConnectedFill1Wght500Grad0Opsz48 from '../components/BluetoothConnectedFill1Wght500Grad0Opsz48'
import IconBluetoothConnectedFill1Wght600Grad0Opsz48 from '../components/BluetoothConnectedFill1Wght600Grad0Opsz48'
import IconBluetoothConnectedFill1Wght700Grad0Opsz48 from '../components/BluetoothConnectedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBluetoothConnected = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBluetoothConnectedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBluetoothConnectedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBluetoothConnectedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBluetoothConnectedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBluetoothConnectedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBluetoothConnectedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBluetoothConnectedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBluetoothConnectedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBluetoothConnectedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBluetoothConnectedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBluetoothConnectedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBluetoothConnectedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBluetoothConnectedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBluetoothConnectedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
