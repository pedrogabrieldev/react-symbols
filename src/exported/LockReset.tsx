import IconLockResetFill0Wght100Grad0Opsz48 from '../components/LockResetFill0Wght100Grad0Opsz48'
import IconLockResetFill0Wght200Grad0Opsz48 from '../components/LockResetFill0Wght200Grad0Opsz48'
import IconLockResetFill0Wght300Grad0Opsz48 from '../components/LockResetFill0Wght300Grad0Opsz48'
import IconLockResetFill0Wght400Grad0Opsz48 from '../components/LockResetFill0Wght400Grad0Opsz48'
import IconLockResetFill0Wght500Grad0Opsz48 from '../components/LockResetFill0Wght500Grad0Opsz48'
import IconLockResetFill0Wght600Grad0Opsz48 from '../components/LockResetFill0Wght600Grad0Opsz48'
import IconLockResetFill0Wght700Grad0Opsz48 from '../components/LockResetFill0Wght700Grad0Opsz48'
import IconLockResetFill1Wght100Grad0Opsz48 from '../components/LockResetFill1Wght100Grad0Opsz48'
import IconLockResetFill1Wght200Grad0Opsz48 from '../components/LockResetFill1Wght200Grad0Opsz48'
import IconLockResetFill1Wght300Grad0Opsz48 from '../components/LockResetFill1Wght300Grad0Opsz48'
import IconLockResetFill1Wght400Grad0Opsz48 from '../components/LockResetFill1Wght400Grad0Opsz48'
import IconLockResetFill1Wght500Grad0Opsz48 from '../components/LockResetFill1Wght500Grad0Opsz48'
import IconLockResetFill1Wght600Grad0Opsz48 from '../components/LockResetFill1Wght600Grad0Opsz48'
import IconLockResetFill1Wght700Grad0Opsz48 from '../components/LockResetFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLockReset = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLockResetFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLockResetFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLockResetFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLockResetFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLockResetFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLockResetFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLockResetFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLockResetFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLockResetFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLockResetFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLockResetFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLockResetFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLockResetFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLockResetFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
