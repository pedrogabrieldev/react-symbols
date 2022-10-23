import IconSystemUpdateFill0Wght100Grad0Opsz48 from '../components/SystemUpdateFill0Wght100Grad0Opsz48'
import IconSystemUpdateFill0Wght200Grad0Opsz48 from '../components/SystemUpdateFill0Wght200Grad0Opsz48'
import IconSystemUpdateFill0Wght300Grad0Opsz48 from '../components/SystemUpdateFill0Wght300Grad0Opsz48'
import IconSystemUpdateFill0Wght400Grad0Opsz48 from '../components/SystemUpdateFill0Wght400Grad0Opsz48'
import IconSystemUpdateFill0Wght500Grad0Opsz48 from '../components/SystemUpdateFill0Wght500Grad0Opsz48'
import IconSystemUpdateFill0Wght600Grad0Opsz48 from '../components/SystemUpdateFill0Wght600Grad0Opsz48'
import IconSystemUpdateFill0Wght700Grad0Opsz48 from '../components/SystemUpdateFill0Wght700Grad0Opsz48'
import IconSystemUpdateFill1Wght100Grad0Opsz48 from '../components/SystemUpdateFill1Wght100Grad0Opsz48'
import IconSystemUpdateFill1Wght200Grad0Opsz48 from '../components/SystemUpdateFill1Wght200Grad0Opsz48'
import IconSystemUpdateFill1Wght300Grad0Opsz48 from '../components/SystemUpdateFill1Wght300Grad0Opsz48'
import IconSystemUpdateFill1Wght400Grad0Opsz48 from '../components/SystemUpdateFill1Wght400Grad0Opsz48'
import IconSystemUpdateFill1Wght500Grad0Opsz48 from '../components/SystemUpdateFill1Wght500Grad0Opsz48'
import IconSystemUpdateFill1Wght600Grad0Opsz48 from '../components/SystemUpdateFill1Wght600Grad0Opsz48'
import IconSystemUpdateFill1Wght700Grad0Opsz48 from '../components/SystemUpdateFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSystemUpdate = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSystemUpdateFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSystemUpdateFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSystemUpdateFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSystemUpdateFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSystemUpdateFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSystemUpdateFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSystemUpdateFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSystemUpdateFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSystemUpdateFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSystemUpdateFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSystemUpdateFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSystemUpdateFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSystemUpdateFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSystemUpdateFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
