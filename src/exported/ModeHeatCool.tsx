import IconModeHeatCoolFill0Wght100Grad0Opsz48 from '../components/ModeHeatCoolFill0Wght100Grad0Opsz48'
import IconModeHeatCoolFill0Wght200Grad0Opsz48 from '../components/ModeHeatCoolFill0Wght200Grad0Opsz48'
import IconModeHeatCoolFill0Wght300Grad0Opsz48 from '../components/ModeHeatCoolFill0Wght300Grad0Opsz48'
import IconModeHeatCoolFill0Wght400Grad0Opsz48 from '../components/ModeHeatCoolFill0Wght400Grad0Opsz48'
import IconModeHeatCoolFill0Wght500Grad0Opsz48 from '../components/ModeHeatCoolFill0Wght500Grad0Opsz48'
import IconModeHeatCoolFill0Wght600Grad0Opsz48 from '../components/ModeHeatCoolFill0Wght600Grad0Opsz48'
import IconModeHeatCoolFill0Wght700Grad0Opsz48 from '../components/ModeHeatCoolFill0Wght700Grad0Opsz48'
import IconModeHeatCoolFill1Wght100Grad0Opsz48 from '../components/ModeHeatCoolFill1Wght100Grad0Opsz48'
import IconModeHeatCoolFill1Wght200Grad0Opsz48 from '../components/ModeHeatCoolFill1Wght200Grad0Opsz48'
import IconModeHeatCoolFill1Wght300Grad0Opsz48 from '../components/ModeHeatCoolFill1Wght300Grad0Opsz48'
import IconModeHeatCoolFill1Wght400Grad0Opsz48 from '../components/ModeHeatCoolFill1Wght400Grad0Opsz48'
import IconModeHeatCoolFill1Wght500Grad0Opsz48 from '../components/ModeHeatCoolFill1Wght500Grad0Opsz48'
import IconModeHeatCoolFill1Wght600Grad0Opsz48 from '../components/ModeHeatCoolFill1Wght600Grad0Opsz48'
import IconModeHeatCoolFill1Wght700Grad0Opsz48 from '../components/ModeHeatCoolFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconModeHeatCool = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconModeHeatCoolFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconModeHeatCoolFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconModeHeatCoolFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconModeHeatCoolFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconModeHeatCoolFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconModeHeatCoolFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconModeHeatCoolFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconModeHeatCoolFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconModeHeatCoolFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconModeHeatCoolFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconModeHeatCoolFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconModeHeatCoolFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconModeHeatCoolFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconModeHeatCoolFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
