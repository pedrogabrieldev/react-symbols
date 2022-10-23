import IconPaymentsFill0Wght100Grad0Opsz48 from '../components/PaymentsFill0Wght100Grad0Opsz48'
import IconPaymentsFill0Wght200Grad0Opsz48 from '../components/PaymentsFill0Wght200Grad0Opsz48'
import IconPaymentsFill0Wght300Grad0Opsz48 from '../components/PaymentsFill0Wght300Grad0Opsz48'
import IconPaymentsFill0Wght400Grad0Opsz48 from '../components/PaymentsFill0Wght400Grad0Opsz48'
import IconPaymentsFill0Wght500Grad0Opsz48 from '../components/PaymentsFill0Wght500Grad0Opsz48'
import IconPaymentsFill0Wght600Grad0Opsz48 from '../components/PaymentsFill0Wght600Grad0Opsz48'
import IconPaymentsFill0Wght700Grad0Opsz48 from '../components/PaymentsFill0Wght700Grad0Opsz48'
import IconPaymentsFill1Wght100Grad0Opsz48 from '../components/PaymentsFill1Wght100Grad0Opsz48'
import IconPaymentsFill1Wght200Grad0Opsz48 from '../components/PaymentsFill1Wght200Grad0Opsz48'
import IconPaymentsFill1Wght300Grad0Opsz48 from '../components/PaymentsFill1Wght300Grad0Opsz48'
import IconPaymentsFill1Wght400Grad0Opsz48 from '../components/PaymentsFill1Wght400Grad0Opsz48'
import IconPaymentsFill1Wght500Grad0Opsz48 from '../components/PaymentsFill1Wght500Grad0Opsz48'
import IconPaymentsFill1Wght600Grad0Opsz48 from '../components/PaymentsFill1Wght600Grad0Opsz48'
import IconPaymentsFill1Wght700Grad0Opsz48 from '../components/PaymentsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPayments = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPaymentsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPaymentsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPaymentsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPaymentsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPaymentsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPaymentsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPaymentsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPaymentsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPaymentsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPaymentsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPaymentsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPaymentsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPaymentsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPaymentsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
