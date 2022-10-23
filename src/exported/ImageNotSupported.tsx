import IconImageNotSupportedFill0Wght100Grad0Opsz48 from '../components/ImageNotSupportedFill0Wght100Grad0Opsz48'
import IconImageNotSupportedFill0Wght200Grad0Opsz48 from '../components/ImageNotSupportedFill0Wght200Grad0Opsz48'
import IconImageNotSupportedFill0Wght300Grad0Opsz48 from '../components/ImageNotSupportedFill0Wght300Grad0Opsz48'
import IconImageNotSupportedFill0Wght400Grad0Opsz48 from '../components/ImageNotSupportedFill0Wght400Grad0Opsz48'
import IconImageNotSupportedFill0Wght500Grad0Opsz48 from '../components/ImageNotSupportedFill0Wght500Grad0Opsz48'
import IconImageNotSupportedFill0Wght600Grad0Opsz48 from '../components/ImageNotSupportedFill0Wght600Grad0Opsz48'
import IconImageNotSupportedFill0Wght700Grad0Opsz48 from '../components/ImageNotSupportedFill0Wght700Grad0Opsz48'
import IconImageNotSupportedFill1Wght100Grad0Opsz48 from '../components/ImageNotSupportedFill1Wght100Grad0Opsz48'
import IconImageNotSupportedFill1Wght200Grad0Opsz48 from '../components/ImageNotSupportedFill1Wght200Grad0Opsz48'
import IconImageNotSupportedFill1Wght300Grad0Opsz48 from '../components/ImageNotSupportedFill1Wght300Grad0Opsz48'
import IconImageNotSupportedFill1Wght400Grad0Opsz48 from '../components/ImageNotSupportedFill1Wght400Grad0Opsz48'
import IconImageNotSupportedFill1Wght500Grad0Opsz48 from '../components/ImageNotSupportedFill1Wght500Grad0Opsz48'
import IconImageNotSupportedFill1Wght600Grad0Opsz48 from '../components/ImageNotSupportedFill1Wght600Grad0Opsz48'
import IconImageNotSupportedFill1Wght700Grad0Opsz48 from '../components/ImageNotSupportedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconImageNotSupported = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconImageNotSupportedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconImageNotSupportedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconImageNotSupportedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconImageNotSupportedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconImageNotSupportedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconImageNotSupportedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconImageNotSupportedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconImageNotSupportedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconImageNotSupportedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconImageNotSupportedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconImageNotSupportedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconImageNotSupportedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconImageNotSupportedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconImageNotSupportedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
