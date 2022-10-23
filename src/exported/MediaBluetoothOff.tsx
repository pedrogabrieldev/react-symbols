import IconMediaBluetoothOffFill0Wght100Grad0Opsz48 from '../components/MediaBluetoothOffFill0Wght100Grad0Opsz48'
import IconMediaBluetoothOffFill0Wght200Grad0Opsz48 from '../components/MediaBluetoothOffFill0Wght200Grad0Opsz48'
import IconMediaBluetoothOffFill0Wght300Grad0Opsz48 from '../components/MediaBluetoothOffFill0Wght300Grad0Opsz48'
import IconMediaBluetoothOffFill0Wght400Grad0Opsz48 from '../components/MediaBluetoothOffFill0Wght400Grad0Opsz48'
import IconMediaBluetoothOffFill0Wght500Grad0Opsz48 from '../components/MediaBluetoothOffFill0Wght500Grad0Opsz48'
import IconMediaBluetoothOffFill0Wght600Grad0Opsz48 from '../components/MediaBluetoothOffFill0Wght600Grad0Opsz48'
import IconMediaBluetoothOffFill0Wght700Grad0Opsz48 from '../components/MediaBluetoothOffFill0Wght700Grad0Opsz48'
import IconMediaBluetoothOffFill1Wght100Grad0Opsz48 from '../components/MediaBluetoothOffFill1Wght100Grad0Opsz48'
import IconMediaBluetoothOffFill1Wght200Grad0Opsz48 from '../components/MediaBluetoothOffFill1Wght200Grad0Opsz48'
import IconMediaBluetoothOffFill1Wght300Grad0Opsz48 from '../components/MediaBluetoothOffFill1Wght300Grad0Opsz48'
import IconMediaBluetoothOffFill1Wght400Grad0Opsz48 from '../components/MediaBluetoothOffFill1Wght400Grad0Opsz48'
import IconMediaBluetoothOffFill1Wght500Grad0Opsz48 from '../components/MediaBluetoothOffFill1Wght500Grad0Opsz48'
import IconMediaBluetoothOffFill1Wght600Grad0Opsz48 from '../components/MediaBluetoothOffFill1Wght600Grad0Opsz48'
import IconMediaBluetoothOffFill1Wght700Grad0Opsz48 from '../components/MediaBluetoothOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMediaBluetoothOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMediaBluetoothOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMediaBluetoothOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMediaBluetoothOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMediaBluetoothOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMediaBluetoothOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMediaBluetoothOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMediaBluetoothOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMediaBluetoothOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMediaBluetoothOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMediaBluetoothOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMediaBluetoothOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMediaBluetoothOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMediaBluetoothOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMediaBluetoothOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
