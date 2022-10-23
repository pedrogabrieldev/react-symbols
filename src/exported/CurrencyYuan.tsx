import IconCurrencyYuanFill0Wght100Grad0Opsz48 from '../components/CurrencyYuanFill0Wght100Grad0Opsz48'
import IconCurrencyYuanFill0Wght200Grad0Opsz48 from '../components/CurrencyYuanFill0Wght200Grad0Opsz48'
import IconCurrencyYuanFill0Wght300Grad0Opsz48 from '../components/CurrencyYuanFill0Wght300Grad0Opsz48'
import IconCurrencyYuanFill0Wght400Grad0Opsz48 from '../components/CurrencyYuanFill0Wght400Grad0Opsz48'
import IconCurrencyYuanFill0Wght500Grad0Opsz48 from '../components/CurrencyYuanFill0Wght500Grad0Opsz48'
import IconCurrencyYuanFill0Wght600Grad0Opsz48 from '../components/CurrencyYuanFill0Wght600Grad0Opsz48'
import IconCurrencyYuanFill0Wght700Grad0Opsz48 from '../components/CurrencyYuanFill0Wght700Grad0Opsz48'
import IconCurrencyYuanFill1Wght100Grad0Opsz48 from '../components/CurrencyYuanFill1Wght100Grad0Opsz48'
import IconCurrencyYuanFill1Wght200Grad0Opsz48 from '../components/CurrencyYuanFill1Wght200Grad0Opsz48'
import IconCurrencyYuanFill1Wght300Grad0Opsz48 from '../components/CurrencyYuanFill1Wght300Grad0Opsz48'
import IconCurrencyYuanFill1Wght400Grad0Opsz48 from '../components/CurrencyYuanFill1Wght400Grad0Opsz48'
import IconCurrencyYuanFill1Wght500Grad0Opsz48 from '../components/CurrencyYuanFill1Wght500Grad0Opsz48'
import IconCurrencyYuanFill1Wght600Grad0Opsz48 from '../components/CurrencyYuanFill1Wght600Grad0Opsz48'
import IconCurrencyYuanFill1Wght700Grad0Opsz48 from '../components/CurrencyYuanFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCurrencyYuan = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCurrencyYuanFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCurrencyYuanFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCurrencyYuanFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCurrencyYuanFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCurrencyYuanFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCurrencyYuanFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCurrencyYuanFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCurrencyYuanFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCurrencyYuanFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCurrencyYuanFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCurrencyYuanFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCurrencyYuanFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCurrencyYuanFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCurrencyYuanFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
