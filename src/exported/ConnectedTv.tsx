import IconConnectedTvFill0Wght100Grad0Opsz48 from '../components/ConnectedTvFill0Wght100Grad0Opsz48'
import IconConnectedTvFill0Wght200Grad0Opsz48 from '../components/ConnectedTvFill0Wght200Grad0Opsz48'
import IconConnectedTvFill0Wght300Grad0Opsz48 from '../components/ConnectedTvFill0Wght300Grad0Opsz48'
import IconConnectedTvFill0Wght400Grad0Opsz48 from '../components/ConnectedTvFill0Wght400Grad0Opsz48'
import IconConnectedTvFill0Wght500Grad0Opsz48 from '../components/ConnectedTvFill0Wght500Grad0Opsz48'
import IconConnectedTvFill0Wght600Grad0Opsz48 from '../components/ConnectedTvFill0Wght600Grad0Opsz48'
import IconConnectedTvFill0Wght700Grad0Opsz48 from '../components/ConnectedTvFill0Wght700Grad0Opsz48'
import IconConnectedTvFill1Wght100Grad0Opsz48 from '../components/ConnectedTvFill1Wght100Grad0Opsz48'
import IconConnectedTvFill1Wght200Grad0Opsz48 from '../components/ConnectedTvFill1Wght200Grad0Opsz48'
import IconConnectedTvFill1Wght300Grad0Opsz48 from '../components/ConnectedTvFill1Wght300Grad0Opsz48'
import IconConnectedTvFill1Wght400Grad0Opsz48 from '../components/ConnectedTvFill1Wght400Grad0Opsz48'
import IconConnectedTvFill1Wght500Grad0Opsz48 from '../components/ConnectedTvFill1Wght500Grad0Opsz48'
import IconConnectedTvFill1Wght600Grad0Opsz48 from '../components/ConnectedTvFill1Wght600Grad0Opsz48'
import IconConnectedTvFill1Wght700Grad0Opsz48 from '../components/ConnectedTvFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconConnectedTv = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconConnectedTvFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconConnectedTvFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconConnectedTvFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconConnectedTvFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconConnectedTvFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconConnectedTvFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconConnectedTvFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconConnectedTvFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconConnectedTvFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconConnectedTvFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconConnectedTvFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconConnectedTvFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconConnectedTvFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconConnectedTvFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
