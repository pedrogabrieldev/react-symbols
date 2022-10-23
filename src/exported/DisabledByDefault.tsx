import IconDisabledByDefaultFill0Wght100Grad0Opsz48 from '../components/DisabledByDefaultFill0Wght100Grad0Opsz48'
import IconDisabledByDefaultFill0Wght200Grad0Opsz48 from '../components/DisabledByDefaultFill0Wght200Grad0Opsz48'
import IconDisabledByDefaultFill0Wght300Grad0Opsz48 from '../components/DisabledByDefaultFill0Wght300Grad0Opsz48'
import IconDisabledByDefaultFill0Wght400Grad0Opsz48 from '../components/DisabledByDefaultFill0Wght400Grad0Opsz48'
import IconDisabledByDefaultFill0Wght500Grad0Opsz48 from '../components/DisabledByDefaultFill0Wght500Grad0Opsz48'
import IconDisabledByDefaultFill0Wght600Grad0Opsz48 from '../components/DisabledByDefaultFill0Wght600Grad0Opsz48'
import IconDisabledByDefaultFill0Wght700Grad0Opsz48 from '../components/DisabledByDefaultFill0Wght700Grad0Opsz48'
import IconDisabledByDefaultFill1Wght100Grad0Opsz48 from '../components/DisabledByDefaultFill1Wght100Grad0Opsz48'
import IconDisabledByDefaultFill1Wght200Grad0Opsz48 from '../components/DisabledByDefaultFill1Wght200Grad0Opsz48'
import IconDisabledByDefaultFill1Wght300Grad0Opsz48 from '../components/DisabledByDefaultFill1Wght300Grad0Opsz48'
import IconDisabledByDefaultFill1Wght400Grad0Opsz48 from '../components/DisabledByDefaultFill1Wght400Grad0Opsz48'
import IconDisabledByDefaultFill1Wght500Grad0Opsz48 from '../components/DisabledByDefaultFill1Wght500Grad0Opsz48'
import IconDisabledByDefaultFill1Wght600Grad0Opsz48 from '../components/DisabledByDefaultFill1Wght600Grad0Opsz48'
import IconDisabledByDefaultFill1Wght700Grad0Opsz48 from '../components/DisabledByDefaultFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDisabledByDefault = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDisabledByDefaultFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDisabledByDefaultFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDisabledByDefaultFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDisabledByDefaultFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDisabledByDefaultFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDisabledByDefaultFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDisabledByDefaultFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDisabledByDefaultFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDisabledByDefaultFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDisabledByDefaultFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDisabledByDefaultFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDisabledByDefaultFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDisabledByDefaultFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDisabledByDefaultFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
