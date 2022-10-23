import IconImageAspectRatioFill0Wght100Grad0Opsz48 from '../components/ImageAspectRatioFill0Wght100Grad0Opsz48'
import IconImageAspectRatioFill0Wght200Grad0Opsz48 from '../components/ImageAspectRatioFill0Wght200Grad0Opsz48'
import IconImageAspectRatioFill0Wght300Grad0Opsz48 from '../components/ImageAspectRatioFill0Wght300Grad0Opsz48'
import IconImageAspectRatioFill0Wght400Grad0Opsz48 from '../components/ImageAspectRatioFill0Wght400Grad0Opsz48'
import IconImageAspectRatioFill0Wght500Grad0Opsz48 from '../components/ImageAspectRatioFill0Wght500Grad0Opsz48'
import IconImageAspectRatioFill0Wght600Grad0Opsz48 from '../components/ImageAspectRatioFill0Wght600Grad0Opsz48'
import IconImageAspectRatioFill0Wght700Grad0Opsz48 from '../components/ImageAspectRatioFill0Wght700Grad0Opsz48'
import IconImageAspectRatioFill1Wght100Grad0Opsz48 from '../components/ImageAspectRatioFill1Wght100Grad0Opsz48'
import IconImageAspectRatioFill1Wght200Grad0Opsz48 from '../components/ImageAspectRatioFill1Wght200Grad0Opsz48'
import IconImageAspectRatioFill1Wght300Grad0Opsz48 from '../components/ImageAspectRatioFill1Wght300Grad0Opsz48'
import IconImageAspectRatioFill1Wght400Grad0Opsz48 from '../components/ImageAspectRatioFill1Wght400Grad0Opsz48'
import IconImageAspectRatioFill1Wght500Grad0Opsz48 from '../components/ImageAspectRatioFill1Wght500Grad0Opsz48'
import IconImageAspectRatioFill1Wght600Grad0Opsz48 from '../components/ImageAspectRatioFill1Wght600Grad0Opsz48'
import IconImageAspectRatioFill1Wght700Grad0Opsz48 from '../components/ImageAspectRatioFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconImageAspectRatio = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconImageAspectRatioFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconImageAspectRatioFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconImageAspectRatioFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconImageAspectRatioFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconImageAspectRatioFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconImageAspectRatioFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconImageAspectRatioFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconImageAspectRatioFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconImageAspectRatioFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconImageAspectRatioFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconImageAspectRatioFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconImageAspectRatioFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconImageAspectRatioFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconImageAspectRatioFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
