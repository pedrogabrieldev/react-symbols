import IconDirectionsBikeFill0Wght100Grad0Opsz48 from '../components/DirectionsBikeFill0Wght100Grad0Opsz48'
import IconDirectionsBikeFill0Wght200Grad0Opsz48 from '../components/DirectionsBikeFill0Wght200Grad0Opsz48'
import IconDirectionsBikeFill0Wght300Grad0Opsz48 from '../components/DirectionsBikeFill0Wght300Grad0Opsz48'
import IconDirectionsBikeFill0Wght400Grad0Opsz48 from '../components/DirectionsBikeFill0Wght400Grad0Opsz48'
import IconDirectionsBikeFill0Wght500Grad0Opsz48 from '../components/DirectionsBikeFill0Wght500Grad0Opsz48'
import IconDirectionsBikeFill0Wght600Grad0Opsz48 from '../components/DirectionsBikeFill0Wght600Grad0Opsz48'
import IconDirectionsBikeFill0Wght700Grad0Opsz48 from '../components/DirectionsBikeFill0Wght700Grad0Opsz48'
import IconDirectionsBikeFill1Wght100Grad0Opsz48 from '../components/DirectionsBikeFill1Wght100Grad0Opsz48'
import IconDirectionsBikeFill1Wght200Grad0Opsz48 from '../components/DirectionsBikeFill1Wght200Grad0Opsz48'
import IconDirectionsBikeFill1Wght300Grad0Opsz48 from '../components/DirectionsBikeFill1Wght300Grad0Opsz48'
import IconDirectionsBikeFill1Wght400Grad0Opsz48 from '../components/DirectionsBikeFill1Wght400Grad0Opsz48'
import IconDirectionsBikeFill1Wght500Grad0Opsz48 from '../components/DirectionsBikeFill1Wght500Grad0Opsz48'
import IconDirectionsBikeFill1Wght600Grad0Opsz48 from '../components/DirectionsBikeFill1Wght600Grad0Opsz48'
import IconDirectionsBikeFill1Wght700Grad0Opsz48 from '../components/DirectionsBikeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDirectionsBike = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDirectionsBikeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDirectionsBikeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDirectionsBikeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDirectionsBikeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDirectionsBikeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDirectionsBikeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDirectionsBikeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDirectionsBikeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDirectionsBikeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDirectionsBikeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDirectionsBikeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDirectionsBikeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDirectionsBikeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDirectionsBikeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
