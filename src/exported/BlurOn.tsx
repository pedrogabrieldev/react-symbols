import IconBlurOnFill0Wght100Grad0Opsz48 from '../components/BlurOnFill0Wght100Grad0Opsz48'
import IconBlurOnFill0Wght200Grad0Opsz48 from '../components/BlurOnFill0Wght200Grad0Opsz48'
import IconBlurOnFill0Wght300Grad0Opsz48 from '../components/BlurOnFill0Wght300Grad0Opsz48'
import IconBlurOnFill0Wght400Grad0Opsz48 from '../components/BlurOnFill0Wght400Grad0Opsz48'
import IconBlurOnFill0Wght500Grad0Opsz48 from '../components/BlurOnFill0Wght500Grad0Opsz48'
import IconBlurOnFill0Wght600Grad0Opsz48 from '../components/BlurOnFill0Wght600Grad0Opsz48'
import IconBlurOnFill0Wght700Grad0Opsz48 from '../components/BlurOnFill0Wght700Grad0Opsz48'
import IconBlurOnFill1Wght100Grad0Opsz48 from '../components/BlurOnFill1Wght100Grad0Opsz48'
import IconBlurOnFill1Wght200Grad0Opsz48 from '../components/BlurOnFill1Wght200Grad0Opsz48'
import IconBlurOnFill1Wght300Grad0Opsz48 from '../components/BlurOnFill1Wght300Grad0Opsz48'
import IconBlurOnFill1Wght400Grad0Opsz48 from '../components/BlurOnFill1Wght400Grad0Opsz48'
import IconBlurOnFill1Wght500Grad0Opsz48 from '../components/BlurOnFill1Wght500Grad0Opsz48'
import IconBlurOnFill1Wght600Grad0Opsz48 from '../components/BlurOnFill1Wght600Grad0Opsz48'
import IconBlurOnFill1Wght700Grad0Opsz48 from '../components/BlurOnFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBlurOn = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBlurOnFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBlurOnFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBlurOnFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBlurOnFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBlurOnFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBlurOnFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBlurOnFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBlurOnFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBlurOnFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBlurOnFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBlurOnFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBlurOnFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBlurOnFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBlurOnFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
