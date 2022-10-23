import IconMarkChatReadFill0Wght100Grad0Opsz48 from '../components/MarkChatReadFill0Wght100Grad0Opsz48'
import IconMarkChatReadFill0Wght200Grad0Opsz48 from '../components/MarkChatReadFill0Wght200Grad0Opsz48'
import IconMarkChatReadFill0Wght300Grad0Opsz48 from '../components/MarkChatReadFill0Wght300Grad0Opsz48'
import IconMarkChatReadFill0Wght400Grad0Opsz48 from '../components/MarkChatReadFill0Wght400Grad0Opsz48'
import IconMarkChatReadFill0Wght500Grad0Opsz48 from '../components/MarkChatReadFill0Wght500Grad0Opsz48'
import IconMarkChatReadFill0Wght600Grad0Opsz48 from '../components/MarkChatReadFill0Wght600Grad0Opsz48'
import IconMarkChatReadFill0Wght700Grad0Opsz48 from '../components/MarkChatReadFill0Wght700Grad0Opsz48'
import IconMarkChatReadFill1Wght100Grad0Opsz48 from '../components/MarkChatReadFill1Wght100Grad0Opsz48'
import IconMarkChatReadFill1Wght200Grad0Opsz48 from '../components/MarkChatReadFill1Wght200Grad0Opsz48'
import IconMarkChatReadFill1Wght300Grad0Opsz48 from '../components/MarkChatReadFill1Wght300Grad0Opsz48'
import IconMarkChatReadFill1Wght400Grad0Opsz48 from '../components/MarkChatReadFill1Wght400Grad0Opsz48'
import IconMarkChatReadFill1Wght500Grad0Opsz48 from '../components/MarkChatReadFill1Wght500Grad0Opsz48'
import IconMarkChatReadFill1Wght600Grad0Opsz48 from '../components/MarkChatReadFill1Wght600Grad0Opsz48'
import IconMarkChatReadFill1Wght700Grad0Opsz48 from '../components/MarkChatReadFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMarkChatRead = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMarkChatReadFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMarkChatReadFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMarkChatReadFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMarkChatReadFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMarkChatReadFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMarkChatReadFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMarkChatReadFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMarkChatReadFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMarkChatReadFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMarkChatReadFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMarkChatReadFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMarkChatReadFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMarkChatReadFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMarkChatReadFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
