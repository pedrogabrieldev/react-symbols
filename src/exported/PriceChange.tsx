import IconPriceChangeFill0Wght100Grad0Opsz48 from '../components/PriceChangeFill0Wght100Grad0Opsz48'
import IconPriceChangeFill0Wght200Grad0Opsz48 from '../components/PriceChangeFill0Wght200Grad0Opsz48'
import IconPriceChangeFill0Wght300Grad0Opsz48 from '../components/PriceChangeFill0Wght300Grad0Opsz48'
import IconPriceChangeFill0Wght400Grad0Opsz48 from '../components/PriceChangeFill0Wght400Grad0Opsz48'
import IconPriceChangeFill0Wght500Grad0Opsz48 from '../components/PriceChangeFill0Wght500Grad0Opsz48'
import IconPriceChangeFill0Wght600Grad0Opsz48 from '../components/PriceChangeFill0Wght600Grad0Opsz48'
import IconPriceChangeFill0Wght700Grad0Opsz48 from '../components/PriceChangeFill0Wght700Grad0Opsz48'
import IconPriceChangeFill1Wght100Grad0Opsz48 from '../components/PriceChangeFill1Wght100Grad0Opsz48'
import IconPriceChangeFill1Wght200Grad0Opsz48 from '../components/PriceChangeFill1Wght200Grad0Opsz48'
import IconPriceChangeFill1Wght300Grad0Opsz48 from '../components/PriceChangeFill1Wght300Grad0Opsz48'
import IconPriceChangeFill1Wght400Grad0Opsz48 from '../components/PriceChangeFill1Wght400Grad0Opsz48'
import IconPriceChangeFill1Wght500Grad0Opsz48 from '../components/PriceChangeFill1Wght500Grad0Opsz48'
import IconPriceChangeFill1Wght600Grad0Opsz48 from '../components/PriceChangeFill1Wght600Grad0Opsz48'
import IconPriceChangeFill1Wght700Grad0Opsz48 from '../components/PriceChangeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPriceChange = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPriceChangeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPriceChangeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPriceChangeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPriceChangeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPriceChangeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPriceChangeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPriceChangeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPriceChangeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPriceChangeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPriceChangeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPriceChangeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPriceChangeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPriceChangeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPriceChangeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
