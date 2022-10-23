import IconDeviceThermostatFill0Wght100Grad0Opsz48 from '../components/DeviceThermostatFill0Wght100Grad0Opsz48'
import IconDeviceThermostatFill0Wght200Grad0Opsz48 from '../components/DeviceThermostatFill0Wght200Grad0Opsz48'
import IconDeviceThermostatFill0Wght300Grad0Opsz48 from '../components/DeviceThermostatFill0Wght300Grad0Opsz48'
import IconDeviceThermostatFill0Wght400Grad0Opsz48 from '../components/DeviceThermostatFill0Wght400Grad0Opsz48'
import IconDeviceThermostatFill0Wght500Grad0Opsz48 from '../components/DeviceThermostatFill0Wght500Grad0Opsz48'
import IconDeviceThermostatFill0Wght600Grad0Opsz48 from '../components/DeviceThermostatFill0Wght600Grad0Opsz48'
import IconDeviceThermostatFill0Wght700Grad0Opsz48 from '../components/DeviceThermostatFill0Wght700Grad0Opsz48'
import IconDeviceThermostatFill1Wght100Grad0Opsz48 from '../components/DeviceThermostatFill1Wght100Grad0Opsz48'
import IconDeviceThermostatFill1Wght200Grad0Opsz48 from '../components/DeviceThermostatFill1Wght200Grad0Opsz48'
import IconDeviceThermostatFill1Wght300Grad0Opsz48 from '../components/DeviceThermostatFill1Wght300Grad0Opsz48'
import IconDeviceThermostatFill1Wght400Grad0Opsz48 from '../components/DeviceThermostatFill1Wght400Grad0Opsz48'
import IconDeviceThermostatFill1Wght500Grad0Opsz48 from '../components/DeviceThermostatFill1Wght500Grad0Opsz48'
import IconDeviceThermostatFill1Wght600Grad0Opsz48 from '../components/DeviceThermostatFill1Wght600Grad0Opsz48'
import IconDeviceThermostatFill1Wght700Grad0Opsz48 from '../components/DeviceThermostatFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDeviceThermostat = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDeviceThermostatFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDeviceThermostatFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDeviceThermostatFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDeviceThermostatFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDeviceThermostatFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDeviceThermostatFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDeviceThermostatFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDeviceThermostatFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDeviceThermostatFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDeviceThermostatFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDeviceThermostatFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDeviceThermostatFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDeviceThermostatFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDeviceThermostatFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
