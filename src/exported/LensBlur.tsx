import IconLensBlurFill0Wght100Grad0Opsz48 from '../components/LensBlurFill0Wght100Grad0Opsz48'
import IconLensBlurFill0Wght200Grad0Opsz48 from '../components/LensBlurFill0Wght200Grad0Opsz48'
import IconLensBlurFill0Wght300Grad0Opsz48 from '../components/LensBlurFill0Wght300Grad0Opsz48'
import IconLensBlurFill0Wght400Grad0Opsz48 from '../components/LensBlurFill0Wght400Grad0Opsz48'
import IconLensBlurFill0Wght500Grad0Opsz48 from '../components/LensBlurFill0Wght500Grad0Opsz48'
import IconLensBlurFill0Wght600Grad0Opsz48 from '../components/LensBlurFill0Wght600Grad0Opsz48'
import IconLensBlurFill0Wght700Grad0Opsz48 from '../components/LensBlurFill0Wght700Grad0Opsz48'
import IconLensBlurFill1Wght100Grad0Opsz48 from '../components/LensBlurFill1Wght100Grad0Opsz48'
import IconLensBlurFill1Wght200Grad0Opsz48 from '../components/LensBlurFill1Wght200Grad0Opsz48'
import IconLensBlurFill1Wght300Grad0Opsz48 from '../components/LensBlurFill1Wght300Grad0Opsz48'
import IconLensBlurFill1Wght400Grad0Opsz48 from '../components/LensBlurFill1Wght400Grad0Opsz48'
import IconLensBlurFill1Wght500Grad0Opsz48 from '../components/LensBlurFill1Wght500Grad0Opsz48'
import IconLensBlurFill1Wght600Grad0Opsz48 from '../components/LensBlurFill1Wght600Grad0Opsz48'
import IconLensBlurFill1Wght700Grad0Opsz48 from '../components/LensBlurFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLensBlur = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLensBlurFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLensBlurFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLensBlurFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLensBlurFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLensBlurFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLensBlurFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLensBlurFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLensBlurFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLensBlurFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLensBlurFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLensBlurFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLensBlurFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLensBlurFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLensBlurFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
