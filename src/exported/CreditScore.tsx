import IconCreditScoreFill0Wght100Grad0Opsz48 from '../components/CreditScoreFill0Wght100Grad0Opsz48'
import IconCreditScoreFill0Wght200Grad0Opsz48 from '../components/CreditScoreFill0Wght200Grad0Opsz48'
import IconCreditScoreFill0Wght300Grad0Opsz48 from '../components/CreditScoreFill0Wght300Grad0Opsz48'
import IconCreditScoreFill0Wght400Grad0Opsz48 from '../components/CreditScoreFill0Wght400Grad0Opsz48'
import IconCreditScoreFill0Wght500Grad0Opsz48 from '../components/CreditScoreFill0Wght500Grad0Opsz48'
import IconCreditScoreFill0Wght600Grad0Opsz48 from '../components/CreditScoreFill0Wght600Grad0Opsz48'
import IconCreditScoreFill0Wght700Grad0Opsz48 from '../components/CreditScoreFill0Wght700Grad0Opsz48'
import IconCreditScoreFill1Wght100Grad0Opsz48 from '../components/CreditScoreFill1Wght100Grad0Opsz48'
import IconCreditScoreFill1Wght200Grad0Opsz48 from '../components/CreditScoreFill1Wght200Grad0Opsz48'
import IconCreditScoreFill1Wght300Grad0Opsz48 from '../components/CreditScoreFill1Wght300Grad0Opsz48'
import IconCreditScoreFill1Wght400Grad0Opsz48 from '../components/CreditScoreFill1Wght400Grad0Opsz48'
import IconCreditScoreFill1Wght500Grad0Opsz48 from '../components/CreditScoreFill1Wght500Grad0Opsz48'
import IconCreditScoreFill1Wght600Grad0Opsz48 from '../components/CreditScoreFill1Wght600Grad0Opsz48'
import IconCreditScoreFill1Wght700Grad0Opsz48 from '../components/CreditScoreFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCreditScore = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCreditScoreFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCreditScoreFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCreditScoreFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCreditScoreFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCreditScoreFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCreditScoreFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCreditScoreFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCreditScoreFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCreditScoreFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCreditScoreFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCreditScoreFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCreditScoreFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCreditScoreFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCreditScoreFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
