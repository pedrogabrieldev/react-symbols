import IconSignalCellularOffFill0Wght100Grad0Opsz48 from '../components/SignalCellularOffFill0Wght100Grad0Opsz48'
import IconSignalCellularOffFill0Wght200Grad0Opsz48 from '../components/SignalCellularOffFill0Wght200Grad0Opsz48'
import IconSignalCellularOffFill0Wght300Grad0Opsz48 from '../components/SignalCellularOffFill0Wght300Grad0Opsz48'
import IconSignalCellularOffFill0Wght400Grad0Opsz48 from '../components/SignalCellularOffFill0Wght400Grad0Opsz48'
import IconSignalCellularOffFill0Wght500Grad0Opsz48 from '../components/SignalCellularOffFill0Wght500Grad0Opsz48'
import IconSignalCellularOffFill0Wght600Grad0Opsz48 from '../components/SignalCellularOffFill0Wght600Grad0Opsz48'
import IconSignalCellularOffFill0Wght700Grad0Opsz48 from '../components/SignalCellularOffFill0Wght700Grad0Opsz48'
import IconSignalCellularOffFill1Wght100Grad0Opsz48 from '../components/SignalCellularOffFill1Wght100Grad0Opsz48'
import IconSignalCellularOffFill1Wght200Grad0Opsz48 from '../components/SignalCellularOffFill1Wght200Grad0Opsz48'
import IconSignalCellularOffFill1Wght300Grad0Opsz48 from '../components/SignalCellularOffFill1Wght300Grad0Opsz48'
import IconSignalCellularOffFill1Wght400Grad0Opsz48 from '../components/SignalCellularOffFill1Wght400Grad0Opsz48'
import IconSignalCellularOffFill1Wght500Grad0Opsz48 from '../components/SignalCellularOffFill1Wght500Grad0Opsz48'
import IconSignalCellularOffFill1Wght600Grad0Opsz48 from '../components/SignalCellularOffFill1Wght600Grad0Opsz48'
import IconSignalCellularOffFill1Wght700Grad0Opsz48 from '../components/SignalCellularOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSignalCellularOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSignalCellularOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSignalCellularOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSignalCellularOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSignalCellularOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSignalCellularOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSignalCellularOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSignalCellularOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSignalCellularOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSignalCellularOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSignalCellularOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSignalCellularOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSignalCellularOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSignalCellularOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSignalCellularOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
