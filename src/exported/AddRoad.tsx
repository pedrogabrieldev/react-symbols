import IconAddRoadFill0Wght100Grad0Opsz48 from '../components/AddRoadFill0Wght100Grad0Opsz48'
import IconAddRoadFill0Wght200Grad0Opsz48 from '../components/AddRoadFill0Wght200Grad0Opsz48'
import IconAddRoadFill0Wght300Grad0Opsz48 from '../components/AddRoadFill0Wght300Grad0Opsz48'
import IconAddRoadFill0Wght400Grad0Opsz48 from '../components/AddRoadFill0Wght400Grad0Opsz48'
import IconAddRoadFill0Wght500Grad0Opsz48 from '../components/AddRoadFill0Wght500Grad0Opsz48'
import IconAddRoadFill0Wght600Grad0Opsz48 from '../components/AddRoadFill0Wght600Grad0Opsz48'
import IconAddRoadFill0Wght700Grad0Opsz48 from '../components/AddRoadFill0Wght700Grad0Opsz48'
import IconAddRoadFill1Wght100Grad0Opsz48 from '../components/AddRoadFill1Wght100Grad0Opsz48'
import IconAddRoadFill1Wght200Grad0Opsz48 from '../components/AddRoadFill1Wght200Grad0Opsz48'
import IconAddRoadFill1Wght300Grad0Opsz48 from '../components/AddRoadFill1Wght300Grad0Opsz48'
import IconAddRoadFill1Wght400Grad0Opsz48 from '../components/AddRoadFill1Wght400Grad0Opsz48'
import IconAddRoadFill1Wght500Grad0Opsz48 from '../components/AddRoadFill1Wght500Grad0Opsz48'
import IconAddRoadFill1Wght600Grad0Opsz48 from '../components/AddRoadFill1Wght600Grad0Opsz48'
import IconAddRoadFill1Wght700Grad0Opsz48 from '../components/AddRoadFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAddRoad = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAddRoadFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAddRoadFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAddRoadFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAddRoadFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAddRoadFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAddRoadFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAddRoadFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAddRoadFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAddRoadFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAddRoadFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAddRoadFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAddRoadFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAddRoadFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAddRoadFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
