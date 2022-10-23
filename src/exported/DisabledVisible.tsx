import IconDisabledVisibleFill0Wght100Grad0Opsz48 from '../components/DisabledVisibleFill0Wght100Grad0Opsz48'
import IconDisabledVisibleFill0Wght200Grad0Opsz48 from '../components/DisabledVisibleFill0Wght200Grad0Opsz48'
import IconDisabledVisibleFill0Wght300Grad0Opsz48 from '../components/DisabledVisibleFill0Wght300Grad0Opsz48'
import IconDisabledVisibleFill0Wght400Grad0Opsz48 from '../components/DisabledVisibleFill0Wght400Grad0Opsz48'
import IconDisabledVisibleFill0Wght500Grad0Opsz48 from '../components/DisabledVisibleFill0Wght500Grad0Opsz48'
import IconDisabledVisibleFill0Wght600Grad0Opsz48 from '../components/DisabledVisibleFill0Wght600Grad0Opsz48'
import IconDisabledVisibleFill0Wght700Grad0Opsz48 from '../components/DisabledVisibleFill0Wght700Grad0Opsz48'
import IconDisabledVisibleFill1Wght100Grad0Opsz48 from '../components/DisabledVisibleFill1Wght100Grad0Opsz48'
import IconDisabledVisibleFill1Wght200Grad0Opsz48 from '../components/DisabledVisibleFill1Wght200Grad0Opsz48'
import IconDisabledVisibleFill1Wght300Grad0Opsz48 from '../components/DisabledVisibleFill1Wght300Grad0Opsz48'
import IconDisabledVisibleFill1Wght400Grad0Opsz48 from '../components/DisabledVisibleFill1Wght400Grad0Opsz48'
import IconDisabledVisibleFill1Wght500Grad0Opsz48 from '../components/DisabledVisibleFill1Wght500Grad0Opsz48'
import IconDisabledVisibleFill1Wght600Grad0Opsz48 from '../components/DisabledVisibleFill1Wght600Grad0Opsz48'
import IconDisabledVisibleFill1Wght700Grad0Opsz48 from '../components/DisabledVisibleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDisabledVisible = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDisabledVisibleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDisabledVisibleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDisabledVisibleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDisabledVisibleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDisabledVisibleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDisabledVisibleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDisabledVisibleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDisabledVisibleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDisabledVisibleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDisabledVisibleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDisabledVisibleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDisabledVisibleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDisabledVisibleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDisabledVisibleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
