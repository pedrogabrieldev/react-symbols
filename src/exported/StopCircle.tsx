import IconStopCircleFill0Wght100Grad0Opsz48 from '../components/StopCircleFill0Wght100Grad0Opsz48'
import IconStopCircleFill0Wght200Grad0Opsz48 from '../components/StopCircleFill0Wght200Grad0Opsz48'
import IconStopCircleFill0Wght300Grad0Opsz48 from '../components/StopCircleFill0Wght300Grad0Opsz48'
import IconStopCircleFill0Wght400Grad0Opsz48 from '../components/StopCircleFill0Wght400Grad0Opsz48'
import IconStopCircleFill0Wght500Grad0Opsz48 from '../components/StopCircleFill0Wght500Grad0Opsz48'
import IconStopCircleFill0Wght600Grad0Opsz48 from '../components/StopCircleFill0Wght600Grad0Opsz48'
import IconStopCircleFill0Wght700Grad0Opsz48 from '../components/StopCircleFill0Wght700Grad0Opsz48'
import IconStopCircleFill1Wght100Grad0Opsz48 from '../components/StopCircleFill1Wght100Grad0Opsz48'
import IconStopCircleFill1Wght200Grad0Opsz48 from '../components/StopCircleFill1Wght200Grad0Opsz48'
import IconStopCircleFill1Wght300Grad0Opsz48 from '../components/StopCircleFill1Wght300Grad0Opsz48'
import IconStopCircleFill1Wght400Grad0Opsz48 from '../components/StopCircleFill1Wght400Grad0Opsz48'
import IconStopCircleFill1Wght500Grad0Opsz48 from '../components/StopCircleFill1Wght500Grad0Opsz48'
import IconStopCircleFill1Wght600Grad0Opsz48 from '../components/StopCircleFill1Wght600Grad0Opsz48'
import IconStopCircleFill1Wght700Grad0Opsz48 from '../components/StopCircleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconStopCircle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconStopCircleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconStopCircleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconStopCircleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconStopCircleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconStopCircleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconStopCircleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconStopCircleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconStopCircleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconStopCircleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconStopCircleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconStopCircleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconStopCircleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconStopCircleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconStopCircleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
