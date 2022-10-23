import IconCurrencyExchangeFill0Wght100Grad0Opsz48 from '../components/CurrencyExchangeFill0Wght100Grad0Opsz48'
import IconCurrencyExchangeFill0Wght200Grad0Opsz48 from '../components/CurrencyExchangeFill0Wght200Grad0Opsz48'
import IconCurrencyExchangeFill0Wght300Grad0Opsz48 from '../components/CurrencyExchangeFill0Wght300Grad0Opsz48'
import IconCurrencyExchangeFill0Wght400Grad0Opsz48 from '../components/CurrencyExchangeFill0Wght400Grad0Opsz48'
import IconCurrencyExchangeFill0Wght500Grad0Opsz48 from '../components/CurrencyExchangeFill0Wght500Grad0Opsz48'
import IconCurrencyExchangeFill0Wght600Grad0Opsz48 from '../components/CurrencyExchangeFill0Wght600Grad0Opsz48'
import IconCurrencyExchangeFill0Wght700Grad0Opsz48 from '../components/CurrencyExchangeFill0Wght700Grad0Opsz48'
import IconCurrencyExchangeFill1Wght100Grad0Opsz48 from '../components/CurrencyExchangeFill1Wght100Grad0Opsz48'
import IconCurrencyExchangeFill1Wght200Grad0Opsz48 from '../components/CurrencyExchangeFill1Wght200Grad0Opsz48'
import IconCurrencyExchangeFill1Wght300Grad0Opsz48 from '../components/CurrencyExchangeFill1Wght300Grad0Opsz48'
import IconCurrencyExchangeFill1Wght400Grad0Opsz48 from '../components/CurrencyExchangeFill1Wght400Grad0Opsz48'
import IconCurrencyExchangeFill1Wght500Grad0Opsz48 from '../components/CurrencyExchangeFill1Wght500Grad0Opsz48'
import IconCurrencyExchangeFill1Wght600Grad0Opsz48 from '../components/CurrencyExchangeFill1Wght600Grad0Opsz48'
import IconCurrencyExchangeFill1Wght700Grad0Opsz48 from '../components/CurrencyExchangeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCurrencyExchange = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCurrencyExchangeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCurrencyExchangeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCurrencyExchangeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCurrencyExchangeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCurrencyExchangeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCurrencyExchangeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCurrencyExchangeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCurrencyExchangeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCurrencyExchangeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCurrencyExchangeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCurrencyExchangeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCurrencyExchangeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCurrencyExchangeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCurrencyExchangeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
