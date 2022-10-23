import IconKeyOffFill0Wght100Grad0Opsz48 from '../components/KeyOffFill0Wght100Grad0Opsz48'
import IconKeyOffFill0Wght200Grad0Opsz48 from '../components/KeyOffFill0Wght200Grad0Opsz48'
import IconKeyOffFill0Wght300Grad0Opsz48 from '../components/KeyOffFill0Wght300Grad0Opsz48'
import IconKeyOffFill0Wght400Grad0Opsz48 from '../components/KeyOffFill0Wght400Grad0Opsz48'
import IconKeyOffFill0Wght500Grad0Opsz48 from '../components/KeyOffFill0Wght500Grad0Opsz48'
import IconKeyOffFill0Wght600Grad0Opsz48 from '../components/KeyOffFill0Wght600Grad0Opsz48'
import IconKeyOffFill0Wght700Grad0Opsz48 from '../components/KeyOffFill0Wght700Grad0Opsz48'
import IconKeyOffFill1Wght100Grad0Opsz48 from '../components/KeyOffFill1Wght100Grad0Opsz48'
import IconKeyOffFill1Wght200Grad0Opsz48 from '../components/KeyOffFill1Wght200Grad0Opsz48'
import IconKeyOffFill1Wght300Grad0Opsz48 from '../components/KeyOffFill1Wght300Grad0Opsz48'
import IconKeyOffFill1Wght400Grad0Opsz48 from '../components/KeyOffFill1Wght400Grad0Opsz48'
import IconKeyOffFill1Wght500Grad0Opsz48 from '../components/KeyOffFill1Wght500Grad0Opsz48'
import IconKeyOffFill1Wght600Grad0Opsz48 from '../components/KeyOffFill1Wght600Grad0Opsz48'
import IconKeyOffFill1Wght700Grad0Opsz48 from '../components/KeyOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconKeyOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconKeyOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconKeyOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconKeyOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconKeyOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconKeyOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconKeyOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconKeyOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconKeyOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconKeyOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconKeyOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconKeyOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconKeyOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconKeyOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconKeyOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
