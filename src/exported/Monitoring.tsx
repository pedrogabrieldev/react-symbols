import IconMonitoringFill0Wght100Grad0Opsz48 from '../components/MonitoringFill0Wght100Grad0Opsz48'
import IconMonitoringFill0Wght200Grad0Opsz48 from '../components/MonitoringFill0Wght200Grad0Opsz48'
import IconMonitoringFill0Wght300Grad0Opsz48 from '../components/MonitoringFill0Wght300Grad0Opsz48'
import IconMonitoringFill0Wght400Grad0Opsz48 from '../components/MonitoringFill0Wght400Grad0Opsz48'
import IconMonitoringFill0Wght500Grad0Opsz48 from '../components/MonitoringFill0Wght500Grad0Opsz48'
import IconMonitoringFill0Wght600Grad0Opsz48 from '../components/MonitoringFill0Wght600Grad0Opsz48'
import IconMonitoringFill0Wght700Grad0Opsz48 from '../components/MonitoringFill0Wght700Grad0Opsz48'
import IconMonitoringFill1Wght100Grad0Opsz48 from '../components/MonitoringFill1Wght100Grad0Opsz48'
import IconMonitoringFill1Wght200Grad0Opsz48 from '../components/MonitoringFill1Wght200Grad0Opsz48'
import IconMonitoringFill1Wght300Grad0Opsz48 from '../components/MonitoringFill1Wght300Grad0Opsz48'
import IconMonitoringFill1Wght400Grad0Opsz48 from '../components/MonitoringFill1Wght400Grad0Opsz48'
import IconMonitoringFill1Wght500Grad0Opsz48 from '../components/MonitoringFill1Wght500Grad0Opsz48'
import IconMonitoringFill1Wght600Grad0Opsz48 from '../components/MonitoringFill1Wght600Grad0Opsz48'
import IconMonitoringFill1Wght700Grad0Opsz48 from '../components/MonitoringFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMonitoring = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMonitoringFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMonitoringFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMonitoringFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMonitoringFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMonitoringFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMonitoringFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMonitoringFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMonitoringFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMonitoringFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMonitoringFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMonitoringFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMonitoringFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMonitoringFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMonitoringFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
