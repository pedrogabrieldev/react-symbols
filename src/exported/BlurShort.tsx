import IconBlurShortFill0Wght100Grad0Opsz48 from '../components/BlurShortFill0Wght100Grad0Opsz48'
import IconBlurShortFill0Wght200Grad0Opsz48 from '../components/BlurShortFill0Wght200Grad0Opsz48'
import IconBlurShortFill0Wght300Grad0Opsz48 from '../components/BlurShortFill0Wght300Grad0Opsz48'
import IconBlurShortFill0Wght400Grad0Opsz48 from '../components/BlurShortFill0Wght400Grad0Opsz48'
import IconBlurShortFill0Wght500Grad0Opsz48 from '../components/BlurShortFill0Wght500Grad0Opsz48'
import IconBlurShortFill0Wght600Grad0Opsz48 from '../components/BlurShortFill0Wght600Grad0Opsz48'
import IconBlurShortFill0Wght700Grad0Opsz48 from '../components/BlurShortFill0Wght700Grad0Opsz48'
import IconBlurShortFill1Wght100Grad0Opsz48 from '../components/BlurShortFill1Wght100Grad0Opsz48'
import IconBlurShortFill1Wght200Grad0Opsz48 from '../components/BlurShortFill1Wght200Grad0Opsz48'
import IconBlurShortFill1Wght300Grad0Opsz48 from '../components/BlurShortFill1Wght300Grad0Opsz48'
import IconBlurShortFill1Wght400Grad0Opsz48 from '../components/BlurShortFill1Wght400Grad0Opsz48'
import IconBlurShortFill1Wght500Grad0Opsz48 from '../components/BlurShortFill1Wght500Grad0Opsz48'
import IconBlurShortFill1Wght600Grad0Opsz48 from '../components/BlurShortFill1Wght600Grad0Opsz48'
import IconBlurShortFill1Wght700Grad0Opsz48 from '../components/BlurShortFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBlurShort = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBlurShortFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBlurShortFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBlurShortFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBlurShortFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBlurShortFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBlurShortFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBlurShortFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBlurShortFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBlurShortFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBlurShortFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBlurShortFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBlurShortFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBlurShortFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBlurShortFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
