import IconNearbyOffFill0Wght100Grad0Opsz48 from '../components/NearbyOffFill0Wght100Grad0Opsz48'
import IconNearbyOffFill0Wght200Grad0Opsz48 from '../components/NearbyOffFill0Wght200Grad0Opsz48'
import IconNearbyOffFill0Wght300Grad0Opsz48 from '../components/NearbyOffFill0Wght300Grad0Opsz48'
import IconNearbyOffFill0Wght400Grad0Opsz48 from '../components/NearbyOffFill0Wght400Grad0Opsz48'
import IconNearbyOffFill0Wght500Grad0Opsz48 from '../components/NearbyOffFill0Wght500Grad0Opsz48'
import IconNearbyOffFill0Wght600Grad0Opsz48 from '../components/NearbyOffFill0Wght600Grad0Opsz48'
import IconNearbyOffFill0Wght700Grad0Opsz48 from '../components/NearbyOffFill0Wght700Grad0Opsz48'
import IconNearbyOffFill1Wght100Grad0Opsz48 from '../components/NearbyOffFill1Wght100Grad0Opsz48'
import IconNearbyOffFill1Wght200Grad0Opsz48 from '../components/NearbyOffFill1Wght200Grad0Opsz48'
import IconNearbyOffFill1Wght300Grad0Opsz48 from '../components/NearbyOffFill1Wght300Grad0Opsz48'
import IconNearbyOffFill1Wght400Grad0Opsz48 from '../components/NearbyOffFill1Wght400Grad0Opsz48'
import IconNearbyOffFill1Wght500Grad0Opsz48 from '../components/NearbyOffFill1Wght500Grad0Opsz48'
import IconNearbyOffFill1Wght600Grad0Opsz48 from '../components/NearbyOffFill1Wght600Grad0Opsz48'
import IconNearbyOffFill1Wght700Grad0Opsz48 from '../components/NearbyOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNearbyOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNearbyOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNearbyOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNearbyOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNearbyOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNearbyOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNearbyOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNearbyOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNearbyOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNearbyOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNearbyOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNearbyOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNearbyOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNearbyOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNearbyOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
