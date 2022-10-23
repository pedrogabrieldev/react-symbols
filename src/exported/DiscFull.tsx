import IconDiscFullFill0Wght100Grad0Opsz48 from '../components/DiscFullFill0Wght100Grad0Opsz48'
import IconDiscFullFill0Wght200Grad0Opsz48 from '../components/DiscFullFill0Wght200Grad0Opsz48'
import IconDiscFullFill0Wght300Grad0Opsz48 from '../components/DiscFullFill0Wght300Grad0Opsz48'
import IconDiscFullFill0Wght400Grad0Opsz48 from '../components/DiscFullFill0Wght400Grad0Opsz48'
import IconDiscFullFill0Wght500Grad0Opsz48 from '../components/DiscFullFill0Wght500Grad0Opsz48'
import IconDiscFullFill0Wght600Grad0Opsz48 from '../components/DiscFullFill0Wght600Grad0Opsz48'
import IconDiscFullFill0Wght700Grad0Opsz48 from '../components/DiscFullFill0Wght700Grad0Opsz48'
import IconDiscFullFill1Wght100Grad0Opsz48 from '../components/DiscFullFill1Wght100Grad0Opsz48'
import IconDiscFullFill1Wght200Grad0Opsz48 from '../components/DiscFullFill1Wght200Grad0Opsz48'
import IconDiscFullFill1Wght300Grad0Opsz48 from '../components/DiscFullFill1Wght300Grad0Opsz48'
import IconDiscFullFill1Wght400Grad0Opsz48 from '../components/DiscFullFill1Wght400Grad0Opsz48'
import IconDiscFullFill1Wght500Grad0Opsz48 from '../components/DiscFullFill1Wght500Grad0Opsz48'
import IconDiscFullFill1Wght600Grad0Opsz48 from '../components/DiscFullFill1Wght600Grad0Opsz48'
import IconDiscFullFill1Wght700Grad0Opsz48 from '../components/DiscFullFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDiscFull = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDiscFullFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDiscFullFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDiscFullFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDiscFullFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDiscFullFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDiscFullFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDiscFullFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDiscFullFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDiscFullFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDiscFullFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDiscFullFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDiscFullFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDiscFullFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDiscFullFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
