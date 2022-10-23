import IconTimelapseFill0Wght100Grad0Opsz48 from '../components/TimelapseFill0Wght100Grad0Opsz48'
import IconTimelapseFill0Wght200Grad0Opsz48 from '../components/TimelapseFill0Wght200Grad0Opsz48'
import IconTimelapseFill0Wght300Grad0Opsz48 from '../components/TimelapseFill0Wght300Grad0Opsz48'
import IconTimelapseFill0Wght400Grad0Opsz48 from '../components/TimelapseFill0Wght400Grad0Opsz48'
import IconTimelapseFill0Wght500Grad0Opsz48 from '../components/TimelapseFill0Wght500Grad0Opsz48'
import IconTimelapseFill0Wght600Grad0Opsz48 from '../components/TimelapseFill0Wght600Grad0Opsz48'
import IconTimelapseFill0Wght700Grad0Opsz48 from '../components/TimelapseFill0Wght700Grad0Opsz48'
import IconTimelapseFill1Wght100Grad0Opsz48 from '../components/TimelapseFill1Wght100Grad0Opsz48'
import IconTimelapseFill1Wght200Grad0Opsz48 from '../components/TimelapseFill1Wght200Grad0Opsz48'
import IconTimelapseFill1Wght300Grad0Opsz48 from '../components/TimelapseFill1Wght300Grad0Opsz48'
import IconTimelapseFill1Wght400Grad0Opsz48 from '../components/TimelapseFill1Wght400Grad0Opsz48'
import IconTimelapseFill1Wght500Grad0Opsz48 from '../components/TimelapseFill1Wght500Grad0Opsz48'
import IconTimelapseFill1Wght600Grad0Opsz48 from '../components/TimelapseFill1Wght600Grad0Opsz48'
import IconTimelapseFill1Wght700Grad0Opsz48 from '../components/TimelapseFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTimelapse = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTimelapseFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTimelapseFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTimelapseFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTimelapseFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTimelapseFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTimelapseFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTimelapseFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTimelapseFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTimelapseFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTimelapseFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTimelapseFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTimelapseFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTimelapseFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTimelapseFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
