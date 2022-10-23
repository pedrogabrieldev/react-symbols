import IconNestThermostatSensorFill0Wght100Grad0Opsz48 from '../components/NestThermostatSensorFill0Wght100Grad0Opsz48'
import IconNestThermostatSensorFill0Wght200Grad0Opsz48 from '../components/NestThermostatSensorFill0Wght200Grad0Opsz48'
import IconNestThermostatSensorFill0Wght300Grad0Opsz48 from '../components/NestThermostatSensorFill0Wght300Grad0Opsz48'
import IconNestThermostatSensorFill0Wght400Grad0Opsz48 from '../components/NestThermostatSensorFill0Wght400Grad0Opsz48'
import IconNestThermostatSensorFill0Wght500Grad0Opsz48 from '../components/NestThermostatSensorFill0Wght500Grad0Opsz48'
import IconNestThermostatSensorFill0Wght600Grad0Opsz48 from '../components/NestThermostatSensorFill0Wght600Grad0Opsz48'
import IconNestThermostatSensorFill0Wght700Grad0Opsz48 from '../components/NestThermostatSensorFill0Wght700Grad0Opsz48'
import IconNestThermostatSensorFill1Wght100Grad0Opsz48 from '../components/NestThermostatSensorFill1Wght100Grad0Opsz48'
import IconNestThermostatSensorFill1Wght200Grad0Opsz48 from '../components/NestThermostatSensorFill1Wght200Grad0Opsz48'
import IconNestThermostatSensorFill1Wght300Grad0Opsz48 from '../components/NestThermostatSensorFill1Wght300Grad0Opsz48'
import IconNestThermostatSensorFill1Wght400Grad0Opsz48 from '../components/NestThermostatSensorFill1Wght400Grad0Opsz48'
import IconNestThermostatSensorFill1Wght500Grad0Opsz48 from '../components/NestThermostatSensorFill1Wght500Grad0Opsz48'
import IconNestThermostatSensorFill1Wght600Grad0Opsz48 from '../components/NestThermostatSensorFill1Wght600Grad0Opsz48'
import IconNestThermostatSensorFill1Wght700Grad0Opsz48 from '../components/NestThermostatSensorFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestThermostatSensor = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestThermostatSensorFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestThermostatSensorFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestThermostatSensorFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestThermostatSensorFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestThermostatSensorFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestThermostatSensorFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestThermostatSensorFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestThermostatSensorFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestThermostatSensorFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestThermostatSensorFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestThermostatSensorFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestThermostatSensorFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestThermostatSensorFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestThermostatSensorFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
