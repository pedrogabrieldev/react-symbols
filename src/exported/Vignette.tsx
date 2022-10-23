import IconVignetteFill0Wght100Grad0Opsz48 from '../components/VignetteFill0Wght100Grad0Opsz48'
import IconVignetteFill0Wght200Grad0Opsz48 from '../components/VignetteFill0Wght200Grad0Opsz48'
import IconVignetteFill0Wght300Grad0Opsz48 from '../components/VignetteFill0Wght300Grad0Opsz48'
import IconVignetteFill0Wght400Grad0Opsz48 from '../components/VignetteFill0Wght400Grad0Opsz48'
import IconVignetteFill0Wght500Grad0Opsz48 from '../components/VignetteFill0Wght500Grad0Opsz48'
import IconVignetteFill0Wght600Grad0Opsz48 from '../components/VignetteFill0Wght600Grad0Opsz48'
import IconVignetteFill0Wght700Grad0Opsz48 from '../components/VignetteFill0Wght700Grad0Opsz48'
import IconVignetteFill1Wght100Grad0Opsz48 from '../components/VignetteFill1Wght100Grad0Opsz48'
import IconVignetteFill1Wght200Grad0Opsz48 from '../components/VignetteFill1Wght200Grad0Opsz48'
import IconVignetteFill1Wght300Grad0Opsz48 from '../components/VignetteFill1Wght300Grad0Opsz48'
import IconVignetteFill1Wght400Grad0Opsz48 from '../components/VignetteFill1Wght400Grad0Opsz48'
import IconVignetteFill1Wght500Grad0Opsz48 from '../components/VignetteFill1Wght500Grad0Opsz48'
import IconVignetteFill1Wght600Grad0Opsz48 from '../components/VignetteFill1Wght600Grad0Opsz48'
import IconVignetteFill1Wght700Grad0Opsz48 from '../components/VignetteFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVignette = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVignetteFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVignetteFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVignetteFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVignetteFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVignetteFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVignetteFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVignetteFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVignetteFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVignetteFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVignetteFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVignetteFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVignetteFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVignetteFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVignetteFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
