import IconSignalCellularAltFill0Wght100Grad0Opsz48 from '../components/SignalCellularAltFill0Wght100Grad0Opsz48'
import IconSignalCellularAltFill0Wght200Grad0Opsz48 from '../components/SignalCellularAltFill0Wght200Grad0Opsz48'
import IconSignalCellularAltFill0Wght300Grad0Opsz48 from '../components/SignalCellularAltFill0Wght300Grad0Opsz48'
import IconSignalCellularAltFill0Wght400Grad0Opsz48 from '../components/SignalCellularAltFill0Wght400Grad0Opsz48'
import IconSignalCellularAltFill0Wght500Grad0Opsz48 from '../components/SignalCellularAltFill0Wght500Grad0Opsz48'
import IconSignalCellularAltFill0Wght600Grad0Opsz48 from '../components/SignalCellularAltFill0Wght600Grad0Opsz48'
import IconSignalCellularAltFill0Wght700Grad0Opsz48 from '../components/SignalCellularAltFill0Wght700Grad0Opsz48'
import IconSignalCellularAltFill1Wght100Grad0Opsz48 from '../components/SignalCellularAltFill1Wght100Grad0Opsz48'
import IconSignalCellularAltFill1Wght200Grad0Opsz48 from '../components/SignalCellularAltFill1Wght200Grad0Opsz48'
import IconSignalCellularAltFill1Wght300Grad0Opsz48 from '../components/SignalCellularAltFill1Wght300Grad0Opsz48'
import IconSignalCellularAltFill1Wght400Grad0Opsz48 from '../components/SignalCellularAltFill1Wght400Grad0Opsz48'
import IconSignalCellularAltFill1Wght500Grad0Opsz48 from '../components/SignalCellularAltFill1Wght500Grad0Opsz48'
import IconSignalCellularAltFill1Wght600Grad0Opsz48 from '../components/SignalCellularAltFill1Wght600Grad0Opsz48'
import IconSignalCellularAltFill1Wght700Grad0Opsz48 from '../components/SignalCellularAltFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSignalCellularAlt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSignalCellularAltFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSignalCellularAltFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSignalCellularAltFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSignalCellularAltFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSignalCellularAltFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSignalCellularAltFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSignalCellularAltFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSignalCellularAltFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSignalCellularAltFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSignalCellularAltFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSignalCellularAltFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSignalCellularAltFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSignalCellularAltFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSignalCellularAltFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
