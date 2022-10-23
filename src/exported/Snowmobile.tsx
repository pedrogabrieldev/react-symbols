import IconSnowmobileFill0Wght100Grad0Opsz48 from '../components/SnowmobileFill0Wght100Grad0Opsz48'
import IconSnowmobileFill0Wght200Grad0Opsz48 from '../components/SnowmobileFill0Wght200Grad0Opsz48'
import IconSnowmobileFill0Wght300Grad0Opsz48 from '../components/SnowmobileFill0Wght300Grad0Opsz48'
import IconSnowmobileFill0Wght400Grad0Opsz48 from '../components/SnowmobileFill0Wght400Grad0Opsz48'
import IconSnowmobileFill0Wght500Grad0Opsz48 from '../components/SnowmobileFill0Wght500Grad0Opsz48'
import IconSnowmobileFill0Wght600Grad0Opsz48 from '../components/SnowmobileFill0Wght600Grad0Opsz48'
import IconSnowmobileFill0Wght700Grad0Opsz48 from '../components/SnowmobileFill0Wght700Grad0Opsz48'
import IconSnowmobileFill1Wght100Grad0Opsz48 from '../components/SnowmobileFill1Wght100Grad0Opsz48'
import IconSnowmobileFill1Wght200Grad0Opsz48 from '../components/SnowmobileFill1Wght200Grad0Opsz48'
import IconSnowmobileFill1Wght300Grad0Opsz48 from '../components/SnowmobileFill1Wght300Grad0Opsz48'
import IconSnowmobileFill1Wght400Grad0Opsz48 from '../components/SnowmobileFill1Wght400Grad0Opsz48'
import IconSnowmobileFill1Wght500Grad0Opsz48 from '../components/SnowmobileFill1Wght500Grad0Opsz48'
import IconSnowmobileFill1Wght600Grad0Opsz48 from '../components/SnowmobileFill1Wght600Grad0Opsz48'
import IconSnowmobileFill1Wght700Grad0Opsz48 from '../components/SnowmobileFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSnowmobile = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSnowmobileFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSnowmobileFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSnowmobileFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSnowmobileFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSnowmobileFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSnowmobileFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSnowmobileFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSnowmobileFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSnowmobileFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSnowmobileFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSnowmobileFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSnowmobileFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSnowmobileFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSnowmobileFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
