import IconNestThermostatSensorEuFill0Wght100Grad0Opsz48 from '../components/NestThermostatSensorEuFill0Wght100Grad0Opsz48'
import IconNestThermostatSensorEuFill0Wght200Grad0Opsz48 from '../components/NestThermostatSensorEuFill0Wght200Grad0Opsz48'
import IconNestThermostatSensorEuFill0Wght300Grad0Opsz48 from '../components/NestThermostatSensorEuFill0Wght300Grad0Opsz48'
import IconNestThermostatSensorEuFill0Wght400Grad0Opsz48 from '../components/NestThermostatSensorEuFill0Wght400Grad0Opsz48'
import IconNestThermostatSensorEuFill0Wght500Grad0Opsz48 from '../components/NestThermostatSensorEuFill0Wght500Grad0Opsz48'
import IconNestThermostatSensorEuFill0Wght600Grad0Opsz48 from '../components/NestThermostatSensorEuFill0Wght600Grad0Opsz48'
import IconNestThermostatSensorEuFill0Wght700Grad0Opsz48 from '../components/NestThermostatSensorEuFill0Wght700Grad0Opsz48'
import IconNestThermostatSensorEuFill1Wght100Grad0Opsz48 from '../components/NestThermostatSensorEuFill1Wght100Grad0Opsz48'
import IconNestThermostatSensorEuFill1Wght200Grad0Opsz48 from '../components/NestThermostatSensorEuFill1Wght200Grad0Opsz48'
import IconNestThermostatSensorEuFill1Wght300Grad0Opsz48 from '../components/NestThermostatSensorEuFill1Wght300Grad0Opsz48'
import IconNestThermostatSensorEuFill1Wght400Grad0Opsz48 from '../components/NestThermostatSensorEuFill1Wght400Grad0Opsz48'
import IconNestThermostatSensorEuFill1Wght500Grad0Opsz48 from '../components/NestThermostatSensorEuFill1Wght500Grad0Opsz48'
import IconNestThermostatSensorEuFill1Wght600Grad0Opsz48 from '../components/NestThermostatSensorEuFill1Wght600Grad0Opsz48'
import IconNestThermostatSensorEuFill1Wght700Grad0Opsz48 from '../components/NestThermostatSensorEuFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestThermostatSensorEu = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestThermostatSensorEuFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestThermostatSensorEuFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestThermostatSensorEuFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestThermostatSensorEuFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestThermostatSensorEuFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestThermostatSensorEuFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestThermostatSensorEuFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestThermostatSensorEuFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestThermostatSensorEuFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestThermostatSensorEuFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestThermostatSensorEuFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestThermostatSensorEuFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestThermostatSensorEuFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestThermostatSensorEuFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
