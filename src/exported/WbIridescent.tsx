import IconWbIridescentFill0Wght100Grad0Opsz48 from '../components/WbIridescentFill0Wght100Grad0Opsz48'
import IconWbIridescentFill0Wght200Grad0Opsz48 from '../components/WbIridescentFill0Wght200Grad0Opsz48'
import IconWbIridescentFill0Wght300Grad0Opsz48 from '../components/WbIridescentFill0Wght300Grad0Opsz48'
import IconWbIridescentFill0Wght400Grad0Opsz48 from '../components/WbIridescentFill0Wght400Grad0Opsz48'
import IconWbIridescentFill0Wght500Grad0Opsz48 from '../components/WbIridescentFill0Wght500Grad0Opsz48'
import IconWbIridescentFill0Wght600Grad0Opsz48 from '../components/WbIridescentFill0Wght600Grad0Opsz48'
import IconWbIridescentFill0Wght700Grad0Opsz48 from '../components/WbIridescentFill0Wght700Grad0Opsz48'
import IconWbIridescentFill1Wght100Grad0Opsz48 from '../components/WbIridescentFill1Wght100Grad0Opsz48'
import IconWbIridescentFill1Wght200Grad0Opsz48 from '../components/WbIridescentFill1Wght200Grad0Opsz48'
import IconWbIridescentFill1Wght300Grad0Opsz48 from '../components/WbIridescentFill1Wght300Grad0Opsz48'
import IconWbIridescentFill1Wght400Grad0Opsz48 from '../components/WbIridescentFill1Wght400Grad0Opsz48'
import IconWbIridescentFill1Wght500Grad0Opsz48 from '../components/WbIridescentFill1Wght500Grad0Opsz48'
import IconWbIridescentFill1Wght600Grad0Opsz48 from '../components/WbIridescentFill1Wght600Grad0Opsz48'
import IconWbIridescentFill1Wght700Grad0Opsz48 from '../components/WbIridescentFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWbIridescent = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWbIridescentFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWbIridescentFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWbIridescentFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWbIridescentFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWbIridescentFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWbIridescentFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWbIridescentFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWbIridescentFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWbIridescentFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWbIridescentFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWbIridescentFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWbIridescentFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWbIridescentFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWbIridescentFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
