import IconCurrencyLiraFill0Wght100Grad0Opsz48 from '../components/CurrencyLiraFill0Wght100Grad0Opsz48'
import IconCurrencyLiraFill0Wght200Grad0Opsz48 from '../components/CurrencyLiraFill0Wght200Grad0Opsz48'
import IconCurrencyLiraFill0Wght300Grad0Opsz48 from '../components/CurrencyLiraFill0Wght300Grad0Opsz48'
import IconCurrencyLiraFill0Wght400Grad0Opsz48 from '../components/CurrencyLiraFill0Wght400Grad0Opsz48'
import IconCurrencyLiraFill0Wght500Grad0Opsz48 from '../components/CurrencyLiraFill0Wght500Grad0Opsz48'
import IconCurrencyLiraFill0Wght600Grad0Opsz48 from '../components/CurrencyLiraFill0Wght600Grad0Opsz48'
import IconCurrencyLiraFill0Wght700Grad0Opsz48 from '../components/CurrencyLiraFill0Wght700Grad0Opsz48'
import IconCurrencyLiraFill1Wght100Grad0Opsz48 from '../components/CurrencyLiraFill1Wght100Grad0Opsz48'
import IconCurrencyLiraFill1Wght200Grad0Opsz48 from '../components/CurrencyLiraFill1Wght200Grad0Opsz48'
import IconCurrencyLiraFill1Wght300Grad0Opsz48 from '../components/CurrencyLiraFill1Wght300Grad0Opsz48'
import IconCurrencyLiraFill1Wght400Grad0Opsz48 from '../components/CurrencyLiraFill1Wght400Grad0Opsz48'
import IconCurrencyLiraFill1Wght500Grad0Opsz48 from '../components/CurrencyLiraFill1Wght500Grad0Opsz48'
import IconCurrencyLiraFill1Wght600Grad0Opsz48 from '../components/CurrencyLiraFill1Wght600Grad0Opsz48'
import IconCurrencyLiraFill1Wght700Grad0Opsz48 from '../components/CurrencyLiraFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCurrencyLira = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCurrencyLiraFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCurrencyLiraFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCurrencyLiraFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCurrencyLiraFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCurrencyLiraFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCurrencyLiraFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCurrencyLiraFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCurrencyLiraFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCurrencyLiraFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCurrencyLiraFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCurrencyLiraFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCurrencyLiraFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCurrencyLiraFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCurrencyLiraFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
