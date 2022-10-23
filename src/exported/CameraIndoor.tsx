import IconCameraIndoorFill0Wght100Grad0Opsz48 from '../components/CameraIndoorFill0Wght100Grad0Opsz48'
import IconCameraIndoorFill0Wght200Grad0Opsz48 from '../components/CameraIndoorFill0Wght200Grad0Opsz48'
import IconCameraIndoorFill0Wght300Grad0Opsz48 from '../components/CameraIndoorFill0Wght300Grad0Opsz48'
import IconCameraIndoorFill0Wght400Grad0Opsz48 from '../components/CameraIndoorFill0Wght400Grad0Opsz48'
import IconCameraIndoorFill0Wght500Grad0Opsz48 from '../components/CameraIndoorFill0Wght500Grad0Opsz48'
import IconCameraIndoorFill0Wght600Grad0Opsz48 from '../components/CameraIndoorFill0Wght600Grad0Opsz48'
import IconCameraIndoorFill0Wght700Grad0Opsz48 from '../components/CameraIndoorFill0Wght700Grad0Opsz48'
import IconCameraIndoorFill1Wght100Grad0Opsz48 from '../components/CameraIndoorFill1Wght100Grad0Opsz48'
import IconCameraIndoorFill1Wght200Grad0Opsz48 from '../components/CameraIndoorFill1Wght200Grad0Opsz48'
import IconCameraIndoorFill1Wght300Grad0Opsz48 from '../components/CameraIndoorFill1Wght300Grad0Opsz48'
import IconCameraIndoorFill1Wght400Grad0Opsz48 from '../components/CameraIndoorFill1Wght400Grad0Opsz48'
import IconCameraIndoorFill1Wght500Grad0Opsz48 from '../components/CameraIndoorFill1Wght500Grad0Opsz48'
import IconCameraIndoorFill1Wght600Grad0Opsz48 from '../components/CameraIndoorFill1Wght600Grad0Opsz48'
import IconCameraIndoorFill1Wght700Grad0Opsz48 from '../components/CameraIndoorFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCameraIndoor = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCameraIndoorFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCameraIndoorFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCameraIndoorFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCameraIndoorFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCameraIndoorFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCameraIndoorFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCameraIndoorFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCameraIndoorFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCameraIndoorFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCameraIndoorFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCameraIndoorFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCameraIndoorFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCameraIndoorFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCameraIndoorFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
