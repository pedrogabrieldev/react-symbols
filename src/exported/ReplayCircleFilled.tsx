import IconReplayCircleFilledFill0Wght100Grad0Opsz48 from '../components/ReplayCircleFilledFill0Wght100Grad0Opsz48'
import IconReplayCircleFilledFill0Wght200Grad0Opsz48 from '../components/ReplayCircleFilledFill0Wght200Grad0Opsz48'
import IconReplayCircleFilledFill0Wght300Grad0Opsz48 from '../components/ReplayCircleFilledFill0Wght300Grad0Opsz48'
import IconReplayCircleFilledFill0Wght400Grad0Opsz48 from '../components/ReplayCircleFilledFill0Wght400Grad0Opsz48'
import IconReplayCircleFilledFill0Wght500Grad0Opsz48 from '../components/ReplayCircleFilledFill0Wght500Grad0Opsz48'
import IconReplayCircleFilledFill0Wght600Grad0Opsz48 from '../components/ReplayCircleFilledFill0Wght600Grad0Opsz48'
import IconReplayCircleFilledFill0Wght700Grad0Opsz48 from '../components/ReplayCircleFilledFill0Wght700Grad0Opsz48'
import IconReplayCircleFilledFill1Wght100Grad0Opsz48 from '../components/ReplayCircleFilledFill1Wght100Grad0Opsz48'
import IconReplayCircleFilledFill1Wght200Grad0Opsz48 from '../components/ReplayCircleFilledFill1Wght200Grad0Opsz48'
import IconReplayCircleFilledFill1Wght300Grad0Opsz48 from '../components/ReplayCircleFilledFill1Wght300Grad0Opsz48'
import IconReplayCircleFilledFill1Wght400Grad0Opsz48 from '../components/ReplayCircleFilledFill1Wght400Grad0Opsz48'
import IconReplayCircleFilledFill1Wght500Grad0Opsz48 from '../components/ReplayCircleFilledFill1Wght500Grad0Opsz48'
import IconReplayCircleFilledFill1Wght600Grad0Opsz48 from '../components/ReplayCircleFilledFill1Wght600Grad0Opsz48'
import IconReplayCircleFilledFill1Wght700Grad0Opsz48 from '../components/ReplayCircleFilledFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconReplayCircleFilled = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconReplayCircleFilledFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconReplayCircleFilledFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconReplayCircleFilledFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconReplayCircleFilledFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconReplayCircleFilledFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconReplayCircleFilledFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconReplayCircleFilledFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconReplayCircleFilledFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconReplayCircleFilledFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconReplayCircleFilledFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconReplayCircleFilledFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconReplayCircleFilledFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconReplayCircleFilledFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconReplayCircleFilledFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
