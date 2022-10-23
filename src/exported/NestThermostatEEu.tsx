import IconNestThermostatEEuFill0Wght100Grad0Opsz48 from '../components/NestThermostatEEuFill0Wght100Grad0Opsz48'
import IconNestThermostatEEuFill0Wght200Grad0Opsz48 from '../components/NestThermostatEEuFill0Wght200Grad0Opsz48'
import IconNestThermostatEEuFill0Wght300Grad0Opsz48 from '../components/NestThermostatEEuFill0Wght300Grad0Opsz48'
import IconNestThermostatEEuFill0Wght400Grad0Opsz48 from '../components/NestThermostatEEuFill0Wght400Grad0Opsz48'
import IconNestThermostatEEuFill0Wght500Grad0Opsz48 from '../components/NestThermostatEEuFill0Wght500Grad0Opsz48'
import IconNestThermostatEEuFill0Wght600Grad0Opsz48 from '../components/NestThermostatEEuFill0Wght600Grad0Opsz48'
import IconNestThermostatEEuFill0Wght700Grad0Opsz48 from '../components/NestThermostatEEuFill0Wght700Grad0Opsz48'
import IconNestThermostatEEuFill1Wght100Grad0Opsz48 from '../components/NestThermostatEEuFill1Wght100Grad0Opsz48'
import IconNestThermostatEEuFill1Wght200Grad0Opsz48 from '../components/NestThermostatEEuFill1Wght200Grad0Opsz48'
import IconNestThermostatEEuFill1Wght300Grad0Opsz48 from '../components/NestThermostatEEuFill1Wght300Grad0Opsz48'
import IconNestThermostatEEuFill1Wght400Grad0Opsz48 from '../components/NestThermostatEEuFill1Wght400Grad0Opsz48'
import IconNestThermostatEEuFill1Wght500Grad0Opsz48 from '../components/NestThermostatEEuFill1Wght500Grad0Opsz48'
import IconNestThermostatEEuFill1Wght600Grad0Opsz48 from '../components/NestThermostatEEuFill1Wght600Grad0Opsz48'
import IconNestThermostatEEuFill1Wght700Grad0Opsz48 from '../components/NestThermostatEEuFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestThermostatEEu = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestThermostatEEuFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestThermostatEEuFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestThermostatEEuFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestThermostatEEuFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestThermostatEEuFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestThermostatEEuFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestThermostatEEuFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestThermostatEEuFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestThermostatEEuFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestThermostatEEuFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestThermostatEEuFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestThermostatEEuFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestThermostatEEuFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestThermostatEEuFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
