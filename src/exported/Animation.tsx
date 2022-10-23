import IconAnimationFill0Wght100Grad0Opsz48 from '../components/AnimationFill0Wght100Grad0Opsz48'
import IconAnimationFill0Wght200Grad0Opsz48 from '../components/AnimationFill0Wght200Grad0Opsz48'
import IconAnimationFill0Wght300Grad0Opsz48 from '../components/AnimationFill0Wght300Grad0Opsz48'
import IconAnimationFill0Wght400Grad0Opsz48 from '../components/AnimationFill0Wght400Grad0Opsz48'
import IconAnimationFill0Wght500Grad0Opsz48 from '../components/AnimationFill0Wght500Grad0Opsz48'
import IconAnimationFill0Wght600Grad0Opsz48 from '../components/AnimationFill0Wght600Grad0Opsz48'
import IconAnimationFill0Wght700Grad0Opsz48 from '../components/AnimationFill0Wght700Grad0Opsz48'
import IconAnimationFill1Wght100Grad0Opsz48 from '../components/AnimationFill1Wght100Grad0Opsz48'
import IconAnimationFill1Wght200Grad0Opsz48 from '../components/AnimationFill1Wght200Grad0Opsz48'
import IconAnimationFill1Wght300Grad0Opsz48 from '../components/AnimationFill1Wght300Grad0Opsz48'
import IconAnimationFill1Wght400Grad0Opsz48 from '../components/AnimationFill1Wght400Grad0Opsz48'
import IconAnimationFill1Wght500Grad0Opsz48 from '../components/AnimationFill1Wght500Grad0Opsz48'
import IconAnimationFill1Wght600Grad0Opsz48 from '../components/AnimationFill1Wght600Grad0Opsz48'
import IconAnimationFill1Wght700Grad0Opsz48 from '../components/AnimationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAnimation = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAnimationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAnimationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAnimationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAnimationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAnimationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAnimationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAnimationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAnimationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAnimationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAnimationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAnimationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAnimationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAnimationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAnimationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
