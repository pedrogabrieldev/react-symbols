import IconMediaBluetoothOnFill0Wght100Grad0Opsz48 from '../components/MediaBluetoothOnFill0Wght100Grad0Opsz48'
import IconMediaBluetoothOnFill0Wght200Grad0Opsz48 from '../components/MediaBluetoothOnFill0Wght200Grad0Opsz48'
import IconMediaBluetoothOnFill0Wght300Grad0Opsz48 from '../components/MediaBluetoothOnFill0Wght300Grad0Opsz48'
import IconMediaBluetoothOnFill0Wght400Grad0Opsz48 from '../components/MediaBluetoothOnFill0Wght400Grad0Opsz48'
import IconMediaBluetoothOnFill0Wght500Grad0Opsz48 from '../components/MediaBluetoothOnFill0Wght500Grad0Opsz48'
import IconMediaBluetoothOnFill0Wght600Grad0Opsz48 from '../components/MediaBluetoothOnFill0Wght600Grad0Opsz48'
import IconMediaBluetoothOnFill0Wght700Grad0Opsz48 from '../components/MediaBluetoothOnFill0Wght700Grad0Opsz48'
import IconMediaBluetoothOnFill1Wght100Grad0Opsz48 from '../components/MediaBluetoothOnFill1Wght100Grad0Opsz48'
import IconMediaBluetoothOnFill1Wght200Grad0Opsz48 from '../components/MediaBluetoothOnFill1Wght200Grad0Opsz48'
import IconMediaBluetoothOnFill1Wght300Grad0Opsz48 from '../components/MediaBluetoothOnFill1Wght300Grad0Opsz48'
import IconMediaBluetoothOnFill1Wght400Grad0Opsz48 from '../components/MediaBluetoothOnFill1Wght400Grad0Opsz48'
import IconMediaBluetoothOnFill1Wght500Grad0Opsz48 from '../components/MediaBluetoothOnFill1Wght500Grad0Opsz48'
import IconMediaBluetoothOnFill1Wght600Grad0Opsz48 from '../components/MediaBluetoothOnFill1Wght600Grad0Opsz48'
import IconMediaBluetoothOnFill1Wght700Grad0Opsz48 from '../components/MediaBluetoothOnFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMediaBluetoothOn = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMediaBluetoothOnFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMediaBluetoothOnFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMediaBluetoothOnFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMediaBluetoothOnFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMediaBluetoothOnFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMediaBluetoothOnFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMediaBluetoothOnFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMediaBluetoothOnFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMediaBluetoothOnFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMediaBluetoothOnFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMediaBluetoothOnFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMediaBluetoothOnFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMediaBluetoothOnFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMediaBluetoothOnFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
