import IconDoorSensorFill0Wght100Grad0Opsz48 from '../components/DoorSensorFill0Wght100Grad0Opsz48'
import IconDoorSensorFill0Wght200Grad0Opsz48 from '../components/DoorSensorFill0Wght200Grad0Opsz48'
import IconDoorSensorFill0Wght300Grad0Opsz48 from '../components/DoorSensorFill0Wght300Grad0Opsz48'
import IconDoorSensorFill0Wght400Grad0Opsz48 from '../components/DoorSensorFill0Wght400Grad0Opsz48'
import IconDoorSensorFill0Wght500Grad0Opsz48 from '../components/DoorSensorFill0Wght500Grad0Opsz48'
import IconDoorSensorFill0Wght600Grad0Opsz48 from '../components/DoorSensorFill0Wght600Grad0Opsz48'
import IconDoorSensorFill0Wght700Grad0Opsz48 from '../components/DoorSensorFill0Wght700Grad0Opsz48'
import IconDoorSensorFill1Wght100Grad0Opsz48 from '../components/DoorSensorFill1Wght100Grad0Opsz48'
import IconDoorSensorFill1Wght200Grad0Opsz48 from '../components/DoorSensorFill1Wght200Grad0Opsz48'
import IconDoorSensorFill1Wght300Grad0Opsz48 from '../components/DoorSensorFill1Wght300Grad0Opsz48'
import IconDoorSensorFill1Wght400Grad0Opsz48 from '../components/DoorSensorFill1Wght400Grad0Opsz48'
import IconDoorSensorFill1Wght500Grad0Opsz48 from '../components/DoorSensorFill1Wght500Grad0Opsz48'
import IconDoorSensorFill1Wght600Grad0Opsz48 from '../components/DoorSensorFill1Wght600Grad0Opsz48'
import IconDoorSensorFill1Wght700Grad0Opsz48 from '../components/DoorSensorFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDoorSensor = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDoorSensorFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDoorSensorFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDoorSensorFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDoorSensorFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDoorSensorFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDoorSensorFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDoorSensorFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDoorSensorFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDoorSensorFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDoorSensorFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDoorSensorFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDoorSensorFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDoorSensorFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDoorSensorFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
