import IconDevicesFill0Wght100Grad0Opsz48 from '../components/DevicesFill0Wght100Grad0Opsz48'
import IconDevicesFill0Wght200Grad0Opsz48 from '../components/DevicesFill0Wght200Grad0Opsz48'
import IconDevicesFill0Wght300Grad0Opsz48 from '../components/DevicesFill0Wght300Grad0Opsz48'
import IconDevicesFill0Wght400Grad0Opsz48 from '../components/DevicesFill0Wght400Grad0Opsz48'
import IconDevicesFill0Wght500Grad0Opsz48 from '../components/DevicesFill0Wght500Grad0Opsz48'
import IconDevicesFill0Wght600Grad0Opsz48 from '../components/DevicesFill0Wght600Grad0Opsz48'
import IconDevicesFill0Wght700Grad0Opsz48 from '../components/DevicesFill0Wght700Grad0Opsz48'
import IconDevicesFill1Wght100Grad0Opsz48 from '../components/DevicesFill1Wght100Grad0Opsz48'
import IconDevicesFill1Wght200Grad0Opsz48 from '../components/DevicesFill1Wght200Grad0Opsz48'
import IconDevicesFill1Wght300Grad0Opsz48 from '../components/DevicesFill1Wght300Grad0Opsz48'
import IconDevicesFill1Wght400Grad0Opsz48 from '../components/DevicesFill1Wght400Grad0Opsz48'
import IconDevicesFill1Wght500Grad0Opsz48 from '../components/DevicesFill1Wght500Grad0Opsz48'
import IconDevicesFill1Wght600Grad0Opsz48 from '../components/DevicesFill1Wght600Grad0Opsz48'
import IconDevicesFill1Wght700Grad0Opsz48 from '../components/DevicesFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDevices = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDevicesFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDevicesFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDevicesFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDevicesFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDevicesFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDevicesFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDevicesFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDevicesFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDevicesFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDevicesFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDevicesFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDevicesFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDevicesFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDevicesFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
