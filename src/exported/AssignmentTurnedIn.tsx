import IconAssignmentTurnedInFill0Wght100Grad0Opsz48 from '../components/AssignmentTurnedInFill0Wght100Grad0Opsz48'
import IconAssignmentTurnedInFill0Wght200Grad0Opsz48 from '../components/AssignmentTurnedInFill0Wght200Grad0Opsz48'
import IconAssignmentTurnedInFill0Wght300Grad0Opsz48 from '../components/AssignmentTurnedInFill0Wght300Grad0Opsz48'
import IconAssignmentTurnedInFill0Wght400Grad0Opsz48 from '../components/AssignmentTurnedInFill0Wght400Grad0Opsz48'
import IconAssignmentTurnedInFill0Wght500Grad0Opsz48 from '../components/AssignmentTurnedInFill0Wght500Grad0Opsz48'
import IconAssignmentTurnedInFill0Wght600Grad0Opsz48 from '../components/AssignmentTurnedInFill0Wght600Grad0Opsz48'
import IconAssignmentTurnedInFill0Wght700Grad0Opsz48 from '../components/AssignmentTurnedInFill0Wght700Grad0Opsz48'
import IconAssignmentTurnedInFill1Wght100Grad0Opsz48 from '../components/AssignmentTurnedInFill1Wght100Grad0Opsz48'
import IconAssignmentTurnedInFill1Wght200Grad0Opsz48 from '../components/AssignmentTurnedInFill1Wght200Grad0Opsz48'
import IconAssignmentTurnedInFill1Wght300Grad0Opsz48 from '../components/AssignmentTurnedInFill1Wght300Grad0Opsz48'
import IconAssignmentTurnedInFill1Wght400Grad0Opsz48 from '../components/AssignmentTurnedInFill1Wght400Grad0Opsz48'
import IconAssignmentTurnedInFill1Wght500Grad0Opsz48 from '../components/AssignmentTurnedInFill1Wght500Grad0Opsz48'
import IconAssignmentTurnedInFill1Wght600Grad0Opsz48 from '../components/AssignmentTurnedInFill1Wght600Grad0Opsz48'
import IconAssignmentTurnedInFill1Wght700Grad0Opsz48 from '../components/AssignmentTurnedInFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAssignmentTurnedIn = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAssignmentTurnedInFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAssignmentTurnedInFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAssignmentTurnedInFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAssignmentTurnedInFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAssignmentTurnedInFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAssignmentTurnedInFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAssignmentTurnedInFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAssignmentTurnedInFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAssignmentTurnedInFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAssignmentTurnedInFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAssignmentTurnedInFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAssignmentTurnedInFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAssignmentTurnedInFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAssignmentTurnedInFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
