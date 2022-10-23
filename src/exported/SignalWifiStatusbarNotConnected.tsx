import IconSignalWifiStatusbarNotConnectedFill0Wght100Grad0Opsz48 from '../components/SignalWifiStatusbarNotConnectedFill0Wght100Grad0Opsz48'
import IconSignalWifiStatusbarNotConnectedFill0Wght200Grad0Opsz48 from '../components/SignalWifiStatusbarNotConnectedFill0Wght200Grad0Opsz48'
import IconSignalWifiStatusbarNotConnectedFill0Wght300Grad0Opsz48 from '../components/SignalWifiStatusbarNotConnectedFill0Wght300Grad0Opsz48'
import IconSignalWifiStatusbarNotConnectedFill0Wght400Grad0Opsz48 from '../components/SignalWifiStatusbarNotConnectedFill0Wght400Grad0Opsz48'
import IconSignalWifiStatusbarNotConnectedFill0Wght500Grad0Opsz48 from '../components/SignalWifiStatusbarNotConnectedFill0Wght500Grad0Opsz48'
import IconSignalWifiStatusbarNotConnectedFill0Wght600Grad0Opsz48 from '../components/SignalWifiStatusbarNotConnectedFill0Wght600Grad0Opsz48'
import IconSignalWifiStatusbarNotConnectedFill0Wght700Grad0Opsz48 from '../components/SignalWifiStatusbarNotConnectedFill0Wght700Grad0Opsz48'
import IconSignalWifiStatusbarNotConnectedFill1Wght100Grad0Opsz48 from '../components/SignalWifiStatusbarNotConnectedFill1Wght100Grad0Opsz48'
import IconSignalWifiStatusbarNotConnectedFill1Wght200Grad0Opsz48 from '../components/SignalWifiStatusbarNotConnectedFill1Wght200Grad0Opsz48'
import IconSignalWifiStatusbarNotConnectedFill1Wght300Grad0Opsz48 from '../components/SignalWifiStatusbarNotConnectedFill1Wght300Grad0Opsz48'
import IconSignalWifiStatusbarNotConnectedFill1Wght400Grad0Opsz48 from '../components/SignalWifiStatusbarNotConnectedFill1Wght400Grad0Opsz48'
import IconSignalWifiStatusbarNotConnectedFill1Wght500Grad0Opsz48 from '../components/SignalWifiStatusbarNotConnectedFill1Wght500Grad0Opsz48'
import IconSignalWifiStatusbarNotConnectedFill1Wght600Grad0Opsz48 from '../components/SignalWifiStatusbarNotConnectedFill1Wght600Grad0Opsz48'
import IconSignalWifiStatusbarNotConnectedFill1Wght700Grad0Opsz48 from '../components/SignalWifiStatusbarNotConnectedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSignalWifiStatusbarNotConnected = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSignalWifiStatusbarNotConnectedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSignalWifiStatusbarNotConnectedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSignalWifiStatusbarNotConnectedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSignalWifiStatusbarNotConnectedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSignalWifiStatusbarNotConnectedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSignalWifiStatusbarNotConnectedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSignalWifiStatusbarNotConnectedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSignalWifiStatusbarNotConnectedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSignalWifiStatusbarNotConnectedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSignalWifiStatusbarNotConnectedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSignalWifiStatusbarNotConnectedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSignalWifiStatusbarNotConnectedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSignalWifiStatusbarNotConnectedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSignalWifiStatusbarNotConnectedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
