import IconDirectionsBoatFill0Wght100Grad0Opsz48 from '../components/DirectionsBoatFill0Wght100Grad0Opsz48'
import IconDirectionsBoatFill0Wght200Grad0Opsz48 from '../components/DirectionsBoatFill0Wght200Grad0Opsz48'
import IconDirectionsBoatFill0Wght300Grad0Opsz48 from '../components/DirectionsBoatFill0Wght300Grad0Opsz48'
import IconDirectionsBoatFill0Wght400Grad0Opsz48 from '../components/DirectionsBoatFill0Wght400Grad0Opsz48'
import IconDirectionsBoatFill0Wght500Grad0Opsz48 from '../components/DirectionsBoatFill0Wght500Grad0Opsz48'
import IconDirectionsBoatFill0Wght600Grad0Opsz48 from '../components/DirectionsBoatFill0Wght600Grad0Opsz48'
import IconDirectionsBoatFill0Wght700Grad0Opsz48 from '../components/DirectionsBoatFill0Wght700Grad0Opsz48'
import IconDirectionsBoatFill1Wght100Grad0Opsz48 from '../components/DirectionsBoatFill1Wght100Grad0Opsz48'
import IconDirectionsBoatFill1Wght200Grad0Opsz48 from '../components/DirectionsBoatFill1Wght200Grad0Opsz48'
import IconDirectionsBoatFill1Wght300Grad0Opsz48 from '../components/DirectionsBoatFill1Wght300Grad0Opsz48'
import IconDirectionsBoatFill1Wght400Grad0Opsz48 from '../components/DirectionsBoatFill1Wght400Grad0Opsz48'
import IconDirectionsBoatFill1Wght500Grad0Opsz48 from '../components/DirectionsBoatFill1Wght500Grad0Opsz48'
import IconDirectionsBoatFill1Wght600Grad0Opsz48 from '../components/DirectionsBoatFill1Wght600Grad0Opsz48'
import IconDirectionsBoatFill1Wght700Grad0Opsz48 from '../components/DirectionsBoatFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDirectionsBoat = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDirectionsBoatFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDirectionsBoatFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDirectionsBoatFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDirectionsBoatFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDirectionsBoatFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDirectionsBoatFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDirectionsBoatFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDirectionsBoatFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDirectionsBoatFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDirectionsBoatFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDirectionsBoatFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDirectionsBoatFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDirectionsBoatFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDirectionsBoatFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
