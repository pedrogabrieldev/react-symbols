import IconSignalCellularNodataFill0Wght100Grad0Opsz48 from '../components/SignalCellularNodataFill0Wght100Grad0Opsz48'
import IconSignalCellularNodataFill0Wght200Grad0Opsz48 from '../components/SignalCellularNodataFill0Wght200Grad0Opsz48'
import IconSignalCellularNodataFill0Wght300Grad0Opsz48 from '../components/SignalCellularNodataFill0Wght300Grad0Opsz48'
import IconSignalCellularNodataFill0Wght400Grad0Opsz48 from '../components/SignalCellularNodataFill0Wght400Grad0Opsz48'
import IconSignalCellularNodataFill0Wght500Grad0Opsz48 from '../components/SignalCellularNodataFill0Wght500Grad0Opsz48'
import IconSignalCellularNodataFill0Wght600Grad0Opsz48 from '../components/SignalCellularNodataFill0Wght600Grad0Opsz48'
import IconSignalCellularNodataFill0Wght700Grad0Opsz48 from '../components/SignalCellularNodataFill0Wght700Grad0Opsz48'
import IconSignalCellularNodataFill1Wght100Grad0Opsz48 from '../components/SignalCellularNodataFill1Wght100Grad0Opsz48'
import IconSignalCellularNodataFill1Wght200Grad0Opsz48 from '../components/SignalCellularNodataFill1Wght200Grad0Opsz48'
import IconSignalCellularNodataFill1Wght300Grad0Opsz48 from '../components/SignalCellularNodataFill1Wght300Grad0Opsz48'
import IconSignalCellularNodataFill1Wght400Grad0Opsz48 from '../components/SignalCellularNodataFill1Wght400Grad0Opsz48'
import IconSignalCellularNodataFill1Wght500Grad0Opsz48 from '../components/SignalCellularNodataFill1Wght500Grad0Opsz48'
import IconSignalCellularNodataFill1Wght600Grad0Opsz48 from '../components/SignalCellularNodataFill1Wght600Grad0Opsz48'
import IconSignalCellularNodataFill1Wght700Grad0Opsz48 from '../components/SignalCellularNodataFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSignalCellularNodata = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSignalCellularNodataFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSignalCellularNodataFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSignalCellularNodataFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSignalCellularNodataFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSignalCellularNodataFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSignalCellularNodataFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSignalCellularNodataFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSignalCellularNodataFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSignalCellularNodataFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSignalCellularNodataFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSignalCellularNodataFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSignalCellularNodataFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSignalCellularNodataFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSignalCellularNodataFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
