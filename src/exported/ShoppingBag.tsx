import IconShoppingBagFill0Wght100Grad0Opsz48 from '../components/ShoppingBagFill0Wght100Grad0Opsz48'
import IconShoppingBagFill0Wght200Grad0Opsz48 from '../components/ShoppingBagFill0Wght200Grad0Opsz48'
import IconShoppingBagFill0Wght300Grad0Opsz48 from '../components/ShoppingBagFill0Wght300Grad0Opsz48'
import IconShoppingBagFill0Wght400Grad0Opsz48 from '../components/ShoppingBagFill0Wght400Grad0Opsz48'
import IconShoppingBagFill0Wght500Grad0Opsz48 from '../components/ShoppingBagFill0Wght500Grad0Opsz48'
import IconShoppingBagFill0Wght600Grad0Opsz48 from '../components/ShoppingBagFill0Wght600Grad0Opsz48'
import IconShoppingBagFill0Wght700Grad0Opsz48 from '../components/ShoppingBagFill0Wght700Grad0Opsz48'
import IconShoppingBagFill1Wght100Grad0Opsz48 from '../components/ShoppingBagFill1Wght100Grad0Opsz48'
import IconShoppingBagFill1Wght200Grad0Opsz48 from '../components/ShoppingBagFill1Wght200Grad0Opsz48'
import IconShoppingBagFill1Wght300Grad0Opsz48 from '../components/ShoppingBagFill1Wght300Grad0Opsz48'
import IconShoppingBagFill1Wght400Grad0Opsz48 from '../components/ShoppingBagFill1Wght400Grad0Opsz48'
import IconShoppingBagFill1Wght500Grad0Opsz48 from '../components/ShoppingBagFill1Wght500Grad0Opsz48'
import IconShoppingBagFill1Wght600Grad0Opsz48 from '../components/ShoppingBagFill1Wght600Grad0Opsz48'
import IconShoppingBagFill1Wght700Grad0Opsz48 from '../components/ShoppingBagFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconShoppingBag = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconShoppingBagFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconShoppingBagFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconShoppingBagFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconShoppingBagFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconShoppingBagFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconShoppingBagFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconShoppingBagFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconShoppingBagFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconShoppingBagFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconShoppingBagFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconShoppingBagFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconShoppingBagFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconShoppingBagFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconShoppingBagFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
