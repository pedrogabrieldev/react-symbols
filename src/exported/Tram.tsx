import IconTramFill0Wght100Grad0Opsz48 from '../components/TramFill0Wght100Grad0Opsz48'
import IconTramFill0Wght200Grad0Opsz48 from '../components/TramFill0Wght200Grad0Opsz48'
import IconTramFill0Wght300Grad0Opsz48 from '../components/TramFill0Wght300Grad0Opsz48'
import IconTramFill0Wght400Grad0Opsz48 from '../components/TramFill0Wght400Grad0Opsz48'
import IconTramFill0Wght500Grad0Opsz48 from '../components/TramFill0Wght500Grad0Opsz48'
import IconTramFill0Wght600Grad0Opsz48 from '../components/TramFill0Wght600Grad0Opsz48'
import IconTramFill0Wght700Grad0Opsz48 from '../components/TramFill0Wght700Grad0Opsz48'
import IconTramFill1Wght100Grad0Opsz48 from '../components/TramFill1Wght100Grad0Opsz48'
import IconTramFill1Wght200Grad0Opsz48 from '../components/TramFill1Wght200Grad0Opsz48'
import IconTramFill1Wght300Grad0Opsz48 from '../components/TramFill1Wght300Grad0Opsz48'
import IconTramFill1Wght400Grad0Opsz48 from '../components/TramFill1Wght400Grad0Opsz48'
import IconTramFill1Wght500Grad0Opsz48 from '../components/TramFill1Wght500Grad0Opsz48'
import IconTramFill1Wght600Grad0Opsz48 from '../components/TramFill1Wght600Grad0Opsz48'
import IconTramFill1Wght700Grad0Opsz48 from '../components/TramFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTram = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTramFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTramFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTramFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTramFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTramFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTramFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTramFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTramFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTramFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTramFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTramFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTramFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTramFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTramFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
