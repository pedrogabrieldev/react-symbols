import IconBlurOffFill0Wght100Grad0Opsz48 from '../components/BlurOffFill0Wght100Grad0Opsz48'
import IconBlurOffFill0Wght200Grad0Opsz48 from '../components/BlurOffFill0Wght200Grad0Opsz48'
import IconBlurOffFill0Wght300Grad0Opsz48 from '../components/BlurOffFill0Wght300Grad0Opsz48'
import IconBlurOffFill0Wght400Grad0Opsz48 from '../components/BlurOffFill0Wght400Grad0Opsz48'
import IconBlurOffFill0Wght500Grad0Opsz48 from '../components/BlurOffFill0Wght500Grad0Opsz48'
import IconBlurOffFill0Wght600Grad0Opsz48 from '../components/BlurOffFill0Wght600Grad0Opsz48'
import IconBlurOffFill0Wght700Grad0Opsz48 from '../components/BlurOffFill0Wght700Grad0Opsz48'
import IconBlurOffFill1Wght100Grad0Opsz48 from '../components/BlurOffFill1Wght100Grad0Opsz48'
import IconBlurOffFill1Wght200Grad0Opsz48 from '../components/BlurOffFill1Wght200Grad0Opsz48'
import IconBlurOffFill1Wght300Grad0Opsz48 from '../components/BlurOffFill1Wght300Grad0Opsz48'
import IconBlurOffFill1Wght400Grad0Opsz48 from '../components/BlurOffFill1Wght400Grad0Opsz48'
import IconBlurOffFill1Wght500Grad0Opsz48 from '../components/BlurOffFill1Wght500Grad0Opsz48'
import IconBlurOffFill1Wght600Grad0Opsz48 from '../components/BlurOffFill1Wght600Grad0Opsz48'
import IconBlurOffFill1Wght700Grad0Opsz48 from '../components/BlurOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBlurOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBlurOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBlurOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBlurOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBlurOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBlurOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBlurOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBlurOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBlurOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBlurOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBlurOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBlurOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBlurOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBlurOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBlurOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
