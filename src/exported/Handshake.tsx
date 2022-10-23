import IconHandshakeFill0Wght100Grad0Opsz48 from '../components/HandshakeFill0Wght100Grad0Opsz48'
import IconHandshakeFill0Wght200Grad0Opsz48 from '../components/HandshakeFill0Wght200Grad0Opsz48'
import IconHandshakeFill0Wght300Grad0Opsz48 from '../components/HandshakeFill0Wght300Grad0Opsz48'
import IconHandshakeFill0Wght400Grad0Opsz48 from '../components/HandshakeFill0Wght400Grad0Opsz48'
import IconHandshakeFill0Wght500Grad0Opsz48 from '../components/HandshakeFill0Wght500Grad0Opsz48'
import IconHandshakeFill0Wght600Grad0Opsz48 from '../components/HandshakeFill0Wght600Grad0Opsz48'
import IconHandshakeFill0Wght700Grad0Opsz48 from '../components/HandshakeFill0Wght700Grad0Opsz48'
import IconHandshakeFill1Wght100Grad0Opsz48 from '../components/HandshakeFill1Wght100Grad0Opsz48'
import IconHandshakeFill1Wght200Grad0Opsz48 from '../components/HandshakeFill1Wght200Grad0Opsz48'
import IconHandshakeFill1Wght300Grad0Opsz48 from '../components/HandshakeFill1Wght300Grad0Opsz48'
import IconHandshakeFill1Wght400Grad0Opsz48 from '../components/HandshakeFill1Wght400Grad0Opsz48'
import IconHandshakeFill1Wght500Grad0Opsz48 from '../components/HandshakeFill1Wght500Grad0Opsz48'
import IconHandshakeFill1Wght600Grad0Opsz48 from '../components/HandshakeFill1Wght600Grad0Opsz48'
import IconHandshakeFill1Wght700Grad0Opsz48 from '../components/HandshakeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHandshake = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHandshakeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHandshakeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHandshakeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHandshakeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHandshakeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHandshakeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHandshakeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHandshakeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHandshakeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHandshakeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHandshakeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHandshakeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHandshakeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHandshakeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
