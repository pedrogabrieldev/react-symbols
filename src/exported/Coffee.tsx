import IconCoffeeFill0Wght100Grad0Opsz48 from '../components/CoffeeFill0Wght100Grad0Opsz48'
import IconCoffeeFill0Wght200Grad0Opsz48 from '../components/CoffeeFill0Wght200Grad0Opsz48'
import IconCoffeeFill0Wght300Grad0Opsz48 from '../components/CoffeeFill0Wght300Grad0Opsz48'
import IconCoffeeFill0Wght400Grad0Opsz48 from '../components/CoffeeFill0Wght400Grad0Opsz48'
import IconCoffeeFill0Wght500Grad0Opsz48 from '../components/CoffeeFill0Wght500Grad0Opsz48'
import IconCoffeeFill0Wght600Grad0Opsz48 from '../components/CoffeeFill0Wght600Grad0Opsz48'
import IconCoffeeFill0Wght700Grad0Opsz48 from '../components/CoffeeFill0Wght700Grad0Opsz48'
import IconCoffeeFill1Wght100Grad0Opsz48 from '../components/CoffeeFill1Wght100Grad0Opsz48'
import IconCoffeeFill1Wght200Grad0Opsz48 from '../components/CoffeeFill1Wght200Grad0Opsz48'
import IconCoffeeFill1Wght300Grad0Opsz48 from '../components/CoffeeFill1Wght300Grad0Opsz48'
import IconCoffeeFill1Wght400Grad0Opsz48 from '../components/CoffeeFill1Wght400Grad0Opsz48'
import IconCoffeeFill1Wght500Grad0Opsz48 from '../components/CoffeeFill1Wght500Grad0Opsz48'
import IconCoffeeFill1Wght600Grad0Opsz48 from '../components/CoffeeFill1Wght600Grad0Opsz48'
import IconCoffeeFill1Wght700Grad0Opsz48 from '../components/CoffeeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCoffee = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCoffeeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCoffeeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCoffeeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCoffeeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCoffeeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCoffeeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCoffeeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCoffeeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCoffeeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCoffeeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCoffeeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCoffeeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCoffeeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCoffeeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
