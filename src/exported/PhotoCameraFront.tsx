import IconPhotoCameraFrontFill0Wght100Grad0Opsz48 from '../components/PhotoCameraFrontFill0Wght100Grad0Opsz48'
import IconPhotoCameraFrontFill0Wght200Grad0Opsz48 from '../components/PhotoCameraFrontFill0Wght200Grad0Opsz48'
import IconPhotoCameraFrontFill0Wght300Grad0Opsz48 from '../components/PhotoCameraFrontFill0Wght300Grad0Opsz48'
import IconPhotoCameraFrontFill0Wght400Grad0Opsz48 from '../components/PhotoCameraFrontFill0Wght400Grad0Opsz48'
import IconPhotoCameraFrontFill0Wght500Grad0Opsz48 from '../components/PhotoCameraFrontFill0Wght500Grad0Opsz48'
import IconPhotoCameraFrontFill0Wght600Grad0Opsz48 from '../components/PhotoCameraFrontFill0Wght600Grad0Opsz48'
import IconPhotoCameraFrontFill0Wght700Grad0Opsz48 from '../components/PhotoCameraFrontFill0Wght700Grad0Opsz48'
import IconPhotoCameraFrontFill1Wght100Grad0Opsz48 from '../components/PhotoCameraFrontFill1Wght100Grad0Opsz48'
import IconPhotoCameraFrontFill1Wght200Grad0Opsz48 from '../components/PhotoCameraFrontFill1Wght200Grad0Opsz48'
import IconPhotoCameraFrontFill1Wght300Grad0Opsz48 from '../components/PhotoCameraFrontFill1Wght300Grad0Opsz48'
import IconPhotoCameraFrontFill1Wght400Grad0Opsz48 from '../components/PhotoCameraFrontFill1Wght400Grad0Opsz48'
import IconPhotoCameraFrontFill1Wght500Grad0Opsz48 from '../components/PhotoCameraFrontFill1Wght500Grad0Opsz48'
import IconPhotoCameraFrontFill1Wght600Grad0Opsz48 from '../components/PhotoCameraFrontFill1Wght600Grad0Opsz48'
import IconPhotoCameraFrontFill1Wght700Grad0Opsz48 from '../components/PhotoCameraFrontFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPhotoCameraFront = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPhotoCameraFrontFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPhotoCameraFrontFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPhotoCameraFrontFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPhotoCameraFrontFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPhotoCameraFrontFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPhotoCameraFrontFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPhotoCameraFrontFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPhotoCameraFrontFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPhotoCameraFrontFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPhotoCameraFrontFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPhotoCameraFrontFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPhotoCameraFrontFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPhotoCameraFrontFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPhotoCameraFrontFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
