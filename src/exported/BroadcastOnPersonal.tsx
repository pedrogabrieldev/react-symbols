import IconBroadcastOnPersonalFill0Wght100Grad0Opsz48 from '../components/BroadcastOnPersonalFill0Wght100Grad0Opsz48'
import IconBroadcastOnPersonalFill0Wght200Grad0Opsz48 from '../components/BroadcastOnPersonalFill0Wght200Grad0Opsz48'
import IconBroadcastOnPersonalFill0Wght300Grad0Opsz48 from '../components/BroadcastOnPersonalFill0Wght300Grad0Opsz48'
import IconBroadcastOnPersonalFill0Wght400Grad0Opsz48 from '../components/BroadcastOnPersonalFill0Wght400Grad0Opsz48'
import IconBroadcastOnPersonalFill0Wght500Grad0Opsz48 from '../components/BroadcastOnPersonalFill0Wght500Grad0Opsz48'
import IconBroadcastOnPersonalFill0Wght600Grad0Opsz48 from '../components/BroadcastOnPersonalFill0Wght600Grad0Opsz48'
import IconBroadcastOnPersonalFill0Wght700Grad0Opsz48 from '../components/BroadcastOnPersonalFill0Wght700Grad0Opsz48'
import IconBroadcastOnPersonalFill1Wght100Grad0Opsz48 from '../components/BroadcastOnPersonalFill1Wght100Grad0Opsz48'
import IconBroadcastOnPersonalFill1Wght200Grad0Opsz48 from '../components/BroadcastOnPersonalFill1Wght200Grad0Opsz48'
import IconBroadcastOnPersonalFill1Wght300Grad0Opsz48 from '../components/BroadcastOnPersonalFill1Wght300Grad0Opsz48'
import IconBroadcastOnPersonalFill1Wght400Grad0Opsz48 from '../components/BroadcastOnPersonalFill1Wght400Grad0Opsz48'
import IconBroadcastOnPersonalFill1Wght500Grad0Opsz48 from '../components/BroadcastOnPersonalFill1Wght500Grad0Opsz48'
import IconBroadcastOnPersonalFill1Wght600Grad0Opsz48 from '../components/BroadcastOnPersonalFill1Wght600Grad0Opsz48'
import IconBroadcastOnPersonalFill1Wght700Grad0Opsz48 from '../components/BroadcastOnPersonalFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBroadcastOnPersonal = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBroadcastOnPersonalFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBroadcastOnPersonalFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBroadcastOnPersonalFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBroadcastOnPersonalFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBroadcastOnPersonalFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBroadcastOnPersonalFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBroadcastOnPersonalFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBroadcastOnPersonalFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBroadcastOnPersonalFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBroadcastOnPersonalFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBroadcastOnPersonalFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBroadcastOnPersonalFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBroadcastOnPersonalFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBroadcastOnPersonalFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
