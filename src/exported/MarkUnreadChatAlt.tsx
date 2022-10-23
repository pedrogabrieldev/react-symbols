import IconMarkUnreadChatAltFill0Wght100Grad0Opsz48 from '../components/MarkUnreadChatAltFill0Wght100Grad0Opsz48'
import IconMarkUnreadChatAltFill0Wght200Grad0Opsz48 from '../components/MarkUnreadChatAltFill0Wght200Grad0Opsz48'
import IconMarkUnreadChatAltFill0Wght300Grad0Opsz48 from '../components/MarkUnreadChatAltFill0Wght300Grad0Opsz48'
import IconMarkUnreadChatAltFill0Wght400Grad0Opsz48 from '../components/MarkUnreadChatAltFill0Wght400Grad0Opsz48'
import IconMarkUnreadChatAltFill0Wght500Grad0Opsz48 from '../components/MarkUnreadChatAltFill0Wght500Grad0Opsz48'
import IconMarkUnreadChatAltFill0Wght600Grad0Opsz48 from '../components/MarkUnreadChatAltFill0Wght600Grad0Opsz48'
import IconMarkUnreadChatAltFill0Wght700Grad0Opsz48 from '../components/MarkUnreadChatAltFill0Wght700Grad0Opsz48'
import IconMarkUnreadChatAltFill1Wght100Grad0Opsz48 from '../components/MarkUnreadChatAltFill1Wght100Grad0Opsz48'
import IconMarkUnreadChatAltFill1Wght200Grad0Opsz48 from '../components/MarkUnreadChatAltFill1Wght200Grad0Opsz48'
import IconMarkUnreadChatAltFill1Wght300Grad0Opsz48 from '../components/MarkUnreadChatAltFill1Wght300Grad0Opsz48'
import IconMarkUnreadChatAltFill1Wght400Grad0Opsz48 from '../components/MarkUnreadChatAltFill1Wght400Grad0Opsz48'
import IconMarkUnreadChatAltFill1Wght500Grad0Opsz48 from '../components/MarkUnreadChatAltFill1Wght500Grad0Opsz48'
import IconMarkUnreadChatAltFill1Wght600Grad0Opsz48 from '../components/MarkUnreadChatAltFill1Wght600Grad0Opsz48'
import IconMarkUnreadChatAltFill1Wght700Grad0Opsz48 from '../components/MarkUnreadChatAltFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMarkUnreadChatAlt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMarkUnreadChatAltFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMarkUnreadChatAltFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMarkUnreadChatAltFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMarkUnreadChatAltFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMarkUnreadChatAltFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMarkUnreadChatAltFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMarkUnreadChatAltFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMarkUnreadChatAltFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMarkUnreadChatAltFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMarkUnreadChatAltFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMarkUnreadChatAltFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMarkUnreadChatAltFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMarkUnreadChatAltFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMarkUnreadChatAltFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
