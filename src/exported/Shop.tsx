import IconShopFill0Wght100Grad0Opsz48 from '../components/ShopFill0Wght100Grad0Opsz48'
import IconShopFill0Wght200Grad0Opsz48 from '../components/ShopFill0Wght200Grad0Opsz48'
import IconShopFill0Wght300Grad0Opsz48 from '../components/ShopFill0Wght300Grad0Opsz48'
import IconShopFill0Wght400Grad0Opsz48 from '../components/ShopFill0Wght400Grad0Opsz48'
import IconShopFill0Wght500Grad0Opsz48 from '../components/ShopFill0Wght500Grad0Opsz48'
import IconShopFill0Wght600Grad0Opsz48 from '../components/ShopFill0Wght600Grad0Opsz48'
import IconShopFill0Wght700Grad0Opsz48 from '../components/ShopFill0Wght700Grad0Opsz48'
import IconShopFill1Wght100Grad0Opsz48 from '../components/ShopFill1Wght100Grad0Opsz48'
import IconShopFill1Wght200Grad0Opsz48 from '../components/ShopFill1Wght200Grad0Opsz48'
import IconShopFill1Wght300Grad0Opsz48 from '../components/ShopFill1Wght300Grad0Opsz48'
import IconShopFill1Wght400Grad0Opsz48 from '../components/ShopFill1Wght400Grad0Opsz48'
import IconShopFill1Wght500Grad0Opsz48 from '../components/ShopFill1Wght500Grad0Opsz48'
import IconShopFill1Wght600Grad0Opsz48 from '../components/ShopFill1Wght600Grad0Opsz48'
import IconShopFill1Wght700Grad0Opsz48 from '../components/ShopFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconShop = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconShopFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconShopFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconShopFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconShopFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconShopFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconShopFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconShopFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconShopFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconShopFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconShopFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconShopFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconShopFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconShopFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconShopFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
