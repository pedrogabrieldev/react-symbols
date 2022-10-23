import IconDirectionsAltOffFill0Wght100Grad0Opsz48 from '../components/DirectionsAltOffFill0Wght100Grad0Opsz48'
import IconDirectionsAltOffFill0Wght200Grad0Opsz48 from '../components/DirectionsAltOffFill0Wght200Grad0Opsz48'
import IconDirectionsAltOffFill0Wght300Grad0Opsz48 from '../components/DirectionsAltOffFill0Wght300Grad0Opsz48'
import IconDirectionsAltOffFill0Wght400Grad0Opsz48 from '../components/DirectionsAltOffFill0Wght400Grad0Opsz48'
import IconDirectionsAltOffFill0Wght500Grad0Opsz48 from '../components/DirectionsAltOffFill0Wght500Grad0Opsz48'
import IconDirectionsAltOffFill0Wght600Grad0Opsz48 from '../components/DirectionsAltOffFill0Wght600Grad0Opsz48'
import IconDirectionsAltOffFill0Wght700Grad0Opsz48 from '../components/DirectionsAltOffFill0Wght700Grad0Opsz48'
import IconDirectionsAltOffFill1Wght100Grad0Opsz48 from '../components/DirectionsAltOffFill1Wght100Grad0Opsz48'
import IconDirectionsAltOffFill1Wght200Grad0Opsz48 from '../components/DirectionsAltOffFill1Wght200Grad0Opsz48'
import IconDirectionsAltOffFill1Wght300Grad0Opsz48 from '../components/DirectionsAltOffFill1Wght300Grad0Opsz48'
import IconDirectionsAltOffFill1Wght400Grad0Opsz48 from '../components/DirectionsAltOffFill1Wght400Grad0Opsz48'
import IconDirectionsAltOffFill1Wght500Grad0Opsz48 from '../components/DirectionsAltOffFill1Wght500Grad0Opsz48'
import IconDirectionsAltOffFill1Wght600Grad0Opsz48 from '../components/DirectionsAltOffFill1Wght600Grad0Opsz48'
import IconDirectionsAltOffFill1Wght700Grad0Opsz48 from '../components/DirectionsAltOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDirectionsAltOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDirectionsAltOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDirectionsAltOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDirectionsAltOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDirectionsAltOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDirectionsAltOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDirectionsAltOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDirectionsAltOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDirectionsAltOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDirectionsAltOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDirectionsAltOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDirectionsAltOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDirectionsAltOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDirectionsAltOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDirectionsAltOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
