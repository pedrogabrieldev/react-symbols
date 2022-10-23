import IconCurrencyRubleFill0Wght100Grad0Opsz48 from '../components/CurrencyRubleFill0Wght100Grad0Opsz48'
import IconCurrencyRubleFill0Wght200Grad0Opsz48 from '../components/CurrencyRubleFill0Wght200Grad0Opsz48'
import IconCurrencyRubleFill0Wght300Grad0Opsz48 from '../components/CurrencyRubleFill0Wght300Grad0Opsz48'
import IconCurrencyRubleFill0Wght400Grad0Opsz48 from '../components/CurrencyRubleFill0Wght400Grad0Opsz48'
import IconCurrencyRubleFill0Wght500Grad0Opsz48 from '../components/CurrencyRubleFill0Wght500Grad0Opsz48'
import IconCurrencyRubleFill0Wght600Grad0Opsz48 from '../components/CurrencyRubleFill0Wght600Grad0Opsz48'
import IconCurrencyRubleFill0Wght700Grad0Opsz48 from '../components/CurrencyRubleFill0Wght700Grad0Opsz48'
import IconCurrencyRubleFill1Wght100Grad0Opsz48 from '../components/CurrencyRubleFill1Wght100Grad0Opsz48'
import IconCurrencyRubleFill1Wght200Grad0Opsz48 from '../components/CurrencyRubleFill1Wght200Grad0Opsz48'
import IconCurrencyRubleFill1Wght300Grad0Opsz48 from '../components/CurrencyRubleFill1Wght300Grad0Opsz48'
import IconCurrencyRubleFill1Wght400Grad0Opsz48 from '../components/CurrencyRubleFill1Wght400Grad0Opsz48'
import IconCurrencyRubleFill1Wght500Grad0Opsz48 from '../components/CurrencyRubleFill1Wght500Grad0Opsz48'
import IconCurrencyRubleFill1Wght600Grad0Opsz48 from '../components/CurrencyRubleFill1Wght600Grad0Opsz48'
import IconCurrencyRubleFill1Wght700Grad0Opsz48 from '../components/CurrencyRubleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCurrencyRuble = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCurrencyRubleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCurrencyRubleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCurrencyRubleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCurrencyRubleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCurrencyRubleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCurrencyRubleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCurrencyRubleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCurrencyRubleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCurrencyRubleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCurrencyRubleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCurrencyRubleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCurrencyRubleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCurrencyRubleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCurrencyRubleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
