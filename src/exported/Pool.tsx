import IconPoolFill0Wght100Grad0Opsz48 from '../components/PoolFill0Wght100Grad0Opsz48'
import IconPoolFill0Wght200Grad0Opsz48 from '../components/PoolFill0Wght200Grad0Opsz48'
import IconPoolFill0Wght300Grad0Opsz48 from '../components/PoolFill0Wght300Grad0Opsz48'
import IconPoolFill0Wght400Grad0Opsz48 from '../components/PoolFill0Wght400Grad0Opsz48'
import IconPoolFill0Wght500Grad0Opsz48 from '../components/PoolFill0Wght500Grad0Opsz48'
import IconPoolFill0Wght600Grad0Opsz48 from '../components/PoolFill0Wght600Grad0Opsz48'
import IconPoolFill0Wght700Grad0Opsz48 from '../components/PoolFill0Wght700Grad0Opsz48'
import IconPoolFill1Wght100Grad0Opsz48 from '../components/PoolFill1Wght100Grad0Opsz48'
import IconPoolFill1Wght200Grad0Opsz48 from '../components/PoolFill1Wght200Grad0Opsz48'
import IconPoolFill1Wght300Grad0Opsz48 from '../components/PoolFill1Wght300Grad0Opsz48'
import IconPoolFill1Wght400Grad0Opsz48 from '../components/PoolFill1Wght400Grad0Opsz48'
import IconPoolFill1Wght500Grad0Opsz48 from '../components/PoolFill1Wght500Grad0Opsz48'
import IconPoolFill1Wght600Grad0Opsz48 from '../components/PoolFill1Wght600Grad0Opsz48'
import IconPoolFill1Wght700Grad0Opsz48 from '../components/PoolFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPool = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPoolFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPoolFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPoolFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPoolFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPoolFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPoolFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPoolFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPoolFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPoolFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPoolFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPoolFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPoolFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPoolFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPoolFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
