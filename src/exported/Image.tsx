import IconImageFill0Wght100Grad0Opsz48 from '../components/ImageFill0Wght100Grad0Opsz48'
import IconImageFill0Wght200Grad0Opsz48 from '../components/ImageFill0Wght200Grad0Opsz48'
import IconImageFill0Wght300Grad0Opsz48 from '../components/ImageFill0Wght300Grad0Opsz48'
import IconImageFill0Wght400Grad0Opsz48 from '../components/ImageFill0Wght400Grad0Opsz48'
import IconImageFill0Wght500Grad0Opsz48 from '../components/ImageFill0Wght500Grad0Opsz48'
import IconImageFill0Wght600Grad0Opsz48 from '../components/ImageFill0Wght600Grad0Opsz48'
import IconImageFill0Wght700Grad0Opsz48 from '../components/ImageFill0Wght700Grad0Opsz48'
import IconImageFill1Wght100Grad0Opsz48 from '../components/ImageFill1Wght100Grad0Opsz48'
import IconImageFill1Wght200Grad0Opsz48 from '../components/ImageFill1Wght200Grad0Opsz48'
import IconImageFill1Wght300Grad0Opsz48 from '../components/ImageFill1Wght300Grad0Opsz48'
import IconImageFill1Wght400Grad0Opsz48 from '../components/ImageFill1Wght400Grad0Opsz48'
import IconImageFill1Wght500Grad0Opsz48 from '../components/ImageFill1Wght500Grad0Opsz48'
import IconImageFill1Wght600Grad0Opsz48 from '../components/ImageFill1Wght600Grad0Opsz48'
import IconImageFill1Wght700Grad0Opsz48 from '../components/ImageFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconImage = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconImageFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconImageFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconImageFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconImageFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconImageFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconImageFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconImageFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconImageFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconImageFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconImageFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconImageFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconImageFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconImageFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconImageFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
