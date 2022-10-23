import IconTableRestaurantFill0Wght100Grad0Opsz48 from '../components/TableRestaurantFill0Wght100Grad0Opsz48'
import IconTableRestaurantFill0Wght200Grad0Opsz48 from '../components/TableRestaurantFill0Wght200Grad0Opsz48'
import IconTableRestaurantFill0Wght300Grad0Opsz48 from '../components/TableRestaurantFill0Wght300Grad0Opsz48'
import IconTableRestaurantFill0Wght400Grad0Opsz48 from '../components/TableRestaurantFill0Wght400Grad0Opsz48'
import IconTableRestaurantFill0Wght500Grad0Opsz48 from '../components/TableRestaurantFill0Wght500Grad0Opsz48'
import IconTableRestaurantFill0Wght600Grad0Opsz48 from '../components/TableRestaurantFill0Wght600Grad0Opsz48'
import IconTableRestaurantFill0Wght700Grad0Opsz48 from '../components/TableRestaurantFill0Wght700Grad0Opsz48'
import IconTableRestaurantFill1Wght100Grad0Opsz48 from '../components/TableRestaurantFill1Wght100Grad0Opsz48'
import IconTableRestaurantFill1Wght200Grad0Opsz48 from '../components/TableRestaurantFill1Wght200Grad0Opsz48'
import IconTableRestaurantFill1Wght300Grad0Opsz48 from '../components/TableRestaurantFill1Wght300Grad0Opsz48'
import IconTableRestaurantFill1Wght400Grad0Opsz48 from '../components/TableRestaurantFill1Wght400Grad0Opsz48'
import IconTableRestaurantFill1Wght500Grad0Opsz48 from '../components/TableRestaurantFill1Wght500Grad0Opsz48'
import IconTableRestaurantFill1Wght600Grad0Opsz48 from '../components/TableRestaurantFill1Wght600Grad0Opsz48'
import IconTableRestaurantFill1Wght700Grad0Opsz48 from '../components/TableRestaurantFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTableRestaurant = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTableRestaurantFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTableRestaurantFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTableRestaurantFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTableRestaurantFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTableRestaurantFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTableRestaurantFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTableRestaurantFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTableRestaurantFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTableRestaurantFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTableRestaurantFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTableRestaurantFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTableRestaurantFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTableRestaurantFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTableRestaurantFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
