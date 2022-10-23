import IconEMobiledataFill0Wght100Grad0Opsz48 from '../components/EMobiledataFill0Wght100Grad0Opsz48'
import IconEMobiledataFill0Wght200Grad0Opsz48 from '../components/EMobiledataFill0Wght200Grad0Opsz48'
import IconEMobiledataFill0Wght300Grad0Opsz48 from '../components/EMobiledataFill0Wght300Grad0Opsz48'
import IconEMobiledataFill0Wght400Grad0Opsz48 from '../components/EMobiledataFill0Wght400Grad0Opsz48'
import IconEMobiledataFill0Wght500Grad0Opsz48 from '../components/EMobiledataFill0Wght500Grad0Opsz48'
import IconEMobiledataFill0Wght600Grad0Opsz48 from '../components/EMobiledataFill0Wght600Grad0Opsz48'
import IconEMobiledataFill0Wght700Grad0Opsz48 from '../components/EMobiledataFill0Wght700Grad0Opsz48'
import IconEMobiledataFill1Wght100Grad0Opsz48 from '../components/EMobiledataFill1Wght100Grad0Opsz48'
import IconEMobiledataFill1Wght200Grad0Opsz48 from '../components/EMobiledataFill1Wght200Grad0Opsz48'
import IconEMobiledataFill1Wght300Grad0Opsz48 from '../components/EMobiledataFill1Wght300Grad0Opsz48'
import IconEMobiledataFill1Wght400Grad0Opsz48 from '../components/EMobiledataFill1Wght400Grad0Opsz48'
import IconEMobiledataFill1Wght500Grad0Opsz48 from '../components/EMobiledataFill1Wght500Grad0Opsz48'
import IconEMobiledataFill1Wght600Grad0Opsz48 from '../components/EMobiledataFill1Wght600Grad0Opsz48'
import IconEMobiledataFill1Wght700Grad0Opsz48 from '../components/EMobiledataFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEMobiledata = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEMobiledataFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEMobiledataFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEMobiledataFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEMobiledataFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEMobiledataFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEMobiledataFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEMobiledataFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEMobiledataFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEMobiledataFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEMobiledataFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEMobiledataFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEMobiledataFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEMobiledataFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEMobiledataFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
