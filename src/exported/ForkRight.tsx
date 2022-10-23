import IconForkRightFill0Wght100Grad0Opsz48 from '../components/ForkRightFill0Wght100Grad0Opsz48'
import IconForkRightFill0Wght200Grad0Opsz48 from '../components/ForkRightFill0Wght200Grad0Opsz48'
import IconForkRightFill0Wght300Grad0Opsz48 from '../components/ForkRightFill0Wght300Grad0Opsz48'
import IconForkRightFill0Wght400Grad0Opsz48 from '../components/ForkRightFill0Wght400Grad0Opsz48'
import IconForkRightFill0Wght500Grad0Opsz48 from '../components/ForkRightFill0Wght500Grad0Opsz48'
import IconForkRightFill0Wght600Grad0Opsz48 from '../components/ForkRightFill0Wght600Grad0Opsz48'
import IconForkRightFill0Wght700Grad0Opsz48 from '../components/ForkRightFill0Wght700Grad0Opsz48'
import IconForkRightFill1Wght100Grad0Opsz48 from '../components/ForkRightFill1Wght100Grad0Opsz48'
import IconForkRightFill1Wght200Grad0Opsz48 from '../components/ForkRightFill1Wght200Grad0Opsz48'
import IconForkRightFill1Wght300Grad0Opsz48 from '../components/ForkRightFill1Wght300Grad0Opsz48'
import IconForkRightFill1Wght400Grad0Opsz48 from '../components/ForkRightFill1Wght400Grad0Opsz48'
import IconForkRightFill1Wght500Grad0Opsz48 from '../components/ForkRightFill1Wght500Grad0Opsz48'
import IconForkRightFill1Wght600Grad0Opsz48 from '../components/ForkRightFill1Wght600Grad0Opsz48'
import IconForkRightFill1Wght700Grad0Opsz48 from '../components/ForkRightFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconForkRight = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconForkRightFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconForkRightFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconForkRightFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconForkRightFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconForkRightFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconForkRightFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconForkRightFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconForkRightFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconForkRightFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconForkRightFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconForkRightFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconForkRightFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconForkRightFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconForkRightFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
