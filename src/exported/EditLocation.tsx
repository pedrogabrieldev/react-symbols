import IconEditLocationFill0Wght100Grad0Opsz48 from '../components/EditLocationFill0Wght100Grad0Opsz48'
import IconEditLocationFill0Wght200Grad0Opsz48 from '../components/EditLocationFill0Wght200Grad0Opsz48'
import IconEditLocationFill0Wght300Grad0Opsz48 from '../components/EditLocationFill0Wght300Grad0Opsz48'
import IconEditLocationFill0Wght400Grad0Opsz48 from '../components/EditLocationFill0Wght400Grad0Opsz48'
import IconEditLocationFill0Wght500Grad0Opsz48 from '../components/EditLocationFill0Wght500Grad0Opsz48'
import IconEditLocationFill0Wght600Grad0Opsz48 from '../components/EditLocationFill0Wght600Grad0Opsz48'
import IconEditLocationFill0Wght700Grad0Opsz48 from '../components/EditLocationFill0Wght700Grad0Opsz48'
import IconEditLocationFill1Wght100Grad0Opsz48 from '../components/EditLocationFill1Wght100Grad0Opsz48'
import IconEditLocationFill1Wght200Grad0Opsz48 from '../components/EditLocationFill1Wght200Grad0Opsz48'
import IconEditLocationFill1Wght300Grad0Opsz48 from '../components/EditLocationFill1Wght300Grad0Opsz48'
import IconEditLocationFill1Wght400Grad0Opsz48 from '../components/EditLocationFill1Wght400Grad0Opsz48'
import IconEditLocationFill1Wght500Grad0Opsz48 from '../components/EditLocationFill1Wght500Grad0Opsz48'
import IconEditLocationFill1Wght600Grad0Opsz48 from '../components/EditLocationFill1Wght600Grad0Opsz48'
import IconEditLocationFill1Wght700Grad0Opsz48 from '../components/EditLocationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEditLocation = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEditLocationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEditLocationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEditLocationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEditLocationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEditLocationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEditLocationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEditLocationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEditLocationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEditLocationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEditLocationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEditLocationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEditLocationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEditLocationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEditLocationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
