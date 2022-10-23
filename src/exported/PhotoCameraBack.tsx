import IconPhotoCameraBackFill0Wght100Grad0Opsz48 from '../components/PhotoCameraBackFill0Wght100Grad0Opsz48'
import IconPhotoCameraBackFill0Wght200Grad0Opsz48 from '../components/PhotoCameraBackFill0Wght200Grad0Opsz48'
import IconPhotoCameraBackFill0Wght300Grad0Opsz48 from '../components/PhotoCameraBackFill0Wght300Grad0Opsz48'
import IconPhotoCameraBackFill0Wght400Grad0Opsz48 from '../components/PhotoCameraBackFill0Wght400Grad0Opsz48'
import IconPhotoCameraBackFill0Wght500Grad0Opsz48 from '../components/PhotoCameraBackFill0Wght500Grad0Opsz48'
import IconPhotoCameraBackFill0Wght600Grad0Opsz48 from '../components/PhotoCameraBackFill0Wght600Grad0Opsz48'
import IconPhotoCameraBackFill0Wght700Grad0Opsz48 from '../components/PhotoCameraBackFill0Wght700Grad0Opsz48'
import IconPhotoCameraBackFill1Wght100Grad0Opsz48 from '../components/PhotoCameraBackFill1Wght100Grad0Opsz48'
import IconPhotoCameraBackFill1Wght200Grad0Opsz48 from '../components/PhotoCameraBackFill1Wght200Grad0Opsz48'
import IconPhotoCameraBackFill1Wght300Grad0Opsz48 from '../components/PhotoCameraBackFill1Wght300Grad0Opsz48'
import IconPhotoCameraBackFill1Wght400Grad0Opsz48 from '../components/PhotoCameraBackFill1Wght400Grad0Opsz48'
import IconPhotoCameraBackFill1Wght500Grad0Opsz48 from '../components/PhotoCameraBackFill1Wght500Grad0Opsz48'
import IconPhotoCameraBackFill1Wght600Grad0Opsz48 from '../components/PhotoCameraBackFill1Wght600Grad0Opsz48'
import IconPhotoCameraBackFill1Wght700Grad0Opsz48 from '../components/PhotoCameraBackFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPhotoCameraBack = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPhotoCameraBackFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPhotoCameraBackFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPhotoCameraBackFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPhotoCameraBackFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPhotoCameraBackFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPhotoCameraBackFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPhotoCameraBackFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPhotoCameraBackFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPhotoCameraBackFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPhotoCameraBackFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPhotoCameraBackFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPhotoCameraBackFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPhotoCameraBackFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPhotoCameraBackFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
