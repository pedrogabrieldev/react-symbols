import IconPriceCheckFill0Wght100Grad0Opsz48 from '../components/PriceCheckFill0Wght100Grad0Opsz48'
import IconPriceCheckFill0Wght200Grad0Opsz48 from '../components/PriceCheckFill0Wght200Grad0Opsz48'
import IconPriceCheckFill0Wght300Grad0Opsz48 from '../components/PriceCheckFill0Wght300Grad0Opsz48'
import IconPriceCheckFill0Wght400Grad0Opsz48 from '../components/PriceCheckFill0Wght400Grad0Opsz48'
import IconPriceCheckFill0Wght500Grad0Opsz48 from '../components/PriceCheckFill0Wght500Grad0Opsz48'
import IconPriceCheckFill0Wght600Grad0Opsz48 from '../components/PriceCheckFill0Wght600Grad0Opsz48'
import IconPriceCheckFill0Wght700Grad0Opsz48 from '../components/PriceCheckFill0Wght700Grad0Opsz48'
import IconPriceCheckFill1Wght100Grad0Opsz48 from '../components/PriceCheckFill1Wght100Grad0Opsz48'
import IconPriceCheckFill1Wght200Grad0Opsz48 from '../components/PriceCheckFill1Wght200Grad0Opsz48'
import IconPriceCheckFill1Wght300Grad0Opsz48 from '../components/PriceCheckFill1Wght300Grad0Opsz48'
import IconPriceCheckFill1Wght400Grad0Opsz48 from '../components/PriceCheckFill1Wght400Grad0Opsz48'
import IconPriceCheckFill1Wght500Grad0Opsz48 from '../components/PriceCheckFill1Wght500Grad0Opsz48'
import IconPriceCheckFill1Wght600Grad0Opsz48 from '../components/PriceCheckFill1Wght600Grad0Opsz48'
import IconPriceCheckFill1Wght700Grad0Opsz48 from '../components/PriceCheckFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPriceCheck = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPriceCheckFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPriceCheckFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPriceCheckFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPriceCheckFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPriceCheckFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPriceCheckFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPriceCheckFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPriceCheckFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPriceCheckFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPriceCheckFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPriceCheckFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPriceCheckFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPriceCheckFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPriceCheckFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
