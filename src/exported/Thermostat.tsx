import IconThermostatFill0Wght100Grad0Opsz48 from '../components/ThermostatFill0Wght100Grad0Opsz48'
import IconThermostatFill0Wght200Grad0Opsz48 from '../components/ThermostatFill0Wght200Grad0Opsz48'
import IconThermostatFill0Wght300Grad0Opsz48 from '../components/ThermostatFill0Wght300Grad0Opsz48'
import IconThermostatFill0Wght400Grad0Opsz48 from '../components/ThermostatFill0Wght400Grad0Opsz48'
import IconThermostatFill0Wght500Grad0Opsz48 from '../components/ThermostatFill0Wght500Grad0Opsz48'
import IconThermostatFill0Wght600Grad0Opsz48 from '../components/ThermostatFill0Wght600Grad0Opsz48'
import IconThermostatFill0Wght700Grad0Opsz48 from '../components/ThermostatFill0Wght700Grad0Opsz48'
import IconThermostatFill1Wght100Grad0Opsz48 from '../components/ThermostatFill1Wght100Grad0Opsz48'
import IconThermostatFill1Wght200Grad0Opsz48 from '../components/ThermostatFill1Wght200Grad0Opsz48'
import IconThermostatFill1Wght300Grad0Opsz48 from '../components/ThermostatFill1Wght300Grad0Opsz48'
import IconThermostatFill1Wght400Grad0Opsz48 from '../components/ThermostatFill1Wght400Grad0Opsz48'
import IconThermostatFill1Wght500Grad0Opsz48 from '../components/ThermostatFill1Wght500Grad0Opsz48'
import IconThermostatFill1Wght600Grad0Opsz48 from '../components/ThermostatFill1Wght600Grad0Opsz48'
import IconThermostatFill1Wght700Grad0Opsz48 from '../components/ThermostatFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconThermostat = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconThermostatFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconThermostatFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconThermostatFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconThermostatFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconThermostatFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconThermostatFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconThermostatFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconThermostatFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconThermostatFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconThermostatFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconThermostatFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconThermostatFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconThermostatFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconThermostatFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
