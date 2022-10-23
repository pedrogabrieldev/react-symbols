import IconSensorDoorFill0Wght100Grad0Opsz48 from '../components/SensorDoorFill0Wght100Grad0Opsz48'
import IconSensorDoorFill0Wght200Grad0Opsz48 from '../components/SensorDoorFill0Wght200Grad0Opsz48'
import IconSensorDoorFill0Wght300Grad0Opsz48 from '../components/SensorDoorFill0Wght300Grad0Opsz48'
import IconSensorDoorFill0Wght400Grad0Opsz48 from '../components/SensorDoorFill0Wght400Grad0Opsz48'
import IconSensorDoorFill0Wght500Grad0Opsz48 from '../components/SensorDoorFill0Wght500Grad0Opsz48'
import IconSensorDoorFill0Wght600Grad0Opsz48 from '../components/SensorDoorFill0Wght600Grad0Opsz48'
import IconSensorDoorFill0Wght700Grad0Opsz48 from '../components/SensorDoorFill0Wght700Grad0Opsz48'
import IconSensorDoorFill1Wght100Grad0Opsz48 from '../components/SensorDoorFill1Wght100Grad0Opsz48'
import IconSensorDoorFill1Wght200Grad0Opsz48 from '../components/SensorDoorFill1Wght200Grad0Opsz48'
import IconSensorDoorFill1Wght300Grad0Opsz48 from '../components/SensorDoorFill1Wght300Grad0Opsz48'
import IconSensorDoorFill1Wght400Grad0Opsz48 from '../components/SensorDoorFill1Wght400Grad0Opsz48'
import IconSensorDoorFill1Wght500Grad0Opsz48 from '../components/SensorDoorFill1Wght500Grad0Opsz48'
import IconSensorDoorFill1Wght600Grad0Opsz48 from '../components/SensorDoorFill1Wght600Grad0Opsz48'
import IconSensorDoorFill1Wght700Grad0Opsz48 from '../components/SensorDoorFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSensorDoor = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSensorDoorFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSensorDoorFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSensorDoorFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSensorDoorFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSensorDoorFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSensorDoorFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSensorDoorFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSensorDoorFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSensorDoorFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSensorDoorFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSensorDoorFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSensorDoorFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSensorDoorFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSensorDoorFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
