import IconCastConnectedFill0Wght100Grad0Opsz48 from '../components/CastConnectedFill0Wght100Grad0Opsz48'
import IconCastConnectedFill0Wght200Grad0Opsz48 from '../components/CastConnectedFill0Wght200Grad0Opsz48'
import IconCastConnectedFill0Wght300Grad0Opsz48 from '../components/CastConnectedFill0Wght300Grad0Opsz48'
import IconCastConnectedFill0Wght400Grad0Opsz48 from '../components/CastConnectedFill0Wght400Grad0Opsz48'
import IconCastConnectedFill0Wght500Grad0Opsz48 from '../components/CastConnectedFill0Wght500Grad0Opsz48'
import IconCastConnectedFill0Wght600Grad0Opsz48 from '../components/CastConnectedFill0Wght600Grad0Opsz48'
import IconCastConnectedFill0Wght700Grad0Opsz48 from '../components/CastConnectedFill0Wght700Grad0Opsz48'
import IconCastConnectedFill1Wght100Grad0Opsz48 from '../components/CastConnectedFill1Wght100Grad0Opsz48'
import IconCastConnectedFill1Wght200Grad0Opsz48 from '../components/CastConnectedFill1Wght200Grad0Opsz48'
import IconCastConnectedFill1Wght300Grad0Opsz48 from '../components/CastConnectedFill1Wght300Grad0Opsz48'
import IconCastConnectedFill1Wght400Grad0Opsz48 from '../components/CastConnectedFill1Wght400Grad0Opsz48'
import IconCastConnectedFill1Wght500Grad0Opsz48 from '../components/CastConnectedFill1Wght500Grad0Opsz48'
import IconCastConnectedFill1Wght600Grad0Opsz48 from '../components/CastConnectedFill1Wght600Grad0Opsz48'
import IconCastConnectedFill1Wght700Grad0Opsz48 from '../components/CastConnectedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCastConnected = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCastConnectedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCastConnectedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCastConnectedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCastConnectedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCastConnectedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCastConnectedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCastConnectedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCastConnectedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCastConnectedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCastConnectedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCastConnectedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCastConnectedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCastConnectedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCastConnectedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
