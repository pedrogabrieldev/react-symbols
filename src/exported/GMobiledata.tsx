import IconGMobiledataFill0Wght100Grad0Opsz48 from '../components/GMobiledataFill0Wght100Grad0Opsz48'
import IconGMobiledataFill0Wght200Grad0Opsz48 from '../components/GMobiledataFill0Wght200Grad0Opsz48'
import IconGMobiledataFill0Wght300Grad0Opsz48 from '../components/GMobiledataFill0Wght300Grad0Opsz48'
import IconGMobiledataFill0Wght400Grad0Opsz48 from '../components/GMobiledataFill0Wght400Grad0Opsz48'
import IconGMobiledataFill0Wght500Grad0Opsz48 from '../components/GMobiledataFill0Wght500Grad0Opsz48'
import IconGMobiledataFill0Wght600Grad0Opsz48 from '../components/GMobiledataFill0Wght600Grad0Opsz48'
import IconGMobiledataFill0Wght700Grad0Opsz48 from '../components/GMobiledataFill0Wght700Grad0Opsz48'
import IconGMobiledataFill1Wght100Grad0Opsz48 from '../components/GMobiledataFill1Wght100Grad0Opsz48'
import IconGMobiledataFill1Wght200Grad0Opsz48 from '../components/GMobiledataFill1Wght200Grad0Opsz48'
import IconGMobiledataFill1Wght300Grad0Opsz48 from '../components/GMobiledataFill1Wght300Grad0Opsz48'
import IconGMobiledataFill1Wght400Grad0Opsz48 from '../components/GMobiledataFill1Wght400Grad0Opsz48'
import IconGMobiledataFill1Wght500Grad0Opsz48 from '../components/GMobiledataFill1Wght500Grad0Opsz48'
import IconGMobiledataFill1Wght600Grad0Opsz48 from '../components/GMobiledataFill1Wght600Grad0Opsz48'
import IconGMobiledataFill1Wght700Grad0Opsz48 from '../components/GMobiledataFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconGMobiledata = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconGMobiledataFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconGMobiledataFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconGMobiledataFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconGMobiledataFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconGMobiledataFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconGMobiledataFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconGMobiledataFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconGMobiledataFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconGMobiledataFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconGMobiledataFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconGMobiledataFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconGMobiledataFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconGMobiledataFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconGMobiledataFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
