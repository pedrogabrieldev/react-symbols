import IconCameraFill0Wght100Grad0Opsz48 from '../components/CameraFill0Wght100Grad0Opsz48'
import IconCameraFill0Wght200Grad0Opsz48 from '../components/CameraFill0Wght200Grad0Opsz48'
import IconCameraFill0Wght300Grad0Opsz48 from '../components/CameraFill0Wght300Grad0Opsz48'
import IconCameraFill0Wght400Grad0Opsz48 from '../components/CameraFill0Wght400Grad0Opsz48'
import IconCameraFill0Wght500Grad0Opsz48 from '../components/CameraFill0Wght500Grad0Opsz48'
import IconCameraFill0Wght600Grad0Opsz48 from '../components/CameraFill0Wght600Grad0Opsz48'
import IconCameraFill0Wght700Grad0Opsz48 from '../components/CameraFill0Wght700Grad0Opsz48'
import IconCameraFill1Wght100Grad0Opsz48 from '../components/CameraFill1Wght100Grad0Opsz48'
import IconCameraFill1Wght200Grad0Opsz48 from '../components/CameraFill1Wght200Grad0Opsz48'
import IconCameraFill1Wght300Grad0Opsz48 from '../components/CameraFill1Wght300Grad0Opsz48'
import IconCameraFill1Wght400Grad0Opsz48 from '../components/CameraFill1Wght400Grad0Opsz48'
import IconCameraFill1Wght500Grad0Opsz48 from '../components/CameraFill1Wght500Grad0Opsz48'
import IconCameraFill1Wght600Grad0Opsz48 from '../components/CameraFill1Wght600Grad0Opsz48'
import IconCameraFill1Wght700Grad0Opsz48 from '../components/CameraFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCamera = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCameraFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCameraFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCameraFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCameraFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCameraFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCameraFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCameraFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCameraFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCameraFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCameraFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCameraFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCameraFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCameraFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCameraFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
