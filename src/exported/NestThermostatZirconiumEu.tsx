import IconNestThermostatZirconiumEuFill0Wght100Grad0Opsz48 from '../components/NestThermostatZirconiumEuFill0Wght100Grad0Opsz48'
import IconNestThermostatZirconiumEuFill0Wght200Grad0Opsz48 from '../components/NestThermostatZirconiumEuFill0Wght200Grad0Opsz48'
import IconNestThermostatZirconiumEuFill0Wght300Grad0Opsz48 from '../components/NestThermostatZirconiumEuFill0Wght300Grad0Opsz48'
import IconNestThermostatZirconiumEuFill0Wght400Grad0Opsz48 from '../components/NestThermostatZirconiumEuFill0Wght400Grad0Opsz48'
import IconNestThermostatZirconiumEuFill0Wght500Grad0Opsz48 from '../components/NestThermostatZirconiumEuFill0Wght500Grad0Opsz48'
import IconNestThermostatZirconiumEuFill0Wght600Grad0Opsz48 from '../components/NestThermostatZirconiumEuFill0Wght600Grad0Opsz48'
import IconNestThermostatZirconiumEuFill0Wght700Grad0Opsz48 from '../components/NestThermostatZirconiumEuFill0Wght700Grad0Opsz48'
import IconNestThermostatZirconiumEuFill1Wght100Grad0Opsz48 from '../components/NestThermostatZirconiumEuFill1Wght100Grad0Opsz48'
import IconNestThermostatZirconiumEuFill1Wght200Grad0Opsz48 from '../components/NestThermostatZirconiumEuFill1Wght200Grad0Opsz48'
import IconNestThermostatZirconiumEuFill1Wght300Grad0Opsz48 from '../components/NestThermostatZirconiumEuFill1Wght300Grad0Opsz48'
import IconNestThermostatZirconiumEuFill1Wght400Grad0Opsz48 from '../components/NestThermostatZirconiumEuFill1Wght400Grad0Opsz48'
import IconNestThermostatZirconiumEuFill1Wght500Grad0Opsz48 from '../components/NestThermostatZirconiumEuFill1Wght500Grad0Opsz48'
import IconNestThermostatZirconiumEuFill1Wght600Grad0Opsz48 from '../components/NestThermostatZirconiumEuFill1Wght600Grad0Opsz48'
import IconNestThermostatZirconiumEuFill1Wght700Grad0Opsz48 from '../components/NestThermostatZirconiumEuFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestThermostatZirconiumEu = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestThermostatZirconiumEuFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestThermostatZirconiumEuFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestThermostatZirconiumEuFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestThermostatZirconiumEuFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestThermostatZirconiumEuFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestThermostatZirconiumEuFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestThermostatZirconiumEuFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestThermostatZirconiumEuFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestThermostatZirconiumEuFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestThermostatZirconiumEuFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestThermostatZirconiumEuFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestThermostatZirconiumEuFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestThermostatZirconiumEuFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestThermostatZirconiumEuFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
