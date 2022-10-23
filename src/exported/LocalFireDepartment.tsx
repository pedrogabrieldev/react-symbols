import IconLocalFireDepartmentFill0Wght100Grad0Opsz48 from '../components/LocalFireDepartmentFill0Wght100Grad0Opsz48'
import IconLocalFireDepartmentFill0Wght200Grad0Opsz48 from '../components/LocalFireDepartmentFill0Wght200Grad0Opsz48'
import IconLocalFireDepartmentFill0Wght300Grad0Opsz48 from '../components/LocalFireDepartmentFill0Wght300Grad0Opsz48'
import IconLocalFireDepartmentFill0Wght400Grad0Opsz48 from '../components/LocalFireDepartmentFill0Wght400Grad0Opsz48'
import IconLocalFireDepartmentFill0Wght500Grad0Opsz48 from '../components/LocalFireDepartmentFill0Wght500Grad0Opsz48'
import IconLocalFireDepartmentFill0Wght600Grad0Opsz48 from '../components/LocalFireDepartmentFill0Wght600Grad0Opsz48'
import IconLocalFireDepartmentFill0Wght700Grad0Opsz48 from '../components/LocalFireDepartmentFill0Wght700Grad0Opsz48'
import IconLocalFireDepartmentFill1Wght100Grad0Opsz48 from '../components/LocalFireDepartmentFill1Wght100Grad0Opsz48'
import IconLocalFireDepartmentFill1Wght200Grad0Opsz48 from '../components/LocalFireDepartmentFill1Wght200Grad0Opsz48'
import IconLocalFireDepartmentFill1Wght300Grad0Opsz48 from '../components/LocalFireDepartmentFill1Wght300Grad0Opsz48'
import IconLocalFireDepartmentFill1Wght400Grad0Opsz48 from '../components/LocalFireDepartmentFill1Wght400Grad0Opsz48'
import IconLocalFireDepartmentFill1Wght500Grad0Opsz48 from '../components/LocalFireDepartmentFill1Wght500Grad0Opsz48'
import IconLocalFireDepartmentFill1Wght600Grad0Opsz48 from '../components/LocalFireDepartmentFill1Wght600Grad0Opsz48'
import IconLocalFireDepartmentFill1Wght700Grad0Opsz48 from '../components/LocalFireDepartmentFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLocalFireDepartment = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLocalFireDepartmentFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLocalFireDepartmentFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLocalFireDepartmentFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLocalFireDepartmentFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLocalFireDepartmentFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLocalFireDepartmentFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLocalFireDepartmentFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLocalFireDepartmentFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLocalFireDepartmentFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLocalFireDepartmentFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLocalFireDepartmentFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLocalFireDepartmentFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLocalFireDepartmentFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLocalFireDepartmentFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
