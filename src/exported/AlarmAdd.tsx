import IconAlarmAddFill0Wght100Grad0Opsz48 from '../components/AlarmAddFill0Wght100Grad0Opsz48'
import IconAlarmAddFill0Wght200Grad0Opsz48 from '../components/AlarmAddFill0Wght200Grad0Opsz48'
import IconAlarmAddFill0Wght300Grad0Opsz48 from '../components/AlarmAddFill0Wght300Grad0Opsz48'
import IconAlarmAddFill0Wght400Grad0Opsz48 from '../components/AlarmAddFill0Wght400Grad0Opsz48'
import IconAlarmAddFill0Wght500Grad0Opsz48 from '../components/AlarmAddFill0Wght500Grad0Opsz48'
import IconAlarmAddFill0Wght600Grad0Opsz48 from '../components/AlarmAddFill0Wght600Grad0Opsz48'
import IconAlarmAddFill0Wght700Grad0Opsz48 from '../components/AlarmAddFill0Wght700Grad0Opsz48'
import IconAlarmAddFill1Wght100Grad0Opsz48 from '../components/AlarmAddFill1Wght100Grad0Opsz48'
import IconAlarmAddFill1Wght200Grad0Opsz48 from '../components/AlarmAddFill1Wght200Grad0Opsz48'
import IconAlarmAddFill1Wght300Grad0Opsz48 from '../components/AlarmAddFill1Wght300Grad0Opsz48'
import IconAlarmAddFill1Wght400Grad0Opsz48 from '../components/AlarmAddFill1Wght400Grad0Opsz48'
import IconAlarmAddFill1Wght500Grad0Opsz48 from '../components/AlarmAddFill1Wght500Grad0Opsz48'
import IconAlarmAddFill1Wght600Grad0Opsz48 from '../components/AlarmAddFill1Wght600Grad0Opsz48'
import IconAlarmAddFill1Wght700Grad0Opsz48 from '../components/AlarmAddFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAlarmAdd = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAlarmAddFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAlarmAddFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAlarmAddFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAlarmAddFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAlarmAddFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAlarmAddFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAlarmAddFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAlarmAddFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAlarmAddFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAlarmAddFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAlarmAddFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAlarmAddFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAlarmAddFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAlarmAddFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
