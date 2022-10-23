import IconSecurityUpdateWarningFill0Wght100Grad0Opsz48 from '../components/SecurityUpdateWarningFill0Wght100Grad0Opsz48'
import IconSecurityUpdateWarningFill0Wght200Grad0Opsz48 from '../components/SecurityUpdateWarningFill0Wght200Grad0Opsz48'
import IconSecurityUpdateWarningFill0Wght300Grad0Opsz48 from '../components/SecurityUpdateWarningFill0Wght300Grad0Opsz48'
import IconSecurityUpdateWarningFill0Wght400Grad0Opsz48 from '../components/SecurityUpdateWarningFill0Wght400Grad0Opsz48'
import IconSecurityUpdateWarningFill0Wght500Grad0Opsz48 from '../components/SecurityUpdateWarningFill0Wght500Grad0Opsz48'
import IconSecurityUpdateWarningFill0Wght600Grad0Opsz48 from '../components/SecurityUpdateWarningFill0Wght600Grad0Opsz48'
import IconSecurityUpdateWarningFill0Wght700Grad0Opsz48 from '../components/SecurityUpdateWarningFill0Wght700Grad0Opsz48'
import IconSecurityUpdateWarningFill1Wght100Grad0Opsz48 from '../components/SecurityUpdateWarningFill1Wght100Grad0Opsz48'
import IconSecurityUpdateWarningFill1Wght200Grad0Opsz48 from '../components/SecurityUpdateWarningFill1Wght200Grad0Opsz48'
import IconSecurityUpdateWarningFill1Wght300Grad0Opsz48 from '../components/SecurityUpdateWarningFill1Wght300Grad0Opsz48'
import IconSecurityUpdateWarningFill1Wght400Grad0Opsz48 from '../components/SecurityUpdateWarningFill1Wght400Grad0Opsz48'
import IconSecurityUpdateWarningFill1Wght500Grad0Opsz48 from '../components/SecurityUpdateWarningFill1Wght500Grad0Opsz48'
import IconSecurityUpdateWarningFill1Wght600Grad0Opsz48 from '../components/SecurityUpdateWarningFill1Wght600Grad0Opsz48'
import IconSecurityUpdateWarningFill1Wght700Grad0Opsz48 from '../components/SecurityUpdateWarningFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSecurityUpdateWarning = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSecurityUpdateWarningFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSecurityUpdateWarningFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSecurityUpdateWarningFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSecurityUpdateWarningFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSecurityUpdateWarningFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSecurityUpdateWarningFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSecurityUpdateWarningFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSecurityUpdateWarningFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSecurityUpdateWarningFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSecurityUpdateWarningFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSecurityUpdateWarningFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSecurityUpdateWarningFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSecurityUpdateWarningFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSecurityUpdateWarningFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
