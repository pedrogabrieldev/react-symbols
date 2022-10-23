import IconBluetoothDriveFill0Wght100Grad0Opsz48 from '../components/BluetoothDriveFill0Wght100Grad0Opsz48'
import IconBluetoothDriveFill0Wght200Grad0Opsz48 from '../components/BluetoothDriveFill0Wght200Grad0Opsz48'
import IconBluetoothDriveFill0Wght300Grad0Opsz48 from '../components/BluetoothDriveFill0Wght300Grad0Opsz48'
import IconBluetoothDriveFill0Wght400Grad0Opsz48 from '../components/BluetoothDriveFill0Wght400Grad0Opsz48'
import IconBluetoothDriveFill0Wght500Grad0Opsz48 from '../components/BluetoothDriveFill0Wght500Grad0Opsz48'
import IconBluetoothDriveFill0Wght600Grad0Opsz48 from '../components/BluetoothDriveFill0Wght600Grad0Opsz48'
import IconBluetoothDriveFill0Wght700Grad0Opsz48 from '../components/BluetoothDriveFill0Wght700Grad0Opsz48'
import IconBluetoothDriveFill1Wght100Grad0Opsz48 from '../components/BluetoothDriveFill1Wght100Grad0Opsz48'
import IconBluetoothDriveFill1Wght200Grad0Opsz48 from '../components/BluetoothDriveFill1Wght200Grad0Opsz48'
import IconBluetoothDriveFill1Wght300Grad0Opsz48 from '../components/BluetoothDriveFill1Wght300Grad0Opsz48'
import IconBluetoothDriveFill1Wght400Grad0Opsz48 from '../components/BluetoothDriveFill1Wght400Grad0Opsz48'
import IconBluetoothDriveFill1Wght500Grad0Opsz48 from '../components/BluetoothDriveFill1Wght500Grad0Opsz48'
import IconBluetoothDriveFill1Wght600Grad0Opsz48 from '../components/BluetoothDriveFill1Wght600Grad0Opsz48'
import IconBluetoothDriveFill1Wght700Grad0Opsz48 from '../components/BluetoothDriveFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBluetoothDrive = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBluetoothDriveFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBluetoothDriveFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBluetoothDriveFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBluetoothDriveFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBluetoothDriveFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBluetoothDriveFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBluetoothDriveFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBluetoothDriveFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBluetoothDriveFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBluetoothDriveFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBluetoothDriveFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBluetoothDriveFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBluetoothDriveFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBluetoothDriveFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
