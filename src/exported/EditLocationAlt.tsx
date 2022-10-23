import IconEditLocationAltFill0Wght100Grad0Opsz48 from '../components/EditLocationAltFill0Wght100Grad0Opsz48'
import IconEditLocationAltFill0Wght200Grad0Opsz48 from '../components/EditLocationAltFill0Wght200Grad0Opsz48'
import IconEditLocationAltFill0Wght300Grad0Opsz48 from '../components/EditLocationAltFill0Wght300Grad0Opsz48'
import IconEditLocationAltFill0Wght400Grad0Opsz48 from '../components/EditLocationAltFill0Wght400Grad0Opsz48'
import IconEditLocationAltFill0Wght500Grad0Opsz48 from '../components/EditLocationAltFill0Wght500Grad0Opsz48'
import IconEditLocationAltFill0Wght600Grad0Opsz48 from '../components/EditLocationAltFill0Wght600Grad0Opsz48'
import IconEditLocationAltFill0Wght700Grad0Opsz48 from '../components/EditLocationAltFill0Wght700Grad0Opsz48'
import IconEditLocationAltFill1Wght100Grad0Opsz48 from '../components/EditLocationAltFill1Wght100Grad0Opsz48'
import IconEditLocationAltFill1Wght200Grad0Opsz48 from '../components/EditLocationAltFill1Wght200Grad0Opsz48'
import IconEditLocationAltFill1Wght300Grad0Opsz48 from '../components/EditLocationAltFill1Wght300Grad0Opsz48'
import IconEditLocationAltFill1Wght400Grad0Opsz48 from '../components/EditLocationAltFill1Wght400Grad0Opsz48'
import IconEditLocationAltFill1Wght500Grad0Opsz48 from '../components/EditLocationAltFill1Wght500Grad0Opsz48'
import IconEditLocationAltFill1Wght600Grad0Opsz48 from '../components/EditLocationAltFill1Wght600Grad0Opsz48'
import IconEditLocationAltFill1Wght700Grad0Opsz48 from '../components/EditLocationAltFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEditLocationAlt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEditLocationAltFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEditLocationAltFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEditLocationAltFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEditLocationAltFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEditLocationAltFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEditLocationAltFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEditLocationAltFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEditLocationAltFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEditLocationAltFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEditLocationAltFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEditLocationAltFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEditLocationAltFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEditLocationAltFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEditLocationAltFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
