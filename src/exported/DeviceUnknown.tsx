import IconDeviceUnknownFill0Wght100Grad0Opsz48 from '../components/DeviceUnknownFill0Wght100Grad0Opsz48'
import IconDeviceUnknownFill0Wght200Grad0Opsz48 from '../components/DeviceUnknownFill0Wght200Grad0Opsz48'
import IconDeviceUnknownFill0Wght300Grad0Opsz48 from '../components/DeviceUnknownFill0Wght300Grad0Opsz48'
import IconDeviceUnknownFill0Wght400Grad0Opsz48 from '../components/DeviceUnknownFill0Wght400Grad0Opsz48'
import IconDeviceUnknownFill0Wght500Grad0Opsz48 from '../components/DeviceUnknownFill0Wght500Grad0Opsz48'
import IconDeviceUnknownFill0Wght600Grad0Opsz48 from '../components/DeviceUnknownFill0Wght600Grad0Opsz48'
import IconDeviceUnknownFill0Wght700Grad0Opsz48 from '../components/DeviceUnknownFill0Wght700Grad0Opsz48'
import IconDeviceUnknownFill1Wght100Grad0Opsz48 from '../components/DeviceUnknownFill1Wght100Grad0Opsz48'
import IconDeviceUnknownFill1Wght200Grad0Opsz48 from '../components/DeviceUnknownFill1Wght200Grad0Opsz48'
import IconDeviceUnknownFill1Wght300Grad0Opsz48 from '../components/DeviceUnknownFill1Wght300Grad0Opsz48'
import IconDeviceUnknownFill1Wght400Grad0Opsz48 from '../components/DeviceUnknownFill1Wght400Grad0Opsz48'
import IconDeviceUnknownFill1Wght500Grad0Opsz48 from '../components/DeviceUnknownFill1Wght500Grad0Opsz48'
import IconDeviceUnknownFill1Wght600Grad0Opsz48 from '../components/DeviceUnknownFill1Wght600Grad0Opsz48'
import IconDeviceUnknownFill1Wght700Grad0Opsz48 from '../components/DeviceUnknownFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDeviceUnknown = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDeviceUnknownFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDeviceUnknownFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDeviceUnknownFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDeviceUnknownFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDeviceUnknownFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDeviceUnknownFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDeviceUnknownFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDeviceUnknownFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDeviceUnknownFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDeviceUnknownFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDeviceUnknownFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDeviceUnknownFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDeviceUnknownFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDeviceUnknownFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
