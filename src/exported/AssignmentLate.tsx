import IconAssignmentLateFill0Wght100Grad0Opsz48 from '../components/AssignmentLateFill0Wght100Grad0Opsz48'
import IconAssignmentLateFill0Wght200Grad0Opsz48 from '../components/AssignmentLateFill0Wght200Grad0Opsz48'
import IconAssignmentLateFill0Wght300Grad0Opsz48 from '../components/AssignmentLateFill0Wght300Grad0Opsz48'
import IconAssignmentLateFill0Wght400Grad0Opsz48 from '../components/AssignmentLateFill0Wght400Grad0Opsz48'
import IconAssignmentLateFill0Wght500Grad0Opsz48 from '../components/AssignmentLateFill0Wght500Grad0Opsz48'
import IconAssignmentLateFill0Wght600Grad0Opsz48 from '../components/AssignmentLateFill0Wght600Grad0Opsz48'
import IconAssignmentLateFill0Wght700Grad0Opsz48 from '../components/AssignmentLateFill0Wght700Grad0Opsz48'
import IconAssignmentLateFill1Wght100Grad0Opsz48 from '../components/AssignmentLateFill1Wght100Grad0Opsz48'
import IconAssignmentLateFill1Wght200Grad0Opsz48 from '../components/AssignmentLateFill1Wght200Grad0Opsz48'
import IconAssignmentLateFill1Wght300Grad0Opsz48 from '../components/AssignmentLateFill1Wght300Grad0Opsz48'
import IconAssignmentLateFill1Wght400Grad0Opsz48 from '../components/AssignmentLateFill1Wght400Grad0Opsz48'
import IconAssignmentLateFill1Wght500Grad0Opsz48 from '../components/AssignmentLateFill1Wght500Grad0Opsz48'
import IconAssignmentLateFill1Wght600Grad0Opsz48 from '../components/AssignmentLateFill1Wght600Grad0Opsz48'
import IconAssignmentLateFill1Wght700Grad0Opsz48 from '../components/AssignmentLateFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAssignmentLate = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAssignmentLateFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAssignmentLateFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAssignmentLateFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAssignmentLateFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAssignmentLateFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAssignmentLateFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAssignmentLateFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAssignmentLateFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAssignmentLateFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAssignmentLateFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAssignmentLateFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAssignmentLateFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAssignmentLateFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAssignmentLateFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
