import IconArchitectureFill0Wght100Grad0Opsz48 from '../components/ArchitectureFill0Wght100Grad0Opsz48'
import IconArchitectureFill0Wght200Grad0Opsz48 from '../components/ArchitectureFill0Wght200Grad0Opsz48'
import IconArchitectureFill0Wght300Grad0Opsz48 from '../components/ArchitectureFill0Wght300Grad0Opsz48'
import IconArchitectureFill0Wght400Grad0Opsz48 from '../components/ArchitectureFill0Wght400Grad0Opsz48'
import IconArchitectureFill0Wght500Grad0Opsz48 from '../components/ArchitectureFill0Wght500Grad0Opsz48'
import IconArchitectureFill0Wght600Grad0Opsz48 from '../components/ArchitectureFill0Wght600Grad0Opsz48'
import IconArchitectureFill0Wght700Grad0Opsz48 from '../components/ArchitectureFill0Wght700Grad0Opsz48'
import IconArchitectureFill1Wght100Grad0Opsz48 from '../components/ArchitectureFill1Wght100Grad0Opsz48'
import IconArchitectureFill1Wght200Grad0Opsz48 from '../components/ArchitectureFill1Wght200Grad0Opsz48'
import IconArchitectureFill1Wght300Grad0Opsz48 from '../components/ArchitectureFill1Wght300Grad0Opsz48'
import IconArchitectureFill1Wght400Grad0Opsz48 from '../components/ArchitectureFill1Wght400Grad0Opsz48'
import IconArchitectureFill1Wght500Grad0Opsz48 from '../components/ArchitectureFill1Wght500Grad0Opsz48'
import IconArchitectureFill1Wght600Grad0Opsz48 from '../components/ArchitectureFill1Wght600Grad0Opsz48'
import IconArchitectureFill1Wght700Grad0Opsz48 from '../components/ArchitectureFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconArchitecture = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconArchitectureFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconArchitectureFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconArchitectureFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconArchitectureFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconArchitectureFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconArchitectureFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconArchitectureFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconArchitectureFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconArchitectureFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconArchitectureFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconArchitectureFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconArchitectureFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconArchitectureFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconArchitectureFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
