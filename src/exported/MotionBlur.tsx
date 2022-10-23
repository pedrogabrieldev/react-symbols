import IconMotionBlurFill0Wght100Grad0Opsz48 from '../components/MotionBlurFill0Wght100Grad0Opsz48'
import IconMotionBlurFill0Wght200Grad0Opsz48 from '../components/MotionBlurFill0Wght200Grad0Opsz48'
import IconMotionBlurFill0Wght300Grad0Opsz48 from '../components/MotionBlurFill0Wght300Grad0Opsz48'
import IconMotionBlurFill0Wght400Grad0Opsz48 from '../components/MotionBlurFill0Wght400Grad0Opsz48'
import IconMotionBlurFill0Wght500Grad0Opsz48 from '../components/MotionBlurFill0Wght500Grad0Opsz48'
import IconMotionBlurFill0Wght600Grad0Opsz48 from '../components/MotionBlurFill0Wght600Grad0Opsz48'
import IconMotionBlurFill0Wght700Grad0Opsz48 from '../components/MotionBlurFill0Wght700Grad0Opsz48'
import IconMotionBlurFill1Wght100Grad0Opsz48 from '../components/MotionBlurFill1Wght100Grad0Opsz48'
import IconMotionBlurFill1Wght200Grad0Opsz48 from '../components/MotionBlurFill1Wght200Grad0Opsz48'
import IconMotionBlurFill1Wght300Grad0Opsz48 from '../components/MotionBlurFill1Wght300Grad0Opsz48'
import IconMotionBlurFill1Wght400Grad0Opsz48 from '../components/MotionBlurFill1Wght400Grad0Opsz48'
import IconMotionBlurFill1Wght500Grad0Opsz48 from '../components/MotionBlurFill1Wght500Grad0Opsz48'
import IconMotionBlurFill1Wght600Grad0Opsz48 from '../components/MotionBlurFill1Wght600Grad0Opsz48'
import IconMotionBlurFill1Wght700Grad0Opsz48 from '../components/MotionBlurFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMotionBlur = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMotionBlurFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMotionBlurFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMotionBlurFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMotionBlurFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMotionBlurFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMotionBlurFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMotionBlurFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMotionBlurFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMotionBlurFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMotionBlurFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMotionBlurFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMotionBlurFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMotionBlurFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMotionBlurFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
