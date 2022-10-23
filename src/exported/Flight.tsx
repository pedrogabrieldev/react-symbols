import IconFlightFill0Wght100Grad0Opsz48 from '../components/FlightFill0Wght100Grad0Opsz48'
import IconFlightFill0Wght200Grad0Opsz48 from '../components/FlightFill0Wght200Grad0Opsz48'
import IconFlightFill0Wght300Grad0Opsz48 from '../components/FlightFill0Wght300Grad0Opsz48'
import IconFlightFill0Wght400Grad0Opsz48 from '../components/FlightFill0Wght400Grad0Opsz48'
import IconFlightFill0Wght500Grad0Opsz48 from '../components/FlightFill0Wght500Grad0Opsz48'
import IconFlightFill0Wght600Grad0Opsz48 from '../components/FlightFill0Wght600Grad0Opsz48'
import IconFlightFill0Wght700Grad0Opsz48 from '../components/FlightFill0Wght700Grad0Opsz48'
import IconFlightFill1Wght100Grad0Opsz48 from '../components/FlightFill1Wght100Grad0Opsz48'
import IconFlightFill1Wght200Grad0Opsz48 from '../components/FlightFill1Wght200Grad0Opsz48'
import IconFlightFill1Wght300Grad0Opsz48 from '../components/FlightFill1Wght300Grad0Opsz48'
import IconFlightFill1Wght400Grad0Opsz48 from '../components/FlightFill1Wght400Grad0Opsz48'
import IconFlightFill1Wght500Grad0Opsz48 from '../components/FlightFill1Wght500Grad0Opsz48'
import IconFlightFill1Wght600Grad0Opsz48 from '../components/FlightFill1Wght600Grad0Opsz48'
import IconFlightFill1Wght700Grad0Opsz48 from '../components/FlightFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFlight = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFlightFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFlightFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFlightFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFlightFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFlightFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFlightFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFlightFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFlightFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFlightFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFlightFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFlightFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFlightFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFlightFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFlightFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
