import IconNoMeetingRoomFill0Wght100Grad0Opsz48 from '../components/NoMeetingRoomFill0Wght100Grad0Opsz48'
import IconNoMeetingRoomFill0Wght200Grad0Opsz48 from '../components/NoMeetingRoomFill0Wght200Grad0Opsz48'
import IconNoMeetingRoomFill0Wght300Grad0Opsz48 from '../components/NoMeetingRoomFill0Wght300Grad0Opsz48'
import IconNoMeetingRoomFill0Wght400Grad0Opsz48 from '../components/NoMeetingRoomFill0Wght400Grad0Opsz48'
import IconNoMeetingRoomFill0Wght500Grad0Opsz48 from '../components/NoMeetingRoomFill0Wght500Grad0Opsz48'
import IconNoMeetingRoomFill0Wght600Grad0Opsz48 from '../components/NoMeetingRoomFill0Wght600Grad0Opsz48'
import IconNoMeetingRoomFill0Wght700Grad0Opsz48 from '../components/NoMeetingRoomFill0Wght700Grad0Opsz48'
import IconNoMeetingRoomFill1Wght100Grad0Opsz48 from '../components/NoMeetingRoomFill1Wght100Grad0Opsz48'
import IconNoMeetingRoomFill1Wght200Grad0Opsz48 from '../components/NoMeetingRoomFill1Wght200Grad0Opsz48'
import IconNoMeetingRoomFill1Wght300Grad0Opsz48 from '../components/NoMeetingRoomFill1Wght300Grad0Opsz48'
import IconNoMeetingRoomFill1Wght400Grad0Opsz48 from '../components/NoMeetingRoomFill1Wght400Grad0Opsz48'
import IconNoMeetingRoomFill1Wght500Grad0Opsz48 from '../components/NoMeetingRoomFill1Wght500Grad0Opsz48'
import IconNoMeetingRoomFill1Wght600Grad0Opsz48 from '../components/NoMeetingRoomFill1Wght600Grad0Opsz48'
import IconNoMeetingRoomFill1Wght700Grad0Opsz48 from '../components/NoMeetingRoomFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNoMeetingRoom = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNoMeetingRoomFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNoMeetingRoomFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNoMeetingRoomFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNoMeetingRoomFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNoMeetingRoomFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNoMeetingRoomFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNoMeetingRoomFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNoMeetingRoomFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNoMeetingRoomFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNoMeetingRoomFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNoMeetingRoomFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNoMeetingRoomFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNoMeetingRoomFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNoMeetingRoomFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
