import IconCameraRollFill0Wght100Grad0Opsz48 from '../components/CameraRollFill0Wght100Grad0Opsz48'
import IconCameraRollFill0Wght200Grad0Opsz48 from '../components/CameraRollFill0Wght200Grad0Opsz48'
import IconCameraRollFill0Wght300Grad0Opsz48 from '../components/CameraRollFill0Wght300Grad0Opsz48'
import IconCameraRollFill0Wght400Grad0Opsz48 from '../components/CameraRollFill0Wght400Grad0Opsz48'
import IconCameraRollFill0Wght500Grad0Opsz48 from '../components/CameraRollFill0Wght500Grad0Opsz48'
import IconCameraRollFill0Wght600Grad0Opsz48 from '../components/CameraRollFill0Wght600Grad0Opsz48'
import IconCameraRollFill0Wght700Grad0Opsz48 from '../components/CameraRollFill0Wght700Grad0Opsz48'
import IconCameraRollFill1Wght100Grad0Opsz48 from '../components/CameraRollFill1Wght100Grad0Opsz48'
import IconCameraRollFill1Wght200Grad0Opsz48 from '../components/CameraRollFill1Wght200Grad0Opsz48'
import IconCameraRollFill1Wght300Grad0Opsz48 from '../components/CameraRollFill1Wght300Grad0Opsz48'
import IconCameraRollFill1Wght400Grad0Opsz48 from '../components/CameraRollFill1Wght400Grad0Opsz48'
import IconCameraRollFill1Wght500Grad0Opsz48 from '../components/CameraRollFill1Wght500Grad0Opsz48'
import IconCameraRollFill1Wght600Grad0Opsz48 from '../components/CameraRollFill1Wght600Grad0Opsz48'
import IconCameraRollFill1Wght700Grad0Opsz48 from '../components/CameraRollFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCameraRoll = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCameraRollFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCameraRollFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCameraRollFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCameraRollFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCameraRollFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCameraRollFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCameraRollFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCameraRollFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCameraRollFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCameraRollFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCameraRollFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCameraRollFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCameraRollFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCameraRollFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
