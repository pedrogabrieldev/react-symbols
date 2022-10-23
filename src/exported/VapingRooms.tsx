import IconVapingRoomsFill0Wght100Grad0Opsz48 from '../components/VapingRoomsFill0Wght100Grad0Opsz48'
import IconVapingRoomsFill0Wght200Grad0Opsz48 from '../components/VapingRoomsFill0Wght200Grad0Opsz48'
import IconVapingRoomsFill0Wght300Grad0Opsz48 from '../components/VapingRoomsFill0Wght300Grad0Opsz48'
import IconVapingRoomsFill0Wght400Grad0Opsz48 from '../components/VapingRoomsFill0Wght400Grad0Opsz48'
import IconVapingRoomsFill0Wght500Grad0Opsz48 from '../components/VapingRoomsFill0Wght500Grad0Opsz48'
import IconVapingRoomsFill0Wght600Grad0Opsz48 from '../components/VapingRoomsFill0Wght600Grad0Opsz48'
import IconVapingRoomsFill0Wght700Grad0Opsz48 from '../components/VapingRoomsFill0Wght700Grad0Opsz48'
import IconVapingRoomsFill1Wght100Grad0Opsz48 from '../components/VapingRoomsFill1Wght100Grad0Opsz48'
import IconVapingRoomsFill1Wght200Grad0Opsz48 from '../components/VapingRoomsFill1Wght200Grad0Opsz48'
import IconVapingRoomsFill1Wght300Grad0Opsz48 from '../components/VapingRoomsFill1Wght300Grad0Opsz48'
import IconVapingRoomsFill1Wght400Grad0Opsz48 from '../components/VapingRoomsFill1Wght400Grad0Opsz48'
import IconVapingRoomsFill1Wght500Grad0Opsz48 from '../components/VapingRoomsFill1Wght500Grad0Opsz48'
import IconVapingRoomsFill1Wght600Grad0Opsz48 from '../components/VapingRoomsFill1Wght600Grad0Opsz48'
import IconVapingRoomsFill1Wght700Grad0Opsz48 from '../components/VapingRoomsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVapingRooms = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVapingRoomsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVapingRoomsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVapingRoomsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVapingRoomsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVapingRoomsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVapingRoomsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVapingRoomsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVapingRoomsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVapingRoomsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVapingRoomsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVapingRoomsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVapingRoomsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVapingRoomsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVapingRoomsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
