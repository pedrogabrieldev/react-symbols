import IconPhoneIphoneFill0Wght100Grad0Opsz48 from '../components/PhoneIphoneFill0Wght100Grad0Opsz48'
import IconPhoneIphoneFill0Wght200Grad0Opsz48 from '../components/PhoneIphoneFill0Wght200Grad0Opsz48'
import IconPhoneIphoneFill0Wght300Grad0Opsz48 from '../components/PhoneIphoneFill0Wght300Grad0Opsz48'
import IconPhoneIphoneFill0Wght400Grad0Opsz48 from '../components/PhoneIphoneFill0Wght400Grad0Opsz48'
import IconPhoneIphoneFill0Wght500Grad0Opsz48 from '../components/PhoneIphoneFill0Wght500Grad0Opsz48'
import IconPhoneIphoneFill0Wght600Grad0Opsz48 from '../components/PhoneIphoneFill0Wght600Grad0Opsz48'
import IconPhoneIphoneFill0Wght700Grad0Opsz48 from '../components/PhoneIphoneFill0Wght700Grad0Opsz48'
import IconPhoneIphoneFill1Wght100Grad0Opsz48 from '../components/PhoneIphoneFill1Wght100Grad0Opsz48'
import IconPhoneIphoneFill1Wght200Grad0Opsz48 from '../components/PhoneIphoneFill1Wght200Grad0Opsz48'
import IconPhoneIphoneFill1Wght300Grad0Opsz48 from '../components/PhoneIphoneFill1Wght300Grad0Opsz48'
import IconPhoneIphoneFill1Wght400Grad0Opsz48 from '../components/PhoneIphoneFill1Wght400Grad0Opsz48'
import IconPhoneIphoneFill1Wght500Grad0Opsz48 from '../components/PhoneIphoneFill1Wght500Grad0Opsz48'
import IconPhoneIphoneFill1Wght600Grad0Opsz48 from '../components/PhoneIphoneFill1Wght600Grad0Opsz48'
import IconPhoneIphoneFill1Wght700Grad0Opsz48 from '../components/PhoneIphoneFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPhoneIphone = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPhoneIphoneFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPhoneIphoneFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPhoneIphoneFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPhoneIphoneFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPhoneIphoneFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPhoneIphoneFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPhoneIphoneFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPhoneIphoneFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPhoneIphoneFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPhoneIphoneFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPhoneIphoneFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPhoneIphoneFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPhoneIphoneFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPhoneIphoneFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
