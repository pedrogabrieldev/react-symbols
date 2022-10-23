import IconAssignmentReturnFill0Wght100Grad0Opsz48 from '../components/AssignmentReturnFill0Wght100Grad0Opsz48'
import IconAssignmentReturnFill0Wght200Grad0Opsz48 from '../components/AssignmentReturnFill0Wght200Grad0Opsz48'
import IconAssignmentReturnFill0Wght300Grad0Opsz48 from '../components/AssignmentReturnFill0Wght300Grad0Opsz48'
import IconAssignmentReturnFill0Wght400Grad0Opsz48 from '../components/AssignmentReturnFill0Wght400Grad0Opsz48'
import IconAssignmentReturnFill0Wght500Grad0Opsz48 from '../components/AssignmentReturnFill0Wght500Grad0Opsz48'
import IconAssignmentReturnFill0Wght600Grad0Opsz48 from '../components/AssignmentReturnFill0Wght600Grad0Opsz48'
import IconAssignmentReturnFill0Wght700Grad0Opsz48 from '../components/AssignmentReturnFill0Wght700Grad0Opsz48'
import IconAssignmentReturnFill1Wght100Grad0Opsz48 from '../components/AssignmentReturnFill1Wght100Grad0Opsz48'
import IconAssignmentReturnFill1Wght200Grad0Opsz48 from '../components/AssignmentReturnFill1Wght200Grad0Opsz48'
import IconAssignmentReturnFill1Wght300Grad0Opsz48 from '../components/AssignmentReturnFill1Wght300Grad0Opsz48'
import IconAssignmentReturnFill1Wght400Grad0Opsz48 from '../components/AssignmentReturnFill1Wght400Grad0Opsz48'
import IconAssignmentReturnFill1Wght500Grad0Opsz48 from '../components/AssignmentReturnFill1Wght500Grad0Opsz48'
import IconAssignmentReturnFill1Wght600Grad0Opsz48 from '../components/AssignmentReturnFill1Wght600Grad0Opsz48'
import IconAssignmentReturnFill1Wght700Grad0Opsz48 from '../components/AssignmentReturnFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAssignmentReturn = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAssignmentReturnFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAssignmentReturnFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAssignmentReturnFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAssignmentReturnFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAssignmentReturnFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAssignmentReturnFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAssignmentReturnFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAssignmentReturnFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAssignmentReturnFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAssignmentReturnFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAssignmentReturnFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAssignmentReturnFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAssignmentReturnFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAssignmentReturnFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
