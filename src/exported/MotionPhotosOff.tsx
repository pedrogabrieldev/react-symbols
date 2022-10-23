import IconMotionPhotosOffFill0Wght100Grad0Opsz48 from '../components/MotionPhotosOffFill0Wght100Grad0Opsz48'
import IconMotionPhotosOffFill0Wght200Grad0Opsz48 from '../components/MotionPhotosOffFill0Wght200Grad0Opsz48'
import IconMotionPhotosOffFill0Wght300Grad0Opsz48 from '../components/MotionPhotosOffFill0Wght300Grad0Opsz48'
import IconMotionPhotosOffFill0Wght400Grad0Opsz48 from '../components/MotionPhotosOffFill0Wght400Grad0Opsz48'
import IconMotionPhotosOffFill0Wght500Grad0Opsz48 from '../components/MotionPhotosOffFill0Wght500Grad0Opsz48'
import IconMotionPhotosOffFill0Wght600Grad0Opsz48 from '../components/MotionPhotosOffFill0Wght600Grad0Opsz48'
import IconMotionPhotosOffFill0Wght700Grad0Opsz48 from '../components/MotionPhotosOffFill0Wght700Grad0Opsz48'
import IconMotionPhotosOffFill1Wght100Grad0Opsz48 from '../components/MotionPhotosOffFill1Wght100Grad0Opsz48'
import IconMotionPhotosOffFill1Wght200Grad0Opsz48 from '../components/MotionPhotosOffFill1Wght200Grad0Opsz48'
import IconMotionPhotosOffFill1Wght300Grad0Opsz48 from '../components/MotionPhotosOffFill1Wght300Grad0Opsz48'
import IconMotionPhotosOffFill1Wght400Grad0Opsz48 from '../components/MotionPhotosOffFill1Wght400Grad0Opsz48'
import IconMotionPhotosOffFill1Wght500Grad0Opsz48 from '../components/MotionPhotosOffFill1Wght500Grad0Opsz48'
import IconMotionPhotosOffFill1Wght600Grad0Opsz48 from '../components/MotionPhotosOffFill1Wght600Grad0Opsz48'
import IconMotionPhotosOffFill1Wght700Grad0Opsz48 from '../components/MotionPhotosOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMotionPhotosOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMotionPhotosOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMotionPhotosOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMotionPhotosOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMotionPhotosOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMotionPhotosOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMotionPhotosOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMotionPhotosOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMotionPhotosOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMotionPhotosOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMotionPhotosOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMotionPhotosOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMotionPhotosOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMotionPhotosOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMotionPhotosOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
