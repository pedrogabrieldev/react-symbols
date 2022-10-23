import IconWashFill0Wght100Grad0Opsz48 from '../components/WashFill0Wght100Grad0Opsz48'
import IconWashFill0Wght200Grad0Opsz48 from '../components/WashFill0Wght200Grad0Opsz48'
import IconWashFill0Wght300Grad0Opsz48 from '../components/WashFill0Wght300Grad0Opsz48'
import IconWashFill0Wght400Grad0Opsz48 from '../components/WashFill0Wght400Grad0Opsz48'
import IconWashFill0Wght500Grad0Opsz48 from '../components/WashFill0Wght500Grad0Opsz48'
import IconWashFill0Wght600Grad0Opsz48 from '../components/WashFill0Wght600Grad0Opsz48'
import IconWashFill0Wght700Grad0Opsz48 from '../components/WashFill0Wght700Grad0Opsz48'
import IconWashFill1Wght100Grad0Opsz48 from '../components/WashFill1Wght100Grad0Opsz48'
import IconWashFill1Wght200Grad0Opsz48 from '../components/WashFill1Wght200Grad0Opsz48'
import IconWashFill1Wght300Grad0Opsz48 from '../components/WashFill1Wght300Grad0Opsz48'
import IconWashFill1Wght400Grad0Opsz48 from '../components/WashFill1Wght400Grad0Opsz48'
import IconWashFill1Wght500Grad0Opsz48 from '../components/WashFill1Wght500Grad0Opsz48'
import IconWashFill1Wght600Grad0Opsz48 from '../components/WashFill1Wght600Grad0Opsz48'
import IconWashFill1Wght700Grad0Opsz48 from '../components/WashFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWash = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWashFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWashFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWashFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWashFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWashFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWashFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWashFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWashFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWashFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWashFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWashFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWashFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWashFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWashFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
