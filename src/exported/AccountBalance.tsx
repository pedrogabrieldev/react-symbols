import IconAccountBalanceFill0Wght100Grad0Opsz48 from '../components/AccountBalanceFill0Wght100Grad0Opsz48'
import IconAccountBalanceFill0Wght200Grad0Opsz48 from '../components/AccountBalanceFill0Wght200Grad0Opsz48'
import IconAccountBalanceFill0Wght300Grad0Opsz48 from '../components/AccountBalanceFill0Wght300Grad0Opsz48'
import IconAccountBalanceFill0Wght400Grad0Opsz48 from '../components/AccountBalanceFill0Wght400Grad0Opsz48'
import IconAccountBalanceFill0Wght500Grad0Opsz48 from '../components/AccountBalanceFill0Wght500Grad0Opsz48'
import IconAccountBalanceFill0Wght600Grad0Opsz48 from '../components/AccountBalanceFill0Wght600Grad0Opsz48'
import IconAccountBalanceFill0Wght700Grad0Opsz48 from '../components/AccountBalanceFill0Wght700Grad0Opsz48'
import IconAccountBalanceFill1Wght100Grad0Opsz48 from '../components/AccountBalanceFill1Wght100Grad0Opsz48'
import IconAccountBalanceFill1Wght200Grad0Opsz48 from '../components/AccountBalanceFill1Wght200Grad0Opsz48'
import IconAccountBalanceFill1Wght300Grad0Opsz48 from '../components/AccountBalanceFill1Wght300Grad0Opsz48'
import IconAccountBalanceFill1Wght400Grad0Opsz48 from '../components/AccountBalanceFill1Wght400Grad0Opsz48'
import IconAccountBalanceFill1Wght500Grad0Opsz48 from '../components/AccountBalanceFill1Wght500Grad0Opsz48'
import IconAccountBalanceFill1Wght600Grad0Opsz48 from '../components/AccountBalanceFill1Wght600Grad0Opsz48'
import IconAccountBalanceFill1Wght700Grad0Opsz48 from '../components/AccountBalanceFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAccountBalance = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAccountBalanceFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAccountBalanceFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAccountBalanceFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAccountBalanceFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAccountBalanceFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAccountBalanceFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAccountBalanceFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAccountBalanceFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAccountBalanceFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAccountBalanceFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAccountBalanceFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAccountBalanceFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAccountBalanceFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAccountBalanceFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
