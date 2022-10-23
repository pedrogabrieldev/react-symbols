import IconSpeedFill0Wght100Grad0Opsz48 from '../components/SpeedFill0Wght100Grad0Opsz48'
import IconSpeedFill0Wght200Grad0Opsz48 from '../components/SpeedFill0Wght200Grad0Opsz48'
import IconSpeedFill0Wght300Grad0Opsz48 from '../components/SpeedFill0Wght300Grad0Opsz48'
import IconSpeedFill0Wght400Grad0Opsz48 from '../components/SpeedFill0Wght400Grad0Opsz48'
import IconSpeedFill0Wght500Grad0Opsz48 from '../components/SpeedFill0Wght500Grad0Opsz48'
import IconSpeedFill0Wght600Grad0Opsz48 from '../components/SpeedFill0Wght600Grad0Opsz48'
import IconSpeedFill0Wght700Grad0Opsz48 from '../components/SpeedFill0Wght700Grad0Opsz48'
import IconSpeedFill1Wght100Grad0Opsz48 from '../components/SpeedFill1Wght100Grad0Opsz48'
import IconSpeedFill1Wght200Grad0Opsz48 from '../components/SpeedFill1Wght200Grad0Opsz48'
import IconSpeedFill1Wght300Grad0Opsz48 from '../components/SpeedFill1Wght300Grad0Opsz48'
import IconSpeedFill1Wght400Grad0Opsz48 from '../components/SpeedFill1Wght400Grad0Opsz48'
import IconSpeedFill1Wght500Grad0Opsz48 from '../components/SpeedFill1Wght500Grad0Opsz48'
import IconSpeedFill1Wght600Grad0Opsz48 from '../components/SpeedFill1Wght600Grad0Opsz48'
import IconSpeedFill1Wght700Grad0Opsz48 from '../components/SpeedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSpeed = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSpeedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSpeedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSpeedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSpeedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSpeedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSpeedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSpeedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSpeedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSpeedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSpeedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSpeedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSpeedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSpeedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSpeedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
