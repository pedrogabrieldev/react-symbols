import IconSnowshoeingFill0Wght100Grad0Opsz48 from '../components/SnowshoeingFill0Wght100Grad0Opsz48'
import IconSnowshoeingFill0Wght200Grad0Opsz48 from '../components/SnowshoeingFill0Wght200Grad0Opsz48'
import IconSnowshoeingFill0Wght300Grad0Opsz48 from '../components/SnowshoeingFill0Wght300Grad0Opsz48'
import IconSnowshoeingFill0Wght400Grad0Opsz48 from '../components/SnowshoeingFill0Wght400Grad0Opsz48'
import IconSnowshoeingFill0Wght500Grad0Opsz48 from '../components/SnowshoeingFill0Wght500Grad0Opsz48'
import IconSnowshoeingFill0Wght600Grad0Opsz48 from '../components/SnowshoeingFill0Wght600Grad0Opsz48'
import IconSnowshoeingFill0Wght700Grad0Opsz48 from '../components/SnowshoeingFill0Wght700Grad0Opsz48'
import IconSnowshoeingFill1Wght100Grad0Opsz48 from '../components/SnowshoeingFill1Wght100Grad0Opsz48'
import IconSnowshoeingFill1Wght200Grad0Opsz48 from '../components/SnowshoeingFill1Wght200Grad0Opsz48'
import IconSnowshoeingFill1Wght300Grad0Opsz48 from '../components/SnowshoeingFill1Wght300Grad0Opsz48'
import IconSnowshoeingFill1Wght400Grad0Opsz48 from '../components/SnowshoeingFill1Wght400Grad0Opsz48'
import IconSnowshoeingFill1Wght500Grad0Opsz48 from '../components/SnowshoeingFill1Wght500Grad0Opsz48'
import IconSnowshoeingFill1Wght600Grad0Opsz48 from '../components/SnowshoeingFill1Wght600Grad0Opsz48'
import IconSnowshoeingFill1Wght700Grad0Opsz48 from '../components/SnowshoeingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSnowshoeing = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSnowshoeingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSnowshoeingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSnowshoeingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSnowshoeingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSnowshoeingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSnowshoeingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSnowshoeingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSnowshoeingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSnowshoeingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSnowshoeingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSnowshoeingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSnowshoeingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSnowshoeingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSnowshoeingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
