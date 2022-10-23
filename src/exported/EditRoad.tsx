import IconEditRoadFill0Wght100Grad0Opsz48 from '../components/EditRoadFill0Wght100Grad0Opsz48'
import IconEditRoadFill0Wght200Grad0Opsz48 from '../components/EditRoadFill0Wght200Grad0Opsz48'
import IconEditRoadFill0Wght300Grad0Opsz48 from '../components/EditRoadFill0Wght300Grad0Opsz48'
import IconEditRoadFill0Wght400Grad0Opsz48 from '../components/EditRoadFill0Wght400Grad0Opsz48'
import IconEditRoadFill0Wght500Grad0Opsz48 from '../components/EditRoadFill0Wght500Grad0Opsz48'
import IconEditRoadFill0Wght600Grad0Opsz48 from '../components/EditRoadFill0Wght600Grad0Opsz48'
import IconEditRoadFill0Wght700Grad0Opsz48 from '../components/EditRoadFill0Wght700Grad0Opsz48'
import IconEditRoadFill1Wght100Grad0Opsz48 from '../components/EditRoadFill1Wght100Grad0Opsz48'
import IconEditRoadFill1Wght200Grad0Opsz48 from '../components/EditRoadFill1Wght200Grad0Opsz48'
import IconEditRoadFill1Wght300Grad0Opsz48 from '../components/EditRoadFill1Wght300Grad0Opsz48'
import IconEditRoadFill1Wght400Grad0Opsz48 from '../components/EditRoadFill1Wght400Grad0Opsz48'
import IconEditRoadFill1Wght500Grad0Opsz48 from '../components/EditRoadFill1Wght500Grad0Opsz48'
import IconEditRoadFill1Wght600Grad0Opsz48 from '../components/EditRoadFill1Wght600Grad0Opsz48'
import IconEditRoadFill1Wght700Grad0Opsz48 from '../components/EditRoadFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEditRoad = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEditRoadFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEditRoadFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEditRoadFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEditRoadFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEditRoadFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEditRoadFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEditRoadFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEditRoadFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEditRoadFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEditRoadFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEditRoadFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEditRoadFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEditRoadFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEditRoadFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
