import IconCreditCardFill0Wght100Grad0Opsz48 from '../components/CreditCardFill0Wght100Grad0Opsz48'
import IconCreditCardFill0Wght200Grad0Opsz48 from '../components/CreditCardFill0Wght200Grad0Opsz48'
import IconCreditCardFill0Wght300Grad0Opsz48 from '../components/CreditCardFill0Wght300Grad0Opsz48'
import IconCreditCardFill0Wght400Grad0Opsz48 from '../components/CreditCardFill0Wght400Grad0Opsz48'
import IconCreditCardFill0Wght500Grad0Opsz48 from '../components/CreditCardFill0Wght500Grad0Opsz48'
import IconCreditCardFill0Wght600Grad0Opsz48 from '../components/CreditCardFill0Wght600Grad0Opsz48'
import IconCreditCardFill0Wght700Grad0Opsz48 from '../components/CreditCardFill0Wght700Grad0Opsz48'
import IconCreditCardFill1Wght100Grad0Opsz48 from '../components/CreditCardFill1Wght100Grad0Opsz48'
import IconCreditCardFill1Wght200Grad0Opsz48 from '../components/CreditCardFill1Wght200Grad0Opsz48'
import IconCreditCardFill1Wght300Grad0Opsz48 from '../components/CreditCardFill1Wght300Grad0Opsz48'
import IconCreditCardFill1Wght400Grad0Opsz48 from '../components/CreditCardFill1Wght400Grad0Opsz48'
import IconCreditCardFill1Wght500Grad0Opsz48 from '../components/CreditCardFill1Wght500Grad0Opsz48'
import IconCreditCardFill1Wght600Grad0Opsz48 from '../components/CreditCardFill1Wght600Grad0Opsz48'
import IconCreditCardFill1Wght700Grad0Opsz48 from '../components/CreditCardFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCreditCard = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCreditCardFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCreditCardFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCreditCardFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCreditCardFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCreditCardFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCreditCardFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCreditCardFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCreditCardFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCreditCardFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCreditCardFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCreditCardFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCreditCardFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCreditCardFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCreditCardFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
