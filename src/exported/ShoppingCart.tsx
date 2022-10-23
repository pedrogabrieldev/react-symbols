import IconShoppingCartFill0Wght100Grad0Opsz48 from '../components/ShoppingCartFill0Wght100Grad0Opsz48'
import IconShoppingCartFill0Wght200Grad0Opsz48 from '../components/ShoppingCartFill0Wght200Grad0Opsz48'
import IconShoppingCartFill0Wght300Grad0Opsz48 from '../components/ShoppingCartFill0Wght300Grad0Opsz48'
import IconShoppingCartFill0Wght400Grad0Opsz48 from '../components/ShoppingCartFill0Wght400Grad0Opsz48'
import IconShoppingCartFill0Wght500Grad0Opsz48 from '../components/ShoppingCartFill0Wght500Grad0Opsz48'
import IconShoppingCartFill0Wght600Grad0Opsz48 from '../components/ShoppingCartFill0Wght600Grad0Opsz48'
import IconShoppingCartFill0Wght700Grad0Opsz48 from '../components/ShoppingCartFill0Wght700Grad0Opsz48'
import IconShoppingCartFill1Wght100Grad0Opsz48 from '../components/ShoppingCartFill1Wght100Grad0Opsz48'
import IconShoppingCartFill1Wght200Grad0Opsz48 from '../components/ShoppingCartFill1Wght200Grad0Opsz48'
import IconShoppingCartFill1Wght300Grad0Opsz48 from '../components/ShoppingCartFill1Wght300Grad0Opsz48'
import IconShoppingCartFill1Wght400Grad0Opsz48 from '../components/ShoppingCartFill1Wght400Grad0Opsz48'
import IconShoppingCartFill1Wght500Grad0Opsz48 from '../components/ShoppingCartFill1Wght500Grad0Opsz48'
import IconShoppingCartFill1Wght600Grad0Opsz48 from '../components/ShoppingCartFill1Wght600Grad0Opsz48'
import IconShoppingCartFill1Wght700Grad0Opsz48 from '../components/ShoppingCartFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconShoppingCart = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconShoppingCartFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconShoppingCartFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconShoppingCartFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconShoppingCartFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconShoppingCartFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconShoppingCartFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconShoppingCartFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconShoppingCartFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconShoppingCartFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconShoppingCartFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconShoppingCartFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconShoppingCartFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconShoppingCartFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconShoppingCartFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
