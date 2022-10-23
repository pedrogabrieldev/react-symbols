import IconApprovalFill0Wght100Grad0Opsz48 from '../components/ApprovalFill0Wght100Grad0Opsz48'
import IconApprovalFill0Wght200Grad0Opsz48 from '../components/ApprovalFill0Wght200Grad0Opsz48'
import IconApprovalFill0Wght300Grad0Opsz48 from '../components/ApprovalFill0Wght300Grad0Opsz48'
import IconApprovalFill0Wght400Grad0Opsz48 from '../components/ApprovalFill0Wght400Grad0Opsz48'
import IconApprovalFill0Wght500Grad0Opsz48 from '../components/ApprovalFill0Wght500Grad0Opsz48'
import IconApprovalFill0Wght600Grad0Opsz48 from '../components/ApprovalFill0Wght600Grad0Opsz48'
import IconApprovalFill0Wght700Grad0Opsz48 from '../components/ApprovalFill0Wght700Grad0Opsz48'
import IconApprovalFill1Wght100Grad0Opsz48 from '../components/ApprovalFill1Wght100Grad0Opsz48'
import IconApprovalFill1Wght200Grad0Opsz48 from '../components/ApprovalFill1Wght200Grad0Opsz48'
import IconApprovalFill1Wght300Grad0Opsz48 from '../components/ApprovalFill1Wght300Grad0Opsz48'
import IconApprovalFill1Wght400Grad0Opsz48 from '../components/ApprovalFill1Wght400Grad0Opsz48'
import IconApprovalFill1Wght500Grad0Opsz48 from '../components/ApprovalFill1Wght500Grad0Opsz48'
import IconApprovalFill1Wght600Grad0Opsz48 from '../components/ApprovalFill1Wght600Grad0Opsz48'
import IconApprovalFill1Wght700Grad0Opsz48 from '../components/ApprovalFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconApproval = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconApprovalFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconApprovalFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconApprovalFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconApprovalFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconApprovalFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconApprovalFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconApprovalFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconApprovalFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconApprovalFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconApprovalFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconApprovalFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconApprovalFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconApprovalFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconApprovalFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
