import IconDomainVerificationFill0Wght100Grad0Opsz48 from '../components/DomainVerificationFill0Wght100Grad0Opsz48'
import IconDomainVerificationFill0Wght200Grad0Opsz48 from '../components/DomainVerificationFill0Wght200Grad0Opsz48'
import IconDomainVerificationFill0Wght300Grad0Opsz48 from '../components/DomainVerificationFill0Wght300Grad0Opsz48'
import IconDomainVerificationFill0Wght400Grad0Opsz48 from '../components/DomainVerificationFill0Wght400Grad0Opsz48'
import IconDomainVerificationFill0Wght500Grad0Opsz48 from '../components/DomainVerificationFill0Wght500Grad0Opsz48'
import IconDomainVerificationFill0Wght600Grad0Opsz48 from '../components/DomainVerificationFill0Wght600Grad0Opsz48'
import IconDomainVerificationFill0Wght700Grad0Opsz48 from '../components/DomainVerificationFill0Wght700Grad0Opsz48'
import IconDomainVerificationFill1Wght100Grad0Opsz48 from '../components/DomainVerificationFill1Wght100Grad0Opsz48'
import IconDomainVerificationFill1Wght200Grad0Opsz48 from '../components/DomainVerificationFill1Wght200Grad0Opsz48'
import IconDomainVerificationFill1Wght300Grad0Opsz48 from '../components/DomainVerificationFill1Wght300Grad0Opsz48'
import IconDomainVerificationFill1Wght400Grad0Opsz48 from '../components/DomainVerificationFill1Wght400Grad0Opsz48'
import IconDomainVerificationFill1Wght500Grad0Opsz48 from '../components/DomainVerificationFill1Wght500Grad0Opsz48'
import IconDomainVerificationFill1Wght600Grad0Opsz48 from '../components/DomainVerificationFill1Wght600Grad0Opsz48'
import IconDomainVerificationFill1Wght700Grad0Opsz48 from '../components/DomainVerificationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDomainVerification = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDomainVerificationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDomainVerificationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDomainVerificationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDomainVerificationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDomainVerificationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDomainVerificationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDomainVerificationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDomainVerificationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDomainVerificationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDomainVerificationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDomainVerificationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDomainVerificationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDomainVerificationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDomainVerificationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
