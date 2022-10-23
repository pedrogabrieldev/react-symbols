import IconPhonelinkLockFill0Wght100Grad0Opsz48 from '../components/PhonelinkLockFill0Wght100Grad0Opsz48'
import IconPhonelinkLockFill0Wght200Grad0Opsz48 from '../components/PhonelinkLockFill0Wght200Grad0Opsz48'
import IconPhonelinkLockFill0Wght300Grad0Opsz48 from '../components/PhonelinkLockFill0Wght300Grad0Opsz48'
import IconPhonelinkLockFill0Wght400Grad0Opsz48 from '../components/PhonelinkLockFill0Wght400Grad0Opsz48'
import IconPhonelinkLockFill0Wght500Grad0Opsz48 from '../components/PhonelinkLockFill0Wght500Grad0Opsz48'
import IconPhonelinkLockFill0Wght600Grad0Opsz48 from '../components/PhonelinkLockFill0Wght600Grad0Opsz48'
import IconPhonelinkLockFill0Wght700Grad0Opsz48 from '../components/PhonelinkLockFill0Wght700Grad0Opsz48'
import IconPhonelinkLockFill1Wght100Grad0Opsz48 from '../components/PhonelinkLockFill1Wght100Grad0Opsz48'
import IconPhonelinkLockFill1Wght200Grad0Opsz48 from '../components/PhonelinkLockFill1Wght200Grad0Opsz48'
import IconPhonelinkLockFill1Wght300Grad0Opsz48 from '../components/PhonelinkLockFill1Wght300Grad0Opsz48'
import IconPhonelinkLockFill1Wght400Grad0Opsz48 from '../components/PhonelinkLockFill1Wght400Grad0Opsz48'
import IconPhonelinkLockFill1Wght500Grad0Opsz48 from '../components/PhonelinkLockFill1Wght500Grad0Opsz48'
import IconPhonelinkLockFill1Wght600Grad0Opsz48 from '../components/PhonelinkLockFill1Wght600Grad0Opsz48'
import IconPhonelinkLockFill1Wght700Grad0Opsz48 from '../components/PhonelinkLockFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPhonelinkLock = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPhonelinkLockFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPhonelinkLockFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPhonelinkLockFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPhonelinkLockFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPhonelinkLockFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPhonelinkLockFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPhonelinkLockFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPhonelinkLockFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPhonelinkLockFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPhonelinkLockFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPhonelinkLockFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPhonelinkLockFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPhonelinkLockFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPhonelinkLockFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
