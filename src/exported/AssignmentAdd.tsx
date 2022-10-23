import IconAssignmentAddFill0Wght100Grad0Opsz48 from '../components/AssignmentAddFill0Wght100Grad0Opsz48'
import IconAssignmentAddFill0Wght200Grad0Opsz48 from '../components/AssignmentAddFill0Wght200Grad0Opsz48'
import IconAssignmentAddFill0Wght300Grad0Opsz48 from '../components/AssignmentAddFill0Wght300Grad0Opsz48'
import IconAssignmentAddFill0Wght400Grad0Opsz48 from '../components/AssignmentAddFill0Wght400Grad0Opsz48'
import IconAssignmentAddFill0Wght500Grad0Opsz48 from '../components/AssignmentAddFill0Wght500Grad0Opsz48'
import IconAssignmentAddFill0Wght600Grad0Opsz48 from '../components/AssignmentAddFill0Wght600Grad0Opsz48'
import IconAssignmentAddFill0Wght700Grad0Opsz48 from '../components/AssignmentAddFill0Wght700Grad0Opsz48'
import IconAssignmentAddFill1Wght100Grad0Opsz48 from '../components/AssignmentAddFill1Wght100Grad0Opsz48'
import IconAssignmentAddFill1Wght200Grad0Opsz48 from '../components/AssignmentAddFill1Wght200Grad0Opsz48'
import IconAssignmentAddFill1Wght300Grad0Opsz48 from '../components/AssignmentAddFill1Wght300Grad0Opsz48'
import IconAssignmentAddFill1Wght400Grad0Opsz48 from '../components/AssignmentAddFill1Wght400Grad0Opsz48'
import IconAssignmentAddFill1Wght500Grad0Opsz48 from '../components/AssignmentAddFill1Wght500Grad0Opsz48'
import IconAssignmentAddFill1Wght600Grad0Opsz48 from '../components/AssignmentAddFill1Wght600Grad0Opsz48'
import IconAssignmentAddFill1Wght700Grad0Opsz48 from '../components/AssignmentAddFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAssignmentAdd = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAssignmentAddFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAssignmentAddFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAssignmentAddFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAssignmentAddFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAssignmentAddFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAssignmentAddFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAssignmentAddFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAssignmentAddFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAssignmentAddFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAssignmentAddFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAssignmentAddFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAssignmentAddFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAssignmentAddFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAssignmentAddFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
