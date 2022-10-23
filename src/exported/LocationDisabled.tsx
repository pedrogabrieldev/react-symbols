import IconLocationDisabledFill0Wght100Grad0Opsz48 from '../components/LocationDisabledFill0Wght100Grad0Opsz48'
import IconLocationDisabledFill0Wght200Grad0Opsz48 from '../components/LocationDisabledFill0Wght200Grad0Opsz48'
import IconLocationDisabledFill0Wght300Grad0Opsz48 from '../components/LocationDisabledFill0Wght300Grad0Opsz48'
import IconLocationDisabledFill0Wght400Grad0Opsz48 from '../components/LocationDisabledFill0Wght400Grad0Opsz48'
import IconLocationDisabledFill0Wght500Grad0Opsz48 from '../components/LocationDisabledFill0Wght500Grad0Opsz48'
import IconLocationDisabledFill0Wght600Grad0Opsz48 from '../components/LocationDisabledFill0Wght600Grad0Opsz48'
import IconLocationDisabledFill0Wght700Grad0Opsz48 from '../components/LocationDisabledFill0Wght700Grad0Opsz48'
import IconLocationDisabledFill1Wght100Grad0Opsz48 from '../components/LocationDisabledFill1Wght100Grad0Opsz48'
import IconLocationDisabledFill1Wght200Grad0Opsz48 from '../components/LocationDisabledFill1Wght200Grad0Opsz48'
import IconLocationDisabledFill1Wght300Grad0Opsz48 from '../components/LocationDisabledFill1Wght300Grad0Opsz48'
import IconLocationDisabledFill1Wght400Grad0Opsz48 from '../components/LocationDisabledFill1Wght400Grad0Opsz48'
import IconLocationDisabledFill1Wght500Grad0Opsz48 from '../components/LocationDisabledFill1Wght500Grad0Opsz48'
import IconLocationDisabledFill1Wght600Grad0Opsz48 from '../components/LocationDisabledFill1Wght600Grad0Opsz48'
import IconLocationDisabledFill1Wght700Grad0Opsz48 from '../components/LocationDisabledFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLocationDisabled = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLocationDisabledFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLocationDisabledFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLocationDisabledFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLocationDisabledFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLocationDisabledFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLocationDisabledFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLocationDisabledFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLocationDisabledFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLocationDisabledFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLocationDisabledFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLocationDisabledFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLocationDisabledFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLocationDisabledFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLocationDisabledFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
