import IconFlightTakeoffFill0Wght100Grad0Opsz48 from '../components/FlightTakeoffFill0Wght100Grad0Opsz48'
import IconFlightTakeoffFill0Wght200Grad0Opsz48 from '../components/FlightTakeoffFill0Wght200Grad0Opsz48'
import IconFlightTakeoffFill0Wght300Grad0Opsz48 from '../components/FlightTakeoffFill0Wght300Grad0Opsz48'
import IconFlightTakeoffFill0Wght400Grad0Opsz48 from '../components/FlightTakeoffFill0Wght400Grad0Opsz48'
import IconFlightTakeoffFill0Wght500Grad0Opsz48 from '../components/FlightTakeoffFill0Wght500Grad0Opsz48'
import IconFlightTakeoffFill0Wght600Grad0Opsz48 from '../components/FlightTakeoffFill0Wght600Grad0Opsz48'
import IconFlightTakeoffFill0Wght700Grad0Opsz48 from '../components/FlightTakeoffFill0Wght700Grad0Opsz48'
import IconFlightTakeoffFill1Wght100Grad0Opsz48 from '../components/FlightTakeoffFill1Wght100Grad0Opsz48'
import IconFlightTakeoffFill1Wght200Grad0Opsz48 from '../components/FlightTakeoffFill1Wght200Grad0Opsz48'
import IconFlightTakeoffFill1Wght300Grad0Opsz48 from '../components/FlightTakeoffFill1Wght300Grad0Opsz48'
import IconFlightTakeoffFill1Wght400Grad0Opsz48 from '../components/FlightTakeoffFill1Wght400Grad0Opsz48'
import IconFlightTakeoffFill1Wght500Grad0Opsz48 from '../components/FlightTakeoffFill1Wght500Grad0Opsz48'
import IconFlightTakeoffFill1Wght600Grad0Opsz48 from '../components/FlightTakeoffFill1Wght600Grad0Opsz48'
import IconFlightTakeoffFill1Wght700Grad0Opsz48 from '../components/FlightTakeoffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFlightTakeoff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFlightTakeoffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFlightTakeoffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFlightTakeoffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFlightTakeoffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFlightTakeoffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFlightTakeoffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFlightTakeoffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFlightTakeoffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFlightTakeoffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFlightTakeoffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFlightTakeoffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFlightTakeoffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFlightTakeoffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFlightTakeoffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
