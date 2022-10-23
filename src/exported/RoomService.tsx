import IconRoomServiceFill0Wght100Grad0Opsz48 from '../components/RoomServiceFill0Wght100Grad0Opsz48'
import IconRoomServiceFill0Wght200Grad0Opsz48 from '../components/RoomServiceFill0Wght200Grad0Opsz48'
import IconRoomServiceFill0Wght300Grad0Opsz48 from '../components/RoomServiceFill0Wght300Grad0Opsz48'
import IconRoomServiceFill0Wght400Grad0Opsz48 from '../components/RoomServiceFill0Wght400Grad0Opsz48'
import IconRoomServiceFill0Wght500Grad0Opsz48 from '../components/RoomServiceFill0Wght500Grad0Opsz48'
import IconRoomServiceFill0Wght600Grad0Opsz48 from '../components/RoomServiceFill0Wght600Grad0Opsz48'
import IconRoomServiceFill0Wght700Grad0Opsz48 from '../components/RoomServiceFill0Wght700Grad0Opsz48'
import IconRoomServiceFill1Wght100Grad0Opsz48 from '../components/RoomServiceFill1Wght100Grad0Opsz48'
import IconRoomServiceFill1Wght200Grad0Opsz48 from '../components/RoomServiceFill1Wght200Grad0Opsz48'
import IconRoomServiceFill1Wght300Grad0Opsz48 from '../components/RoomServiceFill1Wght300Grad0Opsz48'
import IconRoomServiceFill1Wght400Grad0Opsz48 from '../components/RoomServiceFill1Wght400Grad0Opsz48'
import IconRoomServiceFill1Wght500Grad0Opsz48 from '../components/RoomServiceFill1Wght500Grad0Opsz48'
import IconRoomServiceFill1Wght600Grad0Opsz48 from '../components/RoomServiceFill1Wght600Grad0Opsz48'
import IconRoomServiceFill1Wght700Grad0Opsz48 from '../components/RoomServiceFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRoomService = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRoomServiceFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRoomServiceFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRoomServiceFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRoomServiceFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRoomServiceFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRoomServiceFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRoomServiceFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRoomServiceFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRoomServiceFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRoomServiceFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRoomServiceFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRoomServiceFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRoomServiceFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRoomServiceFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
