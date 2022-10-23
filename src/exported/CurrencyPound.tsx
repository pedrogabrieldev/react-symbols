import IconCurrencyPoundFill0Wght100Grad0Opsz48 from '../components/CurrencyPoundFill0Wght100Grad0Opsz48'
import IconCurrencyPoundFill0Wght200Grad0Opsz48 from '../components/CurrencyPoundFill0Wght200Grad0Opsz48'
import IconCurrencyPoundFill0Wght300Grad0Opsz48 from '../components/CurrencyPoundFill0Wght300Grad0Opsz48'
import IconCurrencyPoundFill0Wght400Grad0Opsz48 from '../components/CurrencyPoundFill0Wght400Grad0Opsz48'
import IconCurrencyPoundFill0Wght500Grad0Opsz48 from '../components/CurrencyPoundFill0Wght500Grad0Opsz48'
import IconCurrencyPoundFill0Wght600Grad0Opsz48 from '../components/CurrencyPoundFill0Wght600Grad0Opsz48'
import IconCurrencyPoundFill0Wght700Grad0Opsz48 from '../components/CurrencyPoundFill0Wght700Grad0Opsz48'
import IconCurrencyPoundFill1Wght100Grad0Opsz48 from '../components/CurrencyPoundFill1Wght100Grad0Opsz48'
import IconCurrencyPoundFill1Wght200Grad0Opsz48 from '../components/CurrencyPoundFill1Wght200Grad0Opsz48'
import IconCurrencyPoundFill1Wght300Grad0Opsz48 from '../components/CurrencyPoundFill1Wght300Grad0Opsz48'
import IconCurrencyPoundFill1Wght400Grad0Opsz48 from '../components/CurrencyPoundFill1Wght400Grad0Opsz48'
import IconCurrencyPoundFill1Wght500Grad0Opsz48 from '../components/CurrencyPoundFill1Wght500Grad0Opsz48'
import IconCurrencyPoundFill1Wght600Grad0Opsz48 from '../components/CurrencyPoundFill1Wght600Grad0Opsz48'
import IconCurrencyPoundFill1Wght700Grad0Opsz48 from '../components/CurrencyPoundFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCurrencyPound = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCurrencyPoundFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCurrencyPoundFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCurrencyPoundFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCurrencyPoundFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCurrencyPoundFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCurrencyPoundFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCurrencyPoundFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCurrencyPoundFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCurrencyPoundFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCurrencyPoundFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCurrencyPoundFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCurrencyPoundFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCurrencyPoundFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCurrencyPoundFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
