import IconReplyFill0Wght100Grad0Opsz48 from '../components/ReplyFill0Wght100Grad0Opsz48'
import IconReplyFill0Wght200Grad0Opsz48 from '../components/ReplyFill0Wght200Grad0Opsz48'
import IconReplyFill0Wght300Grad0Opsz48 from '../components/ReplyFill0Wght300Grad0Opsz48'
import IconReplyFill0Wght400Grad0Opsz48 from '../components/ReplyFill0Wght400Grad0Opsz48'
import IconReplyFill0Wght500Grad0Opsz48 from '../components/ReplyFill0Wght500Grad0Opsz48'
import IconReplyFill0Wght600Grad0Opsz48 from '../components/ReplyFill0Wght600Grad0Opsz48'
import IconReplyFill0Wght700Grad0Opsz48 from '../components/ReplyFill0Wght700Grad0Opsz48'
import IconReplyFill1Wght100Grad0Opsz48 from '../components/ReplyFill1Wght100Grad0Opsz48'
import IconReplyFill1Wght200Grad0Opsz48 from '../components/ReplyFill1Wght200Grad0Opsz48'
import IconReplyFill1Wght300Grad0Opsz48 from '../components/ReplyFill1Wght300Grad0Opsz48'
import IconReplyFill1Wght400Grad0Opsz48 from '../components/ReplyFill1Wght400Grad0Opsz48'
import IconReplyFill1Wght500Grad0Opsz48 from '../components/ReplyFill1Wght500Grad0Opsz48'
import IconReplyFill1Wght600Grad0Opsz48 from '../components/ReplyFill1Wght600Grad0Opsz48'
import IconReplyFill1Wght700Grad0Opsz48 from '../components/ReplyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconReply = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconReplyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconReplyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconReplyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconReplyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconReplyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconReplyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconReplyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconReplyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconReplyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconReplyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconReplyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconReplyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconReplyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconReplyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
