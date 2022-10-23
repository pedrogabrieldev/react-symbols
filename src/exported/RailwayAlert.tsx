import IconRailwayAlertFill0Wght100Grad0Opsz48 from '../components/RailwayAlertFill0Wght100Grad0Opsz48'
import IconRailwayAlertFill0Wght200Grad0Opsz48 from '../components/RailwayAlertFill0Wght200Grad0Opsz48'
import IconRailwayAlertFill0Wght300Grad0Opsz48 from '../components/RailwayAlertFill0Wght300Grad0Opsz48'
import IconRailwayAlertFill0Wght400Grad0Opsz48 from '../components/RailwayAlertFill0Wght400Grad0Opsz48'
import IconRailwayAlertFill0Wght500Grad0Opsz48 from '../components/RailwayAlertFill0Wght500Grad0Opsz48'
import IconRailwayAlertFill0Wght600Grad0Opsz48 from '../components/RailwayAlertFill0Wght600Grad0Opsz48'
import IconRailwayAlertFill0Wght700Grad0Opsz48 from '../components/RailwayAlertFill0Wght700Grad0Opsz48'
import IconRailwayAlertFill1Wght100Grad0Opsz48 from '../components/RailwayAlertFill1Wght100Grad0Opsz48'
import IconRailwayAlertFill1Wght200Grad0Opsz48 from '../components/RailwayAlertFill1Wght200Grad0Opsz48'
import IconRailwayAlertFill1Wght300Grad0Opsz48 from '../components/RailwayAlertFill1Wght300Grad0Opsz48'
import IconRailwayAlertFill1Wght400Grad0Opsz48 from '../components/RailwayAlertFill1Wght400Grad0Opsz48'
import IconRailwayAlertFill1Wght500Grad0Opsz48 from '../components/RailwayAlertFill1Wght500Grad0Opsz48'
import IconRailwayAlertFill1Wght600Grad0Opsz48 from '../components/RailwayAlertFill1Wght600Grad0Opsz48'
import IconRailwayAlertFill1Wght700Grad0Opsz48 from '../components/RailwayAlertFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRailwayAlert = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRailwayAlertFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRailwayAlertFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRailwayAlertFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRailwayAlertFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRailwayAlertFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRailwayAlertFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRailwayAlertFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRailwayAlertFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRailwayAlertFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRailwayAlertFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRailwayAlertFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRailwayAlertFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRailwayAlertFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRailwayAlertFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
