import IconCakeFill0Wght100Grad0Opsz48 from '../components/CakeFill0Wght100Grad0Opsz48'
import IconCakeFill0Wght200Grad0Opsz48 from '../components/CakeFill0Wght200Grad0Opsz48'
import IconCakeFill0Wght300Grad0Opsz48 from '../components/CakeFill0Wght300Grad0Opsz48'
import IconCakeFill0Wght400Grad0Opsz48 from '../components/CakeFill0Wght400Grad0Opsz48'
import IconCakeFill0Wght500Grad0Opsz48 from '../components/CakeFill0Wght500Grad0Opsz48'
import IconCakeFill0Wght600Grad0Opsz48 from '../components/CakeFill0Wght600Grad0Opsz48'
import IconCakeFill0Wght700Grad0Opsz48 from '../components/CakeFill0Wght700Grad0Opsz48'
import IconCakeFill1Wght100Grad0Opsz48 from '../components/CakeFill1Wght100Grad0Opsz48'
import IconCakeFill1Wght200Grad0Opsz48 from '../components/CakeFill1Wght200Grad0Opsz48'
import IconCakeFill1Wght300Grad0Opsz48 from '../components/CakeFill1Wght300Grad0Opsz48'
import IconCakeFill1Wght400Grad0Opsz48 from '../components/CakeFill1Wght400Grad0Opsz48'
import IconCakeFill1Wght500Grad0Opsz48 from '../components/CakeFill1Wght500Grad0Opsz48'
import IconCakeFill1Wght600Grad0Opsz48 from '../components/CakeFill1Wght600Grad0Opsz48'
import IconCakeFill1Wght700Grad0Opsz48 from '../components/CakeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCake = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCakeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCakeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCakeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCakeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCakeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCakeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCakeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCakeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCakeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCakeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCakeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCakeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCakeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCakeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
