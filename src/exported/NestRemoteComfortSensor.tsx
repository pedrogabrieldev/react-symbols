import IconNestRemoteComfortSensorFill0Wght100Grad0Opsz48 from '../components/NestRemoteComfortSensorFill0Wght100Grad0Opsz48'
import IconNestRemoteComfortSensorFill0Wght200Grad0Opsz48 from '../components/NestRemoteComfortSensorFill0Wght200Grad0Opsz48'
import IconNestRemoteComfortSensorFill0Wght300Grad0Opsz48 from '../components/NestRemoteComfortSensorFill0Wght300Grad0Opsz48'
import IconNestRemoteComfortSensorFill0Wght400Grad0Opsz48 from '../components/NestRemoteComfortSensorFill0Wght400Grad0Opsz48'
import IconNestRemoteComfortSensorFill0Wght500Grad0Opsz48 from '../components/NestRemoteComfortSensorFill0Wght500Grad0Opsz48'
import IconNestRemoteComfortSensorFill0Wght600Grad0Opsz48 from '../components/NestRemoteComfortSensorFill0Wght600Grad0Opsz48'
import IconNestRemoteComfortSensorFill0Wght700Grad0Opsz48 from '../components/NestRemoteComfortSensorFill0Wght700Grad0Opsz48'
import IconNestRemoteComfortSensorFill1Wght100Grad0Opsz48 from '../components/NestRemoteComfortSensorFill1Wght100Grad0Opsz48'
import IconNestRemoteComfortSensorFill1Wght200Grad0Opsz48 from '../components/NestRemoteComfortSensorFill1Wght200Grad0Opsz48'
import IconNestRemoteComfortSensorFill1Wght300Grad0Opsz48 from '../components/NestRemoteComfortSensorFill1Wght300Grad0Opsz48'
import IconNestRemoteComfortSensorFill1Wght400Grad0Opsz48 from '../components/NestRemoteComfortSensorFill1Wght400Grad0Opsz48'
import IconNestRemoteComfortSensorFill1Wght500Grad0Opsz48 from '../components/NestRemoteComfortSensorFill1Wght500Grad0Opsz48'
import IconNestRemoteComfortSensorFill1Wght600Grad0Opsz48 from '../components/NestRemoteComfortSensorFill1Wght600Grad0Opsz48'
import IconNestRemoteComfortSensorFill1Wght700Grad0Opsz48 from '../components/NestRemoteComfortSensorFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestRemoteComfortSensor = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestRemoteComfortSensorFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestRemoteComfortSensorFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestRemoteComfortSensorFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestRemoteComfortSensorFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestRemoteComfortSensorFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestRemoteComfortSensorFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestRemoteComfortSensorFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestRemoteComfortSensorFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestRemoteComfortSensorFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestRemoteComfortSensorFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestRemoteComfortSensorFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestRemoteComfortSensorFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestRemoteComfortSensorFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestRemoteComfortSensorFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
