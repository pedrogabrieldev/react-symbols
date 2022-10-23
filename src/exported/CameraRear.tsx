import IconCameraRearFill0Wght100Grad0Opsz48 from '../components/CameraRearFill0Wght100Grad0Opsz48'
import IconCameraRearFill0Wght200Grad0Opsz48 from '../components/CameraRearFill0Wght200Grad0Opsz48'
import IconCameraRearFill0Wght300Grad0Opsz48 from '../components/CameraRearFill0Wght300Grad0Opsz48'
import IconCameraRearFill0Wght400Grad0Opsz48 from '../components/CameraRearFill0Wght400Grad0Opsz48'
import IconCameraRearFill0Wght500Grad0Opsz48 from '../components/CameraRearFill0Wght500Grad0Opsz48'
import IconCameraRearFill0Wght600Grad0Opsz48 from '../components/CameraRearFill0Wght600Grad0Opsz48'
import IconCameraRearFill0Wght700Grad0Opsz48 from '../components/CameraRearFill0Wght700Grad0Opsz48'
import IconCameraRearFill1Wght100Grad0Opsz48 from '../components/CameraRearFill1Wght100Grad0Opsz48'
import IconCameraRearFill1Wght200Grad0Opsz48 from '../components/CameraRearFill1Wght200Grad0Opsz48'
import IconCameraRearFill1Wght300Grad0Opsz48 from '../components/CameraRearFill1Wght300Grad0Opsz48'
import IconCameraRearFill1Wght400Grad0Opsz48 from '../components/CameraRearFill1Wght400Grad0Opsz48'
import IconCameraRearFill1Wght500Grad0Opsz48 from '../components/CameraRearFill1Wght500Grad0Opsz48'
import IconCameraRearFill1Wght600Grad0Opsz48 from '../components/CameraRearFill1Wght600Grad0Opsz48'
import IconCameraRearFill1Wght700Grad0Opsz48 from '../components/CameraRearFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCameraRear = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCameraRearFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCameraRearFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCameraRearFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCameraRearFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCameraRearFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCameraRearFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCameraRearFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCameraRearFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCameraRearFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCameraRearFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCameraRearFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCameraRearFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCameraRearFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCameraRearFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
