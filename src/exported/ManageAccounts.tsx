import IconManageAccountsFill0Wght100Grad0Opsz48 from '../components/ManageAccountsFill0Wght100Grad0Opsz48'
import IconManageAccountsFill0Wght200Grad0Opsz48 from '../components/ManageAccountsFill0Wght200Grad0Opsz48'
import IconManageAccountsFill0Wght300Grad0Opsz48 from '../components/ManageAccountsFill0Wght300Grad0Opsz48'
import IconManageAccountsFill0Wght400Grad0Opsz48 from '../components/ManageAccountsFill0Wght400Grad0Opsz48'
import IconManageAccountsFill0Wght500Grad0Opsz48 from '../components/ManageAccountsFill0Wght500Grad0Opsz48'
import IconManageAccountsFill0Wght600Grad0Opsz48 from '../components/ManageAccountsFill0Wght600Grad0Opsz48'
import IconManageAccountsFill0Wght700Grad0Opsz48 from '../components/ManageAccountsFill0Wght700Grad0Opsz48'
import IconManageAccountsFill1Wght100Grad0Opsz48 from '../components/ManageAccountsFill1Wght100Grad0Opsz48'
import IconManageAccountsFill1Wght200Grad0Opsz48 from '../components/ManageAccountsFill1Wght200Grad0Opsz48'
import IconManageAccountsFill1Wght300Grad0Opsz48 from '../components/ManageAccountsFill1Wght300Grad0Opsz48'
import IconManageAccountsFill1Wght400Grad0Opsz48 from '../components/ManageAccountsFill1Wght400Grad0Opsz48'
import IconManageAccountsFill1Wght500Grad0Opsz48 from '../components/ManageAccountsFill1Wght500Grad0Opsz48'
import IconManageAccountsFill1Wght600Grad0Opsz48 from '../components/ManageAccountsFill1Wght600Grad0Opsz48'
import IconManageAccountsFill1Wght700Grad0Opsz48 from '../components/ManageAccountsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconManageAccounts = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconManageAccountsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconManageAccountsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconManageAccountsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconManageAccountsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconManageAccountsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconManageAccountsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconManageAccountsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconManageAccountsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconManageAccountsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconManageAccountsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconManageAccountsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconManageAccountsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconManageAccountsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconManageAccountsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
