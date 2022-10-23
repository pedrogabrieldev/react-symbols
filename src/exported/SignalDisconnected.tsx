import IconSignalDisconnectedFill0Wght100Grad0Opsz48 from '../components/SignalDisconnectedFill0Wght100Grad0Opsz48'
import IconSignalDisconnectedFill0Wght200Grad0Opsz48 from '../components/SignalDisconnectedFill0Wght200Grad0Opsz48'
import IconSignalDisconnectedFill0Wght300Grad0Opsz48 from '../components/SignalDisconnectedFill0Wght300Grad0Opsz48'
import IconSignalDisconnectedFill0Wght400Grad0Opsz48 from '../components/SignalDisconnectedFill0Wght400Grad0Opsz48'
import IconSignalDisconnectedFill0Wght500Grad0Opsz48 from '../components/SignalDisconnectedFill0Wght500Grad0Opsz48'
import IconSignalDisconnectedFill0Wght600Grad0Opsz48 from '../components/SignalDisconnectedFill0Wght600Grad0Opsz48'
import IconSignalDisconnectedFill0Wght700Grad0Opsz48 from '../components/SignalDisconnectedFill0Wght700Grad0Opsz48'
import IconSignalDisconnectedFill1Wght100Grad0Opsz48 from '../components/SignalDisconnectedFill1Wght100Grad0Opsz48'
import IconSignalDisconnectedFill1Wght200Grad0Opsz48 from '../components/SignalDisconnectedFill1Wght200Grad0Opsz48'
import IconSignalDisconnectedFill1Wght300Grad0Opsz48 from '../components/SignalDisconnectedFill1Wght300Grad0Opsz48'
import IconSignalDisconnectedFill1Wght400Grad0Opsz48 from '../components/SignalDisconnectedFill1Wght400Grad0Opsz48'
import IconSignalDisconnectedFill1Wght500Grad0Opsz48 from '../components/SignalDisconnectedFill1Wght500Grad0Opsz48'
import IconSignalDisconnectedFill1Wght600Grad0Opsz48 from '../components/SignalDisconnectedFill1Wght600Grad0Opsz48'
import IconSignalDisconnectedFill1Wght700Grad0Opsz48 from '../components/SignalDisconnectedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSignalDisconnected = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSignalDisconnectedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSignalDisconnectedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSignalDisconnectedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSignalDisconnectedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSignalDisconnectedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSignalDisconnectedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSignalDisconnectedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSignalDisconnectedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSignalDisconnectedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSignalDisconnectedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSignalDisconnectedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSignalDisconnectedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSignalDisconnectedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSignalDisconnectedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
