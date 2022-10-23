import IconAirlineStopsFill0Wght100Grad0Opsz48 from '../components/AirlineStopsFill0Wght100Grad0Opsz48'
import IconAirlineStopsFill0Wght200Grad0Opsz48 from '../components/AirlineStopsFill0Wght200Grad0Opsz48'
import IconAirlineStopsFill0Wght300Grad0Opsz48 from '../components/AirlineStopsFill0Wght300Grad0Opsz48'
import IconAirlineStopsFill0Wght400Grad0Opsz48 from '../components/AirlineStopsFill0Wght400Grad0Opsz48'
import IconAirlineStopsFill0Wght500Grad0Opsz48 from '../components/AirlineStopsFill0Wght500Grad0Opsz48'
import IconAirlineStopsFill0Wght600Grad0Opsz48 from '../components/AirlineStopsFill0Wght600Grad0Opsz48'
import IconAirlineStopsFill0Wght700Grad0Opsz48 from '../components/AirlineStopsFill0Wght700Grad0Opsz48'
import IconAirlineStopsFill1Wght100Grad0Opsz48 from '../components/AirlineStopsFill1Wght100Grad0Opsz48'
import IconAirlineStopsFill1Wght200Grad0Opsz48 from '../components/AirlineStopsFill1Wght200Grad0Opsz48'
import IconAirlineStopsFill1Wght300Grad0Opsz48 from '../components/AirlineStopsFill1Wght300Grad0Opsz48'
import IconAirlineStopsFill1Wght400Grad0Opsz48 from '../components/AirlineStopsFill1Wght400Grad0Opsz48'
import IconAirlineStopsFill1Wght500Grad0Opsz48 from '../components/AirlineStopsFill1Wght500Grad0Opsz48'
import IconAirlineStopsFill1Wght600Grad0Opsz48 from '../components/AirlineStopsFill1Wght600Grad0Opsz48'
import IconAirlineStopsFill1Wght700Grad0Opsz48 from '../components/AirlineStopsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAirlineStops = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAirlineStopsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAirlineStopsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAirlineStopsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAirlineStopsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAirlineStopsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAirlineStopsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAirlineStopsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAirlineStopsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAirlineStopsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAirlineStopsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAirlineStopsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAirlineStopsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAirlineStopsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAirlineStopsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
