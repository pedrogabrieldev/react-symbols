import IconTripOriginFill0Wght100Grad0Opsz48 from '../components/TripOriginFill0Wght100Grad0Opsz48'
import IconTripOriginFill0Wght200Grad0Opsz48 from '../components/TripOriginFill0Wght200Grad0Opsz48'
import IconTripOriginFill0Wght300Grad0Opsz48 from '../components/TripOriginFill0Wght300Grad0Opsz48'
import IconTripOriginFill0Wght400Grad0Opsz48 from '../components/TripOriginFill0Wght400Grad0Opsz48'
import IconTripOriginFill0Wght500Grad0Opsz48 from '../components/TripOriginFill0Wght500Grad0Opsz48'
import IconTripOriginFill0Wght600Grad0Opsz48 from '../components/TripOriginFill0Wght600Grad0Opsz48'
import IconTripOriginFill0Wght700Grad0Opsz48 from '../components/TripOriginFill0Wght700Grad0Opsz48'
import IconTripOriginFill1Wght100Grad0Opsz48 from '../components/TripOriginFill1Wght100Grad0Opsz48'
import IconTripOriginFill1Wght200Grad0Opsz48 from '../components/TripOriginFill1Wght200Grad0Opsz48'
import IconTripOriginFill1Wght300Grad0Opsz48 from '../components/TripOriginFill1Wght300Grad0Opsz48'
import IconTripOriginFill1Wght400Grad0Opsz48 from '../components/TripOriginFill1Wght400Grad0Opsz48'
import IconTripOriginFill1Wght500Grad0Opsz48 from '../components/TripOriginFill1Wght500Grad0Opsz48'
import IconTripOriginFill1Wght600Grad0Opsz48 from '../components/TripOriginFill1Wght600Grad0Opsz48'
import IconTripOriginFill1Wght700Grad0Opsz48 from '../components/TripOriginFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTripOrigin = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTripOriginFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTripOriginFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTripOriginFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTripOriginFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTripOriginFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTripOriginFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTripOriginFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTripOriginFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTripOriginFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTripOriginFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTripOriginFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTripOriginFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTripOriginFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTripOriginFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
