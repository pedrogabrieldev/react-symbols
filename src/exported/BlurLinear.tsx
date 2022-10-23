import IconBlurLinearFill0Wght100Grad0Opsz48 from '../components/BlurLinearFill0Wght100Grad0Opsz48'
import IconBlurLinearFill0Wght200Grad0Opsz48 from '../components/BlurLinearFill0Wght200Grad0Opsz48'
import IconBlurLinearFill0Wght300Grad0Opsz48 from '../components/BlurLinearFill0Wght300Grad0Opsz48'
import IconBlurLinearFill0Wght400Grad0Opsz48 from '../components/BlurLinearFill0Wght400Grad0Opsz48'
import IconBlurLinearFill0Wght500Grad0Opsz48 from '../components/BlurLinearFill0Wght500Grad0Opsz48'
import IconBlurLinearFill0Wght600Grad0Opsz48 from '../components/BlurLinearFill0Wght600Grad0Opsz48'
import IconBlurLinearFill0Wght700Grad0Opsz48 from '../components/BlurLinearFill0Wght700Grad0Opsz48'
import IconBlurLinearFill1Wght100Grad0Opsz48 from '../components/BlurLinearFill1Wght100Grad0Opsz48'
import IconBlurLinearFill1Wght200Grad0Opsz48 from '../components/BlurLinearFill1Wght200Grad0Opsz48'
import IconBlurLinearFill1Wght300Grad0Opsz48 from '../components/BlurLinearFill1Wght300Grad0Opsz48'
import IconBlurLinearFill1Wght400Grad0Opsz48 from '../components/BlurLinearFill1Wght400Grad0Opsz48'
import IconBlurLinearFill1Wght500Grad0Opsz48 from '../components/BlurLinearFill1Wght500Grad0Opsz48'
import IconBlurLinearFill1Wght600Grad0Opsz48 from '../components/BlurLinearFill1Wght600Grad0Opsz48'
import IconBlurLinearFill1Wght700Grad0Opsz48 from '../components/BlurLinearFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBlurLinear = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBlurLinearFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBlurLinearFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBlurLinearFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBlurLinearFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBlurLinearFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBlurLinearFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBlurLinearFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBlurLinearFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBlurLinearFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBlurLinearFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBlurLinearFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBlurLinearFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBlurLinearFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBlurLinearFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
