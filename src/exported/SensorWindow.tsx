import IconSensorWindowFill0Wght100Grad0Opsz48 from '../components/SensorWindowFill0Wght100Grad0Opsz48'
import IconSensorWindowFill0Wght200Grad0Opsz48 from '../components/SensorWindowFill0Wght200Grad0Opsz48'
import IconSensorWindowFill0Wght300Grad0Opsz48 from '../components/SensorWindowFill0Wght300Grad0Opsz48'
import IconSensorWindowFill0Wght400Grad0Opsz48 from '../components/SensorWindowFill0Wght400Grad0Opsz48'
import IconSensorWindowFill0Wght500Grad0Opsz48 from '../components/SensorWindowFill0Wght500Grad0Opsz48'
import IconSensorWindowFill0Wght600Grad0Opsz48 from '../components/SensorWindowFill0Wght600Grad0Opsz48'
import IconSensorWindowFill0Wght700Grad0Opsz48 from '../components/SensorWindowFill0Wght700Grad0Opsz48'
import IconSensorWindowFill1Wght100Grad0Opsz48 from '../components/SensorWindowFill1Wght100Grad0Opsz48'
import IconSensorWindowFill1Wght200Grad0Opsz48 from '../components/SensorWindowFill1Wght200Grad0Opsz48'
import IconSensorWindowFill1Wght300Grad0Opsz48 from '../components/SensorWindowFill1Wght300Grad0Opsz48'
import IconSensorWindowFill1Wght400Grad0Opsz48 from '../components/SensorWindowFill1Wght400Grad0Opsz48'
import IconSensorWindowFill1Wght500Grad0Opsz48 from '../components/SensorWindowFill1Wght500Grad0Opsz48'
import IconSensorWindowFill1Wght600Grad0Opsz48 from '../components/SensorWindowFill1Wght600Grad0Opsz48'
import IconSensorWindowFill1Wght700Grad0Opsz48 from '../components/SensorWindowFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSensorWindow = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSensorWindowFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSensorWindowFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSensorWindowFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSensorWindowFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSensorWindowFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSensorWindowFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSensorWindowFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSensorWindowFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSensorWindowFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSensorWindowFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSensorWindowFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSensorWindowFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSensorWindowFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSensorWindowFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
