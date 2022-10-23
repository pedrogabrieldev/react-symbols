import IconLockClockFill0Wght100Grad0Opsz48 from '../components/LockClockFill0Wght100Grad0Opsz48'
import IconLockClockFill0Wght200Grad0Opsz48 from '../components/LockClockFill0Wght200Grad0Opsz48'
import IconLockClockFill0Wght300Grad0Opsz48 from '../components/LockClockFill0Wght300Grad0Opsz48'
import IconLockClockFill0Wght400Grad0Opsz48 from '../components/LockClockFill0Wght400Grad0Opsz48'
import IconLockClockFill0Wght500Grad0Opsz48 from '../components/LockClockFill0Wght500Grad0Opsz48'
import IconLockClockFill0Wght600Grad0Opsz48 from '../components/LockClockFill0Wght600Grad0Opsz48'
import IconLockClockFill0Wght700Grad0Opsz48 from '../components/LockClockFill0Wght700Grad0Opsz48'
import IconLockClockFill1Wght100Grad0Opsz48 from '../components/LockClockFill1Wght100Grad0Opsz48'
import IconLockClockFill1Wght200Grad0Opsz48 from '../components/LockClockFill1Wght200Grad0Opsz48'
import IconLockClockFill1Wght300Grad0Opsz48 from '../components/LockClockFill1Wght300Grad0Opsz48'
import IconLockClockFill1Wght400Grad0Opsz48 from '../components/LockClockFill1Wght400Grad0Opsz48'
import IconLockClockFill1Wght500Grad0Opsz48 from '../components/LockClockFill1Wght500Grad0Opsz48'
import IconLockClockFill1Wght600Grad0Opsz48 from '../components/LockClockFill1Wght600Grad0Opsz48'
import IconLockClockFill1Wght700Grad0Opsz48 from '../components/LockClockFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLockClock = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLockClockFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLockClockFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLockClockFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLockClockFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLockClockFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLockClockFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLockClockFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLockClockFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLockClockFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLockClockFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLockClockFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLockClockFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLockClockFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLockClockFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
