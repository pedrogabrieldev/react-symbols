import IconStormFill0Wght100Grad0Opsz48 from '../components/StormFill0Wght100Grad0Opsz48'
import IconStormFill0Wght200Grad0Opsz48 from '../components/StormFill0Wght200Grad0Opsz48'
import IconStormFill0Wght300Grad0Opsz48 from '../components/StormFill0Wght300Grad0Opsz48'
import IconStormFill0Wght400Grad0Opsz48 from '../components/StormFill0Wght400Grad0Opsz48'
import IconStormFill0Wght500Grad0Opsz48 from '../components/StormFill0Wght500Grad0Opsz48'
import IconStormFill0Wght600Grad0Opsz48 from '../components/StormFill0Wght600Grad0Opsz48'
import IconStormFill0Wght700Grad0Opsz48 from '../components/StormFill0Wght700Grad0Opsz48'
import IconStormFill1Wght100Grad0Opsz48 from '../components/StormFill1Wght100Grad0Opsz48'
import IconStormFill1Wght200Grad0Opsz48 from '../components/StormFill1Wght200Grad0Opsz48'
import IconStormFill1Wght300Grad0Opsz48 from '../components/StormFill1Wght300Grad0Opsz48'
import IconStormFill1Wght400Grad0Opsz48 from '../components/StormFill1Wght400Grad0Opsz48'
import IconStormFill1Wght500Grad0Opsz48 from '../components/StormFill1Wght500Grad0Opsz48'
import IconStormFill1Wght600Grad0Opsz48 from '../components/StormFill1Wght600Grad0Opsz48'
import IconStormFill1Wght700Grad0Opsz48 from '../components/StormFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconStorm = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconStormFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconStormFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconStormFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconStormFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconStormFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconStormFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconStormFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconStormFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconStormFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconStormFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconStormFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconStormFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconStormFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconStormFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
