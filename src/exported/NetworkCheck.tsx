import IconNetworkCheckFill0Wght100Grad0Opsz48 from '../components/NetworkCheckFill0Wght100Grad0Opsz48'
import IconNetworkCheckFill0Wght200Grad0Opsz48 from '../components/NetworkCheckFill0Wght200Grad0Opsz48'
import IconNetworkCheckFill0Wght300Grad0Opsz48 from '../components/NetworkCheckFill0Wght300Grad0Opsz48'
import IconNetworkCheckFill0Wght400Grad0Opsz48 from '../components/NetworkCheckFill0Wght400Grad0Opsz48'
import IconNetworkCheckFill0Wght500Grad0Opsz48 from '../components/NetworkCheckFill0Wght500Grad0Opsz48'
import IconNetworkCheckFill0Wght600Grad0Opsz48 from '../components/NetworkCheckFill0Wght600Grad0Opsz48'
import IconNetworkCheckFill0Wght700Grad0Opsz48 from '../components/NetworkCheckFill0Wght700Grad0Opsz48'
import IconNetworkCheckFill1Wght100Grad0Opsz48 from '../components/NetworkCheckFill1Wght100Grad0Opsz48'
import IconNetworkCheckFill1Wght200Grad0Opsz48 from '../components/NetworkCheckFill1Wght200Grad0Opsz48'
import IconNetworkCheckFill1Wght300Grad0Opsz48 from '../components/NetworkCheckFill1Wght300Grad0Opsz48'
import IconNetworkCheckFill1Wght400Grad0Opsz48 from '../components/NetworkCheckFill1Wght400Grad0Opsz48'
import IconNetworkCheckFill1Wght500Grad0Opsz48 from '../components/NetworkCheckFill1Wght500Grad0Opsz48'
import IconNetworkCheckFill1Wght600Grad0Opsz48 from '../components/NetworkCheckFill1Wght600Grad0Opsz48'
import IconNetworkCheckFill1Wght700Grad0Opsz48 from '../components/NetworkCheckFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNetworkCheck = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNetworkCheckFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNetworkCheckFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNetworkCheckFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNetworkCheckFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNetworkCheckFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNetworkCheckFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNetworkCheckFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNetworkCheckFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNetworkCheckFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNetworkCheckFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNetworkCheckFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNetworkCheckFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNetworkCheckFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNetworkCheckFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
