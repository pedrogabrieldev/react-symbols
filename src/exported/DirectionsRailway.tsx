import IconDirectionsRailwayFill0Wght100Grad0Opsz48 from '../components/DirectionsRailwayFill0Wght100Grad0Opsz48'
import IconDirectionsRailwayFill0Wght200Grad0Opsz48 from '../components/DirectionsRailwayFill0Wght200Grad0Opsz48'
import IconDirectionsRailwayFill0Wght300Grad0Opsz48 from '../components/DirectionsRailwayFill0Wght300Grad0Opsz48'
import IconDirectionsRailwayFill0Wght400Grad0Opsz48 from '../components/DirectionsRailwayFill0Wght400Grad0Opsz48'
import IconDirectionsRailwayFill0Wght500Grad0Opsz48 from '../components/DirectionsRailwayFill0Wght500Grad0Opsz48'
import IconDirectionsRailwayFill0Wght600Grad0Opsz48 from '../components/DirectionsRailwayFill0Wght600Grad0Opsz48'
import IconDirectionsRailwayFill0Wght700Grad0Opsz48 from '../components/DirectionsRailwayFill0Wght700Grad0Opsz48'
import IconDirectionsRailwayFill1Wght100Grad0Opsz48 from '../components/DirectionsRailwayFill1Wght100Grad0Opsz48'
import IconDirectionsRailwayFill1Wght200Grad0Opsz48 from '../components/DirectionsRailwayFill1Wght200Grad0Opsz48'
import IconDirectionsRailwayFill1Wght300Grad0Opsz48 from '../components/DirectionsRailwayFill1Wght300Grad0Opsz48'
import IconDirectionsRailwayFill1Wght400Grad0Opsz48 from '../components/DirectionsRailwayFill1Wght400Grad0Opsz48'
import IconDirectionsRailwayFill1Wght500Grad0Opsz48 from '../components/DirectionsRailwayFill1Wght500Grad0Opsz48'
import IconDirectionsRailwayFill1Wght600Grad0Opsz48 from '../components/DirectionsRailwayFill1Wght600Grad0Opsz48'
import IconDirectionsRailwayFill1Wght700Grad0Opsz48 from '../components/DirectionsRailwayFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDirectionsRailway = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDirectionsRailwayFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDirectionsRailwayFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDirectionsRailwayFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDirectionsRailwayFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDirectionsRailwayFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDirectionsRailwayFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDirectionsRailwayFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDirectionsRailwayFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDirectionsRailwayFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDirectionsRailwayFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDirectionsRailwayFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDirectionsRailwayFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDirectionsRailwayFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDirectionsRailwayFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
