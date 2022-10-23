import IconStopScreenShareFill0Wght100Grad0Opsz48 from '../components/StopScreenShareFill0Wght100Grad0Opsz48'
import IconStopScreenShareFill0Wght200Grad0Opsz48 from '../components/StopScreenShareFill0Wght200Grad0Opsz48'
import IconStopScreenShareFill0Wght300Grad0Opsz48 from '../components/StopScreenShareFill0Wght300Grad0Opsz48'
import IconStopScreenShareFill0Wght400Grad0Opsz48 from '../components/StopScreenShareFill0Wght400Grad0Opsz48'
import IconStopScreenShareFill0Wght500Grad0Opsz48 from '../components/StopScreenShareFill0Wght500Grad0Opsz48'
import IconStopScreenShareFill0Wght600Grad0Opsz48 from '../components/StopScreenShareFill0Wght600Grad0Opsz48'
import IconStopScreenShareFill0Wght700Grad0Opsz48 from '../components/StopScreenShareFill0Wght700Grad0Opsz48'
import IconStopScreenShareFill1Wght100Grad0Opsz48 from '../components/StopScreenShareFill1Wght100Grad0Opsz48'
import IconStopScreenShareFill1Wght200Grad0Opsz48 from '../components/StopScreenShareFill1Wght200Grad0Opsz48'
import IconStopScreenShareFill1Wght300Grad0Opsz48 from '../components/StopScreenShareFill1Wght300Grad0Opsz48'
import IconStopScreenShareFill1Wght400Grad0Opsz48 from '../components/StopScreenShareFill1Wght400Grad0Opsz48'
import IconStopScreenShareFill1Wght500Grad0Opsz48 from '../components/StopScreenShareFill1Wght500Grad0Opsz48'
import IconStopScreenShareFill1Wght600Grad0Opsz48 from '../components/StopScreenShareFill1Wght600Grad0Opsz48'
import IconStopScreenShareFill1Wght700Grad0Opsz48 from '../components/StopScreenShareFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconStopScreenShare = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconStopScreenShareFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconStopScreenShareFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconStopScreenShareFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconStopScreenShareFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconStopScreenShareFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconStopScreenShareFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconStopScreenShareFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconStopScreenShareFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconStopScreenShareFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconStopScreenShareFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconStopScreenShareFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconStopScreenShareFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconStopScreenShareFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconStopScreenShareFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
