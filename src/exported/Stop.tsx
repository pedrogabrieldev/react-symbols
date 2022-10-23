import IconStopFill0Wght100Grad0Opsz48 from '../components/StopFill0Wght100Grad0Opsz48'
import IconStopFill0Wght200Grad0Opsz48 from '../components/StopFill0Wght200Grad0Opsz48'
import IconStopFill0Wght300Grad0Opsz48 from '../components/StopFill0Wght300Grad0Opsz48'
import IconStopFill0Wght400Grad0Opsz48 from '../components/StopFill0Wght400Grad0Opsz48'
import IconStopFill0Wght500Grad0Opsz48 from '../components/StopFill0Wght500Grad0Opsz48'
import IconStopFill0Wght600Grad0Opsz48 from '../components/StopFill0Wght600Grad0Opsz48'
import IconStopFill0Wght700Grad0Opsz48 from '../components/StopFill0Wght700Grad0Opsz48'
import IconStopFill1Wght100Grad0Opsz48 from '../components/StopFill1Wght100Grad0Opsz48'
import IconStopFill1Wght200Grad0Opsz48 from '../components/StopFill1Wght200Grad0Opsz48'
import IconStopFill1Wght300Grad0Opsz48 from '../components/StopFill1Wght300Grad0Opsz48'
import IconStopFill1Wght400Grad0Opsz48 from '../components/StopFill1Wght400Grad0Opsz48'
import IconStopFill1Wght500Grad0Opsz48 from '../components/StopFill1Wght500Grad0Opsz48'
import IconStopFill1Wght600Grad0Opsz48 from '../components/StopFill1Wght600Grad0Opsz48'
import IconStopFill1Wght700Grad0Opsz48 from '../components/StopFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconStop = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconStopFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconStopFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconStopFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconStopFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconStopFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconStopFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconStopFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconStopFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconStopFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconStopFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconStopFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconStopFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconStopFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconStopFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
