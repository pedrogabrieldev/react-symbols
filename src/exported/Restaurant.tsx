import IconRestaurantFill0Wght100Grad0Opsz48 from '../components/RestaurantFill0Wght100Grad0Opsz48'
import IconRestaurantFill0Wght200Grad0Opsz48 from '../components/RestaurantFill0Wght200Grad0Opsz48'
import IconRestaurantFill0Wght300Grad0Opsz48 from '../components/RestaurantFill0Wght300Grad0Opsz48'
import IconRestaurantFill0Wght400Grad0Opsz48 from '../components/RestaurantFill0Wght400Grad0Opsz48'
import IconRestaurantFill0Wght500Grad0Opsz48 from '../components/RestaurantFill0Wght500Grad0Opsz48'
import IconRestaurantFill0Wght600Grad0Opsz48 from '../components/RestaurantFill0Wght600Grad0Opsz48'
import IconRestaurantFill0Wght700Grad0Opsz48 from '../components/RestaurantFill0Wght700Grad0Opsz48'
import IconRestaurantFill1Wght100Grad0Opsz48 from '../components/RestaurantFill1Wght100Grad0Opsz48'
import IconRestaurantFill1Wght200Grad0Opsz48 from '../components/RestaurantFill1Wght200Grad0Opsz48'
import IconRestaurantFill1Wght300Grad0Opsz48 from '../components/RestaurantFill1Wght300Grad0Opsz48'
import IconRestaurantFill1Wght400Grad0Opsz48 from '../components/RestaurantFill1Wght400Grad0Opsz48'
import IconRestaurantFill1Wght500Grad0Opsz48 from '../components/RestaurantFill1Wght500Grad0Opsz48'
import IconRestaurantFill1Wght600Grad0Opsz48 from '../components/RestaurantFill1Wght600Grad0Opsz48'
import IconRestaurantFill1Wght700Grad0Opsz48 from '../components/RestaurantFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRestaurant = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRestaurantFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRestaurantFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRestaurantFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRestaurantFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRestaurantFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRestaurantFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRestaurantFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRestaurantFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRestaurantFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRestaurantFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRestaurantFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRestaurantFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRestaurantFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRestaurantFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
