import IconAirplaneTicketFill0Wght100Grad0Opsz48 from '../components/AirplaneTicketFill0Wght100Grad0Opsz48'
import IconAirplaneTicketFill0Wght200Grad0Opsz48 from '../components/AirplaneTicketFill0Wght200Grad0Opsz48'
import IconAirplaneTicketFill0Wght300Grad0Opsz48 from '../components/AirplaneTicketFill0Wght300Grad0Opsz48'
import IconAirplaneTicketFill0Wght400Grad0Opsz48 from '../components/AirplaneTicketFill0Wght400Grad0Opsz48'
import IconAirplaneTicketFill0Wght500Grad0Opsz48 from '../components/AirplaneTicketFill0Wght500Grad0Opsz48'
import IconAirplaneTicketFill0Wght600Grad0Opsz48 from '../components/AirplaneTicketFill0Wght600Grad0Opsz48'
import IconAirplaneTicketFill0Wght700Grad0Opsz48 from '../components/AirplaneTicketFill0Wght700Grad0Opsz48'
import IconAirplaneTicketFill1Wght100Grad0Opsz48 from '../components/AirplaneTicketFill1Wght100Grad0Opsz48'
import IconAirplaneTicketFill1Wght200Grad0Opsz48 from '../components/AirplaneTicketFill1Wght200Grad0Opsz48'
import IconAirplaneTicketFill1Wght300Grad0Opsz48 from '../components/AirplaneTicketFill1Wght300Grad0Opsz48'
import IconAirplaneTicketFill1Wght400Grad0Opsz48 from '../components/AirplaneTicketFill1Wght400Grad0Opsz48'
import IconAirplaneTicketFill1Wght500Grad0Opsz48 from '../components/AirplaneTicketFill1Wght500Grad0Opsz48'
import IconAirplaneTicketFill1Wght600Grad0Opsz48 from '../components/AirplaneTicketFill1Wght600Grad0Opsz48'
import IconAirplaneTicketFill1Wght700Grad0Opsz48 from '../components/AirplaneTicketFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAirplaneTicket = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAirplaneTicketFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAirplaneTicketFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAirplaneTicketFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAirplaneTicketFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAirplaneTicketFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAirplaneTicketFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAirplaneTicketFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAirplaneTicketFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAirplaneTicketFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAirplaneTicketFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAirplaneTicketFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAirplaneTicketFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAirplaneTicketFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAirplaneTicketFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
