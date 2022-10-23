import IconDashboardFill0Wght100Grad0Opsz48 from '../components/DashboardFill0Wght100Grad0Opsz48'
import IconDashboardFill0Wght200Grad0Opsz48 from '../components/DashboardFill0Wght200Grad0Opsz48'
import IconDashboardFill0Wght300Grad0Opsz48 from '../components/DashboardFill0Wght300Grad0Opsz48'
import IconDashboardFill0Wght400Grad0Opsz48 from '../components/DashboardFill0Wght400Grad0Opsz48'
import IconDashboardFill0Wght500Grad0Opsz48 from '../components/DashboardFill0Wght500Grad0Opsz48'
import IconDashboardFill0Wght600Grad0Opsz48 from '../components/DashboardFill0Wght600Grad0Opsz48'
import IconDashboardFill0Wght700Grad0Opsz48 from '../components/DashboardFill0Wght700Grad0Opsz48'
import IconDashboardFill1Wght100Grad0Opsz48 from '../components/DashboardFill1Wght100Grad0Opsz48'
import IconDashboardFill1Wght200Grad0Opsz48 from '../components/DashboardFill1Wght200Grad0Opsz48'
import IconDashboardFill1Wght300Grad0Opsz48 from '../components/DashboardFill1Wght300Grad0Opsz48'
import IconDashboardFill1Wght400Grad0Opsz48 from '../components/DashboardFill1Wght400Grad0Opsz48'
import IconDashboardFill1Wght500Grad0Opsz48 from '../components/DashboardFill1Wght500Grad0Opsz48'
import IconDashboardFill1Wght600Grad0Opsz48 from '../components/DashboardFill1Wght600Grad0Opsz48'
import IconDashboardFill1Wght700Grad0Opsz48 from '../components/DashboardFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDashboard = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDashboardFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDashboardFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDashboardFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDashboardFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDashboardFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDashboardFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDashboardFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDashboardFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDashboardFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDashboardFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDashboardFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDashboardFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDashboardFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDashboardFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
