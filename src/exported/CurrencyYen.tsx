import IconCurrencyYenFill0Wght100Grad0Opsz48 from '../components/CurrencyYenFill0Wght100Grad0Opsz48'
import IconCurrencyYenFill0Wght200Grad0Opsz48 from '../components/CurrencyYenFill0Wght200Grad0Opsz48'
import IconCurrencyYenFill0Wght300Grad0Opsz48 from '../components/CurrencyYenFill0Wght300Grad0Opsz48'
import IconCurrencyYenFill0Wght400Grad0Opsz48 from '../components/CurrencyYenFill0Wght400Grad0Opsz48'
import IconCurrencyYenFill0Wght500Grad0Opsz48 from '../components/CurrencyYenFill0Wght500Grad0Opsz48'
import IconCurrencyYenFill0Wght600Grad0Opsz48 from '../components/CurrencyYenFill0Wght600Grad0Opsz48'
import IconCurrencyYenFill0Wght700Grad0Opsz48 from '../components/CurrencyYenFill0Wght700Grad0Opsz48'
import IconCurrencyYenFill1Wght100Grad0Opsz48 from '../components/CurrencyYenFill1Wght100Grad0Opsz48'
import IconCurrencyYenFill1Wght200Grad0Opsz48 from '../components/CurrencyYenFill1Wght200Grad0Opsz48'
import IconCurrencyYenFill1Wght300Grad0Opsz48 from '../components/CurrencyYenFill1Wght300Grad0Opsz48'
import IconCurrencyYenFill1Wght400Grad0Opsz48 from '../components/CurrencyYenFill1Wght400Grad0Opsz48'
import IconCurrencyYenFill1Wght500Grad0Opsz48 from '../components/CurrencyYenFill1Wght500Grad0Opsz48'
import IconCurrencyYenFill1Wght600Grad0Opsz48 from '../components/CurrencyYenFill1Wght600Grad0Opsz48'
import IconCurrencyYenFill1Wght700Grad0Opsz48 from '../components/CurrencyYenFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCurrencyYen = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCurrencyYenFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCurrencyYenFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCurrencyYenFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCurrencyYenFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCurrencyYenFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCurrencyYenFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCurrencyYenFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCurrencyYenFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCurrencyYenFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCurrencyYenFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCurrencyYenFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCurrencyYenFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCurrencyYenFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCurrencyYenFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
