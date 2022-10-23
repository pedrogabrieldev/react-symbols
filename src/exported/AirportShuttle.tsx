import IconAirportShuttleFill0Wght100Grad0Opsz48 from '../components/AirportShuttleFill0Wght100Grad0Opsz48'
import IconAirportShuttleFill0Wght200Grad0Opsz48 from '../components/AirportShuttleFill0Wght200Grad0Opsz48'
import IconAirportShuttleFill0Wght300Grad0Opsz48 from '../components/AirportShuttleFill0Wght300Grad0Opsz48'
import IconAirportShuttleFill0Wght400Grad0Opsz48 from '../components/AirportShuttleFill0Wght400Grad0Opsz48'
import IconAirportShuttleFill0Wght500Grad0Opsz48 from '../components/AirportShuttleFill0Wght500Grad0Opsz48'
import IconAirportShuttleFill0Wght600Grad0Opsz48 from '../components/AirportShuttleFill0Wght600Grad0Opsz48'
import IconAirportShuttleFill0Wght700Grad0Opsz48 from '../components/AirportShuttleFill0Wght700Grad0Opsz48'
import IconAirportShuttleFill1Wght100Grad0Opsz48 from '../components/AirportShuttleFill1Wght100Grad0Opsz48'
import IconAirportShuttleFill1Wght200Grad0Opsz48 from '../components/AirportShuttleFill1Wght200Grad0Opsz48'
import IconAirportShuttleFill1Wght300Grad0Opsz48 from '../components/AirportShuttleFill1Wght300Grad0Opsz48'
import IconAirportShuttleFill1Wght400Grad0Opsz48 from '../components/AirportShuttleFill1Wght400Grad0Opsz48'
import IconAirportShuttleFill1Wght500Grad0Opsz48 from '../components/AirportShuttleFill1Wght500Grad0Opsz48'
import IconAirportShuttleFill1Wght600Grad0Opsz48 from '../components/AirportShuttleFill1Wght600Grad0Opsz48'
import IconAirportShuttleFill1Wght700Grad0Opsz48 from '../components/AirportShuttleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAirportShuttle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAirportShuttleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAirportShuttleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAirportShuttleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAirportShuttleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAirportShuttleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAirportShuttleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAirportShuttleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAirportShuttleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAirportShuttleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAirportShuttleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAirportShuttleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAirportShuttleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAirportShuttleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAirportShuttleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
