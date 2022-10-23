import IconTimerFill0Wght100Grad0Opsz48 from '../components/TimerFill0Wght100Grad0Opsz48'
import IconTimerFill0Wght200Grad0Opsz48 from '../components/TimerFill0Wght200Grad0Opsz48'
import IconTimerFill0Wght300Grad0Opsz48 from '../components/TimerFill0Wght300Grad0Opsz48'
import IconTimerFill0Wght400Grad0Opsz48 from '../components/TimerFill0Wght400Grad0Opsz48'
import IconTimerFill0Wght500Grad0Opsz48 from '../components/TimerFill0Wght500Grad0Opsz48'
import IconTimerFill0Wght600Grad0Opsz48 from '../components/TimerFill0Wght600Grad0Opsz48'
import IconTimerFill0Wght700Grad0Opsz48 from '../components/TimerFill0Wght700Grad0Opsz48'
import IconTimerFill1Wght100Grad0Opsz48 from '../components/TimerFill1Wght100Grad0Opsz48'
import IconTimerFill1Wght200Grad0Opsz48 from '../components/TimerFill1Wght200Grad0Opsz48'
import IconTimerFill1Wght300Grad0Opsz48 from '../components/TimerFill1Wght300Grad0Opsz48'
import IconTimerFill1Wght400Grad0Opsz48 from '../components/TimerFill1Wght400Grad0Opsz48'
import IconTimerFill1Wght500Grad0Opsz48 from '../components/TimerFill1Wght500Grad0Opsz48'
import IconTimerFill1Wght600Grad0Opsz48 from '../components/TimerFill1Wght600Grad0Opsz48'
import IconTimerFill1Wght700Grad0Opsz48 from '../components/TimerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTimer = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTimerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTimerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTimerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTimerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTimerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTimerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTimerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTimerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTimerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTimerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTimerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTimerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTimerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTimerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
