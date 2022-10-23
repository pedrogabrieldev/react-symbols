import IconDirectionsWalkFill0Wght100Grad0Opsz48 from '../components/DirectionsWalkFill0Wght100Grad0Opsz48'
import IconDirectionsWalkFill0Wght200Grad0Opsz48 from '../components/DirectionsWalkFill0Wght200Grad0Opsz48'
import IconDirectionsWalkFill0Wght300Grad0Opsz48 from '../components/DirectionsWalkFill0Wght300Grad0Opsz48'
import IconDirectionsWalkFill0Wght400Grad0Opsz48 from '../components/DirectionsWalkFill0Wght400Grad0Opsz48'
import IconDirectionsWalkFill0Wght500Grad0Opsz48 from '../components/DirectionsWalkFill0Wght500Grad0Opsz48'
import IconDirectionsWalkFill0Wght600Grad0Opsz48 from '../components/DirectionsWalkFill0Wght600Grad0Opsz48'
import IconDirectionsWalkFill0Wght700Grad0Opsz48 from '../components/DirectionsWalkFill0Wght700Grad0Opsz48'
import IconDirectionsWalkFill1Wght100Grad0Opsz48 from '../components/DirectionsWalkFill1Wght100Grad0Opsz48'
import IconDirectionsWalkFill1Wght200Grad0Opsz48 from '../components/DirectionsWalkFill1Wght200Grad0Opsz48'
import IconDirectionsWalkFill1Wght300Grad0Opsz48 from '../components/DirectionsWalkFill1Wght300Grad0Opsz48'
import IconDirectionsWalkFill1Wght400Grad0Opsz48 from '../components/DirectionsWalkFill1Wght400Grad0Opsz48'
import IconDirectionsWalkFill1Wght500Grad0Opsz48 from '../components/DirectionsWalkFill1Wght500Grad0Opsz48'
import IconDirectionsWalkFill1Wght600Grad0Opsz48 from '../components/DirectionsWalkFill1Wght600Grad0Opsz48'
import IconDirectionsWalkFill1Wght700Grad0Opsz48 from '../components/DirectionsWalkFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDirectionsWalk = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDirectionsWalkFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDirectionsWalkFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDirectionsWalkFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDirectionsWalkFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDirectionsWalkFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDirectionsWalkFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDirectionsWalkFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDirectionsWalkFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDirectionsWalkFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDirectionsWalkFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDirectionsWalkFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDirectionsWalkFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDirectionsWalkFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDirectionsWalkFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
