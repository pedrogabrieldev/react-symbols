import IconRollerShadesClosedFill0Wght100Grad0Opsz48 from '../components/RollerShadesClosedFill0Wght100Grad0Opsz48'
import IconRollerShadesClosedFill0Wght200Grad0Opsz48 from '../components/RollerShadesClosedFill0Wght200Grad0Opsz48'
import IconRollerShadesClosedFill0Wght300Grad0Opsz48 from '../components/RollerShadesClosedFill0Wght300Grad0Opsz48'
import IconRollerShadesClosedFill0Wght400Grad0Opsz48 from '../components/RollerShadesClosedFill0Wght400Grad0Opsz48'
import IconRollerShadesClosedFill0Wght500Grad0Opsz48 from '../components/RollerShadesClosedFill0Wght500Grad0Opsz48'
import IconRollerShadesClosedFill0Wght600Grad0Opsz48 from '../components/RollerShadesClosedFill0Wght600Grad0Opsz48'
import IconRollerShadesClosedFill0Wght700Grad0Opsz48 from '../components/RollerShadesClosedFill0Wght700Grad0Opsz48'
import IconRollerShadesClosedFill1Wght100Grad0Opsz48 from '../components/RollerShadesClosedFill1Wght100Grad0Opsz48'
import IconRollerShadesClosedFill1Wght200Grad0Opsz48 from '../components/RollerShadesClosedFill1Wght200Grad0Opsz48'
import IconRollerShadesClosedFill1Wght300Grad0Opsz48 from '../components/RollerShadesClosedFill1Wght300Grad0Opsz48'
import IconRollerShadesClosedFill1Wght400Grad0Opsz48 from '../components/RollerShadesClosedFill1Wght400Grad0Opsz48'
import IconRollerShadesClosedFill1Wght500Grad0Opsz48 from '../components/RollerShadesClosedFill1Wght500Grad0Opsz48'
import IconRollerShadesClosedFill1Wght600Grad0Opsz48 from '../components/RollerShadesClosedFill1Wght600Grad0Opsz48'
import IconRollerShadesClosedFill1Wght700Grad0Opsz48 from '../components/RollerShadesClosedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRollerShadesClosed = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRollerShadesClosedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRollerShadesClosedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRollerShadesClosedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRollerShadesClosedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRollerShadesClosedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRollerShadesClosedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRollerShadesClosedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRollerShadesClosedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRollerShadesClosedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRollerShadesClosedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRollerShadesClosedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRollerShadesClosedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRollerShadesClosedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRollerShadesClosedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
