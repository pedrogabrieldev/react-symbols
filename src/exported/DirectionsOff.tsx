import IconDirectionsOffFill0Wght100Grad0Opsz48 from '../components/DirectionsOffFill0Wght100Grad0Opsz48'
import IconDirectionsOffFill0Wght200Grad0Opsz48 from '../components/DirectionsOffFill0Wght200Grad0Opsz48'
import IconDirectionsOffFill0Wght300Grad0Opsz48 from '../components/DirectionsOffFill0Wght300Grad0Opsz48'
import IconDirectionsOffFill0Wght400Grad0Opsz48 from '../components/DirectionsOffFill0Wght400Grad0Opsz48'
import IconDirectionsOffFill0Wght500Grad0Opsz48 from '../components/DirectionsOffFill0Wght500Grad0Opsz48'
import IconDirectionsOffFill0Wght600Grad0Opsz48 from '../components/DirectionsOffFill0Wght600Grad0Opsz48'
import IconDirectionsOffFill0Wght700Grad0Opsz48 from '../components/DirectionsOffFill0Wght700Grad0Opsz48'
import IconDirectionsOffFill1Wght100Grad0Opsz48 from '../components/DirectionsOffFill1Wght100Grad0Opsz48'
import IconDirectionsOffFill1Wght200Grad0Opsz48 from '../components/DirectionsOffFill1Wght200Grad0Opsz48'
import IconDirectionsOffFill1Wght300Grad0Opsz48 from '../components/DirectionsOffFill1Wght300Grad0Opsz48'
import IconDirectionsOffFill1Wght400Grad0Opsz48 from '../components/DirectionsOffFill1Wght400Grad0Opsz48'
import IconDirectionsOffFill1Wght500Grad0Opsz48 from '../components/DirectionsOffFill1Wght500Grad0Opsz48'
import IconDirectionsOffFill1Wght600Grad0Opsz48 from '../components/DirectionsOffFill1Wght600Grad0Opsz48'
import IconDirectionsOffFill1Wght700Grad0Opsz48 from '../components/DirectionsOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDirectionsOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDirectionsOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDirectionsOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDirectionsOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDirectionsOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDirectionsOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDirectionsOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDirectionsOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDirectionsOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDirectionsOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDirectionsOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDirectionsOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDirectionsOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDirectionsOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDirectionsOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
