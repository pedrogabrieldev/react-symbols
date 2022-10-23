import IconMotionPhotosAutoFill0Wght100Grad0Opsz48 from '../components/MotionPhotosAutoFill0Wght100Grad0Opsz48'
import IconMotionPhotosAutoFill0Wght200Grad0Opsz48 from '../components/MotionPhotosAutoFill0Wght200Grad0Opsz48'
import IconMotionPhotosAutoFill0Wght300Grad0Opsz48 from '../components/MotionPhotosAutoFill0Wght300Grad0Opsz48'
import IconMotionPhotosAutoFill0Wght400Grad0Opsz48 from '../components/MotionPhotosAutoFill0Wght400Grad0Opsz48'
import IconMotionPhotosAutoFill0Wght500Grad0Opsz48 from '../components/MotionPhotosAutoFill0Wght500Grad0Opsz48'
import IconMotionPhotosAutoFill0Wght600Grad0Opsz48 from '../components/MotionPhotosAutoFill0Wght600Grad0Opsz48'
import IconMotionPhotosAutoFill0Wght700Grad0Opsz48 from '../components/MotionPhotosAutoFill0Wght700Grad0Opsz48'
import IconMotionPhotosAutoFill1Wght100Grad0Opsz48 from '../components/MotionPhotosAutoFill1Wght100Grad0Opsz48'
import IconMotionPhotosAutoFill1Wght200Grad0Opsz48 from '../components/MotionPhotosAutoFill1Wght200Grad0Opsz48'
import IconMotionPhotosAutoFill1Wght300Grad0Opsz48 from '../components/MotionPhotosAutoFill1Wght300Grad0Opsz48'
import IconMotionPhotosAutoFill1Wght400Grad0Opsz48 from '../components/MotionPhotosAutoFill1Wght400Grad0Opsz48'
import IconMotionPhotosAutoFill1Wght500Grad0Opsz48 from '../components/MotionPhotosAutoFill1Wght500Grad0Opsz48'
import IconMotionPhotosAutoFill1Wght600Grad0Opsz48 from '../components/MotionPhotosAutoFill1Wght600Grad0Opsz48'
import IconMotionPhotosAutoFill1Wght700Grad0Opsz48 from '../components/MotionPhotosAutoFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMotionPhotosAuto = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMotionPhotosAutoFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMotionPhotosAutoFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMotionPhotosAutoFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMotionPhotosAutoFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMotionPhotosAutoFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMotionPhotosAutoFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMotionPhotosAutoFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMotionPhotosAutoFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMotionPhotosAutoFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMotionPhotosAutoFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMotionPhotosAutoFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMotionPhotosAutoFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMotionPhotosAutoFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMotionPhotosAutoFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
