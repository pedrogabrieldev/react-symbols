import IconRMobiledataFill0Wght100Grad0Opsz48 from '../components/RMobiledataFill0Wght100Grad0Opsz48'
import IconRMobiledataFill0Wght200Grad0Opsz48 from '../components/RMobiledataFill0Wght200Grad0Opsz48'
import IconRMobiledataFill0Wght300Grad0Opsz48 from '../components/RMobiledataFill0Wght300Grad0Opsz48'
import IconRMobiledataFill0Wght400Grad0Opsz48 from '../components/RMobiledataFill0Wght400Grad0Opsz48'
import IconRMobiledataFill0Wght500Grad0Opsz48 from '../components/RMobiledataFill0Wght500Grad0Opsz48'
import IconRMobiledataFill0Wght600Grad0Opsz48 from '../components/RMobiledataFill0Wght600Grad0Opsz48'
import IconRMobiledataFill0Wght700Grad0Opsz48 from '../components/RMobiledataFill0Wght700Grad0Opsz48'
import IconRMobiledataFill1Wght100Grad0Opsz48 from '../components/RMobiledataFill1Wght100Grad0Opsz48'
import IconRMobiledataFill1Wght200Grad0Opsz48 from '../components/RMobiledataFill1Wght200Grad0Opsz48'
import IconRMobiledataFill1Wght300Grad0Opsz48 from '../components/RMobiledataFill1Wght300Grad0Opsz48'
import IconRMobiledataFill1Wght400Grad0Opsz48 from '../components/RMobiledataFill1Wght400Grad0Opsz48'
import IconRMobiledataFill1Wght500Grad0Opsz48 from '../components/RMobiledataFill1Wght500Grad0Opsz48'
import IconRMobiledataFill1Wght600Grad0Opsz48 from '../components/RMobiledataFill1Wght600Grad0Opsz48'
import IconRMobiledataFill1Wght700Grad0Opsz48 from '../components/RMobiledataFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRMobiledata = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRMobiledataFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRMobiledataFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRMobiledataFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRMobiledataFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRMobiledataFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRMobiledataFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRMobiledataFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRMobiledataFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRMobiledataFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRMobiledataFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRMobiledataFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRMobiledataFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRMobiledataFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRMobiledataFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
