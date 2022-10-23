import IconFlightClassFill0Wght100Grad0Opsz48 from '../components/FlightClassFill0Wght100Grad0Opsz48'
import IconFlightClassFill0Wght200Grad0Opsz48 from '../components/FlightClassFill0Wght200Grad0Opsz48'
import IconFlightClassFill0Wght300Grad0Opsz48 from '../components/FlightClassFill0Wght300Grad0Opsz48'
import IconFlightClassFill0Wght400Grad0Opsz48 from '../components/FlightClassFill0Wght400Grad0Opsz48'
import IconFlightClassFill0Wght500Grad0Opsz48 from '../components/FlightClassFill0Wght500Grad0Opsz48'
import IconFlightClassFill0Wght600Grad0Opsz48 from '../components/FlightClassFill0Wght600Grad0Opsz48'
import IconFlightClassFill0Wght700Grad0Opsz48 from '../components/FlightClassFill0Wght700Grad0Opsz48'
import IconFlightClassFill1Wght100Grad0Opsz48 from '../components/FlightClassFill1Wght100Grad0Opsz48'
import IconFlightClassFill1Wght200Grad0Opsz48 from '../components/FlightClassFill1Wght200Grad0Opsz48'
import IconFlightClassFill1Wght300Grad0Opsz48 from '../components/FlightClassFill1Wght300Grad0Opsz48'
import IconFlightClassFill1Wght400Grad0Opsz48 from '../components/FlightClassFill1Wght400Grad0Opsz48'
import IconFlightClassFill1Wght500Grad0Opsz48 from '../components/FlightClassFill1Wght500Grad0Opsz48'
import IconFlightClassFill1Wght600Grad0Opsz48 from '../components/FlightClassFill1Wght600Grad0Opsz48'
import IconFlightClassFill1Wght700Grad0Opsz48 from '../components/FlightClassFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFlightClass = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFlightClassFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFlightClassFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFlightClassFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFlightClassFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFlightClassFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFlightClassFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFlightClassFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFlightClassFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFlightClassFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFlightClassFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFlightClassFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFlightClassFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFlightClassFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFlightClassFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
