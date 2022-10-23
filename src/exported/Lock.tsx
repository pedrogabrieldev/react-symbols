import IconLockFill0Wght100Grad0Opsz48 from '../components/LockFill0Wght100Grad0Opsz48'
import IconLockFill0Wght200Grad0Opsz48 from '../components/LockFill0Wght200Grad0Opsz48'
import IconLockFill0Wght300Grad0Opsz48 from '../components/LockFill0Wght300Grad0Opsz48'
import IconLockFill0Wght400Grad0Opsz48 from '../components/LockFill0Wght400Grad0Opsz48'
import IconLockFill0Wght500Grad0Opsz48 from '../components/LockFill0Wght500Grad0Opsz48'
import IconLockFill0Wght600Grad0Opsz48 from '../components/LockFill0Wght600Grad0Opsz48'
import IconLockFill0Wght700Grad0Opsz48 from '../components/LockFill0Wght700Grad0Opsz48'
import IconLockFill1Wght100Grad0Opsz48 from '../components/LockFill1Wght100Grad0Opsz48'
import IconLockFill1Wght200Grad0Opsz48 from '../components/LockFill1Wght200Grad0Opsz48'
import IconLockFill1Wght300Grad0Opsz48 from '../components/LockFill1Wght300Grad0Opsz48'
import IconLockFill1Wght400Grad0Opsz48 from '../components/LockFill1Wght400Grad0Opsz48'
import IconLockFill1Wght500Grad0Opsz48 from '../components/LockFill1Wght500Grad0Opsz48'
import IconLockFill1Wght600Grad0Opsz48 from '../components/LockFill1Wght600Grad0Opsz48'
import IconLockFill1Wght700Grad0Opsz48 from '../components/LockFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLock = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLockFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLockFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLockFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLockFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLockFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLockFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLockFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLockFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLockFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLockFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLockFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLockFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLockFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLockFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
