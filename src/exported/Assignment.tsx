import IconAssignmentFill0Wght100Grad0Opsz48 from '../components/AssignmentFill0Wght100Grad0Opsz48'
import IconAssignmentFill0Wght200Grad0Opsz48 from '../components/AssignmentFill0Wght200Grad0Opsz48'
import IconAssignmentFill0Wght300Grad0Opsz48 from '../components/AssignmentFill0Wght300Grad0Opsz48'
import IconAssignmentFill0Wght400Grad0Opsz48 from '../components/AssignmentFill0Wght400Grad0Opsz48'
import IconAssignmentFill0Wght500Grad0Opsz48 from '../components/AssignmentFill0Wght500Grad0Opsz48'
import IconAssignmentFill0Wght600Grad0Opsz48 from '../components/AssignmentFill0Wght600Grad0Opsz48'
import IconAssignmentFill0Wght700Grad0Opsz48 from '../components/AssignmentFill0Wght700Grad0Opsz48'
import IconAssignmentFill1Wght100Grad0Opsz48 from '../components/AssignmentFill1Wght100Grad0Opsz48'
import IconAssignmentFill1Wght200Grad0Opsz48 from '../components/AssignmentFill1Wght200Grad0Opsz48'
import IconAssignmentFill1Wght300Grad0Opsz48 from '../components/AssignmentFill1Wght300Grad0Opsz48'
import IconAssignmentFill1Wght400Grad0Opsz48 from '../components/AssignmentFill1Wght400Grad0Opsz48'
import IconAssignmentFill1Wght500Grad0Opsz48 from '../components/AssignmentFill1Wght500Grad0Opsz48'
import IconAssignmentFill1Wght600Grad0Opsz48 from '../components/AssignmentFill1Wght600Grad0Opsz48'
import IconAssignmentFill1Wght700Grad0Opsz48 from '../components/AssignmentFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAssignment = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAssignmentFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAssignmentFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAssignmentFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAssignmentFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAssignmentFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAssignmentFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAssignmentFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAssignmentFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAssignmentFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAssignmentFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAssignmentFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAssignmentFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAssignmentFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAssignmentFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
