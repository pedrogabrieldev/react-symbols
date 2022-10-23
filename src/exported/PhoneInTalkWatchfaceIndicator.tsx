import IconPhoneInTalkWatchfaceIndicatorFill0Wght100Grad0Opsz48 from '../components/PhoneInTalkWatchfaceIndicatorFill0Wght100Grad0Opsz48'
import IconPhoneInTalkWatchfaceIndicatorFill0Wght200Grad0Opsz48 from '../components/PhoneInTalkWatchfaceIndicatorFill0Wght200Grad0Opsz48'
import IconPhoneInTalkWatchfaceIndicatorFill0Wght300Grad0Opsz48 from '../components/PhoneInTalkWatchfaceIndicatorFill0Wght300Grad0Opsz48'
import IconPhoneInTalkWatchfaceIndicatorFill0Wght400Grad0Opsz48 from '../components/PhoneInTalkWatchfaceIndicatorFill0Wght400Grad0Opsz48'
import IconPhoneInTalkWatchfaceIndicatorFill0Wght500Grad0Opsz48 from '../components/PhoneInTalkWatchfaceIndicatorFill0Wght500Grad0Opsz48'
import IconPhoneInTalkWatchfaceIndicatorFill0Wght600Grad0Opsz48 from '../components/PhoneInTalkWatchfaceIndicatorFill0Wght600Grad0Opsz48'
import IconPhoneInTalkWatchfaceIndicatorFill0Wght700Grad0Opsz48 from '../components/PhoneInTalkWatchfaceIndicatorFill0Wght700Grad0Opsz48'
import IconPhoneInTalkWatchfaceIndicatorFill1Wght100Grad0Opsz48 from '../components/PhoneInTalkWatchfaceIndicatorFill1Wght100Grad0Opsz48'
import IconPhoneInTalkWatchfaceIndicatorFill1Wght200Grad0Opsz48 from '../components/PhoneInTalkWatchfaceIndicatorFill1Wght200Grad0Opsz48'
import IconPhoneInTalkWatchfaceIndicatorFill1Wght300Grad0Opsz48 from '../components/PhoneInTalkWatchfaceIndicatorFill1Wght300Grad0Opsz48'
import IconPhoneInTalkWatchfaceIndicatorFill1Wght400Grad0Opsz48 from '../components/PhoneInTalkWatchfaceIndicatorFill1Wght400Grad0Opsz48'
import IconPhoneInTalkWatchfaceIndicatorFill1Wght500Grad0Opsz48 from '../components/PhoneInTalkWatchfaceIndicatorFill1Wght500Grad0Opsz48'
import IconPhoneInTalkWatchfaceIndicatorFill1Wght600Grad0Opsz48 from '../components/PhoneInTalkWatchfaceIndicatorFill1Wght600Grad0Opsz48'
import IconPhoneInTalkWatchfaceIndicatorFill1Wght700Grad0Opsz48 from '../components/PhoneInTalkWatchfaceIndicatorFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPhoneInTalkWatchfaceIndicator = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPhoneInTalkWatchfaceIndicatorFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPhoneInTalkWatchfaceIndicatorFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPhoneInTalkWatchfaceIndicatorFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPhoneInTalkWatchfaceIndicatorFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPhoneInTalkWatchfaceIndicatorFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPhoneInTalkWatchfaceIndicatorFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPhoneInTalkWatchfaceIndicatorFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPhoneInTalkWatchfaceIndicatorFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPhoneInTalkWatchfaceIndicatorFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPhoneInTalkWatchfaceIndicatorFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPhoneInTalkWatchfaceIndicatorFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPhoneInTalkWatchfaceIndicatorFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPhoneInTalkWatchfaceIndicatorFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPhoneInTalkWatchfaceIndicatorFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
