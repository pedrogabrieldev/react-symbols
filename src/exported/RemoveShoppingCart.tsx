import IconRemoveShoppingCartFill0Wght100Grad0Opsz48 from '../components/RemoveShoppingCartFill0Wght100Grad0Opsz48'
import IconRemoveShoppingCartFill0Wght200Grad0Opsz48 from '../components/RemoveShoppingCartFill0Wght200Grad0Opsz48'
import IconRemoveShoppingCartFill0Wght300Grad0Opsz48 from '../components/RemoveShoppingCartFill0Wght300Grad0Opsz48'
import IconRemoveShoppingCartFill0Wght400Grad0Opsz48 from '../components/RemoveShoppingCartFill0Wght400Grad0Opsz48'
import IconRemoveShoppingCartFill0Wght500Grad0Opsz48 from '../components/RemoveShoppingCartFill0Wght500Grad0Opsz48'
import IconRemoveShoppingCartFill0Wght600Grad0Opsz48 from '../components/RemoveShoppingCartFill0Wght600Grad0Opsz48'
import IconRemoveShoppingCartFill0Wght700Grad0Opsz48 from '../components/RemoveShoppingCartFill0Wght700Grad0Opsz48'
import IconRemoveShoppingCartFill1Wght100Grad0Opsz48 from '../components/RemoveShoppingCartFill1Wght100Grad0Opsz48'
import IconRemoveShoppingCartFill1Wght200Grad0Opsz48 from '../components/RemoveShoppingCartFill1Wght200Grad0Opsz48'
import IconRemoveShoppingCartFill1Wght300Grad0Opsz48 from '../components/RemoveShoppingCartFill1Wght300Grad0Opsz48'
import IconRemoveShoppingCartFill1Wght400Grad0Opsz48 from '../components/RemoveShoppingCartFill1Wght400Grad0Opsz48'
import IconRemoveShoppingCartFill1Wght500Grad0Opsz48 from '../components/RemoveShoppingCartFill1Wght500Grad0Opsz48'
import IconRemoveShoppingCartFill1Wght600Grad0Opsz48 from '../components/RemoveShoppingCartFill1Wght600Grad0Opsz48'
import IconRemoveShoppingCartFill1Wght700Grad0Opsz48 from '../components/RemoveShoppingCartFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRemoveShoppingCart = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRemoveShoppingCartFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRemoveShoppingCartFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRemoveShoppingCartFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRemoveShoppingCartFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRemoveShoppingCartFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRemoveShoppingCartFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRemoveShoppingCartFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRemoveShoppingCartFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRemoveShoppingCartFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRemoveShoppingCartFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRemoveShoppingCartFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRemoveShoppingCartFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRemoveShoppingCartFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRemoveShoppingCartFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
