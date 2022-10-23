import IconSystemUpdateAltFill0Wght100Grad0Opsz48 from '../components/SystemUpdateAltFill0Wght100Grad0Opsz48'
import IconSystemUpdateAltFill0Wght200Grad0Opsz48 from '../components/SystemUpdateAltFill0Wght200Grad0Opsz48'
import IconSystemUpdateAltFill0Wght300Grad0Opsz48 from '../components/SystemUpdateAltFill0Wght300Grad0Opsz48'
import IconSystemUpdateAltFill0Wght400Grad0Opsz48 from '../components/SystemUpdateAltFill0Wght400Grad0Opsz48'
import IconSystemUpdateAltFill0Wght500Grad0Opsz48 from '../components/SystemUpdateAltFill0Wght500Grad0Opsz48'
import IconSystemUpdateAltFill0Wght600Grad0Opsz48 from '../components/SystemUpdateAltFill0Wght600Grad0Opsz48'
import IconSystemUpdateAltFill0Wght700Grad0Opsz48 from '../components/SystemUpdateAltFill0Wght700Grad0Opsz48'
import IconSystemUpdateAltFill1Wght100Grad0Opsz48 from '../components/SystemUpdateAltFill1Wght100Grad0Opsz48'
import IconSystemUpdateAltFill1Wght200Grad0Opsz48 from '../components/SystemUpdateAltFill1Wght200Grad0Opsz48'
import IconSystemUpdateAltFill1Wght300Grad0Opsz48 from '../components/SystemUpdateAltFill1Wght300Grad0Opsz48'
import IconSystemUpdateAltFill1Wght400Grad0Opsz48 from '../components/SystemUpdateAltFill1Wght400Grad0Opsz48'
import IconSystemUpdateAltFill1Wght500Grad0Opsz48 from '../components/SystemUpdateAltFill1Wght500Grad0Opsz48'
import IconSystemUpdateAltFill1Wght600Grad0Opsz48 from '../components/SystemUpdateAltFill1Wght600Grad0Opsz48'
import IconSystemUpdateAltFill1Wght700Grad0Opsz48 from '../components/SystemUpdateAltFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSystemUpdateAlt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSystemUpdateAltFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSystemUpdateAltFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSystemUpdateAltFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSystemUpdateAltFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSystemUpdateAltFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSystemUpdateAltFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSystemUpdateAltFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSystemUpdateAltFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSystemUpdateAltFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSystemUpdateAltFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSystemUpdateAltFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSystemUpdateAltFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSystemUpdateAltFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSystemUpdateAltFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
