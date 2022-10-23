import IconMoneyFill0Wght100Grad0Opsz48 from '../components/MoneyFill0Wght100Grad0Opsz48'
import IconMoneyFill0Wght200Grad0Opsz48 from '../components/MoneyFill0Wght200Grad0Opsz48'
import IconMoneyFill0Wght300Grad0Opsz48 from '../components/MoneyFill0Wght300Grad0Opsz48'
import IconMoneyFill0Wght400Grad0Opsz48 from '../components/MoneyFill0Wght400Grad0Opsz48'
import IconMoneyFill0Wght500Grad0Opsz48 from '../components/MoneyFill0Wght500Grad0Opsz48'
import IconMoneyFill0Wght600Grad0Opsz48 from '../components/MoneyFill0Wght600Grad0Opsz48'
import IconMoneyFill0Wght700Grad0Opsz48 from '../components/MoneyFill0Wght700Grad0Opsz48'
import IconMoneyFill1Wght100Grad0Opsz48 from '../components/MoneyFill1Wght100Grad0Opsz48'
import IconMoneyFill1Wght200Grad0Opsz48 from '../components/MoneyFill1Wght200Grad0Opsz48'
import IconMoneyFill1Wght300Grad0Opsz48 from '../components/MoneyFill1Wght300Grad0Opsz48'
import IconMoneyFill1Wght400Grad0Opsz48 from '../components/MoneyFill1Wght400Grad0Opsz48'
import IconMoneyFill1Wght500Grad0Opsz48 from '../components/MoneyFill1Wght500Grad0Opsz48'
import IconMoneyFill1Wght600Grad0Opsz48 from '../components/MoneyFill1Wght600Grad0Opsz48'
import IconMoneyFill1Wght700Grad0Opsz48 from '../components/MoneyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMoney = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMoneyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMoneyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMoneyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMoneyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMoneyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMoneyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMoneyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMoneyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMoneyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMoneyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMoneyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMoneyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMoneyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMoneyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
