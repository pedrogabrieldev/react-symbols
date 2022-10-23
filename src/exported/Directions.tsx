import IconDirectionsFill0Wght100Grad0Opsz48 from '../components/DirectionsFill0Wght100Grad0Opsz48'
import IconDirectionsFill0Wght200Grad0Opsz48 from '../components/DirectionsFill0Wght200Grad0Opsz48'
import IconDirectionsFill0Wght300Grad0Opsz48 from '../components/DirectionsFill0Wght300Grad0Opsz48'
import IconDirectionsFill0Wght400Grad0Opsz48 from '../components/DirectionsFill0Wght400Grad0Opsz48'
import IconDirectionsFill0Wght500Grad0Opsz48 from '../components/DirectionsFill0Wght500Grad0Opsz48'
import IconDirectionsFill0Wght600Grad0Opsz48 from '../components/DirectionsFill0Wght600Grad0Opsz48'
import IconDirectionsFill0Wght700Grad0Opsz48 from '../components/DirectionsFill0Wght700Grad0Opsz48'
import IconDirectionsFill1Wght100Grad0Opsz48 from '../components/DirectionsFill1Wght100Grad0Opsz48'
import IconDirectionsFill1Wght200Grad0Opsz48 from '../components/DirectionsFill1Wght200Grad0Opsz48'
import IconDirectionsFill1Wght300Grad0Opsz48 from '../components/DirectionsFill1Wght300Grad0Opsz48'
import IconDirectionsFill1Wght400Grad0Opsz48 from '../components/DirectionsFill1Wght400Grad0Opsz48'
import IconDirectionsFill1Wght500Grad0Opsz48 from '../components/DirectionsFill1Wght500Grad0Opsz48'
import IconDirectionsFill1Wght600Grad0Opsz48 from '../components/DirectionsFill1Wght600Grad0Opsz48'
import IconDirectionsFill1Wght700Grad0Opsz48 from '../components/DirectionsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDirections = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDirectionsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDirectionsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDirectionsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDirectionsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDirectionsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDirectionsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDirectionsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDirectionsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDirectionsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDirectionsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDirectionsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDirectionsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDirectionsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDirectionsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
