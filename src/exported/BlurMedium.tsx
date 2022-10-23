import IconBlurMediumFill0Wght100Grad0Opsz48 from '../components/BlurMediumFill0Wght100Grad0Opsz48'
import IconBlurMediumFill0Wght200Grad0Opsz48 from '../components/BlurMediumFill0Wght200Grad0Opsz48'
import IconBlurMediumFill0Wght300Grad0Opsz48 from '../components/BlurMediumFill0Wght300Grad0Opsz48'
import IconBlurMediumFill0Wght400Grad0Opsz48 from '../components/BlurMediumFill0Wght400Grad0Opsz48'
import IconBlurMediumFill0Wght500Grad0Opsz48 from '../components/BlurMediumFill0Wght500Grad0Opsz48'
import IconBlurMediumFill0Wght600Grad0Opsz48 from '../components/BlurMediumFill0Wght600Grad0Opsz48'
import IconBlurMediumFill0Wght700Grad0Opsz48 from '../components/BlurMediumFill0Wght700Grad0Opsz48'
import IconBlurMediumFill1Wght100Grad0Opsz48 from '../components/BlurMediumFill1Wght100Grad0Opsz48'
import IconBlurMediumFill1Wght200Grad0Opsz48 from '../components/BlurMediumFill1Wght200Grad0Opsz48'
import IconBlurMediumFill1Wght300Grad0Opsz48 from '../components/BlurMediumFill1Wght300Grad0Opsz48'
import IconBlurMediumFill1Wght400Grad0Opsz48 from '../components/BlurMediumFill1Wght400Grad0Opsz48'
import IconBlurMediumFill1Wght500Grad0Opsz48 from '../components/BlurMediumFill1Wght500Grad0Opsz48'
import IconBlurMediumFill1Wght600Grad0Opsz48 from '../components/BlurMediumFill1Wght600Grad0Opsz48'
import IconBlurMediumFill1Wght700Grad0Opsz48 from '../components/BlurMediumFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBlurMedium = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBlurMediumFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBlurMediumFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBlurMediumFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBlurMediumFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBlurMediumFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBlurMediumFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBlurMediumFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBlurMediumFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBlurMediumFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBlurMediumFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBlurMediumFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBlurMediumFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBlurMediumFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBlurMediumFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
