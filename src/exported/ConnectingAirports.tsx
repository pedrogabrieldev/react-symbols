import IconConnectingAirportsFill0Wght100Grad0Opsz48 from '../components/ConnectingAirportsFill0Wght100Grad0Opsz48'
import IconConnectingAirportsFill0Wght200Grad0Opsz48 from '../components/ConnectingAirportsFill0Wght200Grad0Opsz48'
import IconConnectingAirportsFill0Wght300Grad0Opsz48 from '../components/ConnectingAirportsFill0Wght300Grad0Opsz48'
import IconConnectingAirportsFill0Wght400Grad0Opsz48 from '../components/ConnectingAirportsFill0Wght400Grad0Opsz48'
import IconConnectingAirportsFill0Wght500Grad0Opsz48 from '../components/ConnectingAirportsFill0Wght500Grad0Opsz48'
import IconConnectingAirportsFill0Wght600Grad0Opsz48 from '../components/ConnectingAirportsFill0Wght600Grad0Opsz48'
import IconConnectingAirportsFill0Wght700Grad0Opsz48 from '../components/ConnectingAirportsFill0Wght700Grad0Opsz48'
import IconConnectingAirportsFill1Wght100Grad0Opsz48 from '../components/ConnectingAirportsFill1Wght100Grad0Opsz48'
import IconConnectingAirportsFill1Wght200Grad0Opsz48 from '../components/ConnectingAirportsFill1Wght200Grad0Opsz48'
import IconConnectingAirportsFill1Wght300Grad0Opsz48 from '../components/ConnectingAirportsFill1Wght300Grad0Opsz48'
import IconConnectingAirportsFill1Wght400Grad0Opsz48 from '../components/ConnectingAirportsFill1Wght400Grad0Opsz48'
import IconConnectingAirportsFill1Wght500Grad0Opsz48 from '../components/ConnectingAirportsFill1Wght500Grad0Opsz48'
import IconConnectingAirportsFill1Wght600Grad0Opsz48 from '../components/ConnectingAirportsFill1Wght600Grad0Opsz48'
import IconConnectingAirportsFill1Wght700Grad0Opsz48 from '../components/ConnectingAirportsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconConnectingAirports = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconConnectingAirportsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconConnectingAirportsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconConnectingAirportsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconConnectingAirportsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconConnectingAirportsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconConnectingAirportsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconConnectingAirportsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconConnectingAirportsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconConnectingAirportsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconConnectingAirportsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconConnectingAirportsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconConnectingAirportsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconConnectingAirportsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconConnectingAirportsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
