import IconPrivateConnectivityFill0Wght100Grad0Opsz48 from '../components/PrivateConnectivityFill0Wght100Grad0Opsz48'
import IconPrivateConnectivityFill0Wght200Grad0Opsz48 from '../components/PrivateConnectivityFill0Wght200Grad0Opsz48'
import IconPrivateConnectivityFill0Wght300Grad0Opsz48 from '../components/PrivateConnectivityFill0Wght300Grad0Opsz48'
import IconPrivateConnectivityFill0Wght400Grad0Opsz48 from '../components/PrivateConnectivityFill0Wght400Grad0Opsz48'
import IconPrivateConnectivityFill0Wght500Grad0Opsz48 from '../components/PrivateConnectivityFill0Wght500Grad0Opsz48'
import IconPrivateConnectivityFill0Wght600Grad0Opsz48 from '../components/PrivateConnectivityFill0Wght600Grad0Opsz48'
import IconPrivateConnectivityFill0Wght700Grad0Opsz48 from '../components/PrivateConnectivityFill0Wght700Grad0Opsz48'
import IconPrivateConnectivityFill1Wght100Grad0Opsz48 from '../components/PrivateConnectivityFill1Wght100Grad0Opsz48'
import IconPrivateConnectivityFill1Wght200Grad0Opsz48 from '../components/PrivateConnectivityFill1Wght200Grad0Opsz48'
import IconPrivateConnectivityFill1Wght300Grad0Opsz48 from '../components/PrivateConnectivityFill1Wght300Grad0Opsz48'
import IconPrivateConnectivityFill1Wght400Grad0Opsz48 from '../components/PrivateConnectivityFill1Wght400Grad0Opsz48'
import IconPrivateConnectivityFill1Wght500Grad0Opsz48 from '../components/PrivateConnectivityFill1Wght500Grad0Opsz48'
import IconPrivateConnectivityFill1Wght600Grad0Opsz48 from '../components/PrivateConnectivityFill1Wght600Grad0Opsz48'
import IconPrivateConnectivityFill1Wght700Grad0Opsz48 from '../components/PrivateConnectivityFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPrivateConnectivity = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPrivateConnectivityFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPrivateConnectivityFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPrivateConnectivityFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPrivateConnectivityFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPrivateConnectivityFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPrivateConnectivityFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPrivateConnectivityFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPrivateConnectivityFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPrivateConnectivityFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPrivateConnectivityFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPrivateConnectivityFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPrivateConnectivityFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPrivateConnectivityFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPrivateConnectivityFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
