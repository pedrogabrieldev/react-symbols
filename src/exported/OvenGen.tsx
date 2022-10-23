import IconOvenGenFill0Wght100Grad0Opsz48 from '../components/OvenGenFill0Wght100Grad0Opsz48'
import IconOvenGenFill0Wght200Grad0Opsz48 from '../components/OvenGenFill0Wght200Grad0Opsz48'
import IconOvenGenFill0Wght300Grad0Opsz48 from '../components/OvenGenFill0Wght300Grad0Opsz48'
import IconOvenGenFill0Wght400Grad0Opsz48 from '../components/OvenGenFill0Wght400Grad0Opsz48'
import IconOvenGenFill0Wght500Grad0Opsz48 from '../components/OvenGenFill0Wght500Grad0Opsz48'
import IconOvenGenFill0Wght600Grad0Opsz48 from '../components/OvenGenFill0Wght600Grad0Opsz48'
import IconOvenGenFill0Wght700Grad0Opsz48 from '../components/OvenGenFill0Wght700Grad0Opsz48'
import IconOvenGenFill1Wght100Grad0Opsz48 from '../components/OvenGenFill1Wght100Grad0Opsz48'
import IconOvenGenFill1Wght200Grad0Opsz48 from '../components/OvenGenFill1Wght200Grad0Opsz48'
import IconOvenGenFill1Wght300Grad0Opsz48 from '../components/OvenGenFill1Wght300Grad0Opsz48'
import IconOvenGenFill1Wght400Grad0Opsz48 from '../components/OvenGenFill1Wght400Grad0Opsz48'
import IconOvenGenFill1Wght500Grad0Opsz48 from '../components/OvenGenFill1Wght500Grad0Opsz48'
import IconOvenGenFill1Wght600Grad0Opsz48 from '../components/OvenGenFill1Wght600Grad0Opsz48'
import IconOvenGenFill1Wght700Grad0Opsz48 from '../components/OvenGenFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconOvenGen = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconOvenGenFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconOvenGenFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconOvenGenFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconOvenGenFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconOvenGenFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconOvenGenFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconOvenGenFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconOvenGenFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconOvenGenFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconOvenGenFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconOvenGenFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconOvenGenFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconOvenGenFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconOvenGenFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
