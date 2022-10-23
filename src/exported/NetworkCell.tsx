import IconNetworkCellFill0Wght100Grad0Opsz48 from '../components/NetworkCellFill0Wght100Grad0Opsz48'
import IconNetworkCellFill0Wght200Grad0Opsz48 from '../components/NetworkCellFill0Wght200Grad0Opsz48'
import IconNetworkCellFill0Wght300Grad0Opsz48 from '../components/NetworkCellFill0Wght300Grad0Opsz48'
import IconNetworkCellFill0Wght400Grad0Opsz48 from '../components/NetworkCellFill0Wght400Grad0Opsz48'
import IconNetworkCellFill0Wght500Grad0Opsz48 from '../components/NetworkCellFill0Wght500Grad0Opsz48'
import IconNetworkCellFill0Wght600Grad0Opsz48 from '../components/NetworkCellFill0Wght600Grad0Opsz48'
import IconNetworkCellFill0Wght700Grad0Opsz48 from '../components/NetworkCellFill0Wght700Grad0Opsz48'
import IconNetworkCellFill1Wght100Grad0Opsz48 from '../components/NetworkCellFill1Wght100Grad0Opsz48'
import IconNetworkCellFill1Wght200Grad0Opsz48 from '../components/NetworkCellFill1Wght200Grad0Opsz48'
import IconNetworkCellFill1Wght300Grad0Opsz48 from '../components/NetworkCellFill1Wght300Grad0Opsz48'
import IconNetworkCellFill1Wght400Grad0Opsz48 from '../components/NetworkCellFill1Wght400Grad0Opsz48'
import IconNetworkCellFill1Wght500Grad0Opsz48 from '../components/NetworkCellFill1Wght500Grad0Opsz48'
import IconNetworkCellFill1Wght600Grad0Opsz48 from '../components/NetworkCellFill1Wght600Grad0Opsz48'
import IconNetworkCellFill1Wght700Grad0Opsz48 from '../components/NetworkCellFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNetworkCell = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNetworkCellFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNetworkCellFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNetworkCellFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNetworkCellFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNetworkCellFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNetworkCellFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNetworkCellFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNetworkCellFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNetworkCellFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNetworkCellFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNetworkCellFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNetworkCellFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNetworkCellFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNetworkCellFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
