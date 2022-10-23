import IconLockOpenFill0Wght100Grad0Opsz48 from '../components/LockOpenFill0Wght100Grad0Opsz48'
import IconLockOpenFill0Wght200Grad0Opsz48 from '../components/LockOpenFill0Wght200Grad0Opsz48'
import IconLockOpenFill0Wght300Grad0Opsz48 from '../components/LockOpenFill0Wght300Grad0Opsz48'
import IconLockOpenFill0Wght400Grad0Opsz48 from '../components/LockOpenFill0Wght400Grad0Opsz48'
import IconLockOpenFill0Wght500Grad0Opsz48 from '../components/LockOpenFill0Wght500Grad0Opsz48'
import IconLockOpenFill0Wght600Grad0Opsz48 from '../components/LockOpenFill0Wght600Grad0Opsz48'
import IconLockOpenFill0Wght700Grad0Opsz48 from '../components/LockOpenFill0Wght700Grad0Opsz48'
import IconLockOpenFill1Wght100Grad0Opsz48 from '../components/LockOpenFill1Wght100Grad0Opsz48'
import IconLockOpenFill1Wght200Grad0Opsz48 from '../components/LockOpenFill1Wght200Grad0Opsz48'
import IconLockOpenFill1Wght300Grad0Opsz48 from '../components/LockOpenFill1Wght300Grad0Opsz48'
import IconLockOpenFill1Wght400Grad0Opsz48 from '../components/LockOpenFill1Wght400Grad0Opsz48'
import IconLockOpenFill1Wght500Grad0Opsz48 from '../components/LockOpenFill1Wght500Grad0Opsz48'
import IconLockOpenFill1Wght600Grad0Opsz48 from '../components/LockOpenFill1Wght600Grad0Opsz48'
import IconLockOpenFill1Wght700Grad0Opsz48 from '../components/LockOpenFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLockOpen = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLockOpenFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLockOpenFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLockOpenFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLockOpenFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLockOpenFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLockOpenFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLockOpenFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLockOpenFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLockOpenFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLockOpenFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLockOpenFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLockOpenFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLockOpenFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLockOpenFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
