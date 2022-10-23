import IconSellFill0Wght100Grad0Opsz48 from '../components/SellFill0Wght100Grad0Opsz48'
import IconSellFill0Wght200Grad0Opsz48 from '../components/SellFill0Wght200Grad0Opsz48'
import IconSellFill0Wght300Grad0Opsz48 from '../components/SellFill0Wght300Grad0Opsz48'
import IconSellFill0Wght400Grad0Opsz48 from '../components/SellFill0Wght400Grad0Opsz48'
import IconSellFill0Wght500Grad0Opsz48 from '../components/SellFill0Wght500Grad0Opsz48'
import IconSellFill0Wght600Grad0Opsz48 from '../components/SellFill0Wght600Grad0Opsz48'
import IconSellFill0Wght700Grad0Opsz48 from '../components/SellFill0Wght700Grad0Opsz48'
import IconSellFill1Wght100Grad0Opsz48 from '../components/SellFill1Wght100Grad0Opsz48'
import IconSellFill1Wght200Grad0Opsz48 from '../components/SellFill1Wght200Grad0Opsz48'
import IconSellFill1Wght300Grad0Opsz48 from '../components/SellFill1Wght300Grad0Opsz48'
import IconSellFill1Wght400Grad0Opsz48 from '../components/SellFill1Wght400Grad0Opsz48'
import IconSellFill1Wght500Grad0Opsz48 from '../components/SellFill1Wght500Grad0Opsz48'
import IconSellFill1Wght600Grad0Opsz48 from '../components/SellFill1Wght600Grad0Opsz48'
import IconSellFill1Wght700Grad0Opsz48 from '../components/SellFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSell = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSellFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSellFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSellFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSellFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSellFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSellFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSellFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSellFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSellFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSellFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSellFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSellFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSellFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSellFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
