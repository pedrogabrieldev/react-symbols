import IconThermostatCarbonFill0Wght100Grad0Opsz48 from '../components/ThermostatCarbonFill0Wght100Grad0Opsz48'
import IconThermostatCarbonFill0Wght200Grad0Opsz48 from '../components/ThermostatCarbonFill0Wght200Grad0Opsz48'
import IconThermostatCarbonFill0Wght300Grad0Opsz48 from '../components/ThermostatCarbonFill0Wght300Grad0Opsz48'
import IconThermostatCarbonFill0Wght400Grad0Opsz48 from '../components/ThermostatCarbonFill0Wght400Grad0Opsz48'
import IconThermostatCarbonFill0Wght500Grad0Opsz48 from '../components/ThermostatCarbonFill0Wght500Grad0Opsz48'
import IconThermostatCarbonFill0Wght600Grad0Opsz48 from '../components/ThermostatCarbonFill0Wght600Grad0Opsz48'
import IconThermostatCarbonFill0Wght700Grad0Opsz48 from '../components/ThermostatCarbonFill0Wght700Grad0Opsz48'
import IconThermostatCarbonFill1Wght100Grad0Opsz48 from '../components/ThermostatCarbonFill1Wght100Grad0Opsz48'
import IconThermostatCarbonFill1Wght200Grad0Opsz48 from '../components/ThermostatCarbonFill1Wght200Grad0Opsz48'
import IconThermostatCarbonFill1Wght300Grad0Opsz48 from '../components/ThermostatCarbonFill1Wght300Grad0Opsz48'
import IconThermostatCarbonFill1Wght400Grad0Opsz48 from '../components/ThermostatCarbonFill1Wght400Grad0Opsz48'
import IconThermostatCarbonFill1Wght500Grad0Opsz48 from '../components/ThermostatCarbonFill1Wght500Grad0Opsz48'
import IconThermostatCarbonFill1Wght600Grad0Opsz48 from '../components/ThermostatCarbonFill1Wght600Grad0Opsz48'
import IconThermostatCarbonFill1Wght700Grad0Opsz48 from '../components/ThermostatCarbonFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconThermostatCarbon = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconThermostatCarbonFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconThermostatCarbonFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconThermostatCarbonFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconThermostatCarbonFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconThermostatCarbonFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconThermostatCarbonFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconThermostatCarbonFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconThermostatCarbonFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconThermostatCarbonFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconThermostatCarbonFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconThermostatCarbonFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconThermostatCarbonFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconThermostatCarbonFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconThermostatCarbonFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
