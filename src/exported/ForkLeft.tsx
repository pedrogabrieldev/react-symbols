import IconForkLeftFill0Wght100Grad0Opsz48 from '../components/ForkLeftFill0Wght100Grad0Opsz48'
import IconForkLeftFill0Wght200Grad0Opsz48 from '../components/ForkLeftFill0Wght200Grad0Opsz48'
import IconForkLeftFill0Wght300Grad0Opsz48 from '../components/ForkLeftFill0Wght300Grad0Opsz48'
import IconForkLeftFill0Wght400Grad0Opsz48 from '../components/ForkLeftFill0Wght400Grad0Opsz48'
import IconForkLeftFill0Wght500Grad0Opsz48 from '../components/ForkLeftFill0Wght500Grad0Opsz48'
import IconForkLeftFill0Wght600Grad0Opsz48 from '../components/ForkLeftFill0Wght600Grad0Opsz48'
import IconForkLeftFill0Wght700Grad0Opsz48 from '../components/ForkLeftFill0Wght700Grad0Opsz48'
import IconForkLeftFill1Wght100Grad0Opsz48 from '../components/ForkLeftFill1Wght100Grad0Opsz48'
import IconForkLeftFill1Wght200Grad0Opsz48 from '../components/ForkLeftFill1Wght200Grad0Opsz48'
import IconForkLeftFill1Wght300Grad0Opsz48 from '../components/ForkLeftFill1Wght300Grad0Opsz48'
import IconForkLeftFill1Wght400Grad0Opsz48 from '../components/ForkLeftFill1Wght400Grad0Opsz48'
import IconForkLeftFill1Wght500Grad0Opsz48 from '../components/ForkLeftFill1Wght500Grad0Opsz48'
import IconForkLeftFill1Wght600Grad0Opsz48 from '../components/ForkLeftFill1Wght600Grad0Opsz48'
import IconForkLeftFill1Wght700Grad0Opsz48 from '../components/ForkLeftFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconForkLeft = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconForkLeftFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconForkLeftFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconForkLeftFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconForkLeftFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconForkLeftFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconForkLeftFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconForkLeftFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconForkLeftFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconForkLeftFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconForkLeftFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconForkLeftFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconForkLeftFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconForkLeftFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconForkLeftFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
