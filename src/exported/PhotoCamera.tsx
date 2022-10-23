import IconPhotoCameraFill0Wght100Grad0Opsz48 from '../components/PhotoCameraFill0Wght100Grad0Opsz48'
import IconPhotoCameraFill0Wght200Grad0Opsz48 from '../components/PhotoCameraFill0Wght200Grad0Opsz48'
import IconPhotoCameraFill0Wght300Grad0Opsz48 from '../components/PhotoCameraFill0Wght300Grad0Opsz48'
import IconPhotoCameraFill0Wght400Grad0Opsz48 from '../components/PhotoCameraFill0Wght400Grad0Opsz48'
import IconPhotoCameraFill0Wght500Grad0Opsz48 from '../components/PhotoCameraFill0Wght500Grad0Opsz48'
import IconPhotoCameraFill0Wght600Grad0Opsz48 from '../components/PhotoCameraFill0Wght600Grad0Opsz48'
import IconPhotoCameraFill0Wght700Grad0Opsz48 from '../components/PhotoCameraFill0Wght700Grad0Opsz48'
import IconPhotoCameraFill1Wght100Grad0Opsz48 from '../components/PhotoCameraFill1Wght100Grad0Opsz48'
import IconPhotoCameraFill1Wght200Grad0Opsz48 from '../components/PhotoCameraFill1Wght200Grad0Opsz48'
import IconPhotoCameraFill1Wght300Grad0Opsz48 from '../components/PhotoCameraFill1Wght300Grad0Opsz48'
import IconPhotoCameraFill1Wght400Grad0Opsz48 from '../components/PhotoCameraFill1Wght400Grad0Opsz48'
import IconPhotoCameraFill1Wght500Grad0Opsz48 from '../components/PhotoCameraFill1Wght500Grad0Opsz48'
import IconPhotoCameraFill1Wght600Grad0Opsz48 from '../components/PhotoCameraFill1Wght600Grad0Opsz48'
import IconPhotoCameraFill1Wght700Grad0Opsz48 from '../components/PhotoCameraFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPhotoCamera = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPhotoCameraFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPhotoCameraFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPhotoCameraFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPhotoCameraFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPhotoCameraFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPhotoCameraFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPhotoCameraFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPhotoCameraFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPhotoCameraFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPhotoCameraFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPhotoCameraFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPhotoCameraFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPhotoCameraFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPhotoCameraFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
