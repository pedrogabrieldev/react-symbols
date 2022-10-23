import IconCameraOutdoorFill0Wght100Grad0Opsz48 from '../components/CameraOutdoorFill0Wght100Grad0Opsz48'
import IconCameraOutdoorFill0Wght200Grad0Opsz48 from '../components/CameraOutdoorFill0Wght200Grad0Opsz48'
import IconCameraOutdoorFill0Wght300Grad0Opsz48 from '../components/CameraOutdoorFill0Wght300Grad0Opsz48'
import IconCameraOutdoorFill0Wght400Grad0Opsz48 from '../components/CameraOutdoorFill0Wght400Grad0Opsz48'
import IconCameraOutdoorFill0Wght500Grad0Opsz48 from '../components/CameraOutdoorFill0Wght500Grad0Opsz48'
import IconCameraOutdoorFill0Wght600Grad0Opsz48 from '../components/CameraOutdoorFill0Wght600Grad0Opsz48'
import IconCameraOutdoorFill0Wght700Grad0Opsz48 from '../components/CameraOutdoorFill0Wght700Grad0Opsz48'
import IconCameraOutdoorFill1Wght100Grad0Opsz48 from '../components/CameraOutdoorFill1Wght100Grad0Opsz48'
import IconCameraOutdoorFill1Wght200Grad0Opsz48 from '../components/CameraOutdoorFill1Wght200Grad0Opsz48'
import IconCameraOutdoorFill1Wght300Grad0Opsz48 from '../components/CameraOutdoorFill1Wght300Grad0Opsz48'
import IconCameraOutdoorFill1Wght400Grad0Opsz48 from '../components/CameraOutdoorFill1Wght400Grad0Opsz48'
import IconCameraOutdoorFill1Wght500Grad0Opsz48 from '../components/CameraOutdoorFill1Wght500Grad0Opsz48'
import IconCameraOutdoorFill1Wght600Grad0Opsz48 from '../components/CameraOutdoorFill1Wght600Grad0Opsz48'
import IconCameraOutdoorFill1Wght700Grad0Opsz48 from '../components/CameraOutdoorFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCameraOutdoor = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCameraOutdoorFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCameraOutdoorFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCameraOutdoorFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCameraOutdoorFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCameraOutdoorFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCameraOutdoorFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCameraOutdoorFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCameraOutdoorFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCameraOutdoorFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCameraOutdoorFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCameraOutdoorFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCameraOutdoorFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCameraOutdoorFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCameraOutdoorFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
