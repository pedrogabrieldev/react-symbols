import IconNearbyErrorFill0Wght100Grad0Opsz48 from '../components/NearbyErrorFill0Wght100Grad0Opsz48'
import IconNearbyErrorFill0Wght200Grad0Opsz48 from '../components/NearbyErrorFill0Wght200Grad0Opsz48'
import IconNearbyErrorFill0Wght300Grad0Opsz48 from '../components/NearbyErrorFill0Wght300Grad0Opsz48'
import IconNearbyErrorFill0Wght400Grad0Opsz48 from '../components/NearbyErrorFill0Wght400Grad0Opsz48'
import IconNearbyErrorFill0Wght500Grad0Opsz48 from '../components/NearbyErrorFill0Wght500Grad0Opsz48'
import IconNearbyErrorFill0Wght600Grad0Opsz48 from '../components/NearbyErrorFill0Wght600Grad0Opsz48'
import IconNearbyErrorFill0Wght700Grad0Opsz48 from '../components/NearbyErrorFill0Wght700Grad0Opsz48'
import IconNearbyErrorFill1Wght100Grad0Opsz48 from '../components/NearbyErrorFill1Wght100Grad0Opsz48'
import IconNearbyErrorFill1Wght200Grad0Opsz48 from '../components/NearbyErrorFill1Wght200Grad0Opsz48'
import IconNearbyErrorFill1Wght300Grad0Opsz48 from '../components/NearbyErrorFill1Wght300Grad0Opsz48'
import IconNearbyErrorFill1Wght400Grad0Opsz48 from '../components/NearbyErrorFill1Wght400Grad0Opsz48'
import IconNearbyErrorFill1Wght500Grad0Opsz48 from '../components/NearbyErrorFill1Wght500Grad0Opsz48'
import IconNearbyErrorFill1Wght600Grad0Opsz48 from '../components/NearbyErrorFill1Wght600Grad0Opsz48'
import IconNearbyErrorFill1Wght700Grad0Opsz48 from '../components/NearbyErrorFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNearbyError = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNearbyErrorFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNearbyErrorFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNearbyErrorFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNearbyErrorFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNearbyErrorFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNearbyErrorFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNearbyErrorFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNearbyErrorFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNearbyErrorFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNearbyErrorFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNearbyErrorFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNearbyErrorFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNearbyErrorFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNearbyErrorFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
