import IconManageHistoryFill0Wght100Grad0Opsz48 from '../components/ManageHistoryFill0Wght100Grad0Opsz48'
import IconManageHistoryFill0Wght200Grad0Opsz48 from '../components/ManageHistoryFill0Wght200Grad0Opsz48'
import IconManageHistoryFill0Wght300Grad0Opsz48 from '../components/ManageHistoryFill0Wght300Grad0Opsz48'
import IconManageHistoryFill0Wght400Grad0Opsz48 from '../components/ManageHistoryFill0Wght400Grad0Opsz48'
import IconManageHistoryFill0Wght500Grad0Opsz48 from '../components/ManageHistoryFill0Wght500Grad0Opsz48'
import IconManageHistoryFill0Wght600Grad0Opsz48 from '../components/ManageHistoryFill0Wght600Grad0Opsz48'
import IconManageHistoryFill0Wght700Grad0Opsz48 from '../components/ManageHistoryFill0Wght700Grad0Opsz48'
import IconManageHistoryFill1Wght100Grad0Opsz48 from '../components/ManageHistoryFill1Wght100Grad0Opsz48'
import IconManageHistoryFill1Wght200Grad0Opsz48 from '../components/ManageHistoryFill1Wght200Grad0Opsz48'
import IconManageHistoryFill1Wght300Grad0Opsz48 from '../components/ManageHistoryFill1Wght300Grad0Opsz48'
import IconManageHistoryFill1Wght400Grad0Opsz48 from '../components/ManageHistoryFill1Wght400Grad0Opsz48'
import IconManageHistoryFill1Wght500Grad0Opsz48 from '../components/ManageHistoryFill1Wght500Grad0Opsz48'
import IconManageHistoryFill1Wght600Grad0Opsz48 from '../components/ManageHistoryFill1Wght600Grad0Opsz48'
import IconManageHistoryFill1Wght700Grad0Opsz48 from '../components/ManageHistoryFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconManageHistory = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconManageHistoryFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconManageHistoryFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconManageHistoryFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconManageHistoryFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconManageHistoryFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconManageHistoryFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconManageHistoryFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconManageHistoryFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconManageHistoryFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconManageHistoryFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconManageHistoryFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconManageHistoryFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconManageHistoryFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconManageHistoryFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
