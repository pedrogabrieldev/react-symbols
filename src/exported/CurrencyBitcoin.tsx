import IconCurrencyBitcoinFill0Wght100Grad0Opsz48 from '../components/CurrencyBitcoinFill0Wght100Grad0Opsz48'
import IconCurrencyBitcoinFill0Wght200Grad0Opsz48 from '../components/CurrencyBitcoinFill0Wght200Grad0Opsz48'
import IconCurrencyBitcoinFill0Wght300Grad0Opsz48 from '../components/CurrencyBitcoinFill0Wght300Grad0Opsz48'
import IconCurrencyBitcoinFill0Wght400Grad0Opsz48 from '../components/CurrencyBitcoinFill0Wght400Grad0Opsz48'
import IconCurrencyBitcoinFill0Wght500Grad0Opsz48 from '../components/CurrencyBitcoinFill0Wght500Grad0Opsz48'
import IconCurrencyBitcoinFill0Wght600Grad0Opsz48 from '../components/CurrencyBitcoinFill0Wght600Grad0Opsz48'
import IconCurrencyBitcoinFill0Wght700Grad0Opsz48 from '../components/CurrencyBitcoinFill0Wght700Grad0Opsz48'
import IconCurrencyBitcoinFill1Wght100Grad0Opsz48 from '../components/CurrencyBitcoinFill1Wght100Grad0Opsz48'
import IconCurrencyBitcoinFill1Wght200Grad0Opsz48 from '../components/CurrencyBitcoinFill1Wght200Grad0Opsz48'
import IconCurrencyBitcoinFill1Wght300Grad0Opsz48 from '../components/CurrencyBitcoinFill1Wght300Grad0Opsz48'
import IconCurrencyBitcoinFill1Wght400Grad0Opsz48 from '../components/CurrencyBitcoinFill1Wght400Grad0Opsz48'
import IconCurrencyBitcoinFill1Wght500Grad0Opsz48 from '../components/CurrencyBitcoinFill1Wght500Grad0Opsz48'
import IconCurrencyBitcoinFill1Wght600Grad0Opsz48 from '../components/CurrencyBitcoinFill1Wght600Grad0Opsz48'
import IconCurrencyBitcoinFill1Wght700Grad0Opsz48 from '../components/CurrencyBitcoinFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCurrencyBitcoin = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCurrencyBitcoinFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCurrencyBitcoinFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCurrencyBitcoinFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCurrencyBitcoinFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCurrencyBitcoinFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCurrencyBitcoinFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCurrencyBitcoinFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCurrencyBitcoinFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCurrencyBitcoinFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCurrencyBitcoinFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCurrencyBitcoinFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCurrencyBitcoinFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCurrencyBitcoinFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCurrencyBitcoinFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
