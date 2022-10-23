import IconSignalWifiStatusbarNullFill0Wght100Grad0Opsz48 from '../components/SignalWifiStatusbarNullFill0Wght100Grad0Opsz48'
import IconSignalWifiStatusbarNullFill0Wght200Grad0Opsz48 from '../components/SignalWifiStatusbarNullFill0Wght200Grad0Opsz48'
import IconSignalWifiStatusbarNullFill0Wght300Grad0Opsz48 from '../components/SignalWifiStatusbarNullFill0Wght300Grad0Opsz48'
import IconSignalWifiStatusbarNullFill0Wght400Grad0Opsz48 from '../components/SignalWifiStatusbarNullFill0Wght400Grad0Opsz48'
import IconSignalWifiStatusbarNullFill0Wght500Grad0Opsz48 from '../components/SignalWifiStatusbarNullFill0Wght500Grad0Opsz48'
import IconSignalWifiStatusbarNullFill0Wght600Grad0Opsz48 from '../components/SignalWifiStatusbarNullFill0Wght600Grad0Opsz48'
import IconSignalWifiStatusbarNullFill0Wght700Grad0Opsz48 from '../components/SignalWifiStatusbarNullFill0Wght700Grad0Opsz48'
import IconSignalWifiStatusbarNullFill1Wght100Grad0Opsz48 from '../components/SignalWifiStatusbarNullFill1Wght100Grad0Opsz48'
import IconSignalWifiStatusbarNullFill1Wght200Grad0Opsz48 from '../components/SignalWifiStatusbarNullFill1Wght200Grad0Opsz48'
import IconSignalWifiStatusbarNullFill1Wght300Grad0Opsz48 from '../components/SignalWifiStatusbarNullFill1Wght300Grad0Opsz48'
import IconSignalWifiStatusbarNullFill1Wght400Grad0Opsz48 from '../components/SignalWifiStatusbarNullFill1Wght400Grad0Opsz48'
import IconSignalWifiStatusbarNullFill1Wght500Grad0Opsz48 from '../components/SignalWifiStatusbarNullFill1Wght500Grad0Opsz48'
import IconSignalWifiStatusbarNullFill1Wght600Grad0Opsz48 from '../components/SignalWifiStatusbarNullFill1Wght600Grad0Opsz48'
import IconSignalWifiStatusbarNullFill1Wght700Grad0Opsz48 from '../components/SignalWifiStatusbarNullFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSignalWifiStatusbarNull = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSignalWifiStatusbarNullFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSignalWifiStatusbarNullFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSignalWifiStatusbarNullFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSignalWifiStatusbarNullFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSignalWifiStatusbarNullFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSignalWifiStatusbarNullFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSignalWifiStatusbarNullFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSignalWifiStatusbarNullFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSignalWifiStatusbarNullFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSignalWifiStatusbarNullFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSignalWifiStatusbarNullFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSignalWifiStatusbarNullFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSignalWifiStatusbarNullFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSignalWifiStatusbarNullFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
