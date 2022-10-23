import IconManageSearchFill0Wght100Grad0Opsz48 from '../components/ManageSearchFill0Wght100Grad0Opsz48'
import IconManageSearchFill0Wght200Grad0Opsz48 from '../components/ManageSearchFill0Wght200Grad0Opsz48'
import IconManageSearchFill0Wght300Grad0Opsz48 from '../components/ManageSearchFill0Wght300Grad0Opsz48'
import IconManageSearchFill0Wght400Grad0Opsz48 from '../components/ManageSearchFill0Wght400Grad0Opsz48'
import IconManageSearchFill0Wght500Grad0Opsz48 from '../components/ManageSearchFill0Wght500Grad0Opsz48'
import IconManageSearchFill0Wght600Grad0Opsz48 from '../components/ManageSearchFill0Wght600Grad0Opsz48'
import IconManageSearchFill0Wght700Grad0Opsz48 from '../components/ManageSearchFill0Wght700Grad0Opsz48'
import IconManageSearchFill1Wght100Grad0Opsz48 from '../components/ManageSearchFill1Wght100Grad0Opsz48'
import IconManageSearchFill1Wght200Grad0Opsz48 from '../components/ManageSearchFill1Wght200Grad0Opsz48'
import IconManageSearchFill1Wght300Grad0Opsz48 from '../components/ManageSearchFill1Wght300Grad0Opsz48'
import IconManageSearchFill1Wght400Grad0Opsz48 from '../components/ManageSearchFill1Wght400Grad0Opsz48'
import IconManageSearchFill1Wght500Grad0Opsz48 from '../components/ManageSearchFill1Wght500Grad0Opsz48'
import IconManageSearchFill1Wght600Grad0Opsz48 from '../components/ManageSearchFill1Wght600Grad0Opsz48'
import IconManageSearchFill1Wght700Grad0Opsz48 from '../components/ManageSearchFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconManageSearch = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconManageSearchFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconManageSearchFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconManageSearchFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconManageSearchFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconManageSearchFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconManageSearchFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconManageSearchFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconManageSearchFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconManageSearchFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconManageSearchFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconManageSearchFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconManageSearchFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconManageSearchFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconManageSearchFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
