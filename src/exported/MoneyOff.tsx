import IconMoneyOffFill0Wght100Grad0Opsz48 from '../components/MoneyOffFill0Wght100Grad0Opsz48'
import IconMoneyOffFill0Wght200Grad0Opsz48 from '../components/MoneyOffFill0Wght200Grad0Opsz48'
import IconMoneyOffFill0Wght300Grad0Opsz48 from '../components/MoneyOffFill0Wght300Grad0Opsz48'
import IconMoneyOffFill0Wght400Grad0Opsz48 from '../components/MoneyOffFill0Wght400Grad0Opsz48'
import IconMoneyOffFill0Wght500Grad0Opsz48 from '../components/MoneyOffFill0Wght500Grad0Opsz48'
import IconMoneyOffFill0Wght600Grad0Opsz48 from '../components/MoneyOffFill0Wght600Grad0Opsz48'
import IconMoneyOffFill0Wght700Grad0Opsz48 from '../components/MoneyOffFill0Wght700Grad0Opsz48'
import IconMoneyOffFill1Wght100Grad0Opsz48 from '../components/MoneyOffFill1Wght100Grad0Opsz48'
import IconMoneyOffFill1Wght200Grad0Opsz48 from '../components/MoneyOffFill1Wght200Grad0Opsz48'
import IconMoneyOffFill1Wght300Grad0Opsz48 from '../components/MoneyOffFill1Wght300Grad0Opsz48'
import IconMoneyOffFill1Wght400Grad0Opsz48 from '../components/MoneyOffFill1Wght400Grad0Opsz48'
import IconMoneyOffFill1Wght500Grad0Opsz48 from '../components/MoneyOffFill1Wght500Grad0Opsz48'
import IconMoneyOffFill1Wght600Grad0Opsz48 from '../components/MoneyOffFill1Wght600Grad0Opsz48'
import IconMoneyOffFill1Wght700Grad0Opsz48 from '../components/MoneyOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMoneyOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMoneyOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMoneyOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMoneyOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMoneyOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMoneyOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMoneyOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMoneyOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMoneyOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMoneyOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMoneyOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMoneyOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMoneyOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMoneyOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMoneyOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
