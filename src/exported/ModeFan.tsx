import IconModeFanFill0Wght100Grad0Opsz48 from '../components/ModeFanFill0Wght100Grad0Opsz48'
import IconModeFanFill0Wght200Grad0Opsz48 from '../components/ModeFanFill0Wght200Grad0Opsz48'
import IconModeFanFill0Wght300Grad0Opsz48 from '../components/ModeFanFill0Wght300Grad0Opsz48'
import IconModeFanFill0Wght400Grad0Opsz48 from '../components/ModeFanFill0Wght400Grad0Opsz48'
import IconModeFanFill0Wght500Grad0Opsz48 from '../components/ModeFanFill0Wght500Grad0Opsz48'
import IconModeFanFill0Wght600Grad0Opsz48 from '../components/ModeFanFill0Wght600Grad0Opsz48'
import IconModeFanFill0Wght700Grad0Opsz48 from '../components/ModeFanFill0Wght700Grad0Opsz48'
import IconModeFanFill1Wght100Grad0Opsz48 from '../components/ModeFanFill1Wght100Grad0Opsz48'
import IconModeFanFill1Wght200Grad0Opsz48 from '../components/ModeFanFill1Wght200Grad0Opsz48'
import IconModeFanFill1Wght300Grad0Opsz48 from '../components/ModeFanFill1Wght300Grad0Opsz48'
import IconModeFanFill1Wght400Grad0Opsz48 from '../components/ModeFanFill1Wght400Grad0Opsz48'
import IconModeFanFill1Wght500Grad0Opsz48 from '../components/ModeFanFill1Wght500Grad0Opsz48'
import IconModeFanFill1Wght600Grad0Opsz48 from '../components/ModeFanFill1Wght600Grad0Opsz48'
import IconModeFanFill1Wght700Grad0Opsz48 from '../components/ModeFanFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconModeFan = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconModeFanFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconModeFanFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconModeFanFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconModeFanFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconModeFanFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconModeFanFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconModeFanFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconModeFanFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconModeFanFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconModeFanFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconModeFanFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconModeFanFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconModeFanFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconModeFanFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
