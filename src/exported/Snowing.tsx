import IconSnowingFill0Wght100Grad0Opsz48 from '../components/SnowingFill0Wght100Grad0Opsz48'
import IconSnowingFill0Wght200Grad0Opsz48 from '../components/SnowingFill0Wght200Grad0Opsz48'
import IconSnowingFill0Wght300Grad0Opsz48 from '../components/SnowingFill0Wght300Grad0Opsz48'
import IconSnowingFill0Wght400Grad0Opsz48 from '../components/SnowingFill0Wght400Grad0Opsz48'
import IconSnowingFill0Wght500Grad0Opsz48 from '../components/SnowingFill0Wght500Grad0Opsz48'
import IconSnowingFill0Wght600Grad0Opsz48 from '../components/SnowingFill0Wght600Grad0Opsz48'
import IconSnowingFill0Wght700Grad0Opsz48 from '../components/SnowingFill0Wght700Grad0Opsz48'
import IconSnowingFill1Wght100Grad0Opsz48 from '../components/SnowingFill1Wght100Grad0Opsz48'
import IconSnowingFill1Wght200Grad0Opsz48 from '../components/SnowingFill1Wght200Grad0Opsz48'
import IconSnowingFill1Wght300Grad0Opsz48 from '../components/SnowingFill1Wght300Grad0Opsz48'
import IconSnowingFill1Wght400Grad0Opsz48 from '../components/SnowingFill1Wght400Grad0Opsz48'
import IconSnowingFill1Wght500Grad0Opsz48 from '../components/SnowingFill1Wght500Grad0Opsz48'
import IconSnowingFill1Wght600Grad0Opsz48 from '../components/SnowingFill1Wght600Grad0Opsz48'
import IconSnowingFill1Wght700Grad0Opsz48 from '../components/SnowingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSnowing = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSnowingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSnowingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSnowingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSnowingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSnowingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSnowingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSnowingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSnowingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSnowingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSnowingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSnowingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSnowingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSnowingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSnowingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
