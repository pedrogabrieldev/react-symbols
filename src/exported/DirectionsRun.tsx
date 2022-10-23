import IconDirectionsRunFill0Wght100Grad0Opsz48 from '../components/DirectionsRunFill0Wght100Grad0Opsz48'
import IconDirectionsRunFill0Wght200Grad0Opsz48 from '../components/DirectionsRunFill0Wght200Grad0Opsz48'
import IconDirectionsRunFill0Wght300Grad0Opsz48 from '../components/DirectionsRunFill0Wght300Grad0Opsz48'
import IconDirectionsRunFill0Wght400Grad0Opsz48 from '../components/DirectionsRunFill0Wght400Grad0Opsz48'
import IconDirectionsRunFill0Wght500Grad0Opsz48 from '../components/DirectionsRunFill0Wght500Grad0Opsz48'
import IconDirectionsRunFill0Wght600Grad0Opsz48 from '../components/DirectionsRunFill0Wght600Grad0Opsz48'
import IconDirectionsRunFill0Wght700Grad0Opsz48 from '../components/DirectionsRunFill0Wght700Grad0Opsz48'
import IconDirectionsRunFill1Wght100Grad0Opsz48 from '../components/DirectionsRunFill1Wght100Grad0Opsz48'
import IconDirectionsRunFill1Wght200Grad0Opsz48 from '../components/DirectionsRunFill1Wght200Grad0Opsz48'
import IconDirectionsRunFill1Wght300Grad0Opsz48 from '../components/DirectionsRunFill1Wght300Grad0Opsz48'
import IconDirectionsRunFill1Wght400Grad0Opsz48 from '../components/DirectionsRunFill1Wght400Grad0Opsz48'
import IconDirectionsRunFill1Wght500Grad0Opsz48 from '../components/DirectionsRunFill1Wght500Grad0Opsz48'
import IconDirectionsRunFill1Wght600Grad0Opsz48 from '../components/DirectionsRunFill1Wght600Grad0Opsz48'
import IconDirectionsRunFill1Wght700Grad0Opsz48 from '../components/DirectionsRunFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDirectionsRun = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDirectionsRunFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDirectionsRunFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDirectionsRunFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDirectionsRunFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDirectionsRunFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDirectionsRunFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDirectionsRunFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDirectionsRunFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDirectionsRunFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDirectionsRunFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDirectionsRunFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDirectionsRunFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDirectionsRunFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDirectionsRunFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
