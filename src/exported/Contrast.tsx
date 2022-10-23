import IconContrastFill0Wght100Grad0Opsz48 from '../components/ContrastFill0Wght100Grad0Opsz48'
import IconContrastFill0Wght200Grad0Opsz48 from '../components/ContrastFill0Wght200Grad0Opsz48'
import IconContrastFill0Wght300Grad0Opsz48 from '../components/ContrastFill0Wght300Grad0Opsz48'
import IconContrastFill0Wght400Grad0Opsz48 from '../components/ContrastFill0Wght400Grad0Opsz48'
import IconContrastFill0Wght500Grad0Opsz48 from '../components/ContrastFill0Wght500Grad0Opsz48'
import IconContrastFill0Wght600Grad0Opsz48 from '../components/ContrastFill0Wght600Grad0Opsz48'
import IconContrastFill0Wght700Grad0Opsz48 from '../components/ContrastFill0Wght700Grad0Opsz48'
import IconContrastFill1Wght100Grad0Opsz48 from '../components/ContrastFill1Wght100Grad0Opsz48'
import IconContrastFill1Wght200Grad0Opsz48 from '../components/ContrastFill1Wght200Grad0Opsz48'
import IconContrastFill1Wght300Grad0Opsz48 from '../components/ContrastFill1Wght300Grad0Opsz48'
import IconContrastFill1Wght400Grad0Opsz48 from '../components/ContrastFill1Wght400Grad0Opsz48'
import IconContrastFill1Wght500Grad0Opsz48 from '../components/ContrastFill1Wght500Grad0Opsz48'
import IconContrastFill1Wght600Grad0Opsz48 from '../components/ContrastFill1Wght600Grad0Opsz48'
import IconContrastFill1Wght700Grad0Opsz48 from '../components/ContrastFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconContrast = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconContrastFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconContrastFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconContrastFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconContrastFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconContrastFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconContrastFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconContrastFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconContrastFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconContrastFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconContrastFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconContrastFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconContrastFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconContrastFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconContrastFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
