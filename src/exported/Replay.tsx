import IconReplayFill0Wght100Grad0Opsz48 from '../components/ReplayFill0Wght100Grad0Opsz48'
import IconReplayFill0Wght200Grad0Opsz48 from '../components/ReplayFill0Wght200Grad0Opsz48'
import IconReplayFill0Wght300Grad0Opsz48 from '../components/ReplayFill0Wght300Grad0Opsz48'
import IconReplayFill0Wght400Grad0Opsz48 from '../components/ReplayFill0Wght400Grad0Opsz48'
import IconReplayFill0Wght500Grad0Opsz48 from '../components/ReplayFill0Wght500Grad0Opsz48'
import IconReplayFill0Wght600Grad0Opsz48 from '../components/ReplayFill0Wght600Grad0Opsz48'
import IconReplayFill0Wght700Grad0Opsz48 from '../components/ReplayFill0Wght700Grad0Opsz48'
import IconReplayFill1Wght100Grad0Opsz48 from '../components/ReplayFill1Wght100Grad0Opsz48'
import IconReplayFill1Wght200Grad0Opsz48 from '../components/ReplayFill1Wght200Grad0Opsz48'
import IconReplayFill1Wght300Grad0Opsz48 from '../components/ReplayFill1Wght300Grad0Opsz48'
import IconReplayFill1Wght400Grad0Opsz48 from '../components/ReplayFill1Wght400Grad0Opsz48'
import IconReplayFill1Wght500Grad0Opsz48 from '../components/ReplayFill1Wght500Grad0Opsz48'
import IconReplayFill1Wght600Grad0Opsz48 from '../components/ReplayFill1Wght600Grad0Opsz48'
import IconReplayFill1Wght700Grad0Opsz48 from '../components/ReplayFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconReplay = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconReplayFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconReplayFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconReplayFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconReplayFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconReplayFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconReplayFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconReplayFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconReplayFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconReplayFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconReplayFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconReplayFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconReplayFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconReplayFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconReplayFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
