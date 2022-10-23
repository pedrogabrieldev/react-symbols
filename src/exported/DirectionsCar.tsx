import IconDirectionsCarFill0Wght100Grad0Opsz48 from '../components/DirectionsCarFill0Wght100Grad0Opsz48'
import IconDirectionsCarFill0Wght200Grad0Opsz48 from '../components/DirectionsCarFill0Wght200Grad0Opsz48'
import IconDirectionsCarFill0Wght300Grad0Opsz48 from '../components/DirectionsCarFill0Wght300Grad0Opsz48'
import IconDirectionsCarFill0Wght400Grad0Opsz48 from '../components/DirectionsCarFill0Wght400Grad0Opsz48'
import IconDirectionsCarFill0Wght500Grad0Opsz48 from '../components/DirectionsCarFill0Wght500Grad0Opsz48'
import IconDirectionsCarFill0Wght600Grad0Opsz48 from '../components/DirectionsCarFill0Wght600Grad0Opsz48'
import IconDirectionsCarFill0Wght700Grad0Opsz48 from '../components/DirectionsCarFill0Wght700Grad0Opsz48'
import IconDirectionsCarFill1Wght100Grad0Opsz48 from '../components/DirectionsCarFill1Wght100Grad0Opsz48'
import IconDirectionsCarFill1Wght200Grad0Opsz48 from '../components/DirectionsCarFill1Wght200Grad0Opsz48'
import IconDirectionsCarFill1Wght300Grad0Opsz48 from '../components/DirectionsCarFill1Wght300Grad0Opsz48'
import IconDirectionsCarFill1Wght400Grad0Opsz48 from '../components/DirectionsCarFill1Wght400Grad0Opsz48'
import IconDirectionsCarFill1Wght500Grad0Opsz48 from '../components/DirectionsCarFill1Wght500Grad0Opsz48'
import IconDirectionsCarFill1Wght600Grad0Opsz48 from '../components/DirectionsCarFill1Wght600Grad0Opsz48'
import IconDirectionsCarFill1Wght700Grad0Opsz48 from '../components/DirectionsCarFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDirectionsCar = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDirectionsCarFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDirectionsCarFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDirectionsCarFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDirectionsCarFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDirectionsCarFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDirectionsCarFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDirectionsCarFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDirectionsCarFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDirectionsCarFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDirectionsCarFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDirectionsCarFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDirectionsCarFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDirectionsCarFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDirectionsCarFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
