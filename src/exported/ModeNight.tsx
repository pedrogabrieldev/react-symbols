import IconModeNightFill0Wght100Grad0Opsz48 from '../components/ModeNightFill0Wght100Grad0Opsz48'
import IconModeNightFill0Wght200Grad0Opsz48 from '../components/ModeNightFill0Wght200Grad0Opsz48'
import IconModeNightFill0Wght300Grad0Opsz48 from '../components/ModeNightFill0Wght300Grad0Opsz48'
import IconModeNightFill0Wght400Grad0Opsz48 from '../components/ModeNightFill0Wght400Grad0Opsz48'
import IconModeNightFill0Wght500Grad0Opsz48 from '../components/ModeNightFill0Wght500Grad0Opsz48'
import IconModeNightFill0Wght600Grad0Opsz48 from '../components/ModeNightFill0Wght600Grad0Opsz48'
import IconModeNightFill0Wght700Grad0Opsz48 from '../components/ModeNightFill0Wght700Grad0Opsz48'
import IconModeNightFill1Wght100Grad0Opsz48 from '../components/ModeNightFill1Wght100Grad0Opsz48'
import IconModeNightFill1Wght200Grad0Opsz48 from '../components/ModeNightFill1Wght200Grad0Opsz48'
import IconModeNightFill1Wght300Grad0Opsz48 from '../components/ModeNightFill1Wght300Grad0Opsz48'
import IconModeNightFill1Wght400Grad0Opsz48 from '../components/ModeNightFill1Wght400Grad0Opsz48'
import IconModeNightFill1Wght500Grad0Opsz48 from '../components/ModeNightFill1Wght500Grad0Opsz48'
import IconModeNightFill1Wght600Grad0Opsz48 from '../components/ModeNightFill1Wght600Grad0Opsz48'
import IconModeNightFill1Wght700Grad0Opsz48 from '../components/ModeNightFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconModeNight = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconModeNightFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconModeNightFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconModeNightFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconModeNightFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconModeNightFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconModeNightFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconModeNightFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconModeNightFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconModeNightFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconModeNightFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconModeNightFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconModeNightFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconModeNightFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconModeNightFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
