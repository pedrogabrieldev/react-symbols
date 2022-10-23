import IconVoiceChatFill0Wght100Grad0Opsz48 from '../components/VoiceChatFill0Wght100Grad0Opsz48'
import IconVoiceChatFill0Wght200Grad0Opsz48 from '../components/VoiceChatFill0Wght200Grad0Opsz48'
import IconVoiceChatFill0Wght300Grad0Opsz48 from '../components/VoiceChatFill0Wght300Grad0Opsz48'
import IconVoiceChatFill0Wght400Grad0Opsz48 from '../components/VoiceChatFill0Wght400Grad0Opsz48'
import IconVoiceChatFill0Wght500Grad0Opsz48 from '../components/VoiceChatFill0Wght500Grad0Opsz48'
import IconVoiceChatFill0Wght600Grad0Opsz48 from '../components/VoiceChatFill0Wght600Grad0Opsz48'
import IconVoiceChatFill0Wght700Grad0Opsz48 from '../components/VoiceChatFill0Wght700Grad0Opsz48'
import IconVoiceChatFill1Wght100Grad0Opsz48 from '../components/VoiceChatFill1Wght100Grad0Opsz48'
import IconVoiceChatFill1Wght200Grad0Opsz48 from '../components/VoiceChatFill1Wght200Grad0Opsz48'
import IconVoiceChatFill1Wght300Grad0Opsz48 from '../components/VoiceChatFill1Wght300Grad0Opsz48'
import IconVoiceChatFill1Wght400Grad0Opsz48 from '../components/VoiceChatFill1Wght400Grad0Opsz48'
import IconVoiceChatFill1Wght500Grad0Opsz48 from '../components/VoiceChatFill1Wght500Grad0Opsz48'
import IconVoiceChatFill1Wght600Grad0Opsz48 from '../components/VoiceChatFill1Wght600Grad0Opsz48'
import IconVoiceChatFill1Wght700Grad0Opsz48 from '../components/VoiceChatFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVoiceChat = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVoiceChatFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVoiceChatFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVoiceChatFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVoiceChatFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVoiceChatFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVoiceChatFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVoiceChatFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVoiceChatFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVoiceChatFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVoiceChatFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVoiceChatFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVoiceChatFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVoiceChatFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVoiceChatFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
