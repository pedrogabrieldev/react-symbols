import IconFastForwardFill0Wght100Grad0Opsz48 from '../components/FastForwardFill0Wght100Grad0Opsz48'
import IconFastForwardFill0Wght200Grad0Opsz48 from '../components/FastForwardFill0Wght200Grad0Opsz48'
import IconFastForwardFill0Wght300Grad0Opsz48 from '../components/FastForwardFill0Wght300Grad0Opsz48'
import IconFastForwardFill0Wght400Grad0Opsz48 from '../components/FastForwardFill0Wght400Grad0Opsz48'
import IconFastForwardFill0Wght500Grad0Opsz48 from '../components/FastForwardFill0Wght500Grad0Opsz48'
import IconFastForwardFill0Wght600Grad0Opsz48 from '../components/FastForwardFill0Wght600Grad0Opsz48'
import IconFastForwardFill0Wght700Grad0Opsz48 from '../components/FastForwardFill0Wght700Grad0Opsz48'
import IconFastForwardFill1Wght100Grad0Opsz48 from '../components/FastForwardFill1Wght100Grad0Opsz48'
import IconFastForwardFill1Wght200Grad0Opsz48 from '../components/FastForwardFill1Wght200Grad0Opsz48'
import IconFastForwardFill1Wght300Grad0Opsz48 from '../components/FastForwardFill1Wght300Grad0Opsz48'
import IconFastForwardFill1Wght400Grad0Opsz48 from '../components/FastForwardFill1Wght400Grad0Opsz48'
import IconFastForwardFill1Wght500Grad0Opsz48 from '../components/FastForwardFill1Wght500Grad0Opsz48'
import IconFastForwardFill1Wght600Grad0Opsz48 from '../components/FastForwardFill1Wght600Grad0Opsz48'
import IconFastForwardFill1Wght700Grad0Opsz48 from '../components/FastForwardFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFastForward = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFastForwardFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFastForwardFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFastForwardFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFastForwardFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFastForwardFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFastForwardFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFastForwardFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFastForwardFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFastForwardFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFastForwardFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFastForwardFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFastForwardFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFastForwardFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFastForwardFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
