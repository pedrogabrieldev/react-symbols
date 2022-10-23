import IconPhoneInTalkFill0Wght100Grad0Opsz48 from '../components/PhoneInTalkFill0Wght100Grad0Opsz48'
import IconPhoneInTalkFill0Wght200Grad0Opsz48 from '../components/PhoneInTalkFill0Wght200Grad0Opsz48'
import IconPhoneInTalkFill0Wght300Grad0Opsz48 from '../components/PhoneInTalkFill0Wght300Grad0Opsz48'
import IconPhoneInTalkFill0Wght400Grad0Opsz48 from '../components/PhoneInTalkFill0Wght400Grad0Opsz48'
import IconPhoneInTalkFill0Wght500Grad0Opsz48 from '../components/PhoneInTalkFill0Wght500Grad0Opsz48'
import IconPhoneInTalkFill0Wght600Grad0Opsz48 from '../components/PhoneInTalkFill0Wght600Grad0Opsz48'
import IconPhoneInTalkFill0Wght700Grad0Opsz48 from '../components/PhoneInTalkFill0Wght700Grad0Opsz48'
import IconPhoneInTalkFill1Wght100Grad0Opsz48 from '../components/PhoneInTalkFill1Wght100Grad0Opsz48'
import IconPhoneInTalkFill1Wght200Grad0Opsz48 from '../components/PhoneInTalkFill1Wght200Grad0Opsz48'
import IconPhoneInTalkFill1Wght300Grad0Opsz48 from '../components/PhoneInTalkFill1Wght300Grad0Opsz48'
import IconPhoneInTalkFill1Wght400Grad0Opsz48 from '../components/PhoneInTalkFill1Wght400Grad0Opsz48'
import IconPhoneInTalkFill1Wght500Grad0Opsz48 from '../components/PhoneInTalkFill1Wght500Grad0Opsz48'
import IconPhoneInTalkFill1Wght600Grad0Opsz48 from '../components/PhoneInTalkFill1Wght600Grad0Opsz48'
import IconPhoneInTalkFill1Wght700Grad0Opsz48 from '../components/PhoneInTalkFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPhoneInTalk = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPhoneInTalkFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPhoneInTalkFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPhoneInTalkFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPhoneInTalkFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPhoneInTalkFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPhoneInTalkFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPhoneInTalkFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPhoneInTalkFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPhoneInTalkFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPhoneInTalkFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPhoneInTalkFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPhoneInTalkFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPhoneInTalkFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPhoneInTalkFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
