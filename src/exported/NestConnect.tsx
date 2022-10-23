import IconNestConnectFill0Wght100Grad0Opsz48 from '../components/NestConnectFill0Wght100Grad0Opsz48'
import IconNestConnectFill0Wght200Grad0Opsz48 from '../components/NestConnectFill0Wght200Grad0Opsz48'
import IconNestConnectFill0Wght300Grad0Opsz48 from '../components/NestConnectFill0Wght300Grad0Opsz48'
import IconNestConnectFill0Wght400Grad0Opsz48 from '../components/NestConnectFill0Wght400Grad0Opsz48'
import IconNestConnectFill0Wght500Grad0Opsz48 from '../components/NestConnectFill0Wght500Grad0Opsz48'
import IconNestConnectFill0Wght600Grad0Opsz48 from '../components/NestConnectFill0Wght600Grad0Opsz48'
import IconNestConnectFill0Wght700Grad0Opsz48 from '../components/NestConnectFill0Wght700Grad0Opsz48'
import IconNestConnectFill1Wght100Grad0Opsz48 from '../components/NestConnectFill1Wght100Grad0Opsz48'
import IconNestConnectFill1Wght200Grad0Opsz48 from '../components/NestConnectFill1Wght200Grad0Opsz48'
import IconNestConnectFill1Wght300Grad0Opsz48 from '../components/NestConnectFill1Wght300Grad0Opsz48'
import IconNestConnectFill1Wght400Grad0Opsz48 from '../components/NestConnectFill1Wght400Grad0Opsz48'
import IconNestConnectFill1Wght500Grad0Opsz48 from '../components/NestConnectFill1Wght500Grad0Opsz48'
import IconNestConnectFill1Wght600Grad0Opsz48 from '../components/NestConnectFill1Wght600Grad0Opsz48'
import IconNestConnectFill1Wght700Grad0Opsz48 from '../components/NestConnectFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestConnect = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestConnectFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestConnectFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestConnectFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestConnectFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestConnectFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestConnectFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestConnectFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestConnectFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestConnectFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestConnectFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestConnectFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestConnectFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestConnectFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestConnectFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
