import IconCreditCardOffFill0Wght100Grad0Opsz48 from '../components/CreditCardOffFill0Wght100Grad0Opsz48'
import IconCreditCardOffFill0Wght200Grad0Opsz48 from '../components/CreditCardOffFill0Wght200Grad0Opsz48'
import IconCreditCardOffFill0Wght300Grad0Opsz48 from '../components/CreditCardOffFill0Wght300Grad0Opsz48'
import IconCreditCardOffFill0Wght400Grad0Opsz48 from '../components/CreditCardOffFill0Wght400Grad0Opsz48'
import IconCreditCardOffFill0Wght500Grad0Opsz48 from '../components/CreditCardOffFill0Wght500Grad0Opsz48'
import IconCreditCardOffFill0Wght600Grad0Opsz48 from '../components/CreditCardOffFill0Wght600Grad0Opsz48'
import IconCreditCardOffFill0Wght700Grad0Opsz48 from '../components/CreditCardOffFill0Wght700Grad0Opsz48'
import IconCreditCardOffFill1Wght100Grad0Opsz48 from '../components/CreditCardOffFill1Wght100Grad0Opsz48'
import IconCreditCardOffFill1Wght200Grad0Opsz48 from '../components/CreditCardOffFill1Wght200Grad0Opsz48'
import IconCreditCardOffFill1Wght300Grad0Opsz48 from '../components/CreditCardOffFill1Wght300Grad0Opsz48'
import IconCreditCardOffFill1Wght400Grad0Opsz48 from '../components/CreditCardOffFill1Wght400Grad0Opsz48'
import IconCreditCardOffFill1Wght500Grad0Opsz48 from '../components/CreditCardOffFill1Wght500Grad0Opsz48'
import IconCreditCardOffFill1Wght600Grad0Opsz48 from '../components/CreditCardOffFill1Wght600Grad0Opsz48'
import IconCreditCardOffFill1Wght700Grad0Opsz48 from '../components/CreditCardOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCreditCardOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCreditCardOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCreditCardOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCreditCardOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCreditCardOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCreditCardOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCreditCardOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCreditCardOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCreditCardOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCreditCardOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCreditCardOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCreditCardOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCreditCardOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCreditCardOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCreditCardOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
