import IconDirectionsBusFill0Wght100Grad0Opsz48 from '../components/DirectionsBusFill0Wght100Grad0Opsz48'
import IconDirectionsBusFill0Wght200Grad0Opsz48 from '../components/DirectionsBusFill0Wght200Grad0Opsz48'
import IconDirectionsBusFill0Wght300Grad0Opsz48 from '../components/DirectionsBusFill0Wght300Grad0Opsz48'
import IconDirectionsBusFill0Wght400Grad0Opsz48 from '../components/DirectionsBusFill0Wght400Grad0Opsz48'
import IconDirectionsBusFill0Wght500Grad0Opsz48 from '../components/DirectionsBusFill0Wght500Grad0Opsz48'
import IconDirectionsBusFill0Wght600Grad0Opsz48 from '../components/DirectionsBusFill0Wght600Grad0Opsz48'
import IconDirectionsBusFill0Wght700Grad0Opsz48 from '../components/DirectionsBusFill0Wght700Grad0Opsz48'
import IconDirectionsBusFill1Wght100Grad0Opsz48 from '../components/DirectionsBusFill1Wght100Grad0Opsz48'
import IconDirectionsBusFill1Wght200Grad0Opsz48 from '../components/DirectionsBusFill1Wght200Grad0Opsz48'
import IconDirectionsBusFill1Wght300Grad0Opsz48 from '../components/DirectionsBusFill1Wght300Grad0Opsz48'
import IconDirectionsBusFill1Wght400Grad0Opsz48 from '../components/DirectionsBusFill1Wght400Grad0Opsz48'
import IconDirectionsBusFill1Wght500Grad0Opsz48 from '../components/DirectionsBusFill1Wght500Grad0Opsz48'
import IconDirectionsBusFill1Wght600Grad0Opsz48 from '../components/DirectionsBusFill1Wght600Grad0Opsz48'
import IconDirectionsBusFill1Wght700Grad0Opsz48 from '../components/DirectionsBusFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDirectionsBus = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDirectionsBusFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDirectionsBusFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDirectionsBusFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDirectionsBusFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDirectionsBusFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDirectionsBusFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDirectionsBusFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDirectionsBusFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDirectionsBusFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDirectionsBusFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDirectionsBusFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDirectionsBusFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDirectionsBusFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDirectionsBusFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
