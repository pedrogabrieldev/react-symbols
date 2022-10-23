import IconDomainAddFill0Wght100Grad0Opsz48 from '../components/DomainAddFill0Wght100Grad0Opsz48'
import IconDomainAddFill0Wght200Grad0Opsz48 from '../components/DomainAddFill0Wght200Grad0Opsz48'
import IconDomainAddFill0Wght300Grad0Opsz48 from '../components/DomainAddFill0Wght300Grad0Opsz48'
import IconDomainAddFill0Wght400Grad0Opsz48 from '../components/DomainAddFill0Wght400Grad0Opsz48'
import IconDomainAddFill0Wght500Grad0Opsz48 from '../components/DomainAddFill0Wght500Grad0Opsz48'
import IconDomainAddFill0Wght600Grad0Opsz48 from '../components/DomainAddFill0Wght600Grad0Opsz48'
import IconDomainAddFill0Wght700Grad0Opsz48 from '../components/DomainAddFill0Wght700Grad0Opsz48'
import IconDomainAddFill1Wght100Grad0Opsz48 from '../components/DomainAddFill1Wght100Grad0Opsz48'
import IconDomainAddFill1Wght200Grad0Opsz48 from '../components/DomainAddFill1Wght200Grad0Opsz48'
import IconDomainAddFill1Wght300Grad0Opsz48 from '../components/DomainAddFill1Wght300Grad0Opsz48'
import IconDomainAddFill1Wght400Grad0Opsz48 from '../components/DomainAddFill1Wght400Grad0Opsz48'
import IconDomainAddFill1Wght500Grad0Opsz48 from '../components/DomainAddFill1Wght500Grad0Opsz48'
import IconDomainAddFill1Wght600Grad0Opsz48 from '../components/DomainAddFill1Wght600Grad0Opsz48'
import IconDomainAddFill1Wght700Grad0Opsz48 from '../components/DomainAddFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDomainAdd = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDomainAddFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDomainAddFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDomainAddFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDomainAddFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDomainAddFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDomainAddFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDomainAddFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDomainAddFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDomainAddFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDomainAddFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDomainAddFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDomainAddFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDomainAddFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDomainAddFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
