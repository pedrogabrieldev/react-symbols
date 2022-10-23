import IconMonitorHeartFill0Wght100Grad0Opsz48 from '../components/MonitorHeartFill0Wght100Grad0Opsz48'
import IconMonitorHeartFill0Wght200Grad0Opsz48 from '../components/MonitorHeartFill0Wght200Grad0Opsz48'
import IconMonitorHeartFill0Wght300Grad0Opsz48 from '../components/MonitorHeartFill0Wght300Grad0Opsz48'
import IconMonitorHeartFill0Wght400Grad0Opsz48 from '../components/MonitorHeartFill0Wght400Grad0Opsz48'
import IconMonitorHeartFill0Wght500Grad0Opsz48 from '../components/MonitorHeartFill0Wght500Grad0Opsz48'
import IconMonitorHeartFill0Wght600Grad0Opsz48 from '../components/MonitorHeartFill0Wght600Grad0Opsz48'
import IconMonitorHeartFill0Wght700Grad0Opsz48 from '../components/MonitorHeartFill0Wght700Grad0Opsz48'
import IconMonitorHeartFill1Wght100Grad0Opsz48 from '../components/MonitorHeartFill1Wght100Grad0Opsz48'
import IconMonitorHeartFill1Wght200Grad0Opsz48 from '../components/MonitorHeartFill1Wght200Grad0Opsz48'
import IconMonitorHeartFill1Wght300Grad0Opsz48 from '../components/MonitorHeartFill1Wght300Grad0Opsz48'
import IconMonitorHeartFill1Wght400Grad0Opsz48 from '../components/MonitorHeartFill1Wght400Grad0Opsz48'
import IconMonitorHeartFill1Wght500Grad0Opsz48 from '../components/MonitorHeartFill1Wght500Grad0Opsz48'
import IconMonitorHeartFill1Wght600Grad0Opsz48 from '../components/MonitorHeartFill1Wght600Grad0Opsz48'
import IconMonitorHeartFill1Wght700Grad0Opsz48 from '../components/MonitorHeartFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMonitorHeart = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMonitorHeartFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMonitorHeartFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMonitorHeartFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMonitorHeartFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMonitorHeartFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMonitorHeartFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMonitorHeartFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMonitorHeartFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMonitorHeartFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMonitorHeartFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMonitorHeartFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMonitorHeartFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMonitorHeartFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMonitorHeartFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
