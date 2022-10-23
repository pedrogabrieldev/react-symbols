import IconBluetoothDisabledFill0Wght100Grad0Opsz48 from '../components/BluetoothDisabledFill0Wght100Grad0Opsz48'
import IconBluetoothDisabledFill0Wght200Grad0Opsz48 from '../components/BluetoothDisabledFill0Wght200Grad0Opsz48'
import IconBluetoothDisabledFill0Wght300Grad0Opsz48 from '../components/BluetoothDisabledFill0Wght300Grad0Opsz48'
import IconBluetoothDisabledFill0Wght400Grad0Opsz48 from '../components/BluetoothDisabledFill0Wght400Grad0Opsz48'
import IconBluetoothDisabledFill0Wght500Grad0Opsz48 from '../components/BluetoothDisabledFill0Wght500Grad0Opsz48'
import IconBluetoothDisabledFill0Wght600Grad0Opsz48 from '../components/BluetoothDisabledFill0Wght600Grad0Opsz48'
import IconBluetoothDisabledFill0Wght700Grad0Opsz48 from '../components/BluetoothDisabledFill0Wght700Grad0Opsz48'
import IconBluetoothDisabledFill1Wght100Grad0Opsz48 from '../components/BluetoothDisabledFill1Wght100Grad0Opsz48'
import IconBluetoothDisabledFill1Wght200Grad0Opsz48 from '../components/BluetoothDisabledFill1Wght200Grad0Opsz48'
import IconBluetoothDisabledFill1Wght300Grad0Opsz48 from '../components/BluetoothDisabledFill1Wght300Grad0Opsz48'
import IconBluetoothDisabledFill1Wght400Grad0Opsz48 from '../components/BluetoothDisabledFill1Wght400Grad0Opsz48'
import IconBluetoothDisabledFill1Wght500Grad0Opsz48 from '../components/BluetoothDisabledFill1Wght500Grad0Opsz48'
import IconBluetoothDisabledFill1Wght600Grad0Opsz48 from '../components/BluetoothDisabledFill1Wght600Grad0Opsz48'
import IconBluetoothDisabledFill1Wght700Grad0Opsz48 from '../components/BluetoothDisabledFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBluetoothDisabled = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBluetoothDisabledFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBluetoothDisabledFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBluetoothDisabledFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBluetoothDisabledFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBluetoothDisabledFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBluetoothDisabledFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBluetoothDisabledFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBluetoothDisabledFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBluetoothDisabledFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBluetoothDisabledFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBluetoothDisabledFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBluetoothDisabledFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBluetoothDisabledFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBluetoothDisabledFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
