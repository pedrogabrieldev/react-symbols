import IconDomainFill0Wght100Grad0Opsz48 from '../components/DomainFill0Wght100Grad0Opsz48'
import IconDomainFill0Wght200Grad0Opsz48 from '../components/DomainFill0Wght200Grad0Opsz48'
import IconDomainFill0Wght300Grad0Opsz48 from '../components/DomainFill0Wght300Grad0Opsz48'
import IconDomainFill0Wght400Grad0Opsz48 from '../components/DomainFill0Wght400Grad0Opsz48'
import IconDomainFill0Wght500Grad0Opsz48 from '../components/DomainFill0Wght500Grad0Opsz48'
import IconDomainFill0Wght600Grad0Opsz48 from '../components/DomainFill0Wght600Grad0Opsz48'
import IconDomainFill0Wght700Grad0Opsz48 from '../components/DomainFill0Wght700Grad0Opsz48'
import IconDomainFill1Wght100Grad0Opsz48 from '../components/DomainFill1Wght100Grad0Opsz48'
import IconDomainFill1Wght200Grad0Opsz48 from '../components/DomainFill1Wght200Grad0Opsz48'
import IconDomainFill1Wght300Grad0Opsz48 from '../components/DomainFill1Wght300Grad0Opsz48'
import IconDomainFill1Wght400Grad0Opsz48 from '../components/DomainFill1Wght400Grad0Opsz48'
import IconDomainFill1Wght500Grad0Opsz48 from '../components/DomainFill1Wght500Grad0Opsz48'
import IconDomainFill1Wght600Grad0Opsz48 from '../components/DomainFill1Wght600Grad0Opsz48'
import IconDomainFill1Wght700Grad0Opsz48 from '../components/DomainFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDomain = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDomainFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDomainFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDomainFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDomainFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDomainFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDomainFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDomainFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDomainFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDomainFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDomainFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDomainFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDomainFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDomainFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDomainFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
