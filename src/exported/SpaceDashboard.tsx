import IconSpaceDashboardFill0Wght100Grad0Opsz48 from '../components/SpaceDashboardFill0Wght100Grad0Opsz48'
import IconSpaceDashboardFill0Wght200Grad0Opsz48 from '../components/SpaceDashboardFill0Wght200Grad0Opsz48'
import IconSpaceDashboardFill0Wght300Grad0Opsz48 from '../components/SpaceDashboardFill0Wght300Grad0Opsz48'
import IconSpaceDashboardFill0Wght400Grad0Opsz48 from '../components/SpaceDashboardFill0Wght400Grad0Opsz48'
import IconSpaceDashboardFill0Wght500Grad0Opsz48 from '../components/SpaceDashboardFill0Wght500Grad0Opsz48'
import IconSpaceDashboardFill0Wght600Grad0Opsz48 from '../components/SpaceDashboardFill0Wght600Grad0Opsz48'
import IconSpaceDashboardFill0Wght700Grad0Opsz48 from '../components/SpaceDashboardFill0Wght700Grad0Opsz48'
import IconSpaceDashboardFill1Wght100Grad0Opsz48 from '../components/SpaceDashboardFill1Wght100Grad0Opsz48'
import IconSpaceDashboardFill1Wght200Grad0Opsz48 from '../components/SpaceDashboardFill1Wght200Grad0Opsz48'
import IconSpaceDashboardFill1Wght300Grad0Opsz48 from '../components/SpaceDashboardFill1Wght300Grad0Opsz48'
import IconSpaceDashboardFill1Wght400Grad0Opsz48 from '../components/SpaceDashboardFill1Wght400Grad0Opsz48'
import IconSpaceDashboardFill1Wght500Grad0Opsz48 from '../components/SpaceDashboardFill1Wght500Grad0Opsz48'
import IconSpaceDashboardFill1Wght600Grad0Opsz48 from '../components/SpaceDashboardFill1Wght600Grad0Opsz48'
import IconSpaceDashboardFill1Wght700Grad0Opsz48 from '../components/SpaceDashboardFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSpaceDashboard = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSpaceDashboardFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSpaceDashboardFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSpaceDashboardFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSpaceDashboardFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSpaceDashboardFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSpaceDashboardFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSpaceDashboardFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSpaceDashboardFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSpaceDashboardFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSpaceDashboardFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSpaceDashboardFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSpaceDashboardFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSpaceDashboardFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSpaceDashboardFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
