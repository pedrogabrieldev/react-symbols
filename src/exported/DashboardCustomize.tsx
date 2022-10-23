import IconDashboardCustomizeFill0Wght100Grad0Opsz48 from '../components/DashboardCustomizeFill0Wght100Grad0Opsz48'
import IconDashboardCustomizeFill0Wght200Grad0Opsz48 from '../components/DashboardCustomizeFill0Wght200Grad0Opsz48'
import IconDashboardCustomizeFill0Wght300Grad0Opsz48 from '../components/DashboardCustomizeFill0Wght300Grad0Opsz48'
import IconDashboardCustomizeFill0Wght400Grad0Opsz48 from '../components/DashboardCustomizeFill0Wght400Grad0Opsz48'
import IconDashboardCustomizeFill0Wght500Grad0Opsz48 from '../components/DashboardCustomizeFill0Wght500Grad0Opsz48'
import IconDashboardCustomizeFill0Wght600Grad0Opsz48 from '../components/DashboardCustomizeFill0Wght600Grad0Opsz48'
import IconDashboardCustomizeFill0Wght700Grad0Opsz48 from '../components/DashboardCustomizeFill0Wght700Grad0Opsz48'
import IconDashboardCustomizeFill1Wght100Grad0Opsz48 from '../components/DashboardCustomizeFill1Wght100Grad0Opsz48'
import IconDashboardCustomizeFill1Wght200Grad0Opsz48 from '../components/DashboardCustomizeFill1Wght200Grad0Opsz48'
import IconDashboardCustomizeFill1Wght300Grad0Opsz48 from '../components/DashboardCustomizeFill1Wght300Grad0Opsz48'
import IconDashboardCustomizeFill1Wght400Grad0Opsz48 from '../components/DashboardCustomizeFill1Wght400Grad0Opsz48'
import IconDashboardCustomizeFill1Wght500Grad0Opsz48 from '../components/DashboardCustomizeFill1Wght500Grad0Opsz48'
import IconDashboardCustomizeFill1Wght600Grad0Opsz48 from '../components/DashboardCustomizeFill1Wght600Grad0Opsz48'
import IconDashboardCustomizeFill1Wght700Grad0Opsz48 from '../components/DashboardCustomizeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDashboardCustomize = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDashboardCustomizeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDashboardCustomizeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDashboardCustomizeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDashboardCustomizeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDashboardCustomizeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDashboardCustomizeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDashboardCustomizeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDashboardCustomizeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDashboardCustomizeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDashboardCustomizeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDashboardCustomizeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDashboardCustomizeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDashboardCustomizeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDashboardCustomizeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
