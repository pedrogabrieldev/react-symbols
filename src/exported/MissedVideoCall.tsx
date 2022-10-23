import IconMissedVideoCallFill0Wght100Grad0Opsz48 from '../components/MissedVideoCallFill0Wght100Grad0Opsz48'
import IconMissedVideoCallFill0Wght200Grad0Opsz48 from '../components/MissedVideoCallFill0Wght200Grad0Opsz48'
import IconMissedVideoCallFill0Wght300Grad0Opsz48 from '../components/MissedVideoCallFill0Wght300Grad0Opsz48'
import IconMissedVideoCallFill0Wght400Grad0Opsz48 from '../components/MissedVideoCallFill0Wght400Grad0Opsz48'
import IconMissedVideoCallFill0Wght500Grad0Opsz48 from '../components/MissedVideoCallFill0Wght500Grad0Opsz48'
import IconMissedVideoCallFill0Wght600Grad0Opsz48 from '../components/MissedVideoCallFill0Wght600Grad0Opsz48'
import IconMissedVideoCallFill0Wght700Grad0Opsz48 from '../components/MissedVideoCallFill0Wght700Grad0Opsz48'
import IconMissedVideoCallFill1Wght100Grad0Opsz48 from '../components/MissedVideoCallFill1Wght100Grad0Opsz48'
import IconMissedVideoCallFill1Wght200Grad0Opsz48 from '../components/MissedVideoCallFill1Wght200Grad0Opsz48'
import IconMissedVideoCallFill1Wght300Grad0Opsz48 from '../components/MissedVideoCallFill1Wght300Grad0Opsz48'
import IconMissedVideoCallFill1Wght400Grad0Opsz48 from '../components/MissedVideoCallFill1Wght400Grad0Opsz48'
import IconMissedVideoCallFill1Wght500Grad0Opsz48 from '../components/MissedVideoCallFill1Wght500Grad0Opsz48'
import IconMissedVideoCallFill1Wght600Grad0Opsz48 from '../components/MissedVideoCallFill1Wght600Grad0Opsz48'
import IconMissedVideoCallFill1Wght700Grad0Opsz48 from '../components/MissedVideoCallFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMissedVideoCall = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMissedVideoCallFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMissedVideoCallFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMissedVideoCallFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMissedVideoCallFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMissedVideoCallFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMissedVideoCallFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMissedVideoCallFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMissedVideoCallFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMissedVideoCallFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMissedVideoCallFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMissedVideoCallFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMissedVideoCallFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMissedVideoCallFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMissedVideoCallFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
