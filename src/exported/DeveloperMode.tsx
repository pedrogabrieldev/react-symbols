import IconDeveloperModeFill0Wght100Grad0Opsz48 from '../components/DeveloperModeFill0Wght100Grad0Opsz48'
import IconDeveloperModeFill0Wght200Grad0Opsz48 from '../components/DeveloperModeFill0Wght200Grad0Opsz48'
import IconDeveloperModeFill0Wght300Grad0Opsz48 from '../components/DeveloperModeFill0Wght300Grad0Opsz48'
import IconDeveloperModeFill0Wght400Grad0Opsz48 from '../components/DeveloperModeFill0Wght400Grad0Opsz48'
import IconDeveloperModeFill0Wght500Grad0Opsz48 from '../components/DeveloperModeFill0Wght500Grad0Opsz48'
import IconDeveloperModeFill0Wght600Grad0Opsz48 from '../components/DeveloperModeFill0Wght600Grad0Opsz48'
import IconDeveloperModeFill0Wght700Grad0Opsz48 from '../components/DeveloperModeFill0Wght700Grad0Opsz48'
import IconDeveloperModeFill1Wght100Grad0Opsz48 from '../components/DeveloperModeFill1Wght100Grad0Opsz48'
import IconDeveloperModeFill1Wght200Grad0Opsz48 from '../components/DeveloperModeFill1Wght200Grad0Opsz48'
import IconDeveloperModeFill1Wght300Grad0Opsz48 from '../components/DeveloperModeFill1Wght300Grad0Opsz48'
import IconDeveloperModeFill1Wght400Grad0Opsz48 from '../components/DeveloperModeFill1Wght400Grad0Opsz48'
import IconDeveloperModeFill1Wght500Grad0Opsz48 from '../components/DeveloperModeFill1Wght500Grad0Opsz48'
import IconDeveloperModeFill1Wght600Grad0Opsz48 from '../components/DeveloperModeFill1Wght600Grad0Opsz48'
import IconDeveloperModeFill1Wght700Grad0Opsz48 from '../components/DeveloperModeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDeveloperMode = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDeveloperModeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDeveloperModeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDeveloperModeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDeveloperModeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDeveloperModeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDeveloperModeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDeveloperModeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDeveloperModeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDeveloperModeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDeveloperModeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDeveloperModeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDeveloperModeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDeveloperModeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDeveloperModeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
