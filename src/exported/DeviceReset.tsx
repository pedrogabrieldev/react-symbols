import IconDeviceResetFill0Wght100Grad0Opsz48 from '../components/DeviceResetFill0Wght100Grad0Opsz48'
import IconDeviceResetFill0Wght200Grad0Opsz48 from '../components/DeviceResetFill0Wght200Grad0Opsz48'
import IconDeviceResetFill0Wght300Grad0Opsz48 from '../components/DeviceResetFill0Wght300Grad0Opsz48'
import IconDeviceResetFill0Wght400Grad0Opsz48 from '../components/DeviceResetFill0Wght400Grad0Opsz48'
import IconDeviceResetFill0Wght500Grad0Opsz48 from '../components/DeviceResetFill0Wght500Grad0Opsz48'
import IconDeviceResetFill0Wght600Grad0Opsz48 from '../components/DeviceResetFill0Wght600Grad0Opsz48'
import IconDeviceResetFill0Wght700Grad0Opsz48 from '../components/DeviceResetFill0Wght700Grad0Opsz48'
import IconDeviceResetFill1Wght100Grad0Opsz48 from '../components/DeviceResetFill1Wght100Grad0Opsz48'
import IconDeviceResetFill1Wght200Grad0Opsz48 from '../components/DeviceResetFill1Wght200Grad0Opsz48'
import IconDeviceResetFill1Wght300Grad0Opsz48 from '../components/DeviceResetFill1Wght300Grad0Opsz48'
import IconDeviceResetFill1Wght400Grad0Opsz48 from '../components/DeviceResetFill1Wght400Grad0Opsz48'
import IconDeviceResetFill1Wght500Grad0Opsz48 from '../components/DeviceResetFill1Wght500Grad0Opsz48'
import IconDeviceResetFill1Wght600Grad0Opsz48 from '../components/DeviceResetFill1Wght600Grad0Opsz48'
import IconDeviceResetFill1Wght700Grad0Opsz48 from '../components/DeviceResetFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDeviceReset = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDeviceResetFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDeviceResetFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDeviceResetFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDeviceResetFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDeviceResetFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDeviceResetFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDeviceResetFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDeviceResetFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDeviceResetFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDeviceResetFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDeviceResetFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDeviceResetFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDeviceResetFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDeviceResetFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
