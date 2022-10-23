import IconTransportationFill0Wght100Grad0Opsz48 from '../components/TransportationFill0Wght100Grad0Opsz48'
import IconTransportationFill0Wght200Grad0Opsz48 from '../components/TransportationFill0Wght200Grad0Opsz48'
import IconTransportationFill0Wght300Grad0Opsz48 from '../components/TransportationFill0Wght300Grad0Opsz48'
import IconTransportationFill0Wght400Grad0Opsz48 from '../components/TransportationFill0Wght400Grad0Opsz48'
import IconTransportationFill0Wght500Grad0Opsz48 from '../components/TransportationFill0Wght500Grad0Opsz48'
import IconTransportationFill0Wght600Grad0Opsz48 from '../components/TransportationFill0Wght600Grad0Opsz48'
import IconTransportationFill0Wght700Grad0Opsz48 from '../components/TransportationFill0Wght700Grad0Opsz48'
import IconTransportationFill1Wght100Grad0Opsz48 from '../components/TransportationFill1Wght100Grad0Opsz48'
import IconTransportationFill1Wght200Grad0Opsz48 from '../components/TransportationFill1Wght200Grad0Opsz48'
import IconTransportationFill1Wght300Grad0Opsz48 from '../components/TransportationFill1Wght300Grad0Opsz48'
import IconTransportationFill1Wght400Grad0Opsz48 from '../components/TransportationFill1Wght400Grad0Opsz48'
import IconTransportationFill1Wght500Grad0Opsz48 from '../components/TransportationFill1Wght500Grad0Opsz48'
import IconTransportationFill1Wght600Grad0Opsz48 from '../components/TransportationFill1Wght600Grad0Opsz48'
import IconTransportationFill1Wght700Grad0Opsz48 from '../components/TransportationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTransportation = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTransportationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTransportationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTransportationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTransportationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTransportationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTransportationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTransportationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTransportationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTransportationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTransportationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTransportationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTransportationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTransportationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTransportationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
