import IconWbShadeFill0Wght100Grad0Opsz48 from '../components/WbShadeFill0Wght100Grad0Opsz48'
import IconWbShadeFill0Wght200Grad0Opsz48 from '../components/WbShadeFill0Wght200Grad0Opsz48'
import IconWbShadeFill0Wght300Grad0Opsz48 from '../components/WbShadeFill0Wght300Grad0Opsz48'
import IconWbShadeFill0Wght400Grad0Opsz48 from '../components/WbShadeFill0Wght400Grad0Opsz48'
import IconWbShadeFill0Wght500Grad0Opsz48 from '../components/WbShadeFill0Wght500Grad0Opsz48'
import IconWbShadeFill0Wght600Grad0Opsz48 from '../components/WbShadeFill0Wght600Grad0Opsz48'
import IconWbShadeFill0Wght700Grad0Opsz48 from '../components/WbShadeFill0Wght700Grad0Opsz48'
import IconWbShadeFill1Wght100Grad0Opsz48 from '../components/WbShadeFill1Wght100Grad0Opsz48'
import IconWbShadeFill1Wght200Grad0Opsz48 from '../components/WbShadeFill1Wght200Grad0Opsz48'
import IconWbShadeFill1Wght300Grad0Opsz48 from '../components/WbShadeFill1Wght300Grad0Opsz48'
import IconWbShadeFill1Wght400Grad0Opsz48 from '../components/WbShadeFill1Wght400Grad0Opsz48'
import IconWbShadeFill1Wght500Grad0Opsz48 from '../components/WbShadeFill1Wght500Grad0Opsz48'
import IconWbShadeFill1Wght600Grad0Opsz48 from '../components/WbShadeFill1Wght600Grad0Opsz48'
import IconWbShadeFill1Wght700Grad0Opsz48 from '../components/WbShadeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWbShade = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWbShadeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWbShadeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWbShadeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWbShadeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWbShadeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWbShadeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWbShadeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWbShadeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWbShadeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWbShadeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWbShadeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWbShadeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWbShadeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWbShadeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
