import IconQuickreplyFill0Wght100Grad0Opsz48 from '../components/QuickreplyFill0Wght100Grad0Opsz48'
import IconQuickreplyFill0Wght200Grad0Opsz48 from '../components/QuickreplyFill0Wght200Grad0Opsz48'
import IconQuickreplyFill0Wght300Grad0Opsz48 from '../components/QuickreplyFill0Wght300Grad0Opsz48'
import IconQuickreplyFill0Wght400Grad0Opsz48 from '../components/QuickreplyFill0Wght400Grad0Opsz48'
import IconQuickreplyFill0Wght500Grad0Opsz48 from '../components/QuickreplyFill0Wght500Grad0Opsz48'
import IconQuickreplyFill0Wght600Grad0Opsz48 from '../components/QuickreplyFill0Wght600Grad0Opsz48'
import IconQuickreplyFill0Wght700Grad0Opsz48 from '../components/QuickreplyFill0Wght700Grad0Opsz48'
import IconQuickreplyFill1Wght100Grad0Opsz48 from '../components/QuickreplyFill1Wght100Grad0Opsz48'
import IconQuickreplyFill1Wght200Grad0Opsz48 from '../components/QuickreplyFill1Wght200Grad0Opsz48'
import IconQuickreplyFill1Wght300Grad0Opsz48 from '../components/QuickreplyFill1Wght300Grad0Opsz48'
import IconQuickreplyFill1Wght400Grad0Opsz48 from '../components/QuickreplyFill1Wght400Grad0Opsz48'
import IconQuickreplyFill1Wght500Grad0Opsz48 from '../components/QuickreplyFill1Wght500Grad0Opsz48'
import IconQuickreplyFill1Wght600Grad0Opsz48 from '../components/QuickreplyFill1Wght600Grad0Opsz48'
import IconQuickreplyFill1Wght700Grad0Opsz48 from '../components/QuickreplyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconQuickreply = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconQuickreplyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconQuickreplyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconQuickreplyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconQuickreplyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconQuickreplyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconQuickreplyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconQuickreplyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconQuickreplyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconQuickreplyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconQuickreplyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconQuickreplyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconQuickreplyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconQuickreplyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconQuickreplyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
