import IconViewSidebarFill0Wght100Grad0Opsz48 from '../components/ViewSidebarFill0Wght100Grad0Opsz48'
import IconViewSidebarFill0Wght200Grad0Opsz48 from '../components/ViewSidebarFill0Wght200Grad0Opsz48'
import IconViewSidebarFill0Wght300Grad0Opsz48 from '../components/ViewSidebarFill0Wght300Grad0Opsz48'
import IconViewSidebarFill0Wght400Grad0Opsz48 from '../components/ViewSidebarFill0Wght400Grad0Opsz48'
import IconViewSidebarFill0Wght500Grad0Opsz48 from '../components/ViewSidebarFill0Wght500Grad0Opsz48'
import IconViewSidebarFill0Wght600Grad0Opsz48 from '../components/ViewSidebarFill0Wght600Grad0Opsz48'
import IconViewSidebarFill0Wght700Grad0Opsz48 from '../components/ViewSidebarFill0Wght700Grad0Opsz48'
import IconViewSidebarFill1Wght100Grad0Opsz48 from '../components/ViewSidebarFill1Wght100Grad0Opsz48'
import IconViewSidebarFill1Wght200Grad0Opsz48 from '../components/ViewSidebarFill1Wght200Grad0Opsz48'
import IconViewSidebarFill1Wght300Grad0Opsz48 from '../components/ViewSidebarFill1Wght300Grad0Opsz48'
import IconViewSidebarFill1Wght400Grad0Opsz48 from '../components/ViewSidebarFill1Wght400Grad0Opsz48'
import IconViewSidebarFill1Wght500Grad0Opsz48 from '../components/ViewSidebarFill1Wght500Grad0Opsz48'
import IconViewSidebarFill1Wght600Grad0Opsz48 from '../components/ViewSidebarFill1Wght600Grad0Opsz48'
import IconViewSidebarFill1Wght700Grad0Opsz48 from '../components/ViewSidebarFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconViewSidebar = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconViewSidebarFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconViewSidebarFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconViewSidebarFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconViewSidebarFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconViewSidebarFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconViewSidebarFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconViewSidebarFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconViewSidebarFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconViewSidebarFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconViewSidebarFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconViewSidebarFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconViewSidebarFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconViewSidebarFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconViewSidebarFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
