import IconPhoneCallbackFill0Wght100Grad0Opsz48 from '../components/PhoneCallbackFill0Wght100Grad0Opsz48'
import IconPhoneCallbackFill0Wght200Grad0Opsz48 from '../components/PhoneCallbackFill0Wght200Grad0Opsz48'
import IconPhoneCallbackFill0Wght300Grad0Opsz48 from '../components/PhoneCallbackFill0Wght300Grad0Opsz48'
import IconPhoneCallbackFill0Wght400Grad0Opsz48 from '../components/PhoneCallbackFill0Wght400Grad0Opsz48'
import IconPhoneCallbackFill0Wght500Grad0Opsz48 from '../components/PhoneCallbackFill0Wght500Grad0Opsz48'
import IconPhoneCallbackFill0Wght600Grad0Opsz48 from '../components/PhoneCallbackFill0Wght600Grad0Opsz48'
import IconPhoneCallbackFill0Wght700Grad0Opsz48 from '../components/PhoneCallbackFill0Wght700Grad0Opsz48'
import IconPhoneCallbackFill1Wght100Grad0Opsz48 from '../components/PhoneCallbackFill1Wght100Grad0Opsz48'
import IconPhoneCallbackFill1Wght200Grad0Opsz48 from '../components/PhoneCallbackFill1Wght200Grad0Opsz48'
import IconPhoneCallbackFill1Wght300Grad0Opsz48 from '../components/PhoneCallbackFill1Wght300Grad0Opsz48'
import IconPhoneCallbackFill1Wght400Grad0Opsz48 from '../components/PhoneCallbackFill1Wght400Grad0Opsz48'
import IconPhoneCallbackFill1Wght500Grad0Opsz48 from '../components/PhoneCallbackFill1Wght500Grad0Opsz48'
import IconPhoneCallbackFill1Wght600Grad0Opsz48 from '../components/PhoneCallbackFill1Wght600Grad0Opsz48'
import IconPhoneCallbackFill1Wght700Grad0Opsz48 from '../components/PhoneCallbackFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPhoneCallback = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPhoneCallbackFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPhoneCallbackFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPhoneCallbackFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPhoneCallbackFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPhoneCallbackFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPhoneCallbackFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPhoneCallbackFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPhoneCallbackFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPhoneCallbackFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPhoneCallbackFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPhoneCallbackFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPhoneCallbackFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPhoneCallbackFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPhoneCallbackFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
