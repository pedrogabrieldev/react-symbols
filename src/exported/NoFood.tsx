import IconNoFoodFill0Wght100Grad0Opsz48 from '../components/NoFoodFill0Wght100Grad0Opsz48'
import IconNoFoodFill0Wght200Grad0Opsz48 from '../components/NoFoodFill0Wght200Grad0Opsz48'
import IconNoFoodFill0Wght300Grad0Opsz48 from '../components/NoFoodFill0Wght300Grad0Opsz48'
import IconNoFoodFill0Wght400Grad0Opsz48 from '../components/NoFoodFill0Wght400Grad0Opsz48'
import IconNoFoodFill0Wght500Grad0Opsz48 from '../components/NoFoodFill0Wght500Grad0Opsz48'
import IconNoFoodFill0Wght600Grad0Opsz48 from '../components/NoFoodFill0Wght600Grad0Opsz48'
import IconNoFoodFill0Wght700Grad0Opsz48 from '../components/NoFoodFill0Wght700Grad0Opsz48'
import IconNoFoodFill1Wght100Grad0Opsz48 from '../components/NoFoodFill1Wght100Grad0Opsz48'
import IconNoFoodFill1Wght200Grad0Opsz48 from '../components/NoFoodFill1Wght200Grad0Opsz48'
import IconNoFoodFill1Wght300Grad0Opsz48 from '../components/NoFoodFill1Wght300Grad0Opsz48'
import IconNoFoodFill1Wght400Grad0Opsz48 from '../components/NoFoodFill1Wght400Grad0Opsz48'
import IconNoFoodFill1Wght500Grad0Opsz48 from '../components/NoFoodFill1Wght500Grad0Opsz48'
import IconNoFoodFill1Wght600Grad0Opsz48 from '../components/NoFoodFill1Wght600Grad0Opsz48'
import IconNoFoodFill1Wght700Grad0Opsz48 from '../components/NoFoodFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNoFood = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNoFoodFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNoFoodFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNoFoodFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNoFoodFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNoFoodFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNoFoodFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNoFoodFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNoFoodFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNoFoodFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNoFoodFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNoFoodFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNoFoodFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNoFoodFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNoFoodFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
