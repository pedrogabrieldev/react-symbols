import IconDiscoverTuneFill0Wght100Grad0Opsz48 from '../components/DiscoverTuneFill0Wght100Grad0Opsz48'
import IconDiscoverTuneFill0Wght200Grad0Opsz48 from '../components/DiscoverTuneFill0Wght200Grad0Opsz48'
import IconDiscoverTuneFill0Wght300Grad0Opsz48 from '../components/DiscoverTuneFill0Wght300Grad0Opsz48'
import IconDiscoverTuneFill0Wght400Grad0Opsz48 from '../components/DiscoverTuneFill0Wght400Grad0Opsz48'
import IconDiscoverTuneFill0Wght500Grad0Opsz48 from '../components/DiscoverTuneFill0Wght500Grad0Opsz48'
import IconDiscoverTuneFill0Wght600Grad0Opsz48 from '../components/DiscoverTuneFill0Wght600Grad0Opsz48'
import IconDiscoverTuneFill0Wght700Grad0Opsz48 from '../components/DiscoverTuneFill0Wght700Grad0Opsz48'
import IconDiscoverTuneFill1Wght100Grad0Opsz48 from '../components/DiscoverTuneFill1Wght100Grad0Opsz48'
import IconDiscoverTuneFill1Wght200Grad0Opsz48 from '../components/DiscoverTuneFill1Wght200Grad0Opsz48'
import IconDiscoverTuneFill1Wght300Grad0Opsz48 from '../components/DiscoverTuneFill1Wght300Grad0Opsz48'
import IconDiscoverTuneFill1Wght400Grad0Opsz48 from '../components/DiscoverTuneFill1Wght400Grad0Opsz48'
import IconDiscoverTuneFill1Wght500Grad0Opsz48 from '../components/DiscoverTuneFill1Wght500Grad0Opsz48'
import IconDiscoverTuneFill1Wght600Grad0Opsz48 from '../components/DiscoverTuneFill1Wght600Grad0Opsz48'
import IconDiscoverTuneFill1Wght700Grad0Opsz48 from '../components/DiscoverTuneFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDiscoverTune = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDiscoverTuneFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDiscoverTuneFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDiscoverTuneFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDiscoverTuneFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDiscoverTuneFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDiscoverTuneFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDiscoverTuneFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDiscoverTuneFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDiscoverTuneFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDiscoverTuneFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDiscoverTuneFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDiscoverTuneFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDiscoverTuneFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDiscoverTuneFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
