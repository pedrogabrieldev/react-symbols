import IconLockPersonFill0Wght100Grad0Opsz48 from '../components/LockPersonFill0Wght100Grad0Opsz48'
import IconLockPersonFill0Wght200Grad0Opsz48 from '../components/LockPersonFill0Wght200Grad0Opsz48'
import IconLockPersonFill0Wght300Grad0Opsz48 from '../components/LockPersonFill0Wght300Grad0Opsz48'
import IconLockPersonFill0Wght400Grad0Opsz48 from '../components/LockPersonFill0Wght400Grad0Opsz48'
import IconLockPersonFill0Wght500Grad0Opsz48 from '../components/LockPersonFill0Wght500Grad0Opsz48'
import IconLockPersonFill0Wght600Grad0Opsz48 from '../components/LockPersonFill0Wght600Grad0Opsz48'
import IconLockPersonFill0Wght700Grad0Opsz48 from '../components/LockPersonFill0Wght700Grad0Opsz48'
import IconLockPersonFill1Wght100Grad0Opsz48 from '../components/LockPersonFill1Wght100Grad0Opsz48'
import IconLockPersonFill1Wght200Grad0Opsz48 from '../components/LockPersonFill1Wght200Grad0Opsz48'
import IconLockPersonFill1Wght300Grad0Opsz48 from '../components/LockPersonFill1Wght300Grad0Opsz48'
import IconLockPersonFill1Wght400Grad0Opsz48 from '../components/LockPersonFill1Wght400Grad0Opsz48'
import IconLockPersonFill1Wght500Grad0Opsz48 from '../components/LockPersonFill1Wght500Grad0Opsz48'
import IconLockPersonFill1Wght600Grad0Opsz48 from '../components/LockPersonFill1Wght600Grad0Opsz48'
import IconLockPersonFill1Wght700Grad0Opsz48 from '../components/LockPersonFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLockPerson = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLockPersonFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLockPersonFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLockPersonFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLockPersonFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLockPersonFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLockPersonFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLockPersonFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLockPersonFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLockPersonFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLockPersonFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLockPersonFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLockPersonFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLockPersonFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLockPersonFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
