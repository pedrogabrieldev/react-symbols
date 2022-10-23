import IconAlarmOffFill0Wght100Grad0Opsz48 from '../components/AlarmOffFill0Wght100Grad0Opsz48'
import IconAlarmOffFill0Wght200Grad0Opsz48 from '../components/AlarmOffFill0Wght200Grad0Opsz48'
import IconAlarmOffFill0Wght300Grad0Opsz48 from '../components/AlarmOffFill0Wght300Grad0Opsz48'
import IconAlarmOffFill0Wght400Grad0Opsz48 from '../components/AlarmOffFill0Wght400Grad0Opsz48'
import IconAlarmOffFill0Wght500Grad0Opsz48 from '../components/AlarmOffFill0Wght500Grad0Opsz48'
import IconAlarmOffFill0Wght600Grad0Opsz48 from '../components/AlarmOffFill0Wght600Grad0Opsz48'
import IconAlarmOffFill0Wght700Grad0Opsz48 from '../components/AlarmOffFill0Wght700Grad0Opsz48'
import IconAlarmOffFill1Wght100Grad0Opsz48 from '../components/AlarmOffFill1Wght100Grad0Opsz48'
import IconAlarmOffFill1Wght200Grad0Opsz48 from '../components/AlarmOffFill1Wght200Grad0Opsz48'
import IconAlarmOffFill1Wght300Grad0Opsz48 from '../components/AlarmOffFill1Wght300Grad0Opsz48'
import IconAlarmOffFill1Wght400Grad0Opsz48 from '../components/AlarmOffFill1Wght400Grad0Opsz48'
import IconAlarmOffFill1Wght500Grad0Opsz48 from '../components/AlarmOffFill1Wght500Grad0Opsz48'
import IconAlarmOffFill1Wght600Grad0Opsz48 from '../components/AlarmOffFill1Wght600Grad0Opsz48'
import IconAlarmOffFill1Wght700Grad0Opsz48 from '../components/AlarmOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAlarmOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAlarmOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAlarmOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAlarmOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAlarmOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAlarmOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAlarmOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAlarmOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAlarmOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAlarmOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAlarmOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAlarmOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAlarmOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAlarmOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAlarmOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
