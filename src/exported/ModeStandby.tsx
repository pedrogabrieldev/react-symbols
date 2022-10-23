import IconModeStandbyFill0Wght100Grad0Opsz48 from '../components/ModeStandbyFill0Wght100Grad0Opsz48'
import IconModeStandbyFill0Wght200Grad0Opsz48 from '../components/ModeStandbyFill0Wght200Grad0Opsz48'
import IconModeStandbyFill0Wght300Grad0Opsz48 from '../components/ModeStandbyFill0Wght300Grad0Opsz48'
import IconModeStandbyFill0Wght400Grad0Opsz48 from '../components/ModeStandbyFill0Wght400Grad0Opsz48'
import IconModeStandbyFill0Wght500Grad0Opsz48 from '../components/ModeStandbyFill0Wght500Grad0Opsz48'
import IconModeStandbyFill0Wght600Grad0Opsz48 from '../components/ModeStandbyFill0Wght600Grad0Opsz48'
import IconModeStandbyFill0Wght700Grad0Opsz48 from '../components/ModeStandbyFill0Wght700Grad0Opsz48'
import IconModeStandbyFill1Wght100Grad0Opsz48 from '../components/ModeStandbyFill1Wght100Grad0Opsz48'
import IconModeStandbyFill1Wght200Grad0Opsz48 from '../components/ModeStandbyFill1Wght200Grad0Opsz48'
import IconModeStandbyFill1Wght300Grad0Opsz48 from '../components/ModeStandbyFill1Wght300Grad0Opsz48'
import IconModeStandbyFill1Wght400Grad0Opsz48 from '../components/ModeStandbyFill1Wght400Grad0Opsz48'
import IconModeStandbyFill1Wght500Grad0Opsz48 from '../components/ModeStandbyFill1Wght500Grad0Opsz48'
import IconModeStandbyFill1Wght600Grad0Opsz48 from '../components/ModeStandbyFill1Wght600Grad0Opsz48'
import IconModeStandbyFill1Wght700Grad0Opsz48 from '../components/ModeStandbyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconModeStandby = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconModeStandbyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconModeStandbyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconModeStandbyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconModeStandbyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconModeStandbyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconModeStandbyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconModeStandbyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconModeStandbyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconModeStandbyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconModeStandbyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconModeStandbyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconModeStandbyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconModeStandbyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconModeStandbyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
