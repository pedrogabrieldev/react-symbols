import IconSmsFailedFill0Wght100Grad0Opsz48 from '../components/SmsFailedFill0Wght100Grad0Opsz48'
import IconSmsFailedFill0Wght200Grad0Opsz48 from '../components/SmsFailedFill0Wght200Grad0Opsz48'
import IconSmsFailedFill0Wght300Grad0Opsz48 from '../components/SmsFailedFill0Wght300Grad0Opsz48'
import IconSmsFailedFill0Wght400Grad0Opsz48 from '../components/SmsFailedFill0Wght400Grad0Opsz48'
import IconSmsFailedFill0Wght500Grad0Opsz48 from '../components/SmsFailedFill0Wght500Grad0Opsz48'
import IconSmsFailedFill0Wght600Grad0Opsz48 from '../components/SmsFailedFill0Wght600Grad0Opsz48'
import IconSmsFailedFill0Wght700Grad0Opsz48 from '../components/SmsFailedFill0Wght700Grad0Opsz48'
import IconSmsFailedFill1Wght100Grad0Opsz48 from '../components/SmsFailedFill1Wght100Grad0Opsz48'
import IconSmsFailedFill1Wght200Grad0Opsz48 from '../components/SmsFailedFill1Wght200Grad0Opsz48'
import IconSmsFailedFill1Wght300Grad0Opsz48 from '../components/SmsFailedFill1Wght300Grad0Opsz48'
import IconSmsFailedFill1Wght400Grad0Opsz48 from '../components/SmsFailedFill1Wght400Grad0Opsz48'
import IconSmsFailedFill1Wght500Grad0Opsz48 from '../components/SmsFailedFill1Wght500Grad0Opsz48'
import IconSmsFailedFill1Wght600Grad0Opsz48 from '../components/SmsFailedFill1Wght600Grad0Opsz48'
import IconSmsFailedFill1Wght700Grad0Opsz48 from '../components/SmsFailedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSmsFailed = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSmsFailedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSmsFailedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSmsFailedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSmsFailedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSmsFailedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSmsFailedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSmsFailedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSmsFailedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSmsFailedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSmsFailedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSmsFailedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSmsFailedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSmsFailedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSmsFailedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
