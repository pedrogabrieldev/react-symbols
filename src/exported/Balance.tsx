import IconBalanceFill0Wght100Grad0Opsz48 from '../components/BalanceFill0Wght100Grad0Opsz48'
import IconBalanceFill0Wght200Grad0Opsz48 from '../components/BalanceFill0Wght200Grad0Opsz48'
import IconBalanceFill0Wght300Grad0Opsz48 from '../components/BalanceFill0Wght300Grad0Opsz48'
import IconBalanceFill0Wght400Grad0Opsz48 from '../components/BalanceFill0Wght400Grad0Opsz48'
import IconBalanceFill0Wght500Grad0Opsz48 from '../components/BalanceFill0Wght500Grad0Opsz48'
import IconBalanceFill0Wght600Grad0Opsz48 from '../components/BalanceFill0Wght600Grad0Opsz48'
import IconBalanceFill0Wght700Grad0Opsz48 from '../components/BalanceFill0Wght700Grad0Opsz48'
import IconBalanceFill1Wght100Grad0Opsz48 from '../components/BalanceFill1Wght100Grad0Opsz48'
import IconBalanceFill1Wght200Grad0Opsz48 from '../components/BalanceFill1Wght200Grad0Opsz48'
import IconBalanceFill1Wght300Grad0Opsz48 from '../components/BalanceFill1Wght300Grad0Opsz48'
import IconBalanceFill1Wght400Grad0Opsz48 from '../components/BalanceFill1Wght400Grad0Opsz48'
import IconBalanceFill1Wght500Grad0Opsz48 from '../components/BalanceFill1Wght500Grad0Opsz48'
import IconBalanceFill1Wght600Grad0Opsz48 from '../components/BalanceFill1Wght600Grad0Opsz48'
import IconBalanceFill1Wght700Grad0Opsz48 from '../components/BalanceFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBalance = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBalanceFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBalanceFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBalanceFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBalanceFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBalanceFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBalanceFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBalanceFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBalanceFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBalanceFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBalanceFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBalanceFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBalanceFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBalanceFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBalanceFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
