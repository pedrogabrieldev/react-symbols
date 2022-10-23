import IconMfgNestYaleLockFill0Wght100Grad0Opsz48 from '../components/MfgNestYaleLockFill0Wght100Grad0Opsz48'
import IconMfgNestYaleLockFill0Wght200Grad0Opsz48 from '../components/MfgNestYaleLockFill0Wght200Grad0Opsz48'
import IconMfgNestYaleLockFill0Wght300Grad0Opsz48 from '../components/MfgNestYaleLockFill0Wght300Grad0Opsz48'
import IconMfgNestYaleLockFill0Wght400Grad0Opsz48 from '../components/MfgNestYaleLockFill0Wght400Grad0Opsz48'
import IconMfgNestYaleLockFill0Wght500Grad0Opsz48 from '../components/MfgNestYaleLockFill0Wght500Grad0Opsz48'
import IconMfgNestYaleLockFill0Wght600Grad0Opsz48 from '../components/MfgNestYaleLockFill0Wght600Grad0Opsz48'
import IconMfgNestYaleLockFill0Wght700Grad0Opsz48 from '../components/MfgNestYaleLockFill0Wght700Grad0Opsz48'
import IconMfgNestYaleLockFill1Wght100Grad0Opsz48 from '../components/MfgNestYaleLockFill1Wght100Grad0Opsz48'
import IconMfgNestYaleLockFill1Wght200Grad0Opsz48 from '../components/MfgNestYaleLockFill1Wght200Grad0Opsz48'
import IconMfgNestYaleLockFill1Wght300Grad0Opsz48 from '../components/MfgNestYaleLockFill1Wght300Grad0Opsz48'
import IconMfgNestYaleLockFill1Wght400Grad0Opsz48 from '../components/MfgNestYaleLockFill1Wght400Grad0Opsz48'
import IconMfgNestYaleLockFill1Wght500Grad0Opsz48 from '../components/MfgNestYaleLockFill1Wght500Grad0Opsz48'
import IconMfgNestYaleLockFill1Wght600Grad0Opsz48 from '../components/MfgNestYaleLockFill1Wght600Grad0Opsz48'
import IconMfgNestYaleLockFill1Wght700Grad0Opsz48 from '../components/MfgNestYaleLockFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMfgNestYaleLock = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMfgNestYaleLockFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMfgNestYaleLockFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMfgNestYaleLockFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMfgNestYaleLockFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMfgNestYaleLockFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMfgNestYaleLockFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMfgNestYaleLockFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMfgNestYaleLockFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMfgNestYaleLockFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMfgNestYaleLockFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMfgNestYaleLockFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMfgNestYaleLockFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMfgNestYaleLockFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMfgNestYaleLockFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
