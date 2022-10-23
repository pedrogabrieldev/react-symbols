import IconLocalCarWashFill0Wght100Grad0Opsz48 from '../components/LocalCarWashFill0Wght100Grad0Opsz48'
import IconLocalCarWashFill0Wght200Grad0Opsz48 from '../components/LocalCarWashFill0Wght200Grad0Opsz48'
import IconLocalCarWashFill0Wght300Grad0Opsz48 from '../components/LocalCarWashFill0Wght300Grad0Opsz48'
import IconLocalCarWashFill0Wght400Grad0Opsz48 from '../components/LocalCarWashFill0Wght400Grad0Opsz48'
import IconLocalCarWashFill0Wght500Grad0Opsz48 from '../components/LocalCarWashFill0Wght500Grad0Opsz48'
import IconLocalCarWashFill0Wght600Grad0Opsz48 from '../components/LocalCarWashFill0Wght600Grad0Opsz48'
import IconLocalCarWashFill0Wght700Grad0Opsz48 from '../components/LocalCarWashFill0Wght700Grad0Opsz48'
import IconLocalCarWashFill1Wght100Grad0Opsz48 from '../components/LocalCarWashFill1Wght100Grad0Opsz48'
import IconLocalCarWashFill1Wght200Grad0Opsz48 from '../components/LocalCarWashFill1Wght200Grad0Opsz48'
import IconLocalCarWashFill1Wght300Grad0Opsz48 from '../components/LocalCarWashFill1Wght300Grad0Opsz48'
import IconLocalCarWashFill1Wght400Grad0Opsz48 from '../components/LocalCarWashFill1Wght400Grad0Opsz48'
import IconLocalCarWashFill1Wght500Grad0Opsz48 from '../components/LocalCarWashFill1Wght500Grad0Opsz48'
import IconLocalCarWashFill1Wght600Grad0Opsz48 from '../components/LocalCarWashFill1Wght600Grad0Opsz48'
import IconLocalCarWashFill1Wght700Grad0Opsz48 from '../components/LocalCarWashFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLocalCarWash = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLocalCarWashFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLocalCarWashFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLocalCarWashFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLocalCarWashFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLocalCarWashFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLocalCarWashFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLocalCarWashFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLocalCarWashFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLocalCarWashFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLocalCarWashFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLocalCarWashFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLocalCarWashFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLocalCarWashFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLocalCarWashFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
