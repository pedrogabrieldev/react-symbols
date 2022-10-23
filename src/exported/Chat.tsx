import IconChatFill0Wght100Grad0Opsz48 from '../components/ChatFill0Wght100Grad0Opsz48'
import IconChatFill0Wght200Grad0Opsz48 from '../components/ChatFill0Wght200Grad0Opsz48'
import IconChatFill0Wght300Grad0Opsz48 from '../components/ChatFill0Wght300Grad0Opsz48'
import IconChatFill0Wght400Grad0Opsz48 from '../components/ChatFill0Wght400Grad0Opsz48'
import IconChatFill0Wght500Grad0Opsz48 from '../components/ChatFill0Wght500Grad0Opsz48'
import IconChatFill0Wght600Grad0Opsz48 from '../components/ChatFill0Wght600Grad0Opsz48'
import IconChatFill0Wght700Grad0Opsz48 from '../components/ChatFill0Wght700Grad0Opsz48'
import IconChatFill1Wght100Grad0Opsz48 from '../components/ChatFill1Wght100Grad0Opsz48'
import IconChatFill1Wght200Grad0Opsz48 from '../components/ChatFill1Wght200Grad0Opsz48'
import IconChatFill1Wght300Grad0Opsz48 from '../components/ChatFill1Wght300Grad0Opsz48'
import IconChatFill1Wght400Grad0Opsz48 from '../components/ChatFill1Wght400Grad0Opsz48'
import IconChatFill1Wght500Grad0Opsz48 from '../components/ChatFill1Wght500Grad0Opsz48'
import IconChatFill1Wght600Grad0Opsz48 from '../components/ChatFill1Wght600Grad0Opsz48'
import IconChatFill1Wght700Grad0Opsz48 from '../components/ChatFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconChat = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconChatFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconChatFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconChatFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconChatFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconChatFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconChatFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconChatFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconChatFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconChatFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconChatFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconChatFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconChatFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconChatFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconChatFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
