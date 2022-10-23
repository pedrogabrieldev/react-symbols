import IconAlarmOnFill0Wght100Grad0Opsz48 from '../components/AlarmOnFill0Wght100Grad0Opsz48'
import IconAlarmOnFill0Wght200Grad0Opsz48 from '../components/AlarmOnFill0Wght200Grad0Opsz48'
import IconAlarmOnFill0Wght300Grad0Opsz48 from '../components/AlarmOnFill0Wght300Grad0Opsz48'
import IconAlarmOnFill0Wght400Grad0Opsz48 from '../components/AlarmOnFill0Wght400Grad0Opsz48'
import IconAlarmOnFill0Wght500Grad0Opsz48 from '../components/AlarmOnFill0Wght500Grad0Opsz48'
import IconAlarmOnFill0Wght600Grad0Opsz48 from '../components/AlarmOnFill0Wght600Grad0Opsz48'
import IconAlarmOnFill0Wght700Grad0Opsz48 from '../components/AlarmOnFill0Wght700Grad0Opsz48'
import IconAlarmOnFill1Wght100Grad0Opsz48 from '../components/AlarmOnFill1Wght100Grad0Opsz48'
import IconAlarmOnFill1Wght200Grad0Opsz48 from '../components/AlarmOnFill1Wght200Grad0Opsz48'
import IconAlarmOnFill1Wght300Grad0Opsz48 from '../components/AlarmOnFill1Wght300Grad0Opsz48'
import IconAlarmOnFill1Wght400Grad0Opsz48 from '../components/AlarmOnFill1Wght400Grad0Opsz48'
import IconAlarmOnFill1Wght500Grad0Opsz48 from '../components/AlarmOnFill1Wght500Grad0Opsz48'
import IconAlarmOnFill1Wght600Grad0Opsz48 from '../components/AlarmOnFill1Wght600Grad0Opsz48'
import IconAlarmOnFill1Wght700Grad0Opsz48 from '../components/AlarmOnFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAlarmOn = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAlarmOnFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAlarmOnFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAlarmOnFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAlarmOnFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAlarmOnFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAlarmOnFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAlarmOnFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAlarmOnFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAlarmOnFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAlarmOnFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAlarmOnFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAlarmOnFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAlarmOnFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAlarmOnFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
