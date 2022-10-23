import IconBluetoothSearchingFill0Wght100Grad0Opsz48 from '../components/BluetoothSearchingFill0Wght100Grad0Opsz48'
import IconBluetoothSearchingFill0Wght200Grad0Opsz48 from '../components/BluetoothSearchingFill0Wght200Grad0Opsz48'
import IconBluetoothSearchingFill0Wght300Grad0Opsz48 from '../components/BluetoothSearchingFill0Wght300Grad0Opsz48'
import IconBluetoothSearchingFill0Wght400Grad0Opsz48 from '../components/BluetoothSearchingFill0Wght400Grad0Opsz48'
import IconBluetoothSearchingFill0Wght500Grad0Opsz48 from '../components/BluetoothSearchingFill0Wght500Grad0Opsz48'
import IconBluetoothSearchingFill0Wght600Grad0Opsz48 from '../components/BluetoothSearchingFill0Wght600Grad0Opsz48'
import IconBluetoothSearchingFill0Wght700Grad0Opsz48 from '../components/BluetoothSearchingFill0Wght700Grad0Opsz48'
import IconBluetoothSearchingFill1Wght100Grad0Opsz48 from '../components/BluetoothSearchingFill1Wght100Grad0Opsz48'
import IconBluetoothSearchingFill1Wght200Grad0Opsz48 from '../components/BluetoothSearchingFill1Wght200Grad0Opsz48'
import IconBluetoothSearchingFill1Wght300Grad0Opsz48 from '../components/BluetoothSearchingFill1Wght300Grad0Opsz48'
import IconBluetoothSearchingFill1Wght400Grad0Opsz48 from '../components/BluetoothSearchingFill1Wght400Grad0Opsz48'
import IconBluetoothSearchingFill1Wght500Grad0Opsz48 from '../components/BluetoothSearchingFill1Wght500Grad0Opsz48'
import IconBluetoothSearchingFill1Wght600Grad0Opsz48 from '../components/BluetoothSearchingFill1Wght600Grad0Opsz48'
import IconBluetoothSearchingFill1Wght700Grad0Opsz48 from '../components/BluetoothSearchingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBluetoothSearching = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBluetoothSearchingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBluetoothSearchingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBluetoothSearchingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBluetoothSearchingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBluetoothSearchingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBluetoothSearchingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBluetoothSearchingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBluetoothSearchingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBluetoothSearchingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBluetoothSearchingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBluetoothSearchingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBluetoothSearchingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBluetoothSearchingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBluetoothSearchingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
