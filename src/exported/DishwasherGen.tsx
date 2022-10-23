import IconDishwasherGenFill0Wght100Grad0Opsz48 from '../components/DishwasherGenFill0Wght100Grad0Opsz48'
import IconDishwasherGenFill0Wght200Grad0Opsz48 from '../components/DishwasherGenFill0Wght200Grad0Opsz48'
import IconDishwasherGenFill0Wght300Grad0Opsz48 from '../components/DishwasherGenFill0Wght300Grad0Opsz48'
import IconDishwasherGenFill0Wght400Grad0Opsz48 from '../components/DishwasherGenFill0Wght400Grad0Opsz48'
import IconDishwasherGenFill0Wght500Grad0Opsz48 from '../components/DishwasherGenFill0Wght500Grad0Opsz48'
import IconDishwasherGenFill0Wght600Grad0Opsz48 from '../components/DishwasherGenFill0Wght600Grad0Opsz48'
import IconDishwasherGenFill0Wght700Grad0Opsz48 from '../components/DishwasherGenFill0Wght700Grad0Opsz48'
import IconDishwasherGenFill1Wght100Grad0Opsz48 from '../components/DishwasherGenFill1Wght100Grad0Opsz48'
import IconDishwasherGenFill1Wght200Grad0Opsz48 from '../components/DishwasherGenFill1Wght200Grad0Opsz48'
import IconDishwasherGenFill1Wght300Grad0Opsz48 from '../components/DishwasherGenFill1Wght300Grad0Opsz48'
import IconDishwasherGenFill1Wght400Grad0Opsz48 from '../components/DishwasherGenFill1Wght400Grad0Opsz48'
import IconDishwasherGenFill1Wght500Grad0Opsz48 from '../components/DishwasherGenFill1Wght500Grad0Opsz48'
import IconDishwasherGenFill1Wght600Grad0Opsz48 from '../components/DishwasherGenFill1Wght600Grad0Opsz48'
import IconDishwasherGenFill1Wght700Grad0Opsz48 from '../components/DishwasherGenFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDishwasherGen = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDishwasherGenFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDishwasherGenFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDishwasherGenFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDishwasherGenFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDishwasherGenFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDishwasherGenFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDishwasherGenFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDishwasherGenFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDishwasherGenFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDishwasherGenFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDishwasherGenFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDishwasherGenFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDishwasherGenFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDishwasherGenFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
