import IconMotionModeFill0Wght100Grad0Opsz48 from '../components/MotionModeFill0Wght100Grad0Opsz48'
import IconMotionModeFill0Wght200Grad0Opsz48 from '../components/MotionModeFill0Wght200Grad0Opsz48'
import IconMotionModeFill0Wght300Grad0Opsz48 from '../components/MotionModeFill0Wght300Grad0Opsz48'
import IconMotionModeFill0Wght400Grad0Opsz48 from '../components/MotionModeFill0Wght400Grad0Opsz48'
import IconMotionModeFill0Wght500Grad0Opsz48 from '../components/MotionModeFill0Wght500Grad0Opsz48'
import IconMotionModeFill0Wght600Grad0Opsz48 from '../components/MotionModeFill0Wght600Grad0Opsz48'
import IconMotionModeFill0Wght700Grad0Opsz48 from '../components/MotionModeFill0Wght700Grad0Opsz48'
import IconMotionModeFill1Wght100Grad0Opsz48 from '../components/MotionModeFill1Wght100Grad0Opsz48'
import IconMotionModeFill1Wght200Grad0Opsz48 from '../components/MotionModeFill1Wght200Grad0Opsz48'
import IconMotionModeFill1Wght300Grad0Opsz48 from '../components/MotionModeFill1Wght300Grad0Opsz48'
import IconMotionModeFill1Wght400Grad0Opsz48 from '../components/MotionModeFill1Wght400Grad0Opsz48'
import IconMotionModeFill1Wght500Grad0Opsz48 from '../components/MotionModeFill1Wght500Grad0Opsz48'
import IconMotionModeFill1Wght600Grad0Opsz48 from '../components/MotionModeFill1Wght600Grad0Opsz48'
import IconMotionModeFill1Wght700Grad0Opsz48 from '../components/MotionModeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMotionMode = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMotionModeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMotionModeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMotionModeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMotionModeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMotionModeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMotionModeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMotionModeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMotionModeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMotionModeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMotionModeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMotionModeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMotionModeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMotionModeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMotionModeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
