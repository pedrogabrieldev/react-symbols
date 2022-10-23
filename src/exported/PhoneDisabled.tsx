import IconPhoneDisabledFill0Wght100Grad0Opsz48 from '../components/PhoneDisabledFill0Wght100Grad0Opsz48'
import IconPhoneDisabledFill0Wght200Grad0Opsz48 from '../components/PhoneDisabledFill0Wght200Grad0Opsz48'
import IconPhoneDisabledFill0Wght300Grad0Opsz48 from '../components/PhoneDisabledFill0Wght300Grad0Opsz48'
import IconPhoneDisabledFill0Wght400Grad0Opsz48 from '../components/PhoneDisabledFill0Wght400Grad0Opsz48'
import IconPhoneDisabledFill0Wght500Grad0Opsz48 from '../components/PhoneDisabledFill0Wght500Grad0Opsz48'
import IconPhoneDisabledFill0Wght600Grad0Opsz48 from '../components/PhoneDisabledFill0Wght600Grad0Opsz48'
import IconPhoneDisabledFill0Wght700Grad0Opsz48 from '../components/PhoneDisabledFill0Wght700Grad0Opsz48'
import IconPhoneDisabledFill1Wght100Grad0Opsz48 from '../components/PhoneDisabledFill1Wght100Grad0Opsz48'
import IconPhoneDisabledFill1Wght200Grad0Opsz48 from '../components/PhoneDisabledFill1Wght200Grad0Opsz48'
import IconPhoneDisabledFill1Wght300Grad0Opsz48 from '../components/PhoneDisabledFill1Wght300Grad0Opsz48'
import IconPhoneDisabledFill1Wght400Grad0Opsz48 from '../components/PhoneDisabledFill1Wght400Grad0Opsz48'
import IconPhoneDisabledFill1Wght500Grad0Opsz48 from '../components/PhoneDisabledFill1Wght500Grad0Opsz48'
import IconPhoneDisabledFill1Wght600Grad0Opsz48 from '../components/PhoneDisabledFill1Wght600Grad0Opsz48'
import IconPhoneDisabledFill1Wght700Grad0Opsz48 from '../components/PhoneDisabledFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPhoneDisabled = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPhoneDisabledFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPhoneDisabledFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPhoneDisabledFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPhoneDisabledFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPhoneDisabledFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPhoneDisabledFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPhoneDisabledFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPhoneDisabledFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPhoneDisabledFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPhoneDisabledFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPhoneDisabledFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPhoneDisabledFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPhoneDisabledFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPhoneDisabledFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
