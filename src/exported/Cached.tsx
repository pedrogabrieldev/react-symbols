import IconCachedFill0Wght100Grad0Opsz48 from '../components/CachedFill0Wght100Grad0Opsz48'
import IconCachedFill0Wght200Grad0Opsz48 from '../components/CachedFill0Wght200Grad0Opsz48'
import IconCachedFill0Wght300Grad0Opsz48 from '../components/CachedFill0Wght300Grad0Opsz48'
import IconCachedFill0Wght400Grad0Opsz48 from '../components/CachedFill0Wght400Grad0Opsz48'
import IconCachedFill0Wght500Grad0Opsz48 from '../components/CachedFill0Wght500Grad0Opsz48'
import IconCachedFill0Wght600Grad0Opsz48 from '../components/CachedFill0Wght600Grad0Opsz48'
import IconCachedFill0Wght700Grad0Opsz48 from '../components/CachedFill0Wght700Grad0Opsz48'
import IconCachedFill1Wght100Grad0Opsz48 from '../components/CachedFill1Wght100Grad0Opsz48'
import IconCachedFill1Wght200Grad0Opsz48 from '../components/CachedFill1Wght200Grad0Opsz48'
import IconCachedFill1Wght300Grad0Opsz48 from '../components/CachedFill1Wght300Grad0Opsz48'
import IconCachedFill1Wght400Grad0Opsz48 from '../components/CachedFill1Wght400Grad0Opsz48'
import IconCachedFill1Wght500Grad0Opsz48 from '../components/CachedFill1Wght500Grad0Opsz48'
import IconCachedFill1Wght600Grad0Opsz48 from '../components/CachedFill1Wght600Grad0Opsz48'
import IconCachedFill1Wght700Grad0Opsz48 from '../components/CachedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCached = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCachedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCachedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCachedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCachedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCachedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCachedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCachedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCachedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCachedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCachedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCachedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCachedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCachedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCachedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
