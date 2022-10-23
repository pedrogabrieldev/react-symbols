import IconDirectionsSubwayFill0Wght100Grad0Opsz48 from '../components/DirectionsSubwayFill0Wght100Grad0Opsz48'
import IconDirectionsSubwayFill0Wght200Grad0Opsz48 from '../components/DirectionsSubwayFill0Wght200Grad0Opsz48'
import IconDirectionsSubwayFill0Wght300Grad0Opsz48 from '../components/DirectionsSubwayFill0Wght300Grad0Opsz48'
import IconDirectionsSubwayFill0Wght400Grad0Opsz48 from '../components/DirectionsSubwayFill0Wght400Grad0Opsz48'
import IconDirectionsSubwayFill0Wght500Grad0Opsz48 from '../components/DirectionsSubwayFill0Wght500Grad0Opsz48'
import IconDirectionsSubwayFill0Wght600Grad0Opsz48 from '../components/DirectionsSubwayFill0Wght600Grad0Opsz48'
import IconDirectionsSubwayFill0Wght700Grad0Opsz48 from '../components/DirectionsSubwayFill0Wght700Grad0Opsz48'
import IconDirectionsSubwayFill1Wght100Grad0Opsz48 from '../components/DirectionsSubwayFill1Wght100Grad0Opsz48'
import IconDirectionsSubwayFill1Wght200Grad0Opsz48 from '../components/DirectionsSubwayFill1Wght200Grad0Opsz48'
import IconDirectionsSubwayFill1Wght300Grad0Opsz48 from '../components/DirectionsSubwayFill1Wght300Grad0Opsz48'
import IconDirectionsSubwayFill1Wght400Grad0Opsz48 from '../components/DirectionsSubwayFill1Wght400Grad0Opsz48'
import IconDirectionsSubwayFill1Wght500Grad0Opsz48 from '../components/DirectionsSubwayFill1Wght500Grad0Opsz48'
import IconDirectionsSubwayFill1Wght600Grad0Opsz48 from '../components/DirectionsSubwayFill1Wght600Grad0Opsz48'
import IconDirectionsSubwayFill1Wght700Grad0Opsz48 from '../components/DirectionsSubwayFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDirectionsSubway = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDirectionsSubwayFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDirectionsSubwayFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDirectionsSubwayFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDirectionsSubwayFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDirectionsSubwayFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDirectionsSubwayFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDirectionsSubwayFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDirectionsSubwayFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDirectionsSubwayFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDirectionsSubwayFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDirectionsSubwayFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDirectionsSubwayFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDirectionsSubwayFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDirectionsSubwayFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
