import IconThermostatAutoFill0Wght100Grad0Opsz48 from '../components/ThermostatAutoFill0Wght100Grad0Opsz48'
import IconThermostatAutoFill0Wght200Grad0Opsz48 from '../components/ThermostatAutoFill0Wght200Grad0Opsz48'
import IconThermostatAutoFill0Wght300Grad0Opsz48 from '../components/ThermostatAutoFill0Wght300Grad0Opsz48'
import IconThermostatAutoFill0Wght400Grad0Opsz48 from '../components/ThermostatAutoFill0Wght400Grad0Opsz48'
import IconThermostatAutoFill0Wght500Grad0Opsz48 from '../components/ThermostatAutoFill0Wght500Grad0Opsz48'
import IconThermostatAutoFill0Wght600Grad0Opsz48 from '../components/ThermostatAutoFill0Wght600Grad0Opsz48'
import IconThermostatAutoFill0Wght700Grad0Opsz48 from '../components/ThermostatAutoFill0Wght700Grad0Opsz48'
import IconThermostatAutoFill1Wght100Grad0Opsz48 from '../components/ThermostatAutoFill1Wght100Grad0Opsz48'
import IconThermostatAutoFill1Wght200Grad0Opsz48 from '../components/ThermostatAutoFill1Wght200Grad0Opsz48'
import IconThermostatAutoFill1Wght300Grad0Opsz48 from '../components/ThermostatAutoFill1Wght300Grad0Opsz48'
import IconThermostatAutoFill1Wght400Grad0Opsz48 from '../components/ThermostatAutoFill1Wght400Grad0Opsz48'
import IconThermostatAutoFill1Wght500Grad0Opsz48 from '../components/ThermostatAutoFill1Wght500Grad0Opsz48'
import IconThermostatAutoFill1Wght600Grad0Opsz48 from '../components/ThermostatAutoFill1Wght600Grad0Opsz48'
import IconThermostatAutoFill1Wght700Grad0Opsz48 from '../components/ThermostatAutoFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconThermostatAuto = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconThermostatAutoFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconThermostatAutoFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconThermostatAutoFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconThermostatAutoFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconThermostatAutoFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconThermostatAutoFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconThermostatAutoFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconThermostatAutoFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconThermostatAutoFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconThermostatAutoFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconThermostatAutoFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconThermostatAutoFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconThermostatAutoFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconThermostatAutoFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
