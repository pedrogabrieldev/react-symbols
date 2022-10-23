import IconAlarmFill0Wght100Grad0Opsz48 from '../components/AlarmFill0Wght100Grad0Opsz48'
import IconAlarmFill0Wght200Grad0Opsz48 from '../components/AlarmFill0Wght200Grad0Opsz48'
import IconAlarmFill0Wght300Grad0Opsz48 from '../components/AlarmFill0Wght300Grad0Opsz48'
import IconAlarmFill0Wght400Grad0Opsz48 from '../components/AlarmFill0Wght400Grad0Opsz48'
import IconAlarmFill0Wght500Grad0Opsz48 from '../components/AlarmFill0Wght500Grad0Opsz48'
import IconAlarmFill0Wght600Grad0Opsz48 from '../components/AlarmFill0Wght600Grad0Opsz48'
import IconAlarmFill0Wght700Grad0Opsz48 from '../components/AlarmFill0Wght700Grad0Opsz48'
import IconAlarmFill1Wght100Grad0Opsz48 from '../components/AlarmFill1Wght100Grad0Opsz48'
import IconAlarmFill1Wght200Grad0Opsz48 from '../components/AlarmFill1Wght200Grad0Opsz48'
import IconAlarmFill1Wght300Grad0Opsz48 from '../components/AlarmFill1Wght300Grad0Opsz48'
import IconAlarmFill1Wght400Grad0Opsz48 from '../components/AlarmFill1Wght400Grad0Opsz48'
import IconAlarmFill1Wght500Grad0Opsz48 from '../components/AlarmFill1Wght500Grad0Opsz48'
import IconAlarmFill1Wght600Grad0Opsz48 from '../components/AlarmFill1Wght600Grad0Opsz48'
import IconAlarmFill1Wght700Grad0Opsz48 from '../components/AlarmFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAlarm = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAlarmFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAlarmFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAlarmFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAlarmFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAlarmFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAlarmFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAlarmFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAlarmFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAlarmFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAlarmFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAlarmFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAlarmFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAlarmFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAlarmFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
