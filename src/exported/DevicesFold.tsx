import IconDevicesFoldFill0Wght100Grad0Opsz48 from '../components/DevicesFoldFill0Wght100Grad0Opsz48'
import IconDevicesFoldFill0Wght200Grad0Opsz48 from '../components/DevicesFoldFill0Wght200Grad0Opsz48'
import IconDevicesFoldFill0Wght300Grad0Opsz48 from '../components/DevicesFoldFill0Wght300Grad0Opsz48'
import IconDevicesFoldFill0Wght400Grad0Opsz48 from '../components/DevicesFoldFill0Wght400Grad0Opsz48'
import IconDevicesFoldFill0Wght500Grad0Opsz48 from '../components/DevicesFoldFill0Wght500Grad0Opsz48'
import IconDevicesFoldFill0Wght600Grad0Opsz48 from '../components/DevicesFoldFill0Wght600Grad0Opsz48'
import IconDevicesFoldFill0Wght700Grad0Opsz48 from '../components/DevicesFoldFill0Wght700Grad0Opsz48'
import IconDevicesFoldFill1Wght100Grad0Opsz48 from '../components/DevicesFoldFill1Wght100Grad0Opsz48'
import IconDevicesFoldFill1Wght200Grad0Opsz48 from '../components/DevicesFoldFill1Wght200Grad0Opsz48'
import IconDevicesFoldFill1Wght300Grad0Opsz48 from '../components/DevicesFoldFill1Wght300Grad0Opsz48'
import IconDevicesFoldFill1Wght400Grad0Opsz48 from '../components/DevicesFoldFill1Wght400Grad0Opsz48'
import IconDevicesFoldFill1Wght500Grad0Opsz48 from '../components/DevicesFoldFill1Wght500Grad0Opsz48'
import IconDevicesFoldFill1Wght600Grad0Opsz48 from '../components/DevicesFoldFill1Wght600Grad0Opsz48'
import IconDevicesFoldFill1Wght700Grad0Opsz48 from '../components/DevicesFoldFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDevicesFold = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDevicesFoldFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDevicesFoldFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDevicesFoldFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDevicesFoldFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDevicesFoldFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDevicesFoldFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDevicesFoldFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDevicesFoldFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDevicesFoldFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDevicesFoldFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDevicesFoldFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDevicesFoldFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDevicesFoldFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDevicesFoldFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
