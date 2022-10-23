import IconCurrencyRupeeFill0Wght100Grad0Opsz48 from '../components/CurrencyRupeeFill0Wght100Grad0Opsz48'
import IconCurrencyRupeeFill0Wght200Grad0Opsz48 from '../components/CurrencyRupeeFill0Wght200Grad0Opsz48'
import IconCurrencyRupeeFill0Wght300Grad0Opsz48 from '../components/CurrencyRupeeFill0Wght300Grad0Opsz48'
import IconCurrencyRupeeFill0Wght400Grad0Opsz48 from '../components/CurrencyRupeeFill0Wght400Grad0Opsz48'
import IconCurrencyRupeeFill0Wght500Grad0Opsz48 from '../components/CurrencyRupeeFill0Wght500Grad0Opsz48'
import IconCurrencyRupeeFill0Wght600Grad0Opsz48 from '../components/CurrencyRupeeFill0Wght600Grad0Opsz48'
import IconCurrencyRupeeFill0Wght700Grad0Opsz48 from '../components/CurrencyRupeeFill0Wght700Grad0Opsz48'
import IconCurrencyRupeeFill1Wght100Grad0Opsz48 from '../components/CurrencyRupeeFill1Wght100Grad0Opsz48'
import IconCurrencyRupeeFill1Wght200Grad0Opsz48 from '../components/CurrencyRupeeFill1Wght200Grad0Opsz48'
import IconCurrencyRupeeFill1Wght300Grad0Opsz48 from '../components/CurrencyRupeeFill1Wght300Grad0Opsz48'
import IconCurrencyRupeeFill1Wght400Grad0Opsz48 from '../components/CurrencyRupeeFill1Wght400Grad0Opsz48'
import IconCurrencyRupeeFill1Wght500Grad0Opsz48 from '../components/CurrencyRupeeFill1Wght500Grad0Opsz48'
import IconCurrencyRupeeFill1Wght600Grad0Opsz48 from '../components/CurrencyRupeeFill1Wght600Grad0Opsz48'
import IconCurrencyRupeeFill1Wght700Grad0Opsz48 from '../components/CurrencyRupeeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCurrencyRupee = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCurrencyRupeeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCurrencyRupeeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCurrencyRupeeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCurrencyRupeeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCurrencyRupeeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCurrencyRupeeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCurrencyRupeeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCurrencyRupeeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCurrencyRupeeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCurrencyRupeeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCurrencyRupeeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCurrencyRupeeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCurrencyRupeeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCurrencyRupeeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
