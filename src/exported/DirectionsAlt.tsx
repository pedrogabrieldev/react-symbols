import IconDirectionsAltFill0Wght100Grad0Opsz48 from '../components/DirectionsAltFill0Wght100Grad0Opsz48'
import IconDirectionsAltFill0Wght200Grad0Opsz48 from '../components/DirectionsAltFill0Wght200Grad0Opsz48'
import IconDirectionsAltFill0Wght300Grad0Opsz48 from '../components/DirectionsAltFill0Wght300Grad0Opsz48'
import IconDirectionsAltFill0Wght400Grad0Opsz48 from '../components/DirectionsAltFill0Wght400Grad0Opsz48'
import IconDirectionsAltFill0Wght500Grad0Opsz48 from '../components/DirectionsAltFill0Wght500Grad0Opsz48'
import IconDirectionsAltFill0Wght600Grad0Opsz48 from '../components/DirectionsAltFill0Wght600Grad0Opsz48'
import IconDirectionsAltFill0Wght700Grad0Opsz48 from '../components/DirectionsAltFill0Wght700Grad0Opsz48'
import IconDirectionsAltFill1Wght100Grad0Opsz48 from '../components/DirectionsAltFill1Wght100Grad0Opsz48'
import IconDirectionsAltFill1Wght200Grad0Opsz48 from '../components/DirectionsAltFill1Wght200Grad0Opsz48'
import IconDirectionsAltFill1Wght300Grad0Opsz48 from '../components/DirectionsAltFill1Wght300Grad0Opsz48'
import IconDirectionsAltFill1Wght400Grad0Opsz48 from '../components/DirectionsAltFill1Wght400Grad0Opsz48'
import IconDirectionsAltFill1Wght500Grad0Opsz48 from '../components/DirectionsAltFill1Wght500Grad0Opsz48'
import IconDirectionsAltFill1Wght600Grad0Opsz48 from '../components/DirectionsAltFill1Wght600Grad0Opsz48'
import IconDirectionsAltFill1Wght700Grad0Opsz48 from '../components/DirectionsAltFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDirectionsAlt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDirectionsAltFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDirectionsAltFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDirectionsAltFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDirectionsAltFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDirectionsAltFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDirectionsAltFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDirectionsAltFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDirectionsAltFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDirectionsAltFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDirectionsAltFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDirectionsAltFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDirectionsAltFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDirectionsAltFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDirectionsAltFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
