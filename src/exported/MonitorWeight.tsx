import IconMonitorWeightFill0Wght100Grad0Opsz48 from '../components/MonitorWeightFill0Wght100Grad0Opsz48'
import IconMonitorWeightFill0Wght200Grad0Opsz48 from '../components/MonitorWeightFill0Wght200Grad0Opsz48'
import IconMonitorWeightFill0Wght300Grad0Opsz48 from '../components/MonitorWeightFill0Wght300Grad0Opsz48'
import IconMonitorWeightFill0Wght400Grad0Opsz48 from '../components/MonitorWeightFill0Wght400Grad0Opsz48'
import IconMonitorWeightFill0Wght500Grad0Opsz48 from '../components/MonitorWeightFill0Wght500Grad0Opsz48'
import IconMonitorWeightFill0Wght600Grad0Opsz48 from '../components/MonitorWeightFill0Wght600Grad0Opsz48'
import IconMonitorWeightFill0Wght700Grad0Opsz48 from '../components/MonitorWeightFill0Wght700Grad0Opsz48'
import IconMonitorWeightFill1Wght100Grad0Opsz48 from '../components/MonitorWeightFill1Wght100Grad0Opsz48'
import IconMonitorWeightFill1Wght200Grad0Opsz48 from '../components/MonitorWeightFill1Wght200Grad0Opsz48'
import IconMonitorWeightFill1Wght300Grad0Opsz48 from '../components/MonitorWeightFill1Wght300Grad0Opsz48'
import IconMonitorWeightFill1Wght400Grad0Opsz48 from '../components/MonitorWeightFill1Wght400Grad0Opsz48'
import IconMonitorWeightFill1Wght500Grad0Opsz48 from '../components/MonitorWeightFill1Wght500Grad0Opsz48'
import IconMonitorWeightFill1Wght600Grad0Opsz48 from '../components/MonitorWeightFill1Wght600Grad0Opsz48'
import IconMonitorWeightFill1Wght700Grad0Opsz48 from '../components/MonitorWeightFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMonitorWeight = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMonitorWeightFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMonitorWeightFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMonitorWeightFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMonitorWeightFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMonitorWeightFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMonitorWeightFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMonitorWeightFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMonitorWeightFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMonitorWeightFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMonitorWeightFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMonitorWeightFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMonitorWeightFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMonitorWeightFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMonitorWeightFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
