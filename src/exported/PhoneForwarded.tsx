import IconPhoneForwardedFill0Wght100Grad0Opsz48 from '../components/PhoneForwardedFill0Wght100Grad0Opsz48'
import IconPhoneForwardedFill0Wght200Grad0Opsz48 from '../components/PhoneForwardedFill0Wght200Grad0Opsz48'
import IconPhoneForwardedFill0Wght300Grad0Opsz48 from '../components/PhoneForwardedFill0Wght300Grad0Opsz48'
import IconPhoneForwardedFill0Wght400Grad0Opsz48 from '../components/PhoneForwardedFill0Wght400Grad0Opsz48'
import IconPhoneForwardedFill0Wght500Grad0Opsz48 from '../components/PhoneForwardedFill0Wght500Grad0Opsz48'
import IconPhoneForwardedFill0Wght600Grad0Opsz48 from '../components/PhoneForwardedFill0Wght600Grad0Opsz48'
import IconPhoneForwardedFill0Wght700Grad0Opsz48 from '../components/PhoneForwardedFill0Wght700Grad0Opsz48'
import IconPhoneForwardedFill1Wght100Grad0Opsz48 from '../components/PhoneForwardedFill1Wght100Grad0Opsz48'
import IconPhoneForwardedFill1Wght200Grad0Opsz48 from '../components/PhoneForwardedFill1Wght200Grad0Opsz48'
import IconPhoneForwardedFill1Wght300Grad0Opsz48 from '../components/PhoneForwardedFill1Wght300Grad0Opsz48'
import IconPhoneForwardedFill1Wght400Grad0Opsz48 from '../components/PhoneForwardedFill1Wght400Grad0Opsz48'
import IconPhoneForwardedFill1Wght500Grad0Opsz48 from '../components/PhoneForwardedFill1Wght500Grad0Opsz48'
import IconPhoneForwardedFill1Wght600Grad0Opsz48 from '../components/PhoneForwardedFill1Wght600Grad0Opsz48'
import IconPhoneForwardedFill1Wght700Grad0Opsz48 from '../components/PhoneForwardedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPhoneForwarded = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPhoneForwardedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPhoneForwardedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPhoneForwardedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPhoneForwardedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPhoneForwardedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPhoneForwardedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPhoneForwardedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPhoneForwardedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPhoneForwardedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPhoneForwardedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPhoneForwardedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPhoneForwardedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPhoneForwardedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPhoneForwardedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
