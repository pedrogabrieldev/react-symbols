import IconPhoneAndroidFill0Wght100Grad0Opsz48 from '../components/PhoneAndroidFill0Wght100Grad0Opsz48'
import IconPhoneAndroidFill0Wght200Grad0Opsz48 from '../components/PhoneAndroidFill0Wght200Grad0Opsz48'
import IconPhoneAndroidFill0Wght300Grad0Opsz48 from '../components/PhoneAndroidFill0Wght300Grad0Opsz48'
import IconPhoneAndroidFill0Wght400Grad0Opsz48 from '../components/PhoneAndroidFill0Wght400Grad0Opsz48'
import IconPhoneAndroidFill0Wght500Grad0Opsz48 from '../components/PhoneAndroidFill0Wght500Grad0Opsz48'
import IconPhoneAndroidFill0Wght600Grad0Opsz48 from '../components/PhoneAndroidFill0Wght600Grad0Opsz48'
import IconPhoneAndroidFill0Wght700Grad0Opsz48 from '../components/PhoneAndroidFill0Wght700Grad0Opsz48'
import IconPhoneAndroidFill1Wght100Grad0Opsz48 from '../components/PhoneAndroidFill1Wght100Grad0Opsz48'
import IconPhoneAndroidFill1Wght200Grad0Opsz48 from '../components/PhoneAndroidFill1Wght200Grad0Opsz48'
import IconPhoneAndroidFill1Wght300Grad0Opsz48 from '../components/PhoneAndroidFill1Wght300Grad0Opsz48'
import IconPhoneAndroidFill1Wght400Grad0Opsz48 from '../components/PhoneAndroidFill1Wght400Grad0Opsz48'
import IconPhoneAndroidFill1Wght500Grad0Opsz48 from '../components/PhoneAndroidFill1Wght500Grad0Opsz48'
import IconPhoneAndroidFill1Wght600Grad0Opsz48 from '../components/PhoneAndroidFill1Wght600Grad0Opsz48'
import IconPhoneAndroidFill1Wght700Grad0Opsz48 from '../components/PhoneAndroidFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPhoneAndroid = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPhoneAndroidFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPhoneAndroidFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPhoneAndroidFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPhoneAndroidFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPhoneAndroidFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPhoneAndroidFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPhoneAndroidFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPhoneAndroidFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPhoneAndroidFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPhoneAndroidFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPhoneAndroidFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPhoneAndroidFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPhoneAndroidFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPhoneAndroidFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
