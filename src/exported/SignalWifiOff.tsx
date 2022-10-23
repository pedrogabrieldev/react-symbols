import IconSignalWifiOffFill0Wght100Grad0Opsz48 from '../components/SignalWifiOffFill0Wght100Grad0Opsz48'
import IconSignalWifiOffFill0Wght200Grad0Opsz48 from '../components/SignalWifiOffFill0Wght200Grad0Opsz48'
import IconSignalWifiOffFill0Wght300Grad0Opsz48 from '../components/SignalWifiOffFill0Wght300Grad0Opsz48'
import IconSignalWifiOffFill0Wght400Grad0Opsz48 from '../components/SignalWifiOffFill0Wght400Grad0Opsz48'
import IconSignalWifiOffFill0Wght500Grad0Opsz48 from '../components/SignalWifiOffFill0Wght500Grad0Opsz48'
import IconSignalWifiOffFill0Wght600Grad0Opsz48 from '../components/SignalWifiOffFill0Wght600Grad0Opsz48'
import IconSignalWifiOffFill0Wght700Grad0Opsz48 from '../components/SignalWifiOffFill0Wght700Grad0Opsz48'
import IconSignalWifiOffFill1Wght100Grad0Opsz48 from '../components/SignalWifiOffFill1Wght100Grad0Opsz48'
import IconSignalWifiOffFill1Wght200Grad0Opsz48 from '../components/SignalWifiOffFill1Wght200Grad0Opsz48'
import IconSignalWifiOffFill1Wght300Grad0Opsz48 from '../components/SignalWifiOffFill1Wght300Grad0Opsz48'
import IconSignalWifiOffFill1Wght400Grad0Opsz48 from '../components/SignalWifiOffFill1Wght400Grad0Opsz48'
import IconSignalWifiOffFill1Wght500Grad0Opsz48 from '../components/SignalWifiOffFill1Wght500Grad0Opsz48'
import IconSignalWifiOffFill1Wght600Grad0Opsz48 from '../components/SignalWifiOffFill1Wght600Grad0Opsz48'
import IconSignalWifiOffFill1Wght700Grad0Opsz48 from '../components/SignalWifiOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSignalWifiOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSignalWifiOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSignalWifiOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSignalWifiOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSignalWifiOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSignalWifiOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSignalWifiOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSignalWifiOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSignalWifiOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSignalWifiOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSignalWifiOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSignalWifiOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSignalWifiOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSignalWifiOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSignalWifiOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
