import IconCameraEnhanceFill0Wght100Grad0Opsz48 from '../components/CameraEnhanceFill0Wght100Grad0Opsz48'
import IconCameraEnhanceFill0Wght200Grad0Opsz48 from '../components/CameraEnhanceFill0Wght200Grad0Opsz48'
import IconCameraEnhanceFill0Wght300Grad0Opsz48 from '../components/CameraEnhanceFill0Wght300Grad0Opsz48'
import IconCameraEnhanceFill0Wght400Grad0Opsz48 from '../components/CameraEnhanceFill0Wght400Grad0Opsz48'
import IconCameraEnhanceFill0Wght500Grad0Opsz48 from '../components/CameraEnhanceFill0Wght500Grad0Opsz48'
import IconCameraEnhanceFill0Wght600Grad0Opsz48 from '../components/CameraEnhanceFill0Wght600Grad0Opsz48'
import IconCameraEnhanceFill0Wght700Grad0Opsz48 from '../components/CameraEnhanceFill0Wght700Grad0Opsz48'
import IconCameraEnhanceFill1Wght100Grad0Opsz48 from '../components/CameraEnhanceFill1Wght100Grad0Opsz48'
import IconCameraEnhanceFill1Wght200Grad0Opsz48 from '../components/CameraEnhanceFill1Wght200Grad0Opsz48'
import IconCameraEnhanceFill1Wght300Grad0Opsz48 from '../components/CameraEnhanceFill1Wght300Grad0Opsz48'
import IconCameraEnhanceFill1Wght400Grad0Opsz48 from '../components/CameraEnhanceFill1Wght400Grad0Opsz48'
import IconCameraEnhanceFill1Wght500Grad0Opsz48 from '../components/CameraEnhanceFill1Wght500Grad0Opsz48'
import IconCameraEnhanceFill1Wght600Grad0Opsz48 from '../components/CameraEnhanceFill1Wght600Grad0Opsz48'
import IconCameraEnhanceFill1Wght700Grad0Opsz48 from '../components/CameraEnhanceFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCameraEnhance = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCameraEnhanceFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCameraEnhanceFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCameraEnhanceFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCameraEnhanceFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCameraEnhanceFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCameraEnhanceFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCameraEnhanceFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCameraEnhanceFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCameraEnhanceFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCameraEnhanceFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCameraEnhanceFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCameraEnhanceFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCameraEnhanceFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCameraEnhanceFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
