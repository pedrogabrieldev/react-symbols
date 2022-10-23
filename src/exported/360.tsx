import Icon360Fill0Wght100Grad0Opsz48 from '../components/360Fill0Wght100Grad0Opsz48'
import Icon360Fill0Wght200Grad0Opsz48 from '../components/360Fill0Wght200Grad0Opsz48'
import Icon360Fill0Wght300Grad0Opsz48 from '../components/360Fill0Wght300Grad0Opsz48'
import Icon360Fill0Wght400Grad0Opsz48 from '../components/360Fill0Wght400Grad0Opsz48'
import Icon360Fill0Wght500Grad0Opsz48 from '../components/360Fill0Wght500Grad0Opsz48'
import Icon360Fill0Wght600Grad0Opsz48 from '../components/360Fill0Wght600Grad0Opsz48'
import Icon360Fill0Wght700Grad0Opsz48 from '../components/360Fill0Wght700Grad0Opsz48'
import Icon360Fill1Wght100Grad0Opsz48 from '../components/360Fill1Wght100Grad0Opsz48'
import Icon360Fill1Wght200Grad0Opsz48 from '../components/360Fill1Wght200Grad0Opsz48'
import Icon360Fill1Wght300Grad0Opsz48 from '../components/360Fill1Wght300Grad0Opsz48'
import Icon360Fill1Wght400Grad0Opsz48 from '../components/360Fill1Wght400Grad0Opsz48'
import Icon360Fill1Wght500Grad0Opsz48 from '../components/360Fill1Wght500Grad0Opsz48'
import Icon360Fill1Wght600Grad0Opsz48 from '../components/360Fill1Wght600Grad0Opsz48'
import Icon360Fill1Wght700Grad0Opsz48 from '../components/360Fill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const Icon360 = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <Icon360Fill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <Icon360Fill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <Icon360Fill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <Icon360Fill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <Icon360Fill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <Icon360Fill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <Icon360Fill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <Icon360Fill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <Icon360Fill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <Icon360Fill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <Icon360Fill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <Icon360Fill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <Icon360Fill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <Icon360Fill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
