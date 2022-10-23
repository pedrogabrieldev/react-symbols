import IconAddShoppingCartFill0Wght100Grad0Opsz48 from '../components/AddShoppingCartFill0Wght100Grad0Opsz48'
import IconAddShoppingCartFill0Wght200Grad0Opsz48 from '../components/AddShoppingCartFill0Wght200Grad0Opsz48'
import IconAddShoppingCartFill0Wght300Grad0Opsz48 from '../components/AddShoppingCartFill0Wght300Grad0Opsz48'
import IconAddShoppingCartFill0Wght400Grad0Opsz48 from '../components/AddShoppingCartFill0Wght400Grad0Opsz48'
import IconAddShoppingCartFill0Wght500Grad0Opsz48 from '../components/AddShoppingCartFill0Wght500Grad0Opsz48'
import IconAddShoppingCartFill0Wght600Grad0Opsz48 from '../components/AddShoppingCartFill0Wght600Grad0Opsz48'
import IconAddShoppingCartFill0Wght700Grad0Opsz48 from '../components/AddShoppingCartFill0Wght700Grad0Opsz48'
import IconAddShoppingCartFill1Wght100Grad0Opsz48 from '../components/AddShoppingCartFill1Wght100Grad0Opsz48'
import IconAddShoppingCartFill1Wght200Grad0Opsz48 from '../components/AddShoppingCartFill1Wght200Grad0Opsz48'
import IconAddShoppingCartFill1Wght300Grad0Opsz48 from '../components/AddShoppingCartFill1Wght300Grad0Opsz48'
import IconAddShoppingCartFill1Wght400Grad0Opsz48 from '../components/AddShoppingCartFill1Wght400Grad0Opsz48'
import IconAddShoppingCartFill1Wght500Grad0Opsz48 from '../components/AddShoppingCartFill1Wght500Grad0Opsz48'
import IconAddShoppingCartFill1Wght600Grad0Opsz48 from '../components/AddShoppingCartFill1Wght600Grad0Opsz48'
import IconAddShoppingCartFill1Wght700Grad0Opsz48 from '../components/AddShoppingCartFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAddShoppingCart = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAddShoppingCartFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAddShoppingCartFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAddShoppingCartFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAddShoppingCartFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAddShoppingCartFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAddShoppingCartFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAddShoppingCartFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAddShoppingCartFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAddShoppingCartFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAddShoppingCartFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAddShoppingCartFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAddShoppingCartFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAddShoppingCartFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAddShoppingCartFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
