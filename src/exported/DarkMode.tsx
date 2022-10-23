import IconDarkModeFill0Wght100Grad0Opsz48 from '../components/DarkModeFill0Wght100Grad0Opsz48'
import IconDarkModeFill0Wght200Grad0Opsz48 from '../components/DarkModeFill0Wght200Grad0Opsz48'
import IconDarkModeFill0Wght300Grad0Opsz48 from '../components/DarkModeFill0Wght300Grad0Opsz48'
import IconDarkModeFill0Wght400Grad0Opsz48 from '../components/DarkModeFill0Wght400Grad0Opsz48'
import IconDarkModeFill0Wght500Grad0Opsz48 from '../components/DarkModeFill0Wght500Grad0Opsz48'
import IconDarkModeFill0Wght600Grad0Opsz48 from '../components/DarkModeFill0Wght600Grad0Opsz48'
import IconDarkModeFill0Wght700Grad0Opsz48 from '../components/DarkModeFill0Wght700Grad0Opsz48'
import IconDarkModeFill1Wght100Grad0Opsz48 from '../components/DarkModeFill1Wght100Grad0Opsz48'
import IconDarkModeFill1Wght200Grad0Opsz48 from '../components/DarkModeFill1Wght200Grad0Opsz48'
import IconDarkModeFill1Wght300Grad0Opsz48 from '../components/DarkModeFill1Wght300Grad0Opsz48'
import IconDarkModeFill1Wght400Grad0Opsz48 from '../components/DarkModeFill1Wght400Grad0Opsz48'
import IconDarkModeFill1Wght500Grad0Opsz48 from '../components/DarkModeFill1Wght500Grad0Opsz48'
import IconDarkModeFill1Wght600Grad0Opsz48 from '../components/DarkModeFill1Wght600Grad0Opsz48'
import IconDarkModeFill1Wght700Grad0Opsz48 from '../components/DarkModeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDarkMode = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDarkModeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDarkModeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDarkModeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDarkModeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDarkModeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDarkModeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDarkModeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDarkModeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDarkModeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDarkModeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDarkModeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDarkModeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDarkModeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDarkModeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
