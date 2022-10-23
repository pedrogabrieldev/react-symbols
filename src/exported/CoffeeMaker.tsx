import IconCoffeeMakerFill0Wght100Grad0Opsz48 from '../components/CoffeeMakerFill0Wght100Grad0Opsz48'
import IconCoffeeMakerFill0Wght200Grad0Opsz48 from '../components/CoffeeMakerFill0Wght200Grad0Opsz48'
import IconCoffeeMakerFill0Wght300Grad0Opsz48 from '../components/CoffeeMakerFill0Wght300Grad0Opsz48'
import IconCoffeeMakerFill0Wght400Grad0Opsz48 from '../components/CoffeeMakerFill0Wght400Grad0Opsz48'
import IconCoffeeMakerFill0Wght500Grad0Opsz48 from '../components/CoffeeMakerFill0Wght500Grad0Opsz48'
import IconCoffeeMakerFill0Wght600Grad0Opsz48 from '../components/CoffeeMakerFill0Wght600Grad0Opsz48'
import IconCoffeeMakerFill0Wght700Grad0Opsz48 from '../components/CoffeeMakerFill0Wght700Grad0Opsz48'
import IconCoffeeMakerFill1Wght100Grad0Opsz48 from '../components/CoffeeMakerFill1Wght100Grad0Opsz48'
import IconCoffeeMakerFill1Wght200Grad0Opsz48 from '../components/CoffeeMakerFill1Wght200Grad0Opsz48'
import IconCoffeeMakerFill1Wght300Grad0Opsz48 from '../components/CoffeeMakerFill1Wght300Grad0Opsz48'
import IconCoffeeMakerFill1Wght400Grad0Opsz48 from '../components/CoffeeMakerFill1Wght400Grad0Opsz48'
import IconCoffeeMakerFill1Wght500Grad0Opsz48 from '../components/CoffeeMakerFill1Wght500Grad0Opsz48'
import IconCoffeeMakerFill1Wght600Grad0Opsz48 from '../components/CoffeeMakerFill1Wght600Grad0Opsz48'
import IconCoffeeMakerFill1Wght700Grad0Opsz48 from '../components/CoffeeMakerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCoffeeMaker = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCoffeeMakerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCoffeeMakerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCoffeeMakerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCoffeeMakerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCoffeeMakerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCoffeeMakerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCoffeeMakerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCoffeeMakerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCoffeeMakerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCoffeeMakerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCoffeeMakerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCoffeeMakerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCoffeeMakerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCoffeeMakerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
