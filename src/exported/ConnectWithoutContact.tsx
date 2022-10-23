import IconConnectWithoutContactFill0Wght100Grad0Opsz48 from '../components/ConnectWithoutContactFill0Wght100Grad0Opsz48'
import IconConnectWithoutContactFill0Wght200Grad0Opsz48 from '../components/ConnectWithoutContactFill0Wght200Grad0Opsz48'
import IconConnectWithoutContactFill0Wght300Grad0Opsz48 from '../components/ConnectWithoutContactFill0Wght300Grad0Opsz48'
import IconConnectWithoutContactFill0Wght400Grad0Opsz48 from '../components/ConnectWithoutContactFill0Wght400Grad0Opsz48'
import IconConnectWithoutContactFill0Wght500Grad0Opsz48 from '../components/ConnectWithoutContactFill0Wght500Grad0Opsz48'
import IconConnectWithoutContactFill0Wght600Grad0Opsz48 from '../components/ConnectWithoutContactFill0Wght600Grad0Opsz48'
import IconConnectWithoutContactFill0Wght700Grad0Opsz48 from '../components/ConnectWithoutContactFill0Wght700Grad0Opsz48'
import IconConnectWithoutContactFill1Wght100Grad0Opsz48 from '../components/ConnectWithoutContactFill1Wght100Grad0Opsz48'
import IconConnectWithoutContactFill1Wght200Grad0Opsz48 from '../components/ConnectWithoutContactFill1Wght200Grad0Opsz48'
import IconConnectWithoutContactFill1Wght300Grad0Opsz48 from '../components/ConnectWithoutContactFill1Wght300Grad0Opsz48'
import IconConnectWithoutContactFill1Wght400Grad0Opsz48 from '../components/ConnectWithoutContactFill1Wght400Grad0Opsz48'
import IconConnectWithoutContactFill1Wght500Grad0Opsz48 from '../components/ConnectWithoutContactFill1Wght500Grad0Opsz48'
import IconConnectWithoutContactFill1Wght600Grad0Opsz48 from '../components/ConnectWithoutContactFill1Wght600Grad0Opsz48'
import IconConnectWithoutContactFill1Wght700Grad0Opsz48 from '../components/ConnectWithoutContactFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconConnectWithoutContact = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconConnectWithoutContactFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconConnectWithoutContactFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconConnectWithoutContactFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconConnectWithoutContactFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconConnectWithoutContactFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconConnectWithoutContactFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconConnectWithoutContactFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconConnectWithoutContactFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconConnectWithoutContactFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconConnectWithoutContactFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconConnectWithoutContactFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconConnectWithoutContactFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconConnectWithoutContactFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconConnectWithoutContactFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
