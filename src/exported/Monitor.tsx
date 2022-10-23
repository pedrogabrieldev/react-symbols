import IconMonitorFill0Wght100Grad0Opsz48 from '../components/MonitorFill0Wght100Grad0Opsz48'
import IconMonitorFill0Wght200Grad0Opsz48 from '../components/MonitorFill0Wght200Grad0Opsz48'
import IconMonitorFill0Wght300Grad0Opsz48 from '../components/MonitorFill0Wght300Grad0Opsz48'
import IconMonitorFill0Wght400Grad0Opsz48 from '../components/MonitorFill0Wght400Grad0Opsz48'
import IconMonitorFill0Wght500Grad0Opsz48 from '../components/MonitorFill0Wght500Grad0Opsz48'
import IconMonitorFill0Wght600Grad0Opsz48 from '../components/MonitorFill0Wght600Grad0Opsz48'
import IconMonitorFill0Wght700Grad0Opsz48 from '../components/MonitorFill0Wght700Grad0Opsz48'
import IconMonitorFill1Wght100Grad0Opsz48 from '../components/MonitorFill1Wght100Grad0Opsz48'
import IconMonitorFill1Wght200Grad0Opsz48 from '../components/MonitorFill1Wght200Grad0Opsz48'
import IconMonitorFill1Wght300Grad0Opsz48 from '../components/MonitorFill1Wght300Grad0Opsz48'
import IconMonitorFill1Wght400Grad0Opsz48 from '../components/MonitorFill1Wght400Grad0Opsz48'
import IconMonitorFill1Wght500Grad0Opsz48 from '../components/MonitorFill1Wght500Grad0Opsz48'
import IconMonitorFill1Wght600Grad0Opsz48 from '../components/MonitorFill1Wght600Grad0Opsz48'
import IconMonitorFill1Wght700Grad0Opsz48 from '../components/MonitorFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMonitor = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMonitorFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMonitorFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMonitorFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMonitorFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMonitorFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMonitorFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMonitorFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMonitorFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMonitorFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMonitorFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMonitorFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMonitorFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMonitorFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMonitorFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
