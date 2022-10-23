import IconNestSecureAlarmFill0Wght100Grad0Opsz48 from '../components/NestSecureAlarmFill0Wght100Grad0Opsz48'
import IconNestSecureAlarmFill0Wght200Grad0Opsz48 from '../components/NestSecureAlarmFill0Wght200Grad0Opsz48'
import IconNestSecureAlarmFill0Wght300Grad0Opsz48 from '../components/NestSecureAlarmFill0Wght300Grad0Opsz48'
import IconNestSecureAlarmFill0Wght400Grad0Opsz48 from '../components/NestSecureAlarmFill0Wght400Grad0Opsz48'
import IconNestSecureAlarmFill0Wght500Grad0Opsz48 from '../components/NestSecureAlarmFill0Wght500Grad0Opsz48'
import IconNestSecureAlarmFill0Wght600Grad0Opsz48 from '../components/NestSecureAlarmFill0Wght600Grad0Opsz48'
import IconNestSecureAlarmFill0Wght700Grad0Opsz48 from '../components/NestSecureAlarmFill0Wght700Grad0Opsz48'
import IconNestSecureAlarmFill1Wght100Grad0Opsz48 from '../components/NestSecureAlarmFill1Wght100Grad0Opsz48'
import IconNestSecureAlarmFill1Wght200Grad0Opsz48 from '../components/NestSecureAlarmFill1Wght200Grad0Opsz48'
import IconNestSecureAlarmFill1Wght300Grad0Opsz48 from '../components/NestSecureAlarmFill1Wght300Grad0Opsz48'
import IconNestSecureAlarmFill1Wght400Grad0Opsz48 from '../components/NestSecureAlarmFill1Wght400Grad0Opsz48'
import IconNestSecureAlarmFill1Wght500Grad0Opsz48 from '../components/NestSecureAlarmFill1Wght500Grad0Opsz48'
import IconNestSecureAlarmFill1Wght600Grad0Opsz48 from '../components/NestSecureAlarmFill1Wght600Grad0Opsz48'
import IconNestSecureAlarmFill1Wght700Grad0Opsz48 from '../components/NestSecureAlarmFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestSecureAlarm = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestSecureAlarmFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestSecureAlarmFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestSecureAlarmFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestSecureAlarmFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestSecureAlarmFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestSecureAlarmFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestSecureAlarmFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestSecureAlarmFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestSecureAlarmFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestSecureAlarmFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestSecureAlarmFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestSecureAlarmFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestSecureAlarmFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestSecureAlarmFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
