import IconAssignmentIndFill0Wght100Grad0Opsz48 from '../components/AssignmentIndFill0Wght100Grad0Opsz48'
import IconAssignmentIndFill0Wght200Grad0Opsz48 from '../components/AssignmentIndFill0Wght200Grad0Opsz48'
import IconAssignmentIndFill0Wght300Grad0Opsz48 from '../components/AssignmentIndFill0Wght300Grad0Opsz48'
import IconAssignmentIndFill0Wght400Grad0Opsz48 from '../components/AssignmentIndFill0Wght400Grad0Opsz48'
import IconAssignmentIndFill0Wght500Grad0Opsz48 from '../components/AssignmentIndFill0Wght500Grad0Opsz48'
import IconAssignmentIndFill0Wght600Grad0Opsz48 from '../components/AssignmentIndFill0Wght600Grad0Opsz48'
import IconAssignmentIndFill0Wght700Grad0Opsz48 from '../components/AssignmentIndFill0Wght700Grad0Opsz48'
import IconAssignmentIndFill1Wght100Grad0Opsz48 from '../components/AssignmentIndFill1Wght100Grad0Opsz48'
import IconAssignmentIndFill1Wght200Grad0Opsz48 from '../components/AssignmentIndFill1Wght200Grad0Opsz48'
import IconAssignmentIndFill1Wght300Grad0Opsz48 from '../components/AssignmentIndFill1Wght300Grad0Opsz48'
import IconAssignmentIndFill1Wght400Grad0Opsz48 from '../components/AssignmentIndFill1Wght400Grad0Opsz48'
import IconAssignmentIndFill1Wght500Grad0Opsz48 from '../components/AssignmentIndFill1Wght500Grad0Opsz48'
import IconAssignmentIndFill1Wght600Grad0Opsz48 from '../components/AssignmentIndFill1Wght600Grad0Opsz48'
import IconAssignmentIndFill1Wght700Grad0Opsz48 from '../components/AssignmentIndFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAssignmentInd = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAssignmentIndFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAssignmentIndFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAssignmentIndFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAssignmentIndFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAssignmentIndFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAssignmentIndFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAssignmentIndFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAssignmentIndFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAssignmentIndFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAssignmentIndFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAssignmentIndFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAssignmentIndFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAssignmentIndFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAssignmentIndFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
