import IconKeyFill0Wght100Grad0Opsz48 from '../components/KeyFill0Wght100Grad0Opsz48'
import IconKeyFill0Wght200Grad0Opsz48 from '../components/KeyFill0Wght200Grad0Opsz48'
import IconKeyFill0Wght300Grad0Opsz48 from '../components/KeyFill0Wght300Grad0Opsz48'
import IconKeyFill0Wght400Grad0Opsz48 from '../components/KeyFill0Wght400Grad0Opsz48'
import IconKeyFill0Wght500Grad0Opsz48 from '../components/KeyFill0Wght500Grad0Opsz48'
import IconKeyFill0Wght600Grad0Opsz48 from '../components/KeyFill0Wght600Grad0Opsz48'
import IconKeyFill0Wght700Grad0Opsz48 from '../components/KeyFill0Wght700Grad0Opsz48'
import IconKeyFill1Wght100Grad0Opsz48 from '../components/KeyFill1Wght100Grad0Opsz48'
import IconKeyFill1Wght200Grad0Opsz48 from '../components/KeyFill1Wght200Grad0Opsz48'
import IconKeyFill1Wght300Grad0Opsz48 from '../components/KeyFill1Wght300Grad0Opsz48'
import IconKeyFill1Wght400Grad0Opsz48 from '../components/KeyFill1Wght400Grad0Opsz48'
import IconKeyFill1Wght500Grad0Opsz48 from '../components/KeyFill1Wght500Grad0Opsz48'
import IconKeyFill1Wght600Grad0Opsz48 from '../components/KeyFill1Wght600Grad0Opsz48'
import IconKeyFill1Wght700Grad0Opsz48 from '../components/KeyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconKey = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconKeyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconKeyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconKeyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconKeyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconKeyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconKeyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconKeyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconKeyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconKeyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconKeyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconKeyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconKeyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconKeyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconKeyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
