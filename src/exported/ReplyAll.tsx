import IconReplyAllFill0Wght100Grad0Opsz48 from '../components/ReplyAllFill0Wght100Grad0Opsz48'
import IconReplyAllFill0Wght200Grad0Opsz48 from '../components/ReplyAllFill0Wght200Grad0Opsz48'
import IconReplyAllFill0Wght300Grad0Opsz48 from '../components/ReplyAllFill0Wght300Grad0Opsz48'
import IconReplyAllFill0Wght400Grad0Opsz48 from '../components/ReplyAllFill0Wght400Grad0Opsz48'
import IconReplyAllFill0Wght500Grad0Opsz48 from '../components/ReplyAllFill0Wght500Grad0Opsz48'
import IconReplyAllFill0Wght600Grad0Opsz48 from '../components/ReplyAllFill0Wght600Grad0Opsz48'
import IconReplyAllFill0Wght700Grad0Opsz48 from '../components/ReplyAllFill0Wght700Grad0Opsz48'
import IconReplyAllFill1Wght100Grad0Opsz48 from '../components/ReplyAllFill1Wght100Grad0Opsz48'
import IconReplyAllFill1Wght200Grad0Opsz48 from '../components/ReplyAllFill1Wght200Grad0Opsz48'
import IconReplyAllFill1Wght300Grad0Opsz48 from '../components/ReplyAllFill1Wght300Grad0Opsz48'
import IconReplyAllFill1Wght400Grad0Opsz48 from '../components/ReplyAllFill1Wght400Grad0Opsz48'
import IconReplyAllFill1Wght500Grad0Opsz48 from '../components/ReplyAllFill1Wght500Grad0Opsz48'
import IconReplyAllFill1Wght600Grad0Opsz48 from '../components/ReplyAllFill1Wght600Grad0Opsz48'
import IconReplyAllFill1Wght700Grad0Opsz48 from '../components/ReplyAllFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconReplyAll = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconReplyAllFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconReplyAllFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconReplyAllFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconReplyAllFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconReplyAllFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconReplyAllFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconReplyAllFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconReplyAllFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconReplyAllFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconReplyAllFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconReplyAllFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconReplyAllFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconReplyAllFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconReplyAllFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
