import IconBlurCircularFill0Wght100Grad0Opsz48 from '../components/BlurCircularFill0Wght100Grad0Opsz48'
import IconBlurCircularFill0Wght200Grad0Opsz48 from '../components/BlurCircularFill0Wght200Grad0Opsz48'
import IconBlurCircularFill0Wght300Grad0Opsz48 from '../components/BlurCircularFill0Wght300Grad0Opsz48'
import IconBlurCircularFill0Wght400Grad0Opsz48 from '../components/BlurCircularFill0Wght400Grad0Opsz48'
import IconBlurCircularFill0Wght500Grad0Opsz48 from '../components/BlurCircularFill0Wght500Grad0Opsz48'
import IconBlurCircularFill0Wght600Grad0Opsz48 from '../components/BlurCircularFill0Wght600Grad0Opsz48'
import IconBlurCircularFill0Wght700Grad0Opsz48 from '../components/BlurCircularFill0Wght700Grad0Opsz48'
import IconBlurCircularFill1Wght100Grad0Opsz48 from '../components/BlurCircularFill1Wght100Grad0Opsz48'
import IconBlurCircularFill1Wght200Grad0Opsz48 from '../components/BlurCircularFill1Wght200Grad0Opsz48'
import IconBlurCircularFill1Wght300Grad0Opsz48 from '../components/BlurCircularFill1Wght300Grad0Opsz48'
import IconBlurCircularFill1Wght400Grad0Opsz48 from '../components/BlurCircularFill1Wght400Grad0Opsz48'
import IconBlurCircularFill1Wght500Grad0Opsz48 from '../components/BlurCircularFill1Wght500Grad0Opsz48'
import IconBlurCircularFill1Wght600Grad0Opsz48 from '../components/BlurCircularFill1Wght600Grad0Opsz48'
import IconBlurCircularFill1Wght700Grad0Opsz48 from '../components/BlurCircularFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBlurCircular = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBlurCircularFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBlurCircularFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBlurCircularFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBlurCircularFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBlurCircularFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBlurCircularFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBlurCircularFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBlurCircularFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBlurCircularFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBlurCircularFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBlurCircularFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBlurCircularFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBlurCircularFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBlurCircularFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
