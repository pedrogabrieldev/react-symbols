import IconLocationHomeFill0Wght100Grad0Opsz48 from '../components/LocationHomeFill0Wght100Grad0Opsz48'
import IconLocationHomeFill0Wght200Grad0Opsz48 from '../components/LocationHomeFill0Wght200Grad0Opsz48'
import IconLocationHomeFill0Wght300Grad0Opsz48 from '../components/LocationHomeFill0Wght300Grad0Opsz48'
import IconLocationHomeFill0Wght400Grad0Opsz48 from '../components/LocationHomeFill0Wght400Grad0Opsz48'
import IconLocationHomeFill0Wght500Grad0Opsz48 from '../components/LocationHomeFill0Wght500Grad0Opsz48'
import IconLocationHomeFill0Wght600Grad0Opsz48 from '../components/LocationHomeFill0Wght600Grad0Opsz48'
import IconLocationHomeFill0Wght700Grad0Opsz48 from '../components/LocationHomeFill0Wght700Grad0Opsz48'
import IconLocationHomeFill1Wght100Grad0Opsz48 from '../components/LocationHomeFill1Wght100Grad0Opsz48'
import IconLocationHomeFill1Wght200Grad0Opsz48 from '../components/LocationHomeFill1Wght200Grad0Opsz48'
import IconLocationHomeFill1Wght300Grad0Opsz48 from '../components/LocationHomeFill1Wght300Grad0Opsz48'
import IconLocationHomeFill1Wght400Grad0Opsz48 from '../components/LocationHomeFill1Wght400Grad0Opsz48'
import IconLocationHomeFill1Wght500Grad0Opsz48 from '../components/LocationHomeFill1Wght500Grad0Opsz48'
import IconLocationHomeFill1Wght600Grad0Opsz48 from '../components/LocationHomeFill1Wght600Grad0Opsz48'
import IconLocationHomeFill1Wght700Grad0Opsz48 from '../components/LocationHomeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLocationHome = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLocationHomeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLocationHomeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLocationHomeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLocationHomeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLocationHomeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLocationHomeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLocationHomeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLocationHomeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLocationHomeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLocationHomeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLocationHomeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLocationHomeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLocationHomeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLocationHomeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
