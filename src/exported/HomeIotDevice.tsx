import IconHomeIotDeviceFill0Wght100Grad0Opsz48 from '../components/HomeIotDeviceFill0Wght100Grad0Opsz48'
import IconHomeIotDeviceFill0Wght200Grad0Opsz48 from '../components/HomeIotDeviceFill0Wght200Grad0Opsz48'
import IconHomeIotDeviceFill0Wght300Grad0Opsz48 from '../components/HomeIotDeviceFill0Wght300Grad0Opsz48'
import IconHomeIotDeviceFill0Wght400Grad0Opsz48 from '../components/HomeIotDeviceFill0Wght400Grad0Opsz48'
import IconHomeIotDeviceFill0Wght500Grad0Opsz48 from '../components/HomeIotDeviceFill0Wght500Grad0Opsz48'
import IconHomeIotDeviceFill0Wght600Grad0Opsz48 from '../components/HomeIotDeviceFill0Wght600Grad0Opsz48'
import IconHomeIotDeviceFill0Wght700Grad0Opsz48 from '../components/HomeIotDeviceFill0Wght700Grad0Opsz48'
import IconHomeIotDeviceFill1Wght100Grad0Opsz48 from '../components/HomeIotDeviceFill1Wght100Grad0Opsz48'
import IconHomeIotDeviceFill1Wght200Grad0Opsz48 from '../components/HomeIotDeviceFill1Wght200Grad0Opsz48'
import IconHomeIotDeviceFill1Wght300Grad0Opsz48 from '../components/HomeIotDeviceFill1Wght300Grad0Opsz48'
import IconHomeIotDeviceFill1Wght400Grad0Opsz48 from '../components/HomeIotDeviceFill1Wght400Grad0Opsz48'
import IconHomeIotDeviceFill1Wght500Grad0Opsz48 from '../components/HomeIotDeviceFill1Wght500Grad0Opsz48'
import IconHomeIotDeviceFill1Wght600Grad0Opsz48 from '../components/HomeIotDeviceFill1Wght600Grad0Opsz48'
import IconHomeIotDeviceFill1Wght700Grad0Opsz48 from '../components/HomeIotDeviceFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHomeIotDevice = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHomeIotDeviceFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHomeIotDeviceFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHomeIotDeviceFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHomeIotDeviceFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHomeIotDeviceFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHomeIotDeviceFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHomeIotDeviceFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHomeIotDeviceFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHomeIotDeviceFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHomeIotDeviceFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHomeIotDeviceFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHomeIotDeviceFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHomeIotDeviceFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHomeIotDeviceFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
