import IconShutterSpeedFill0Wght100Grad0Opsz48 from '../components/ShutterSpeedFill0Wght100Grad0Opsz48'
import IconShutterSpeedFill0Wght200Grad0Opsz48 from '../components/ShutterSpeedFill0Wght200Grad0Opsz48'
import IconShutterSpeedFill0Wght300Grad0Opsz48 from '../components/ShutterSpeedFill0Wght300Grad0Opsz48'
import IconShutterSpeedFill0Wght400Grad0Opsz48 from '../components/ShutterSpeedFill0Wght400Grad0Opsz48'
import IconShutterSpeedFill0Wght500Grad0Opsz48 from '../components/ShutterSpeedFill0Wght500Grad0Opsz48'
import IconShutterSpeedFill0Wght600Grad0Opsz48 from '../components/ShutterSpeedFill0Wght600Grad0Opsz48'
import IconShutterSpeedFill0Wght700Grad0Opsz48 from '../components/ShutterSpeedFill0Wght700Grad0Opsz48'
import IconShutterSpeedFill1Wght100Grad0Opsz48 from '../components/ShutterSpeedFill1Wght100Grad0Opsz48'
import IconShutterSpeedFill1Wght200Grad0Opsz48 from '../components/ShutterSpeedFill1Wght200Grad0Opsz48'
import IconShutterSpeedFill1Wght300Grad0Opsz48 from '../components/ShutterSpeedFill1Wght300Grad0Opsz48'
import IconShutterSpeedFill1Wght400Grad0Opsz48 from '../components/ShutterSpeedFill1Wght400Grad0Opsz48'
import IconShutterSpeedFill1Wght500Grad0Opsz48 from '../components/ShutterSpeedFill1Wght500Grad0Opsz48'
import IconShutterSpeedFill1Wght600Grad0Opsz48 from '../components/ShutterSpeedFill1Wght600Grad0Opsz48'
import IconShutterSpeedFill1Wght700Grad0Opsz48 from '../components/ShutterSpeedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconShutterSpeed = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconShutterSpeedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconShutterSpeedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconShutterSpeedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconShutterSpeedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconShutterSpeedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconShutterSpeedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconShutterSpeedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconShutterSpeedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconShutterSpeedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconShutterSpeedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconShutterSpeedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconShutterSpeedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconShutterSpeedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconShutterSpeedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
