import IconRvHookupFill0Wght100Grad0Opsz48 from '../components/RvHookupFill0Wght100Grad0Opsz48'
import IconRvHookupFill0Wght200Grad0Opsz48 from '../components/RvHookupFill0Wght200Grad0Opsz48'
import IconRvHookupFill0Wght300Grad0Opsz48 from '../components/RvHookupFill0Wght300Grad0Opsz48'
import IconRvHookupFill0Wght400Grad0Opsz48 from '../components/RvHookupFill0Wght400Grad0Opsz48'
import IconRvHookupFill0Wght500Grad0Opsz48 from '../components/RvHookupFill0Wght500Grad0Opsz48'
import IconRvHookupFill0Wght600Grad0Opsz48 from '../components/RvHookupFill0Wght600Grad0Opsz48'
import IconRvHookupFill0Wght700Grad0Opsz48 from '../components/RvHookupFill0Wght700Grad0Opsz48'
import IconRvHookupFill1Wght100Grad0Opsz48 from '../components/RvHookupFill1Wght100Grad0Opsz48'
import IconRvHookupFill1Wght200Grad0Opsz48 from '../components/RvHookupFill1Wght200Grad0Opsz48'
import IconRvHookupFill1Wght300Grad0Opsz48 from '../components/RvHookupFill1Wght300Grad0Opsz48'
import IconRvHookupFill1Wght400Grad0Opsz48 from '../components/RvHookupFill1Wght400Grad0Opsz48'
import IconRvHookupFill1Wght500Grad0Opsz48 from '../components/RvHookupFill1Wght500Grad0Opsz48'
import IconRvHookupFill1Wght600Grad0Opsz48 from '../components/RvHookupFill1Wght600Grad0Opsz48'
import IconRvHookupFill1Wght700Grad0Opsz48 from '../components/RvHookupFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRvHookup = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRvHookupFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRvHookupFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRvHookupFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRvHookupFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRvHookupFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRvHookupFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRvHookupFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRvHookupFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRvHookupFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRvHookupFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRvHookupFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRvHookupFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRvHookupFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRvHookupFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
