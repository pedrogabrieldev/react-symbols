import IconModeHeatOffFill0Wght100Grad0Opsz48 from '../components/ModeHeatOffFill0Wght100Grad0Opsz48'
import IconModeHeatOffFill0Wght200Grad0Opsz48 from '../components/ModeHeatOffFill0Wght200Grad0Opsz48'
import IconModeHeatOffFill0Wght300Grad0Opsz48 from '../components/ModeHeatOffFill0Wght300Grad0Opsz48'
import IconModeHeatOffFill0Wght400Grad0Opsz48 from '../components/ModeHeatOffFill0Wght400Grad0Opsz48'
import IconModeHeatOffFill0Wght500Grad0Opsz48 from '../components/ModeHeatOffFill0Wght500Grad0Opsz48'
import IconModeHeatOffFill0Wght600Grad0Opsz48 from '../components/ModeHeatOffFill0Wght600Grad0Opsz48'
import IconModeHeatOffFill0Wght700Grad0Opsz48 from '../components/ModeHeatOffFill0Wght700Grad0Opsz48'
import IconModeHeatOffFill1Wght100Grad0Opsz48 from '../components/ModeHeatOffFill1Wght100Grad0Opsz48'
import IconModeHeatOffFill1Wght200Grad0Opsz48 from '../components/ModeHeatOffFill1Wght200Grad0Opsz48'
import IconModeHeatOffFill1Wght300Grad0Opsz48 from '../components/ModeHeatOffFill1Wght300Grad0Opsz48'
import IconModeHeatOffFill1Wght400Grad0Opsz48 from '../components/ModeHeatOffFill1Wght400Grad0Opsz48'
import IconModeHeatOffFill1Wght500Grad0Opsz48 from '../components/ModeHeatOffFill1Wght500Grad0Opsz48'
import IconModeHeatOffFill1Wght600Grad0Opsz48 from '../components/ModeHeatOffFill1Wght600Grad0Opsz48'
import IconModeHeatOffFill1Wght700Grad0Opsz48 from '../components/ModeHeatOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconModeHeatOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconModeHeatOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconModeHeatOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconModeHeatOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconModeHeatOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconModeHeatOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconModeHeatOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconModeHeatOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconModeHeatOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconModeHeatOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconModeHeatOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconModeHeatOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconModeHeatOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconModeHeatOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconModeHeatOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
