import IconSensorOccupiedFill0Wght100Grad0Opsz48 from '../components/SensorOccupiedFill0Wght100Grad0Opsz48'
import IconSensorOccupiedFill0Wght200Grad0Opsz48 from '../components/SensorOccupiedFill0Wght200Grad0Opsz48'
import IconSensorOccupiedFill0Wght300Grad0Opsz48 from '../components/SensorOccupiedFill0Wght300Grad0Opsz48'
import IconSensorOccupiedFill0Wght400Grad0Opsz48 from '../components/SensorOccupiedFill0Wght400Grad0Opsz48'
import IconSensorOccupiedFill0Wght500Grad0Opsz48 from '../components/SensorOccupiedFill0Wght500Grad0Opsz48'
import IconSensorOccupiedFill0Wght600Grad0Opsz48 from '../components/SensorOccupiedFill0Wght600Grad0Opsz48'
import IconSensorOccupiedFill0Wght700Grad0Opsz48 from '../components/SensorOccupiedFill0Wght700Grad0Opsz48'
import IconSensorOccupiedFill1Wght100Grad0Opsz48 from '../components/SensorOccupiedFill1Wght100Grad0Opsz48'
import IconSensorOccupiedFill1Wght200Grad0Opsz48 from '../components/SensorOccupiedFill1Wght200Grad0Opsz48'
import IconSensorOccupiedFill1Wght300Grad0Opsz48 from '../components/SensorOccupiedFill1Wght300Grad0Opsz48'
import IconSensorOccupiedFill1Wght400Grad0Opsz48 from '../components/SensorOccupiedFill1Wght400Grad0Opsz48'
import IconSensorOccupiedFill1Wght500Grad0Opsz48 from '../components/SensorOccupiedFill1Wght500Grad0Opsz48'
import IconSensorOccupiedFill1Wght600Grad0Opsz48 from '../components/SensorOccupiedFill1Wght600Grad0Opsz48'
import IconSensorOccupiedFill1Wght700Grad0Opsz48 from '../components/SensorOccupiedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSensorOccupied = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSensorOccupiedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSensorOccupiedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSensorOccupiedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSensorOccupiedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSensorOccupiedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSensorOccupiedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSensorOccupiedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSensorOccupiedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSensorOccupiedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSensorOccupiedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSensorOccupiedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSensorOccupiedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSensorOccupiedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSensorOccupiedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
