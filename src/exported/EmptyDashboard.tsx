import IconEmptyDashboardFill0Wght100Grad0Opsz48 from '../components/EmptyDashboardFill0Wght100Grad0Opsz48'
import IconEmptyDashboardFill0Wght200Grad0Opsz48 from '../components/EmptyDashboardFill0Wght200Grad0Opsz48'
import IconEmptyDashboardFill0Wght300Grad0Opsz48 from '../components/EmptyDashboardFill0Wght300Grad0Opsz48'
import IconEmptyDashboardFill0Wght400Grad0Opsz48 from '../components/EmptyDashboardFill0Wght400Grad0Opsz48'
import IconEmptyDashboardFill0Wght500Grad0Opsz48 from '../components/EmptyDashboardFill0Wght500Grad0Opsz48'
import IconEmptyDashboardFill0Wght600Grad0Opsz48 from '../components/EmptyDashboardFill0Wght600Grad0Opsz48'
import IconEmptyDashboardFill0Wght700Grad0Opsz48 from '../components/EmptyDashboardFill0Wght700Grad0Opsz48'
import IconEmptyDashboardFill1Wght100Grad0Opsz48 from '../components/EmptyDashboardFill1Wght100Grad0Opsz48'
import IconEmptyDashboardFill1Wght200Grad0Opsz48 from '../components/EmptyDashboardFill1Wght200Grad0Opsz48'
import IconEmptyDashboardFill1Wght300Grad0Opsz48 from '../components/EmptyDashboardFill1Wght300Grad0Opsz48'
import IconEmptyDashboardFill1Wght400Grad0Opsz48 from '../components/EmptyDashboardFill1Wght400Grad0Opsz48'
import IconEmptyDashboardFill1Wght500Grad0Opsz48 from '../components/EmptyDashboardFill1Wght500Grad0Opsz48'
import IconEmptyDashboardFill1Wght600Grad0Opsz48 from '../components/EmptyDashboardFill1Wght600Grad0Opsz48'
import IconEmptyDashboardFill1Wght700Grad0Opsz48 from '../components/EmptyDashboardFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEmptyDashboard = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEmptyDashboardFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEmptyDashboardFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEmptyDashboardFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEmptyDashboardFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEmptyDashboardFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEmptyDashboardFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEmptyDashboardFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEmptyDashboardFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEmptyDashboardFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEmptyDashboardFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEmptyDashboardFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEmptyDashboardFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEmptyDashboardFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEmptyDashboardFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
