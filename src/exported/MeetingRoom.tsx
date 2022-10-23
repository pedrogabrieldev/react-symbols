import IconMeetingRoomFill0Wght100Grad0Opsz48 from '../components/MeetingRoomFill0Wght100Grad0Opsz48'
import IconMeetingRoomFill0Wght200Grad0Opsz48 from '../components/MeetingRoomFill0Wght200Grad0Opsz48'
import IconMeetingRoomFill0Wght300Grad0Opsz48 from '../components/MeetingRoomFill0Wght300Grad0Opsz48'
import IconMeetingRoomFill0Wght400Grad0Opsz48 from '../components/MeetingRoomFill0Wght400Grad0Opsz48'
import IconMeetingRoomFill0Wght500Grad0Opsz48 from '../components/MeetingRoomFill0Wght500Grad0Opsz48'
import IconMeetingRoomFill0Wght600Grad0Opsz48 from '../components/MeetingRoomFill0Wght600Grad0Opsz48'
import IconMeetingRoomFill0Wght700Grad0Opsz48 from '../components/MeetingRoomFill0Wght700Grad0Opsz48'
import IconMeetingRoomFill1Wght100Grad0Opsz48 from '../components/MeetingRoomFill1Wght100Grad0Opsz48'
import IconMeetingRoomFill1Wght200Grad0Opsz48 from '../components/MeetingRoomFill1Wght200Grad0Opsz48'
import IconMeetingRoomFill1Wght300Grad0Opsz48 from '../components/MeetingRoomFill1Wght300Grad0Opsz48'
import IconMeetingRoomFill1Wght400Grad0Opsz48 from '../components/MeetingRoomFill1Wght400Grad0Opsz48'
import IconMeetingRoomFill1Wght500Grad0Opsz48 from '../components/MeetingRoomFill1Wght500Grad0Opsz48'
import IconMeetingRoomFill1Wght600Grad0Opsz48 from '../components/MeetingRoomFill1Wght600Grad0Opsz48'
import IconMeetingRoomFill1Wght700Grad0Opsz48 from '../components/MeetingRoomFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMeetingRoom = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMeetingRoomFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMeetingRoomFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMeetingRoomFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMeetingRoomFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMeetingRoomFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMeetingRoomFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMeetingRoomFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMeetingRoomFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMeetingRoomFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMeetingRoomFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMeetingRoomFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMeetingRoomFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMeetingRoomFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMeetingRoomFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
