import IconAirlinesFill0Wght100Grad0Opsz48 from '../components/AirlinesFill0Wght100Grad0Opsz48'
import IconAirlinesFill0Wght200Grad0Opsz48 from '../components/AirlinesFill0Wght200Grad0Opsz48'
import IconAirlinesFill0Wght300Grad0Opsz48 from '../components/AirlinesFill0Wght300Grad0Opsz48'
import IconAirlinesFill0Wght400Grad0Opsz48 from '../components/AirlinesFill0Wght400Grad0Opsz48'
import IconAirlinesFill0Wght500Grad0Opsz48 from '../components/AirlinesFill0Wght500Grad0Opsz48'
import IconAirlinesFill0Wght600Grad0Opsz48 from '../components/AirlinesFill0Wght600Grad0Opsz48'
import IconAirlinesFill0Wght700Grad0Opsz48 from '../components/AirlinesFill0Wght700Grad0Opsz48'
import IconAirlinesFill1Wght100Grad0Opsz48 from '../components/AirlinesFill1Wght100Grad0Opsz48'
import IconAirlinesFill1Wght200Grad0Opsz48 from '../components/AirlinesFill1Wght200Grad0Opsz48'
import IconAirlinesFill1Wght300Grad0Opsz48 from '../components/AirlinesFill1Wght300Grad0Opsz48'
import IconAirlinesFill1Wght400Grad0Opsz48 from '../components/AirlinesFill1Wght400Grad0Opsz48'
import IconAirlinesFill1Wght500Grad0Opsz48 from '../components/AirlinesFill1Wght500Grad0Opsz48'
import IconAirlinesFill1Wght600Grad0Opsz48 from '../components/AirlinesFill1Wght600Grad0Opsz48'
import IconAirlinesFill1Wght700Grad0Opsz48 from '../components/AirlinesFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAirlines = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAirlinesFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAirlinesFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAirlinesFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAirlinesFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAirlinesFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAirlinesFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAirlinesFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAirlinesFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAirlinesFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAirlinesFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAirlinesFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAirlinesFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAirlinesFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAirlinesFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
