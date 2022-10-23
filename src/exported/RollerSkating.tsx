import IconRollerSkatingFill0Wght100Grad0Opsz48 from '../components/RollerSkatingFill0Wght100Grad0Opsz48'
import IconRollerSkatingFill0Wght200Grad0Opsz48 from '../components/RollerSkatingFill0Wght200Grad0Opsz48'
import IconRollerSkatingFill0Wght300Grad0Opsz48 from '../components/RollerSkatingFill0Wght300Grad0Opsz48'
import IconRollerSkatingFill0Wght400Grad0Opsz48 from '../components/RollerSkatingFill0Wght400Grad0Opsz48'
import IconRollerSkatingFill0Wght500Grad0Opsz48 from '../components/RollerSkatingFill0Wght500Grad0Opsz48'
import IconRollerSkatingFill0Wght600Grad0Opsz48 from '../components/RollerSkatingFill0Wght600Grad0Opsz48'
import IconRollerSkatingFill0Wght700Grad0Opsz48 from '../components/RollerSkatingFill0Wght700Grad0Opsz48'
import IconRollerSkatingFill1Wght100Grad0Opsz48 from '../components/RollerSkatingFill1Wght100Grad0Opsz48'
import IconRollerSkatingFill1Wght200Grad0Opsz48 from '../components/RollerSkatingFill1Wght200Grad0Opsz48'
import IconRollerSkatingFill1Wght300Grad0Opsz48 from '../components/RollerSkatingFill1Wght300Grad0Opsz48'
import IconRollerSkatingFill1Wght400Grad0Opsz48 from '../components/RollerSkatingFill1Wght400Grad0Opsz48'
import IconRollerSkatingFill1Wght500Grad0Opsz48 from '../components/RollerSkatingFill1Wght500Grad0Opsz48'
import IconRollerSkatingFill1Wght600Grad0Opsz48 from '../components/RollerSkatingFill1Wght600Grad0Opsz48'
import IconRollerSkatingFill1Wght700Grad0Opsz48 from '../components/RollerSkatingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRollerSkating = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRollerSkatingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRollerSkatingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRollerSkatingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRollerSkatingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRollerSkatingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRollerSkatingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRollerSkatingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRollerSkatingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRollerSkatingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRollerSkatingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRollerSkatingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRollerSkatingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRollerSkatingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRollerSkatingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
