import IconGroupFill0Wght100Grad0Opsz48 from '../components/GroupFill0Wght100Grad0Opsz48'
import IconGroupFill0Wght200Grad0Opsz48 from '../components/GroupFill0Wght200Grad0Opsz48'
import IconGroupFill0Wght300Grad0Opsz48 from '../components/GroupFill0Wght300Grad0Opsz48'
import IconGroupFill0Wght400Grad0Opsz48 from '../components/GroupFill0Wght400Grad0Opsz48'
import IconGroupFill0Wght500Grad0Opsz48 from '../components/GroupFill0Wght500Grad0Opsz48'
import IconGroupFill0Wght600Grad0Opsz48 from '../components/GroupFill0Wght600Grad0Opsz48'
import IconGroupFill0Wght700Grad0Opsz48 from '../components/GroupFill0Wght700Grad0Opsz48'
import IconGroupFill1Wght100Grad0Opsz48 from '../components/GroupFill1Wght100Grad0Opsz48'
import IconGroupFill1Wght200Grad0Opsz48 from '../components/GroupFill1Wght200Grad0Opsz48'
import IconGroupFill1Wght300Grad0Opsz48 from '../components/GroupFill1Wght300Grad0Opsz48'
import IconGroupFill1Wght400Grad0Opsz48 from '../components/GroupFill1Wght400Grad0Opsz48'
import IconGroupFill1Wght500Grad0Opsz48 from '../components/GroupFill1Wght500Grad0Opsz48'
import IconGroupFill1Wght600Grad0Opsz48 from '../components/GroupFill1Wght600Grad0Opsz48'
import IconGroupFill1Wght700Grad0Opsz48 from '../components/GroupFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconGroup = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconGroupFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconGroupFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconGroupFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconGroupFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconGroupFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconGroupFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconGroupFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconGroupFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconGroupFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconGroupFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconGroupFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconGroupFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconGroupFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconGroupFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
