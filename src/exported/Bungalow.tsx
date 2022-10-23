import IconBungalowFill0Wght100Grad0Opsz48 from '../components/BungalowFill0Wght100Grad0Opsz48'
import IconBungalowFill0Wght200Grad0Opsz48 from '../components/BungalowFill0Wght200Grad0Opsz48'
import IconBungalowFill0Wght300Grad0Opsz48 from '../components/BungalowFill0Wght300Grad0Opsz48'
import IconBungalowFill0Wght400Grad0Opsz48 from '../components/BungalowFill0Wght400Grad0Opsz48'
import IconBungalowFill0Wght500Grad0Opsz48 from '../components/BungalowFill0Wght500Grad0Opsz48'
import IconBungalowFill0Wght600Grad0Opsz48 from '../components/BungalowFill0Wght600Grad0Opsz48'
import IconBungalowFill0Wght700Grad0Opsz48 from '../components/BungalowFill0Wght700Grad0Opsz48'
import IconBungalowFill1Wght100Grad0Opsz48 from '../components/BungalowFill1Wght100Grad0Opsz48'
import IconBungalowFill1Wght200Grad0Opsz48 from '../components/BungalowFill1Wght200Grad0Opsz48'
import IconBungalowFill1Wght300Grad0Opsz48 from '../components/BungalowFill1Wght300Grad0Opsz48'
import IconBungalowFill1Wght400Grad0Opsz48 from '../components/BungalowFill1Wght400Grad0Opsz48'
import IconBungalowFill1Wght500Grad0Opsz48 from '../components/BungalowFill1Wght500Grad0Opsz48'
import IconBungalowFill1Wght600Grad0Opsz48 from '../components/BungalowFill1Wght600Grad0Opsz48'
import IconBungalowFill1Wght700Grad0Opsz48 from '../components/BungalowFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBungalow = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBungalowFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBungalowFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBungalowFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBungalowFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBungalowFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBungalowFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBungalowFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBungalowFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBungalowFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBungalowFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBungalowFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBungalowFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBungalowFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBungalowFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
