import IconWindowSensorFill0Wght100Grad0Opsz48 from '../components/WindowSensorFill0Wght100Grad0Opsz48'
import IconWindowSensorFill0Wght200Grad0Opsz48 from '../components/WindowSensorFill0Wght200Grad0Opsz48'
import IconWindowSensorFill0Wght300Grad0Opsz48 from '../components/WindowSensorFill0Wght300Grad0Opsz48'
import IconWindowSensorFill0Wght400Grad0Opsz48 from '../components/WindowSensorFill0Wght400Grad0Opsz48'
import IconWindowSensorFill0Wght500Grad0Opsz48 from '../components/WindowSensorFill0Wght500Grad0Opsz48'
import IconWindowSensorFill0Wght600Grad0Opsz48 from '../components/WindowSensorFill0Wght600Grad0Opsz48'
import IconWindowSensorFill0Wght700Grad0Opsz48 from '../components/WindowSensorFill0Wght700Grad0Opsz48'
import IconWindowSensorFill1Wght100Grad0Opsz48 from '../components/WindowSensorFill1Wght100Grad0Opsz48'
import IconWindowSensorFill1Wght200Grad0Opsz48 from '../components/WindowSensorFill1Wght200Grad0Opsz48'
import IconWindowSensorFill1Wght300Grad0Opsz48 from '../components/WindowSensorFill1Wght300Grad0Opsz48'
import IconWindowSensorFill1Wght400Grad0Opsz48 from '../components/WindowSensorFill1Wght400Grad0Opsz48'
import IconWindowSensorFill1Wght500Grad0Opsz48 from '../components/WindowSensorFill1Wght500Grad0Opsz48'
import IconWindowSensorFill1Wght600Grad0Opsz48 from '../components/WindowSensorFill1Wght600Grad0Opsz48'
import IconWindowSensorFill1Wght700Grad0Opsz48 from '../components/WindowSensorFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWindowSensor = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWindowSensorFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWindowSensorFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWindowSensorFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWindowSensorFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWindowSensorFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWindowSensorFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWindowSensorFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWindowSensorFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWindowSensorFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWindowSensorFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWindowSensorFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWindowSensorFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWindowSensorFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWindowSensorFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
