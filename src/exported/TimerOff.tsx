import IconTimerOffFill0Wght100Grad0Opsz48 from '../components/TimerOffFill0Wght100Grad0Opsz48'
import IconTimerOffFill0Wght200Grad0Opsz48 from '../components/TimerOffFill0Wght200Grad0Opsz48'
import IconTimerOffFill0Wght300Grad0Opsz48 from '../components/TimerOffFill0Wght300Grad0Opsz48'
import IconTimerOffFill0Wght400Grad0Opsz48 from '../components/TimerOffFill0Wght400Grad0Opsz48'
import IconTimerOffFill0Wght500Grad0Opsz48 from '../components/TimerOffFill0Wght500Grad0Opsz48'
import IconTimerOffFill0Wght600Grad0Opsz48 from '../components/TimerOffFill0Wght600Grad0Opsz48'
import IconTimerOffFill0Wght700Grad0Opsz48 from '../components/TimerOffFill0Wght700Grad0Opsz48'
import IconTimerOffFill1Wght100Grad0Opsz48 from '../components/TimerOffFill1Wght100Grad0Opsz48'
import IconTimerOffFill1Wght200Grad0Opsz48 from '../components/TimerOffFill1Wght200Grad0Opsz48'
import IconTimerOffFill1Wght300Grad0Opsz48 from '../components/TimerOffFill1Wght300Grad0Opsz48'
import IconTimerOffFill1Wght400Grad0Opsz48 from '../components/TimerOffFill1Wght400Grad0Opsz48'
import IconTimerOffFill1Wght500Grad0Opsz48 from '../components/TimerOffFill1Wght500Grad0Opsz48'
import IconTimerOffFill1Wght600Grad0Opsz48 from '../components/TimerOffFill1Wght600Grad0Opsz48'
import IconTimerOffFill1Wght700Grad0Opsz48 from '../components/TimerOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTimerOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTimerOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTimerOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTimerOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTimerOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTimerOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTimerOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTimerOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTimerOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTimerOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTimerOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTimerOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTimerOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTimerOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTimerOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
