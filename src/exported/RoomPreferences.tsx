import IconRoomPreferencesFill0Wght100Grad0Opsz48 from '../components/RoomPreferencesFill0Wght100Grad0Opsz48'
import IconRoomPreferencesFill0Wght200Grad0Opsz48 from '../components/RoomPreferencesFill0Wght200Grad0Opsz48'
import IconRoomPreferencesFill0Wght300Grad0Opsz48 from '../components/RoomPreferencesFill0Wght300Grad0Opsz48'
import IconRoomPreferencesFill0Wght400Grad0Opsz48 from '../components/RoomPreferencesFill0Wght400Grad0Opsz48'
import IconRoomPreferencesFill0Wght500Grad0Opsz48 from '../components/RoomPreferencesFill0Wght500Grad0Opsz48'
import IconRoomPreferencesFill0Wght600Grad0Opsz48 from '../components/RoomPreferencesFill0Wght600Grad0Opsz48'
import IconRoomPreferencesFill0Wght700Grad0Opsz48 from '../components/RoomPreferencesFill0Wght700Grad0Opsz48'
import IconRoomPreferencesFill1Wght100Grad0Opsz48 from '../components/RoomPreferencesFill1Wght100Grad0Opsz48'
import IconRoomPreferencesFill1Wght200Grad0Opsz48 from '../components/RoomPreferencesFill1Wght200Grad0Opsz48'
import IconRoomPreferencesFill1Wght300Grad0Opsz48 from '../components/RoomPreferencesFill1Wght300Grad0Opsz48'
import IconRoomPreferencesFill1Wght400Grad0Opsz48 from '../components/RoomPreferencesFill1Wght400Grad0Opsz48'
import IconRoomPreferencesFill1Wght500Grad0Opsz48 from '../components/RoomPreferencesFill1Wght500Grad0Opsz48'
import IconRoomPreferencesFill1Wght600Grad0Opsz48 from '../components/RoomPreferencesFill1Wght600Grad0Opsz48'
import IconRoomPreferencesFill1Wght700Grad0Opsz48 from '../components/RoomPreferencesFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRoomPreferences = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRoomPreferencesFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRoomPreferencesFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRoomPreferencesFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRoomPreferencesFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRoomPreferencesFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRoomPreferencesFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRoomPreferencesFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRoomPreferencesFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRoomPreferencesFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRoomPreferencesFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRoomPreferencesFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRoomPreferencesFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRoomPreferencesFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRoomPreferencesFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
