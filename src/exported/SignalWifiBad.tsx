import IconSignalWifiBadFill0Wght100Grad0Opsz48 from '../components/SignalWifiBadFill0Wght100Grad0Opsz48'
import IconSignalWifiBadFill0Wght200Grad0Opsz48 from '../components/SignalWifiBadFill0Wght200Grad0Opsz48'
import IconSignalWifiBadFill0Wght300Grad0Opsz48 from '../components/SignalWifiBadFill0Wght300Grad0Opsz48'
import IconSignalWifiBadFill0Wght400Grad0Opsz48 from '../components/SignalWifiBadFill0Wght400Grad0Opsz48'
import IconSignalWifiBadFill0Wght500Grad0Opsz48 from '../components/SignalWifiBadFill0Wght500Grad0Opsz48'
import IconSignalWifiBadFill0Wght600Grad0Opsz48 from '../components/SignalWifiBadFill0Wght600Grad0Opsz48'
import IconSignalWifiBadFill0Wght700Grad0Opsz48 from '../components/SignalWifiBadFill0Wght700Grad0Opsz48'
import IconSignalWifiBadFill1Wght100Grad0Opsz48 from '../components/SignalWifiBadFill1Wght100Grad0Opsz48'
import IconSignalWifiBadFill1Wght200Grad0Opsz48 from '../components/SignalWifiBadFill1Wght200Grad0Opsz48'
import IconSignalWifiBadFill1Wght300Grad0Opsz48 from '../components/SignalWifiBadFill1Wght300Grad0Opsz48'
import IconSignalWifiBadFill1Wght400Grad0Opsz48 from '../components/SignalWifiBadFill1Wght400Grad0Opsz48'
import IconSignalWifiBadFill1Wght500Grad0Opsz48 from '../components/SignalWifiBadFill1Wght500Grad0Opsz48'
import IconSignalWifiBadFill1Wght600Grad0Opsz48 from '../components/SignalWifiBadFill1Wght600Grad0Opsz48'
import IconSignalWifiBadFill1Wght700Grad0Opsz48 from '../components/SignalWifiBadFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSignalWifiBad = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSignalWifiBadFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSignalWifiBadFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSignalWifiBadFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSignalWifiBadFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSignalWifiBadFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSignalWifiBadFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSignalWifiBadFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSignalWifiBadFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSignalWifiBadFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSignalWifiBadFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSignalWifiBadFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSignalWifiBadFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSignalWifiBadFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSignalWifiBadFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
