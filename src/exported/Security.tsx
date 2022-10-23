import IconSecurityFill0Wght100Grad0Opsz48 from '../components/SecurityFill0Wght100Grad0Opsz48'
import IconSecurityFill0Wght200Grad0Opsz48 from '../components/SecurityFill0Wght200Grad0Opsz48'
import IconSecurityFill0Wght300Grad0Opsz48 from '../components/SecurityFill0Wght300Grad0Opsz48'
import IconSecurityFill0Wght400Grad0Opsz48 from '../components/SecurityFill0Wght400Grad0Opsz48'
import IconSecurityFill0Wght500Grad0Opsz48 from '../components/SecurityFill0Wght500Grad0Opsz48'
import IconSecurityFill0Wght600Grad0Opsz48 from '../components/SecurityFill0Wght600Grad0Opsz48'
import IconSecurityFill0Wght700Grad0Opsz48 from '../components/SecurityFill0Wght700Grad0Opsz48'
import IconSecurityFill1Wght100Grad0Opsz48 from '../components/SecurityFill1Wght100Grad0Opsz48'
import IconSecurityFill1Wght200Grad0Opsz48 from '../components/SecurityFill1Wght200Grad0Opsz48'
import IconSecurityFill1Wght300Grad0Opsz48 from '../components/SecurityFill1Wght300Grad0Opsz48'
import IconSecurityFill1Wght400Grad0Opsz48 from '../components/SecurityFill1Wght400Grad0Opsz48'
import IconSecurityFill1Wght500Grad0Opsz48 from '../components/SecurityFill1Wght500Grad0Opsz48'
import IconSecurityFill1Wght600Grad0Opsz48 from '../components/SecurityFill1Wght600Grad0Opsz48'
import IconSecurityFill1Wght700Grad0Opsz48 from '../components/SecurityFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSecurity = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSecurityFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSecurityFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSecurityFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSecurityFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSecurityFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSecurityFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSecurityFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSecurityFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSecurityFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSecurityFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSecurityFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSecurityFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSecurityFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSecurityFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
