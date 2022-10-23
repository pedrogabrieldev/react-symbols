import IconNestWifiRouterFill0Wght100Grad0Opsz48 from '../components/NestWifiRouterFill0Wght100Grad0Opsz48'
import IconNestWifiRouterFill0Wght200Grad0Opsz48 from '../components/NestWifiRouterFill0Wght200Grad0Opsz48'
import IconNestWifiRouterFill0Wght300Grad0Opsz48 from '../components/NestWifiRouterFill0Wght300Grad0Opsz48'
import IconNestWifiRouterFill0Wght400Grad0Opsz48 from '../components/NestWifiRouterFill0Wght400Grad0Opsz48'
import IconNestWifiRouterFill0Wght500Grad0Opsz48 from '../components/NestWifiRouterFill0Wght500Grad0Opsz48'
import IconNestWifiRouterFill0Wght600Grad0Opsz48 from '../components/NestWifiRouterFill0Wght600Grad0Opsz48'
import IconNestWifiRouterFill0Wght700Grad0Opsz48 from '../components/NestWifiRouterFill0Wght700Grad0Opsz48'
import IconNestWifiRouterFill1Wght100Grad0Opsz48 from '../components/NestWifiRouterFill1Wght100Grad0Opsz48'
import IconNestWifiRouterFill1Wght200Grad0Opsz48 from '../components/NestWifiRouterFill1Wght200Grad0Opsz48'
import IconNestWifiRouterFill1Wght300Grad0Opsz48 from '../components/NestWifiRouterFill1Wght300Grad0Opsz48'
import IconNestWifiRouterFill1Wght400Grad0Opsz48 from '../components/NestWifiRouterFill1Wght400Grad0Opsz48'
import IconNestWifiRouterFill1Wght500Grad0Opsz48 from '../components/NestWifiRouterFill1Wght500Grad0Opsz48'
import IconNestWifiRouterFill1Wght600Grad0Opsz48 from '../components/NestWifiRouterFill1Wght600Grad0Opsz48'
import IconNestWifiRouterFill1Wght700Grad0Opsz48 from '../components/NestWifiRouterFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestWifiRouter = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestWifiRouterFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestWifiRouterFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestWifiRouterFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestWifiRouterFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestWifiRouterFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestWifiRouterFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestWifiRouterFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestWifiRouterFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestWifiRouterFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestWifiRouterFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestWifiRouterFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestWifiRouterFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestWifiRouterFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestWifiRouterFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
