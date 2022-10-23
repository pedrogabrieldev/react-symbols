import IconPhoneLockedFill0Wght100Grad0Opsz48 from '../components/PhoneLockedFill0Wght100Grad0Opsz48'
import IconPhoneLockedFill0Wght200Grad0Opsz48 from '../components/PhoneLockedFill0Wght200Grad0Opsz48'
import IconPhoneLockedFill0Wght300Grad0Opsz48 from '../components/PhoneLockedFill0Wght300Grad0Opsz48'
import IconPhoneLockedFill0Wght400Grad0Opsz48 from '../components/PhoneLockedFill0Wght400Grad0Opsz48'
import IconPhoneLockedFill0Wght500Grad0Opsz48 from '../components/PhoneLockedFill0Wght500Grad0Opsz48'
import IconPhoneLockedFill0Wght600Grad0Opsz48 from '../components/PhoneLockedFill0Wght600Grad0Opsz48'
import IconPhoneLockedFill0Wght700Grad0Opsz48 from '../components/PhoneLockedFill0Wght700Grad0Opsz48'
import IconPhoneLockedFill1Wght100Grad0Opsz48 from '../components/PhoneLockedFill1Wght100Grad0Opsz48'
import IconPhoneLockedFill1Wght200Grad0Opsz48 from '../components/PhoneLockedFill1Wght200Grad0Opsz48'
import IconPhoneLockedFill1Wght300Grad0Opsz48 from '../components/PhoneLockedFill1Wght300Grad0Opsz48'
import IconPhoneLockedFill1Wght400Grad0Opsz48 from '../components/PhoneLockedFill1Wght400Grad0Opsz48'
import IconPhoneLockedFill1Wght500Grad0Opsz48 from '../components/PhoneLockedFill1Wght500Grad0Opsz48'
import IconPhoneLockedFill1Wght600Grad0Opsz48 from '../components/PhoneLockedFill1Wght600Grad0Opsz48'
import IconPhoneLockedFill1Wght700Grad0Opsz48 from '../components/PhoneLockedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPhoneLocked = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPhoneLockedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPhoneLockedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPhoneLockedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPhoneLockedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPhoneLockedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPhoneLockedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPhoneLockedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPhoneLockedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPhoneLockedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPhoneLockedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPhoneLockedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPhoneLockedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPhoneLockedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPhoneLockedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
