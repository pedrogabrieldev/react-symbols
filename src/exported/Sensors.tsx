import IconSensorsFill0Wght100Grad0Opsz48 from '../components/SensorsFill0Wght100Grad0Opsz48'
import IconSensorsFill0Wght200Grad0Opsz48 from '../components/SensorsFill0Wght200Grad0Opsz48'
import IconSensorsFill0Wght300Grad0Opsz48 from '../components/SensorsFill0Wght300Grad0Opsz48'
import IconSensorsFill0Wght400Grad0Opsz48 from '../components/SensorsFill0Wght400Grad0Opsz48'
import IconSensorsFill0Wght500Grad0Opsz48 from '../components/SensorsFill0Wght500Grad0Opsz48'
import IconSensorsFill0Wght600Grad0Opsz48 from '../components/SensorsFill0Wght600Grad0Opsz48'
import IconSensorsFill0Wght700Grad0Opsz48 from '../components/SensorsFill0Wght700Grad0Opsz48'
import IconSensorsFill1Wght100Grad0Opsz48 from '../components/SensorsFill1Wght100Grad0Opsz48'
import IconSensorsFill1Wght200Grad0Opsz48 from '../components/SensorsFill1Wght200Grad0Opsz48'
import IconSensorsFill1Wght300Grad0Opsz48 from '../components/SensorsFill1Wght300Grad0Opsz48'
import IconSensorsFill1Wght400Grad0Opsz48 from '../components/SensorsFill1Wght400Grad0Opsz48'
import IconSensorsFill1Wght500Grad0Opsz48 from '../components/SensorsFill1Wght500Grad0Opsz48'
import IconSensorsFill1Wght600Grad0Opsz48 from '../components/SensorsFill1Wght600Grad0Opsz48'
import IconSensorsFill1Wght700Grad0Opsz48 from '../components/SensorsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSensors = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSensorsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSensorsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSensorsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSensorsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSensorsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSensorsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSensorsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSensorsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSensorsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSensorsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSensorsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSensorsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSensorsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSensorsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
