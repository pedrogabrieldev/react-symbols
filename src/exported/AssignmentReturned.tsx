import IconAssignmentReturnedFill0Wght100Grad0Opsz48 from '../components/AssignmentReturnedFill0Wght100Grad0Opsz48'
import IconAssignmentReturnedFill0Wght200Grad0Opsz48 from '../components/AssignmentReturnedFill0Wght200Grad0Opsz48'
import IconAssignmentReturnedFill0Wght300Grad0Opsz48 from '../components/AssignmentReturnedFill0Wght300Grad0Opsz48'
import IconAssignmentReturnedFill0Wght400Grad0Opsz48 from '../components/AssignmentReturnedFill0Wght400Grad0Opsz48'
import IconAssignmentReturnedFill0Wght500Grad0Opsz48 from '../components/AssignmentReturnedFill0Wght500Grad0Opsz48'
import IconAssignmentReturnedFill0Wght600Grad0Opsz48 from '../components/AssignmentReturnedFill0Wght600Grad0Opsz48'
import IconAssignmentReturnedFill0Wght700Grad0Opsz48 from '../components/AssignmentReturnedFill0Wght700Grad0Opsz48'
import IconAssignmentReturnedFill1Wght100Grad0Opsz48 from '../components/AssignmentReturnedFill1Wght100Grad0Opsz48'
import IconAssignmentReturnedFill1Wght200Grad0Opsz48 from '../components/AssignmentReturnedFill1Wght200Grad0Opsz48'
import IconAssignmentReturnedFill1Wght300Grad0Opsz48 from '../components/AssignmentReturnedFill1Wght300Grad0Opsz48'
import IconAssignmentReturnedFill1Wght400Grad0Opsz48 from '../components/AssignmentReturnedFill1Wght400Grad0Opsz48'
import IconAssignmentReturnedFill1Wght500Grad0Opsz48 from '../components/AssignmentReturnedFill1Wght500Grad0Opsz48'
import IconAssignmentReturnedFill1Wght600Grad0Opsz48 from '../components/AssignmentReturnedFill1Wght600Grad0Opsz48'
import IconAssignmentReturnedFill1Wght700Grad0Opsz48 from '../components/AssignmentReturnedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAssignmentReturned = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAssignmentReturnedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAssignmentReturnedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAssignmentReturnedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAssignmentReturnedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAssignmentReturnedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAssignmentReturnedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAssignmentReturnedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAssignmentReturnedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAssignmentReturnedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAssignmentReturnedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAssignmentReturnedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAssignmentReturnedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAssignmentReturnedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAssignmentReturnedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
