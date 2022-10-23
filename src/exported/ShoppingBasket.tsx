import IconShoppingBasketFill0Wght100Grad0Opsz48 from '../components/ShoppingBasketFill0Wght100Grad0Opsz48'
import IconShoppingBasketFill0Wght200Grad0Opsz48 from '../components/ShoppingBasketFill0Wght200Grad0Opsz48'
import IconShoppingBasketFill0Wght300Grad0Opsz48 from '../components/ShoppingBasketFill0Wght300Grad0Opsz48'
import IconShoppingBasketFill0Wght400Grad0Opsz48 from '../components/ShoppingBasketFill0Wght400Grad0Opsz48'
import IconShoppingBasketFill0Wght500Grad0Opsz48 from '../components/ShoppingBasketFill0Wght500Grad0Opsz48'
import IconShoppingBasketFill0Wght600Grad0Opsz48 from '../components/ShoppingBasketFill0Wght600Grad0Opsz48'
import IconShoppingBasketFill0Wght700Grad0Opsz48 from '../components/ShoppingBasketFill0Wght700Grad0Opsz48'
import IconShoppingBasketFill1Wght100Grad0Opsz48 from '../components/ShoppingBasketFill1Wght100Grad0Opsz48'
import IconShoppingBasketFill1Wght200Grad0Opsz48 from '../components/ShoppingBasketFill1Wght200Grad0Opsz48'
import IconShoppingBasketFill1Wght300Grad0Opsz48 from '../components/ShoppingBasketFill1Wght300Grad0Opsz48'
import IconShoppingBasketFill1Wght400Grad0Opsz48 from '../components/ShoppingBasketFill1Wght400Grad0Opsz48'
import IconShoppingBasketFill1Wght500Grad0Opsz48 from '../components/ShoppingBasketFill1Wght500Grad0Opsz48'
import IconShoppingBasketFill1Wght600Grad0Opsz48 from '../components/ShoppingBasketFill1Wght600Grad0Opsz48'
import IconShoppingBasketFill1Wght700Grad0Opsz48 from '../components/ShoppingBasketFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconShoppingBasket = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconShoppingBasketFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconShoppingBasketFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconShoppingBasketFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconShoppingBasketFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconShoppingBasketFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconShoppingBasketFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconShoppingBasketFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconShoppingBasketFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconShoppingBasketFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconShoppingBasketFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconShoppingBasketFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconShoppingBasketFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconShoppingBasketFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconShoppingBasketFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
