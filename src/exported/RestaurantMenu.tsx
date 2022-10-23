import IconRestaurantMenuFill0Wght100Grad0Opsz48 from '../components/RestaurantMenuFill0Wght100Grad0Opsz48'
import IconRestaurantMenuFill0Wght200Grad0Opsz48 from '../components/RestaurantMenuFill0Wght200Grad0Opsz48'
import IconRestaurantMenuFill0Wght300Grad0Opsz48 from '../components/RestaurantMenuFill0Wght300Grad0Opsz48'
import IconRestaurantMenuFill0Wght400Grad0Opsz48 from '../components/RestaurantMenuFill0Wght400Grad0Opsz48'
import IconRestaurantMenuFill0Wght500Grad0Opsz48 from '../components/RestaurantMenuFill0Wght500Grad0Opsz48'
import IconRestaurantMenuFill0Wght600Grad0Opsz48 from '../components/RestaurantMenuFill0Wght600Grad0Opsz48'
import IconRestaurantMenuFill0Wght700Grad0Opsz48 from '../components/RestaurantMenuFill0Wght700Grad0Opsz48'
import IconRestaurantMenuFill1Wght100Grad0Opsz48 from '../components/RestaurantMenuFill1Wght100Grad0Opsz48'
import IconRestaurantMenuFill1Wght200Grad0Opsz48 from '../components/RestaurantMenuFill1Wght200Grad0Opsz48'
import IconRestaurantMenuFill1Wght300Grad0Opsz48 from '../components/RestaurantMenuFill1Wght300Grad0Opsz48'
import IconRestaurantMenuFill1Wght400Grad0Opsz48 from '../components/RestaurantMenuFill1Wght400Grad0Opsz48'
import IconRestaurantMenuFill1Wght500Grad0Opsz48 from '../components/RestaurantMenuFill1Wght500Grad0Opsz48'
import IconRestaurantMenuFill1Wght600Grad0Opsz48 from '../components/RestaurantMenuFill1Wght600Grad0Opsz48'
import IconRestaurantMenuFill1Wght700Grad0Opsz48 from '../components/RestaurantMenuFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRestaurantMenu = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRestaurantMenuFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRestaurantMenuFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRestaurantMenuFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRestaurantMenuFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRestaurantMenuFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRestaurantMenuFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRestaurantMenuFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRestaurantMenuFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRestaurantMenuFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRestaurantMenuFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRestaurantMenuFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRestaurantMenuFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRestaurantMenuFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRestaurantMenuFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
