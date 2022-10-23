import IconRollerShadesFill0Wght100Grad0Opsz48 from '../components/RollerShadesFill0Wght100Grad0Opsz48'
import IconRollerShadesFill0Wght200Grad0Opsz48 from '../components/RollerShadesFill0Wght200Grad0Opsz48'
import IconRollerShadesFill0Wght300Grad0Opsz48 from '../components/RollerShadesFill0Wght300Grad0Opsz48'
import IconRollerShadesFill0Wght400Grad0Opsz48 from '../components/RollerShadesFill0Wght400Grad0Opsz48'
import IconRollerShadesFill0Wght500Grad0Opsz48 from '../components/RollerShadesFill0Wght500Grad0Opsz48'
import IconRollerShadesFill0Wght600Grad0Opsz48 from '../components/RollerShadesFill0Wght600Grad0Opsz48'
import IconRollerShadesFill0Wght700Grad0Opsz48 from '../components/RollerShadesFill0Wght700Grad0Opsz48'
import IconRollerShadesFill1Wght100Grad0Opsz48 from '../components/RollerShadesFill1Wght100Grad0Opsz48'
import IconRollerShadesFill1Wght200Grad0Opsz48 from '../components/RollerShadesFill1Wght200Grad0Opsz48'
import IconRollerShadesFill1Wght300Grad0Opsz48 from '../components/RollerShadesFill1Wght300Grad0Opsz48'
import IconRollerShadesFill1Wght400Grad0Opsz48 from '../components/RollerShadesFill1Wght400Grad0Opsz48'
import IconRollerShadesFill1Wght500Grad0Opsz48 from '../components/RollerShadesFill1Wght500Grad0Opsz48'
import IconRollerShadesFill1Wght600Grad0Opsz48 from '../components/RollerShadesFill1Wght600Grad0Opsz48'
import IconRollerShadesFill1Wght700Grad0Opsz48 from '../components/RollerShadesFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRollerShades = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRollerShadesFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRollerShadesFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRollerShadesFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRollerShadesFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRollerShadesFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRollerShadesFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRollerShadesFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRollerShadesFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRollerShadesFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRollerShadesFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRollerShadesFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRollerShadesFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRollerShadesFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRollerShadesFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
