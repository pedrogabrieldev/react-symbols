import IconMarkChatUnreadFill0Wght100Grad0Opsz48 from '../components/MarkChatUnreadFill0Wght100Grad0Opsz48'
import IconMarkChatUnreadFill0Wght200Grad0Opsz48 from '../components/MarkChatUnreadFill0Wght200Grad0Opsz48'
import IconMarkChatUnreadFill0Wght300Grad0Opsz48 from '../components/MarkChatUnreadFill0Wght300Grad0Opsz48'
import IconMarkChatUnreadFill0Wght400Grad0Opsz48 from '../components/MarkChatUnreadFill0Wght400Grad0Opsz48'
import IconMarkChatUnreadFill0Wght500Grad0Opsz48 from '../components/MarkChatUnreadFill0Wght500Grad0Opsz48'
import IconMarkChatUnreadFill0Wght600Grad0Opsz48 from '../components/MarkChatUnreadFill0Wght600Grad0Opsz48'
import IconMarkChatUnreadFill0Wght700Grad0Opsz48 from '../components/MarkChatUnreadFill0Wght700Grad0Opsz48'
import IconMarkChatUnreadFill1Wght100Grad0Opsz48 from '../components/MarkChatUnreadFill1Wght100Grad0Opsz48'
import IconMarkChatUnreadFill1Wght200Grad0Opsz48 from '../components/MarkChatUnreadFill1Wght200Grad0Opsz48'
import IconMarkChatUnreadFill1Wght300Grad0Opsz48 from '../components/MarkChatUnreadFill1Wght300Grad0Opsz48'
import IconMarkChatUnreadFill1Wght400Grad0Opsz48 from '../components/MarkChatUnreadFill1Wght400Grad0Opsz48'
import IconMarkChatUnreadFill1Wght500Grad0Opsz48 from '../components/MarkChatUnreadFill1Wght500Grad0Opsz48'
import IconMarkChatUnreadFill1Wght600Grad0Opsz48 from '../components/MarkChatUnreadFill1Wght600Grad0Opsz48'
import IconMarkChatUnreadFill1Wght700Grad0Opsz48 from '../components/MarkChatUnreadFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMarkChatUnread = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMarkChatUnreadFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMarkChatUnreadFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMarkChatUnreadFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMarkChatUnreadFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMarkChatUnreadFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMarkChatUnreadFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMarkChatUnreadFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMarkChatUnreadFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMarkChatUnreadFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMarkChatUnreadFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMarkChatUnreadFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMarkChatUnreadFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMarkChatUnreadFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMarkChatUnreadFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
