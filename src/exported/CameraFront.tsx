import IconCameraFrontFill0Wght100Grad0Opsz48 from '../components/CameraFrontFill0Wght100Grad0Opsz48'
import IconCameraFrontFill0Wght200Grad0Opsz48 from '../components/CameraFrontFill0Wght200Grad0Opsz48'
import IconCameraFrontFill0Wght300Grad0Opsz48 from '../components/CameraFrontFill0Wght300Grad0Opsz48'
import IconCameraFrontFill0Wght400Grad0Opsz48 from '../components/CameraFrontFill0Wght400Grad0Opsz48'
import IconCameraFrontFill0Wght500Grad0Opsz48 from '../components/CameraFrontFill0Wght500Grad0Opsz48'
import IconCameraFrontFill0Wght600Grad0Opsz48 from '../components/CameraFrontFill0Wght600Grad0Opsz48'
import IconCameraFrontFill0Wght700Grad0Opsz48 from '../components/CameraFrontFill0Wght700Grad0Opsz48'
import IconCameraFrontFill1Wght100Grad0Opsz48 from '../components/CameraFrontFill1Wght100Grad0Opsz48'
import IconCameraFrontFill1Wght200Grad0Opsz48 from '../components/CameraFrontFill1Wght200Grad0Opsz48'
import IconCameraFrontFill1Wght300Grad0Opsz48 from '../components/CameraFrontFill1Wght300Grad0Opsz48'
import IconCameraFrontFill1Wght400Grad0Opsz48 from '../components/CameraFrontFill1Wght400Grad0Opsz48'
import IconCameraFrontFill1Wght500Grad0Opsz48 from '../components/CameraFrontFill1Wght500Grad0Opsz48'
import IconCameraFrontFill1Wght600Grad0Opsz48 from '../components/CameraFrontFill1Wght600Grad0Opsz48'
import IconCameraFrontFill1Wght700Grad0Opsz48 from '../components/CameraFrontFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCameraFront = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCameraFrontFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCameraFrontFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCameraFrontFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCameraFrontFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCameraFrontFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCameraFrontFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCameraFrontFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCameraFrontFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCameraFrontFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCameraFrontFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCameraFrontFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCameraFrontFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCameraFrontFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCameraFrontFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
