import IconCurrencyFrancFill0Wght100Grad0Opsz48 from '../components/CurrencyFrancFill0Wght100Grad0Opsz48'
import IconCurrencyFrancFill0Wght200Grad0Opsz48 from '../components/CurrencyFrancFill0Wght200Grad0Opsz48'
import IconCurrencyFrancFill0Wght300Grad0Opsz48 from '../components/CurrencyFrancFill0Wght300Grad0Opsz48'
import IconCurrencyFrancFill0Wght400Grad0Opsz48 from '../components/CurrencyFrancFill0Wght400Grad0Opsz48'
import IconCurrencyFrancFill0Wght500Grad0Opsz48 from '../components/CurrencyFrancFill0Wght500Grad0Opsz48'
import IconCurrencyFrancFill0Wght600Grad0Opsz48 from '../components/CurrencyFrancFill0Wght600Grad0Opsz48'
import IconCurrencyFrancFill0Wght700Grad0Opsz48 from '../components/CurrencyFrancFill0Wght700Grad0Opsz48'
import IconCurrencyFrancFill1Wght100Grad0Opsz48 from '../components/CurrencyFrancFill1Wght100Grad0Opsz48'
import IconCurrencyFrancFill1Wght200Grad0Opsz48 from '../components/CurrencyFrancFill1Wght200Grad0Opsz48'
import IconCurrencyFrancFill1Wght300Grad0Opsz48 from '../components/CurrencyFrancFill1Wght300Grad0Opsz48'
import IconCurrencyFrancFill1Wght400Grad0Opsz48 from '../components/CurrencyFrancFill1Wght400Grad0Opsz48'
import IconCurrencyFrancFill1Wght500Grad0Opsz48 from '../components/CurrencyFrancFill1Wght500Grad0Opsz48'
import IconCurrencyFrancFill1Wght600Grad0Opsz48 from '../components/CurrencyFrancFill1Wght600Grad0Opsz48'
import IconCurrencyFrancFill1Wght700Grad0Opsz48 from '../components/CurrencyFrancFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCurrencyFranc = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCurrencyFrancFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCurrencyFrancFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCurrencyFrancFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCurrencyFrancFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCurrencyFrancFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCurrencyFrancFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCurrencyFrancFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCurrencyFrancFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCurrencyFrancFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCurrencyFrancFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCurrencyFrancFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCurrencyFrancFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCurrencyFrancFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCurrencyFrancFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
