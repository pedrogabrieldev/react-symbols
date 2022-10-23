import IconTornadoFill0Wght100Grad0Opsz48 from '../components/TornadoFill0Wght100Grad0Opsz48'
import IconTornadoFill0Wght200Grad0Opsz48 from '../components/TornadoFill0Wght200Grad0Opsz48'
import IconTornadoFill0Wght300Grad0Opsz48 from '../components/TornadoFill0Wght300Grad0Opsz48'
import IconTornadoFill0Wght400Grad0Opsz48 from '../components/TornadoFill0Wght400Grad0Opsz48'
import IconTornadoFill0Wght500Grad0Opsz48 from '../components/TornadoFill0Wght500Grad0Opsz48'
import IconTornadoFill0Wght600Grad0Opsz48 from '../components/TornadoFill0Wght600Grad0Opsz48'
import IconTornadoFill0Wght700Grad0Opsz48 from '../components/TornadoFill0Wght700Grad0Opsz48'
import IconTornadoFill1Wght100Grad0Opsz48 from '../components/TornadoFill1Wght100Grad0Opsz48'
import IconTornadoFill1Wght200Grad0Opsz48 from '../components/TornadoFill1Wght200Grad0Opsz48'
import IconTornadoFill1Wght300Grad0Opsz48 from '../components/TornadoFill1Wght300Grad0Opsz48'
import IconTornadoFill1Wght400Grad0Opsz48 from '../components/TornadoFill1Wght400Grad0Opsz48'
import IconTornadoFill1Wght500Grad0Opsz48 from '../components/TornadoFill1Wght500Grad0Opsz48'
import IconTornadoFill1Wght600Grad0Opsz48 from '../components/TornadoFill1Wght600Grad0Opsz48'
import IconTornadoFill1Wght700Grad0Opsz48 from '../components/TornadoFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTornado = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTornadoFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTornadoFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTornadoFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTornadoFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTornadoFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTornadoFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTornadoFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTornadoFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTornadoFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTornadoFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTornadoFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTornadoFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTornadoFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTornadoFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
