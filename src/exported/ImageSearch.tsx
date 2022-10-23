import IconImageSearchFill0Wght100Grad0Opsz48 from '../components/ImageSearchFill0Wght100Grad0Opsz48'
import IconImageSearchFill0Wght200Grad0Opsz48 from '../components/ImageSearchFill0Wght200Grad0Opsz48'
import IconImageSearchFill0Wght300Grad0Opsz48 from '../components/ImageSearchFill0Wght300Grad0Opsz48'
import IconImageSearchFill0Wght400Grad0Opsz48 from '../components/ImageSearchFill0Wght400Grad0Opsz48'
import IconImageSearchFill0Wght500Grad0Opsz48 from '../components/ImageSearchFill0Wght500Grad0Opsz48'
import IconImageSearchFill0Wght600Grad0Opsz48 from '../components/ImageSearchFill0Wght600Grad0Opsz48'
import IconImageSearchFill0Wght700Grad0Opsz48 from '../components/ImageSearchFill0Wght700Grad0Opsz48'
import IconImageSearchFill1Wght100Grad0Opsz48 from '../components/ImageSearchFill1Wght100Grad0Opsz48'
import IconImageSearchFill1Wght200Grad0Opsz48 from '../components/ImageSearchFill1Wght200Grad0Opsz48'
import IconImageSearchFill1Wght300Grad0Opsz48 from '../components/ImageSearchFill1Wght300Grad0Opsz48'
import IconImageSearchFill1Wght400Grad0Opsz48 from '../components/ImageSearchFill1Wght400Grad0Opsz48'
import IconImageSearchFill1Wght500Grad0Opsz48 from '../components/ImageSearchFill1Wght500Grad0Opsz48'
import IconImageSearchFill1Wght600Grad0Opsz48 from '../components/ImageSearchFill1Wght600Grad0Opsz48'
import IconImageSearchFill1Wght700Grad0Opsz48 from '../components/ImageSearchFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconImageSearch = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconImageSearchFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconImageSearchFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconImageSearchFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconImageSearchFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconImageSearchFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconImageSearchFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconImageSearchFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconImageSearchFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconImageSearchFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconImageSearchFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconImageSearchFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconImageSearchFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconImageSearchFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconImageSearchFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
