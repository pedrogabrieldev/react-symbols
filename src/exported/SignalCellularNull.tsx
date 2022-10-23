import IconSignalCellularNullFill0Wght100Grad0Opsz48 from '../components/SignalCellularNullFill0Wght100Grad0Opsz48'
import IconSignalCellularNullFill0Wght200Grad0Opsz48 from '../components/SignalCellularNullFill0Wght200Grad0Opsz48'
import IconSignalCellularNullFill0Wght300Grad0Opsz48 from '../components/SignalCellularNullFill0Wght300Grad0Opsz48'
import IconSignalCellularNullFill0Wght400Grad0Opsz48 from '../components/SignalCellularNullFill0Wght400Grad0Opsz48'
import IconSignalCellularNullFill0Wght500Grad0Opsz48 from '../components/SignalCellularNullFill0Wght500Grad0Opsz48'
import IconSignalCellularNullFill0Wght600Grad0Opsz48 from '../components/SignalCellularNullFill0Wght600Grad0Opsz48'
import IconSignalCellularNullFill0Wght700Grad0Opsz48 from '../components/SignalCellularNullFill0Wght700Grad0Opsz48'
import IconSignalCellularNullFill1Wght100Grad0Opsz48 from '../components/SignalCellularNullFill1Wght100Grad0Opsz48'
import IconSignalCellularNullFill1Wght200Grad0Opsz48 from '../components/SignalCellularNullFill1Wght200Grad0Opsz48'
import IconSignalCellularNullFill1Wght300Grad0Opsz48 from '../components/SignalCellularNullFill1Wght300Grad0Opsz48'
import IconSignalCellularNullFill1Wght400Grad0Opsz48 from '../components/SignalCellularNullFill1Wght400Grad0Opsz48'
import IconSignalCellularNullFill1Wght500Grad0Opsz48 from '../components/SignalCellularNullFill1Wght500Grad0Opsz48'
import IconSignalCellularNullFill1Wght600Grad0Opsz48 from '../components/SignalCellularNullFill1Wght600Grad0Opsz48'
import IconSignalCellularNullFill1Wght700Grad0Opsz48 from '../components/SignalCellularNullFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSignalCellularNull = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSignalCellularNullFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSignalCellularNullFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSignalCellularNullFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSignalCellularNullFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSignalCellularNullFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSignalCellularNullFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSignalCellularNullFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSignalCellularNullFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSignalCellularNullFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSignalCellularNullFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSignalCellularNullFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSignalCellularNullFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSignalCellularNullFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSignalCellularNullFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
