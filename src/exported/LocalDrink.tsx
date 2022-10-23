import IconLocalDrinkFill0Wght100Grad0Opsz48 from '../components/LocalDrinkFill0Wght100Grad0Opsz48'
import IconLocalDrinkFill0Wght200Grad0Opsz48 from '../components/LocalDrinkFill0Wght200Grad0Opsz48'
import IconLocalDrinkFill0Wght300Grad0Opsz48 from '../components/LocalDrinkFill0Wght300Grad0Opsz48'
import IconLocalDrinkFill0Wght400Grad0Opsz48 from '../components/LocalDrinkFill0Wght400Grad0Opsz48'
import IconLocalDrinkFill0Wght500Grad0Opsz48 from '../components/LocalDrinkFill0Wght500Grad0Opsz48'
import IconLocalDrinkFill0Wght600Grad0Opsz48 from '../components/LocalDrinkFill0Wght600Grad0Opsz48'
import IconLocalDrinkFill0Wght700Grad0Opsz48 from '../components/LocalDrinkFill0Wght700Grad0Opsz48'
import IconLocalDrinkFill1Wght100Grad0Opsz48 from '../components/LocalDrinkFill1Wght100Grad0Opsz48'
import IconLocalDrinkFill1Wght200Grad0Opsz48 from '../components/LocalDrinkFill1Wght200Grad0Opsz48'
import IconLocalDrinkFill1Wght300Grad0Opsz48 from '../components/LocalDrinkFill1Wght300Grad0Opsz48'
import IconLocalDrinkFill1Wght400Grad0Opsz48 from '../components/LocalDrinkFill1Wght400Grad0Opsz48'
import IconLocalDrinkFill1Wght500Grad0Opsz48 from '../components/LocalDrinkFill1Wght500Grad0Opsz48'
import IconLocalDrinkFill1Wght600Grad0Opsz48 from '../components/LocalDrinkFill1Wght600Grad0Opsz48'
import IconLocalDrinkFill1Wght700Grad0Opsz48 from '../components/LocalDrinkFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLocalDrink = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLocalDrinkFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLocalDrinkFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLocalDrinkFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLocalDrinkFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLocalDrinkFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLocalDrinkFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLocalDrinkFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLocalDrinkFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLocalDrinkFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLocalDrinkFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLocalDrinkFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLocalDrinkFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLocalDrinkFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLocalDrinkFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
