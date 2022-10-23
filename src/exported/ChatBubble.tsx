import IconChatBubbleFill0Wght100Grad0Opsz48 from '../components/ChatBubbleFill0Wght100Grad0Opsz48'
import IconChatBubbleFill0Wght200Grad0Opsz48 from '../components/ChatBubbleFill0Wght200Grad0Opsz48'
import IconChatBubbleFill0Wght300Grad0Opsz48 from '../components/ChatBubbleFill0Wght300Grad0Opsz48'
import IconChatBubbleFill0Wght400Grad0Opsz48 from '../components/ChatBubbleFill0Wght400Grad0Opsz48'
import IconChatBubbleFill0Wght500Grad0Opsz48 from '../components/ChatBubbleFill0Wght500Grad0Opsz48'
import IconChatBubbleFill0Wght600Grad0Opsz48 from '../components/ChatBubbleFill0Wght600Grad0Opsz48'
import IconChatBubbleFill0Wght700Grad0Opsz48 from '../components/ChatBubbleFill0Wght700Grad0Opsz48'
import IconChatBubbleFill1Wght100Grad0Opsz48 from '../components/ChatBubbleFill1Wght100Grad0Opsz48'
import IconChatBubbleFill1Wght200Grad0Opsz48 from '../components/ChatBubbleFill1Wght200Grad0Opsz48'
import IconChatBubbleFill1Wght300Grad0Opsz48 from '../components/ChatBubbleFill1Wght300Grad0Opsz48'
import IconChatBubbleFill1Wght400Grad0Opsz48 from '../components/ChatBubbleFill1Wght400Grad0Opsz48'
import IconChatBubbleFill1Wght500Grad0Opsz48 from '../components/ChatBubbleFill1Wght500Grad0Opsz48'
import IconChatBubbleFill1Wght600Grad0Opsz48 from '../components/ChatBubbleFill1Wght600Grad0Opsz48'
import IconChatBubbleFill1Wght700Grad0Opsz48 from '../components/ChatBubbleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconChatBubble = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconChatBubbleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconChatBubbleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconChatBubbleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconChatBubbleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconChatBubbleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconChatBubbleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconChatBubbleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconChatBubbleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconChatBubbleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconChatBubbleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconChatBubbleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconChatBubbleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconChatBubbleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconChatBubbleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
