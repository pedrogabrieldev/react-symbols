import IconRouterFill0Wght100Grad0Opsz48 from '../components/RouterFill0Wght100Grad0Opsz48'
import IconRouterFill0Wght200Grad0Opsz48 from '../components/RouterFill0Wght200Grad0Opsz48'
import IconRouterFill0Wght300Grad0Opsz48 from '../components/RouterFill0Wght300Grad0Opsz48'
import IconRouterFill0Wght400Grad0Opsz48 from '../components/RouterFill0Wght400Grad0Opsz48'
import IconRouterFill0Wght500Grad0Opsz48 from '../components/RouterFill0Wght500Grad0Opsz48'
import IconRouterFill0Wght600Grad0Opsz48 from '../components/RouterFill0Wght600Grad0Opsz48'
import IconRouterFill0Wght700Grad0Opsz48 from '../components/RouterFill0Wght700Grad0Opsz48'
import IconRouterFill1Wght100Grad0Opsz48 from '../components/RouterFill1Wght100Grad0Opsz48'
import IconRouterFill1Wght200Grad0Opsz48 from '../components/RouterFill1Wght200Grad0Opsz48'
import IconRouterFill1Wght300Grad0Opsz48 from '../components/RouterFill1Wght300Grad0Opsz48'
import IconRouterFill1Wght400Grad0Opsz48 from '../components/RouterFill1Wght400Grad0Opsz48'
import IconRouterFill1Wght500Grad0Opsz48 from '../components/RouterFill1Wght500Grad0Opsz48'
import IconRouterFill1Wght600Grad0Opsz48 from '../components/RouterFill1Wght600Grad0Opsz48'
import IconRouterFill1Wght700Grad0Opsz48 from '../components/RouterFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRouter = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRouterFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRouterFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRouterFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRouterFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRouterFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRouterFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRouterFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRouterFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRouterFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRouterFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRouterFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRouterFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRouterFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRouterFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
