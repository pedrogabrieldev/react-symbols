import IconDeviceHubFill0Wght100Grad0Opsz48 from '../components/DeviceHubFill0Wght100Grad0Opsz48'
import IconDeviceHubFill0Wght200Grad0Opsz48 from '../components/DeviceHubFill0Wght200Grad0Opsz48'
import IconDeviceHubFill0Wght300Grad0Opsz48 from '../components/DeviceHubFill0Wght300Grad0Opsz48'
import IconDeviceHubFill0Wght400Grad0Opsz48 from '../components/DeviceHubFill0Wght400Grad0Opsz48'
import IconDeviceHubFill0Wght500Grad0Opsz48 from '../components/DeviceHubFill0Wght500Grad0Opsz48'
import IconDeviceHubFill0Wght600Grad0Opsz48 from '../components/DeviceHubFill0Wght600Grad0Opsz48'
import IconDeviceHubFill0Wght700Grad0Opsz48 from '../components/DeviceHubFill0Wght700Grad0Opsz48'
import IconDeviceHubFill1Wght100Grad0Opsz48 from '../components/DeviceHubFill1Wght100Grad0Opsz48'
import IconDeviceHubFill1Wght200Grad0Opsz48 from '../components/DeviceHubFill1Wght200Grad0Opsz48'
import IconDeviceHubFill1Wght300Grad0Opsz48 from '../components/DeviceHubFill1Wght300Grad0Opsz48'
import IconDeviceHubFill1Wght400Grad0Opsz48 from '../components/DeviceHubFill1Wght400Grad0Opsz48'
import IconDeviceHubFill1Wght500Grad0Opsz48 from '../components/DeviceHubFill1Wght500Grad0Opsz48'
import IconDeviceHubFill1Wght600Grad0Opsz48 from '../components/DeviceHubFill1Wght600Grad0Opsz48'
import IconDeviceHubFill1Wght700Grad0Opsz48 from '../components/DeviceHubFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDeviceHub = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDeviceHubFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDeviceHubFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDeviceHubFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDeviceHubFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDeviceHubFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDeviceHubFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDeviceHubFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDeviceHubFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDeviceHubFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDeviceHubFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDeviceHubFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDeviceHubFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDeviceHubFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDeviceHubFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
