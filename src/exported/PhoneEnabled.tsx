import IconPhoneEnabledFill0Wght100Grad0Opsz48 from '../components/PhoneEnabledFill0Wght100Grad0Opsz48'
import IconPhoneEnabledFill0Wght200Grad0Opsz48 from '../components/PhoneEnabledFill0Wght200Grad0Opsz48'
import IconPhoneEnabledFill0Wght300Grad0Opsz48 from '../components/PhoneEnabledFill0Wght300Grad0Opsz48'
import IconPhoneEnabledFill0Wght400Grad0Opsz48 from '../components/PhoneEnabledFill0Wght400Grad0Opsz48'
import IconPhoneEnabledFill0Wght500Grad0Opsz48 from '../components/PhoneEnabledFill0Wght500Grad0Opsz48'
import IconPhoneEnabledFill0Wght600Grad0Opsz48 from '../components/PhoneEnabledFill0Wght600Grad0Opsz48'
import IconPhoneEnabledFill0Wght700Grad0Opsz48 from '../components/PhoneEnabledFill0Wght700Grad0Opsz48'
import IconPhoneEnabledFill1Wght100Grad0Opsz48 from '../components/PhoneEnabledFill1Wght100Grad0Opsz48'
import IconPhoneEnabledFill1Wght200Grad0Opsz48 from '../components/PhoneEnabledFill1Wght200Grad0Opsz48'
import IconPhoneEnabledFill1Wght300Grad0Opsz48 from '../components/PhoneEnabledFill1Wght300Grad0Opsz48'
import IconPhoneEnabledFill1Wght400Grad0Opsz48 from '../components/PhoneEnabledFill1Wght400Grad0Opsz48'
import IconPhoneEnabledFill1Wght500Grad0Opsz48 from '../components/PhoneEnabledFill1Wght500Grad0Opsz48'
import IconPhoneEnabledFill1Wght600Grad0Opsz48 from '../components/PhoneEnabledFill1Wght600Grad0Opsz48'
import IconPhoneEnabledFill1Wght700Grad0Opsz48 from '../components/PhoneEnabledFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPhoneEnabled = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPhoneEnabledFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPhoneEnabledFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPhoneEnabledFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPhoneEnabledFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPhoneEnabledFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPhoneEnabledFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPhoneEnabledFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPhoneEnabledFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPhoneEnabledFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPhoneEnabledFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPhoneEnabledFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPhoneEnabledFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPhoneEnabledFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPhoneEnabledFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
