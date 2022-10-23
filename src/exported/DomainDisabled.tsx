import IconDomainDisabledFill0Wght100Grad0Opsz48 from '../components/DomainDisabledFill0Wght100Grad0Opsz48'
import IconDomainDisabledFill0Wght200Grad0Opsz48 from '../components/DomainDisabledFill0Wght200Grad0Opsz48'
import IconDomainDisabledFill0Wght300Grad0Opsz48 from '../components/DomainDisabledFill0Wght300Grad0Opsz48'
import IconDomainDisabledFill0Wght400Grad0Opsz48 from '../components/DomainDisabledFill0Wght400Grad0Opsz48'
import IconDomainDisabledFill0Wght500Grad0Opsz48 from '../components/DomainDisabledFill0Wght500Grad0Opsz48'
import IconDomainDisabledFill0Wght600Grad0Opsz48 from '../components/DomainDisabledFill0Wght600Grad0Opsz48'
import IconDomainDisabledFill0Wght700Grad0Opsz48 from '../components/DomainDisabledFill0Wght700Grad0Opsz48'
import IconDomainDisabledFill1Wght100Grad0Opsz48 from '../components/DomainDisabledFill1Wght100Grad0Opsz48'
import IconDomainDisabledFill1Wght200Grad0Opsz48 from '../components/DomainDisabledFill1Wght200Grad0Opsz48'
import IconDomainDisabledFill1Wght300Grad0Opsz48 from '../components/DomainDisabledFill1Wght300Grad0Opsz48'
import IconDomainDisabledFill1Wght400Grad0Opsz48 from '../components/DomainDisabledFill1Wght400Grad0Opsz48'
import IconDomainDisabledFill1Wght500Grad0Opsz48 from '../components/DomainDisabledFill1Wght500Grad0Opsz48'
import IconDomainDisabledFill1Wght600Grad0Opsz48 from '../components/DomainDisabledFill1Wght600Grad0Opsz48'
import IconDomainDisabledFill1Wght700Grad0Opsz48 from '../components/DomainDisabledFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDomainDisabled = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDomainDisabledFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDomainDisabledFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDomainDisabledFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDomainDisabledFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDomainDisabledFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDomainDisabledFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDomainDisabledFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDomainDisabledFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDomainDisabledFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDomainDisabledFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDomainDisabledFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDomainDisabledFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDomainDisabledFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDomainDisabledFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
