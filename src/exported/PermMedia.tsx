import IconPermMediaFill0Wght100Grad0Opsz48 from '../components/PermMediaFill0Wght100Grad0Opsz48'
import IconPermMediaFill0Wght200Grad0Opsz48 from '../components/PermMediaFill0Wght200Grad0Opsz48'
import IconPermMediaFill0Wght300Grad0Opsz48 from '../components/PermMediaFill0Wght300Grad0Opsz48'
import IconPermMediaFill0Wght400Grad0Opsz48 from '../components/PermMediaFill0Wght400Grad0Opsz48'
import IconPermMediaFill0Wght500Grad0Opsz48 from '../components/PermMediaFill0Wght500Grad0Opsz48'
import IconPermMediaFill0Wght600Grad0Opsz48 from '../components/PermMediaFill0Wght600Grad0Opsz48'
import IconPermMediaFill0Wght700Grad0Opsz48 from '../components/PermMediaFill0Wght700Grad0Opsz48'
import IconPermMediaFill1Wght100Grad0Opsz48 from '../components/PermMediaFill1Wght100Grad0Opsz48'
import IconPermMediaFill1Wght200Grad0Opsz48 from '../components/PermMediaFill1Wght200Grad0Opsz48'
import IconPermMediaFill1Wght300Grad0Opsz48 from '../components/PermMediaFill1Wght300Grad0Opsz48'
import IconPermMediaFill1Wght400Grad0Opsz48 from '../components/PermMediaFill1Wght400Grad0Opsz48'
import IconPermMediaFill1Wght500Grad0Opsz48 from '../components/PermMediaFill1Wght500Grad0Opsz48'
import IconPermMediaFill1Wght600Grad0Opsz48 from '../components/PermMediaFill1Wght600Grad0Opsz48'
import IconPermMediaFill1Wght700Grad0Opsz48 from '../components/PermMediaFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPermMedia = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPermMediaFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPermMediaFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPermMediaFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPermMediaFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPermMediaFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPermMediaFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPermMediaFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPermMediaFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPermMediaFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPermMediaFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPermMediaFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPermMediaFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPermMediaFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPermMediaFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
