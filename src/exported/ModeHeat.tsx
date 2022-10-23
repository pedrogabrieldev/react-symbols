import IconModeHeatFill0Wght100Grad0Opsz48 from '../components/ModeHeatFill0Wght100Grad0Opsz48'
import IconModeHeatFill0Wght200Grad0Opsz48 from '../components/ModeHeatFill0Wght200Grad0Opsz48'
import IconModeHeatFill0Wght300Grad0Opsz48 from '../components/ModeHeatFill0Wght300Grad0Opsz48'
import IconModeHeatFill0Wght400Grad0Opsz48 from '../components/ModeHeatFill0Wght400Grad0Opsz48'
import IconModeHeatFill0Wght500Grad0Opsz48 from '../components/ModeHeatFill0Wght500Grad0Opsz48'
import IconModeHeatFill0Wght600Grad0Opsz48 from '../components/ModeHeatFill0Wght600Grad0Opsz48'
import IconModeHeatFill0Wght700Grad0Opsz48 from '../components/ModeHeatFill0Wght700Grad0Opsz48'
import IconModeHeatFill1Wght100Grad0Opsz48 from '../components/ModeHeatFill1Wght100Grad0Opsz48'
import IconModeHeatFill1Wght200Grad0Opsz48 from '../components/ModeHeatFill1Wght200Grad0Opsz48'
import IconModeHeatFill1Wght300Grad0Opsz48 from '../components/ModeHeatFill1Wght300Grad0Opsz48'
import IconModeHeatFill1Wght400Grad0Opsz48 from '../components/ModeHeatFill1Wght400Grad0Opsz48'
import IconModeHeatFill1Wght500Grad0Opsz48 from '../components/ModeHeatFill1Wght500Grad0Opsz48'
import IconModeHeatFill1Wght600Grad0Opsz48 from '../components/ModeHeatFill1Wght600Grad0Opsz48'
import IconModeHeatFill1Wght700Grad0Opsz48 from '../components/ModeHeatFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconModeHeat = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconModeHeatFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconModeHeatFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconModeHeatFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconModeHeatFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconModeHeatFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconModeHeatFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconModeHeatFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconModeHeatFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconModeHeatFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconModeHeatFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconModeHeatFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconModeHeatFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconModeHeatFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconModeHeatFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
