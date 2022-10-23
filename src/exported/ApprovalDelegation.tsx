import IconApprovalDelegationFill0Wght100Grad0Opsz48 from '../components/ApprovalDelegationFill0Wght100Grad0Opsz48'
import IconApprovalDelegationFill0Wght200Grad0Opsz48 from '../components/ApprovalDelegationFill0Wght200Grad0Opsz48'
import IconApprovalDelegationFill0Wght300Grad0Opsz48 from '../components/ApprovalDelegationFill0Wght300Grad0Opsz48'
import IconApprovalDelegationFill0Wght400Grad0Opsz48 from '../components/ApprovalDelegationFill0Wght400Grad0Opsz48'
import IconApprovalDelegationFill0Wght500Grad0Opsz48 from '../components/ApprovalDelegationFill0Wght500Grad0Opsz48'
import IconApprovalDelegationFill0Wght600Grad0Opsz48 from '../components/ApprovalDelegationFill0Wght600Grad0Opsz48'
import IconApprovalDelegationFill0Wght700Grad0Opsz48 from '../components/ApprovalDelegationFill0Wght700Grad0Opsz48'
import IconApprovalDelegationFill1Wght100Grad0Opsz48 from '../components/ApprovalDelegationFill1Wght100Grad0Opsz48'
import IconApprovalDelegationFill1Wght200Grad0Opsz48 from '../components/ApprovalDelegationFill1Wght200Grad0Opsz48'
import IconApprovalDelegationFill1Wght300Grad0Opsz48 from '../components/ApprovalDelegationFill1Wght300Grad0Opsz48'
import IconApprovalDelegationFill1Wght400Grad0Opsz48 from '../components/ApprovalDelegationFill1Wght400Grad0Opsz48'
import IconApprovalDelegationFill1Wght500Grad0Opsz48 from '../components/ApprovalDelegationFill1Wght500Grad0Opsz48'
import IconApprovalDelegationFill1Wght600Grad0Opsz48 from '../components/ApprovalDelegationFill1Wght600Grad0Opsz48'
import IconApprovalDelegationFill1Wght700Grad0Opsz48 from '../components/ApprovalDelegationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconApprovalDelegation = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconApprovalDelegationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconApprovalDelegationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconApprovalDelegationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconApprovalDelegationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconApprovalDelegationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconApprovalDelegationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconApprovalDelegationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconApprovalDelegationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconApprovalDelegationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconApprovalDelegationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconApprovalDelegationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconApprovalDelegationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconApprovalDelegationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconApprovalDelegationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
