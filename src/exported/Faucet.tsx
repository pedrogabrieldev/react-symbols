import IconFaucetFill0Wght100Grad0Opsz48 from '../components/FaucetFill0Wght100Grad0Opsz48'
import IconFaucetFill0Wght200Grad0Opsz48 from '../components/FaucetFill0Wght200Grad0Opsz48'
import IconFaucetFill0Wght300Grad0Opsz48 from '../components/FaucetFill0Wght300Grad0Opsz48'
import IconFaucetFill0Wght400Grad0Opsz48 from '../components/FaucetFill0Wght400Grad0Opsz48'
import IconFaucetFill0Wght500Grad0Opsz48 from '../components/FaucetFill0Wght500Grad0Opsz48'
import IconFaucetFill0Wght600Grad0Opsz48 from '../components/FaucetFill0Wght600Grad0Opsz48'
import IconFaucetFill0Wght700Grad0Opsz48 from '../components/FaucetFill0Wght700Grad0Opsz48'
import IconFaucetFill1Wght100Grad0Opsz48 from '../components/FaucetFill1Wght100Grad0Opsz48'
import IconFaucetFill1Wght200Grad0Opsz48 from '../components/FaucetFill1Wght200Grad0Opsz48'
import IconFaucetFill1Wght300Grad0Opsz48 from '../components/FaucetFill1Wght300Grad0Opsz48'
import IconFaucetFill1Wght400Grad0Opsz48 from '../components/FaucetFill1Wght400Grad0Opsz48'
import IconFaucetFill1Wght500Grad0Opsz48 from '../components/FaucetFill1Wght500Grad0Opsz48'
import IconFaucetFill1Wght600Grad0Opsz48 from '../components/FaucetFill1Wght600Grad0Opsz48'
import IconFaucetFill1Wght700Grad0Opsz48 from '../components/FaucetFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFaucet = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFaucetFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFaucetFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFaucetFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFaucetFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFaucetFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFaucetFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFaucetFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFaucetFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFaucetFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFaucetFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFaucetFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFaucetFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFaucetFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFaucetFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
