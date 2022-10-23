import IconFlightLandFill0Wght100Grad0Opsz48 from '../components/FlightLandFill0Wght100Grad0Opsz48'
import IconFlightLandFill0Wght200Grad0Opsz48 from '../components/FlightLandFill0Wght200Grad0Opsz48'
import IconFlightLandFill0Wght300Grad0Opsz48 from '../components/FlightLandFill0Wght300Grad0Opsz48'
import IconFlightLandFill0Wght400Grad0Opsz48 from '../components/FlightLandFill0Wght400Grad0Opsz48'
import IconFlightLandFill0Wght500Grad0Opsz48 from '../components/FlightLandFill0Wght500Grad0Opsz48'
import IconFlightLandFill0Wght600Grad0Opsz48 from '../components/FlightLandFill0Wght600Grad0Opsz48'
import IconFlightLandFill0Wght700Grad0Opsz48 from '../components/FlightLandFill0Wght700Grad0Opsz48'
import IconFlightLandFill1Wght100Grad0Opsz48 from '../components/FlightLandFill1Wght100Grad0Opsz48'
import IconFlightLandFill1Wght200Grad0Opsz48 from '../components/FlightLandFill1Wght200Grad0Opsz48'
import IconFlightLandFill1Wght300Grad0Opsz48 from '../components/FlightLandFill1Wght300Grad0Opsz48'
import IconFlightLandFill1Wght400Grad0Opsz48 from '../components/FlightLandFill1Wght400Grad0Opsz48'
import IconFlightLandFill1Wght500Grad0Opsz48 from '../components/FlightLandFill1Wght500Grad0Opsz48'
import IconFlightLandFill1Wght600Grad0Opsz48 from '../components/FlightLandFill1Wght600Grad0Opsz48'
import IconFlightLandFill1Wght700Grad0Opsz48 from '../components/FlightLandFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFlightLand = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFlightLandFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFlightLandFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFlightLandFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFlightLandFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFlightLandFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFlightLandFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFlightLandFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFlightLandFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFlightLandFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFlightLandFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFlightLandFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFlightLandFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFlightLandFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFlightLandFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
