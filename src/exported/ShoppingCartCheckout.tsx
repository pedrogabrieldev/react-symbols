import IconShoppingCartCheckoutFill0Wght100Grad0Opsz48 from '../components/ShoppingCartCheckoutFill0Wght100Grad0Opsz48'
import IconShoppingCartCheckoutFill0Wght200Grad0Opsz48 from '../components/ShoppingCartCheckoutFill0Wght200Grad0Opsz48'
import IconShoppingCartCheckoutFill0Wght300Grad0Opsz48 from '../components/ShoppingCartCheckoutFill0Wght300Grad0Opsz48'
import IconShoppingCartCheckoutFill0Wght400Grad0Opsz48 from '../components/ShoppingCartCheckoutFill0Wght400Grad0Opsz48'
import IconShoppingCartCheckoutFill0Wght500Grad0Opsz48 from '../components/ShoppingCartCheckoutFill0Wght500Grad0Opsz48'
import IconShoppingCartCheckoutFill0Wght600Grad0Opsz48 from '../components/ShoppingCartCheckoutFill0Wght600Grad0Opsz48'
import IconShoppingCartCheckoutFill0Wght700Grad0Opsz48 from '../components/ShoppingCartCheckoutFill0Wght700Grad0Opsz48'
import IconShoppingCartCheckoutFill1Wght100Grad0Opsz48 from '../components/ShoppingCartCheckoutFill1Wght100Grad0Opsz48'
import IconShoppingCartCheckoutFill1Wght200Grad0Opsz48 from '../components/ShoppingCartCheckoutFill1Wght200Grad0Opsz48'
import IconShoppingCartCheckoutFill1Wght300Grad0Opsz48 from '../components/ShoppingCartCheckoutFill1Wght300Grad0Opsz48'
import IconShoppingCartCheckoutFill1Wght400Grad0Opsz48 from '../components/ShoppingCartCheckoutFill1Wght400Grad0Opsz48'
import IconShoppingCartCheckoutFill1Wght500Grad0Opsz48 from '../components/ShoppingCartCheckoutFill1Wght500Grad0Opsz48'
import IconShoppingCartCheckoutFill1Wght600Grad0Opsz48 from '../components/ShoppingCartCheckoutFill1Wght600Grad0Opsz48'
import IconShoppingCartCheckoutFill1Wght700Grad0Opsz48 from '../components/ShoppingCartCheckoutFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconShoppingCartCheckout = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconShoppingCartCheckoutFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconShoppingCartCheckoutFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconShoppingCartCheckoutFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconShoppingCartCheckoutFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconShoppingCartCheckoutFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconShoppingCartCheckoutFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconShoppingCartCheckoutFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconShoppingCartCheckoutFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconShoppingCartCheckoutFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconShoppingCartCheckoutFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconShoppingCartCheckoutFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconShoppingCartCheckoutFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconShoppingCartCheckoutFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconShoppingCartCheckoutFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
