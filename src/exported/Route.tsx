import IconRouteFill0Wght100Grad0Opsz48 from '../components/RouteFill0Wght100Grad0Opsz48'
import IconRouteFill0Wght200Grad0Opsz48 from '../components/RouteFill0Wght200Grad0Opsz48'
import IconRouteFill0Wght300Grad0Opsz48 from '../components/RouteFill0Wght300Grad0Opsz48'
import IconRouteFill0Wght400Grad0Opsz48 from '../components/RouteFill0Wght400Grad0Opsz48'
import IconRouteFill0Wght500Grad0Opsz48 from '../components/RouteFill0Wght500Grad0Opsz48'
import IconRouteFill0Wght600Grad0Opsz48 from '../components/RouteFill0Wght600Grad0Opsz48'
import IconRouteFill0Wght700Grad0Opsz48 from '../components/RouteFill0Wght700Grad0Opsz48'
import IconRouteFill1Wght100Grad0Opsz48 from '../components/RouteFill1Wght100Grad0Opsz48'
import IconRouteFill1Wght200Grad0Opsz48 from '../components/RouteFill1Wght200Grad0Opsz48'
import IconRouteFill1Wght300Grad0Opsz48 from '../components/RouteFill1Wght300Grad0Opsz48'
import IconRouteFill1Wght400Grad0Opsz48 from '../components/RouteFill1Wght400Grad0Opsz48'
import IconRouteFill1Wght500Grad0Opsz48 from '../components/RouteFill1Wght500Grad0Opsz48'
import IconRouteFill1Wght600Grad0Opsz48 from '../components/RouteFill1Wght600Grad0Opsz48'
import IconRouteFill1Wght700Grad0Opsz48 from '../components/RouteFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRoute = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRouteFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRouteFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRouteFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRouteFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRouteFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRouteFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRouteFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRouteFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRouteFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRouteFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRouteFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRouteFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRouteFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRouteFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
