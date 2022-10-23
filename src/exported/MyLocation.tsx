import IconMyLocationFill0Wght100Grad0Opsz48 from '../components/MyLocationFill0Wght100Grad0Opsz48'
import IconMyLocationFill0Wght200Grad0Opsz48 from '../components/MyLocationFill0Wght200Grad0Opsz48'
import IconMyLocationFill0Wght300Grad0Opsz48 from '../components/MyLocationFill0Wght300Grad0Opsz48'
import IconMyLocationFill0Wght400Grad0Opsz48 from '../components/MyLocationFill0Wght400Grad0Opsz48'
import IconMyLocationFill0Wght500Grad0Opsz48 from '../components/MyLocationFill0Wght500Grad0Opsz48'
import IconMyLocationFill0Wght600Grad0Opsz48 from '../components/MyLocationFill0Wght600Grad0Opsz48'
import IconMyLocationFill0Wght700Grad0Opsz48 from '../components/MyLocationFill0Wght700Grad0Opsz48'
import IconMyLocationFill1Wght100Grad0Opsz48 from '../components/MyLocationFill1Wght100Grad0Opsz48'
import IconMyLocationFill1Wght200Grad0Opsz48 from '../components/MyLocationFill1Wght200Grad0Opsz48'
import IconMyLocationFill1Wght300Grad0Opsz48 from '../components/MyLocationFill1Wght300Grad0Opsz48'
import IconMyLocationFill1Wght400Grad0Opsz48 from '../components/MyLocationFill1Wght400Grad0Opsz48'
import IconMyLocationFill1Wght500Grad0Opsz48 from '../components/MyLocationFill1Wght500Grad0Opsz48'
import IconMyLocationFill1Wght600Grad0Opsz48 from '../components/MyLocationFill1Wght600Grad0Opsz48'
import IconMyLocationFill1Wght700Grad0Opsz48 from '../components/MyLocationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMyLocation = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMyLocationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMyLocationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMyLocationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMyLocationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMyLocationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMyLocationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMyLocationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMyLocationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMyLocationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMyLocationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMyLocationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMyLocationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMyLocationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMyLocationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
