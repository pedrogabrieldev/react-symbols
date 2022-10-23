import IconTeamDashboardFill0Wght100Grad0Opsz48 from '../components/TeamDashboardFill0Wght100Grad0Opsz48'
import IconTeamDashboardFill0Wght200Grad0Opsz48 from '../components/TeamDashboardFill0Wght200Grad0Opsz48'
import IconTeamDashboardFill0Wght300Grad0Opsz48 from '../components/TeamDashboardFill0Wght300Grad0Opsz48'
import IconTeamDashboardFill0Wght400Grad0Opsz48 from '../components/TeamDashboardFill0Wght400Grad0Opsz48'
import IconTeamDashboardFill0Wght500Grad0Opsz48 from '../components/TeamDashboardFill0Wght500Grad0Opsz48'
import IconTeamDashboardFill0Wght600Grad0Opsz48 from '../components/TeamDashboardFill0Wght600Grad0Opsz48'
import IconTeamDashboardFill0Wght700Grad0Opsz48 from '../components/TeamDashboardFill0Wght700Grad0Opsz48'
import IconTeamDashboardFill1Wght100Grad0Opsz48 from '../components/TeamDashboardFill1Wght100Grad0Opsz48'
import IconTeamDashboardFill1Wght200Grad0Opsz48 from '../components/TeamDashboardFill1Wght200Grad0Opsz48'
import IconTeamDashboardFill1Wght300Grad0Opsz48 from '../components/TeamDashboardFill1Wght300Grad0Opsz48'
import IconTeamDashboardFill1Wght400Grad0Opsz48 from '../components/TeamDashboardFill1Wght400Grad0Opsz48'
import IconTeamDashboardFill1Wght500Grad0Opsz48 from '../components/TeamDashboardFill1Wght500Grad0Opsz48'
import IconTeamDashboardFill1Wght600Grad0Opsz48 from '../components/TeamDashboardFill1Wght600Grad0Opsz48'
import IconTeamDashboardFill1Wght700Grad0Opsz48 from '../components/TeamDashboardFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTeamDashboard = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTeamDashboardFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTeamDashboardFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTeamDashboardFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTeamDashboardFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTeamDashboardFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTeamDashboardFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTeamDashboardFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTeamDashboardFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTeamDashboardFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTeamDashboardFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTeamDashboardFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTeamDashboardFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTeamDashboardFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTeamDashboardFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
