import IconVideoChatFill0Wght100Grad0Opsz48 from '../components/VideoChatFill0Wght100Grad0Opsz48'
import IconVideoChatFill0Wght200Grad0Opsz48 from '../components/VideoChatFill0Wght200Grad0Opsz48'
import IconVideoChatFill0Wght300Grad0Opsz48 from '../components/VideoChatFill0Wght300Grad0Opsz48'
import IconVideoChatFill0Wght400Grad0Opsz48 from '../components/VideoChatFill0Wght400Grad0Opsz48'
import IconVideoChatFill0Wght500Grad0Opsz48 from '../components/VideoChatFill0Wght500Grad0Opsz48'
import IconVideoChatFill0Wght600Grad0Opsz48 from '../components/VideoChatFill0Wght600Grad0Opsz48'
import IconVideoChatFill0Wght700Grad0Opsz48 from '../components/VideoChatFill0Wght700Grad0Opsz48'
import IconVideoChatFill1Wght100Grad0Opsz48 from '../components/VideoChatFill1Wght100Grad0Opsz48'
import IconVideoChatFill1Wght200Grad0Opsz48 from '../components/VideoChatFill1Wght200Grad0Opsz48'
import IconVideoChatFill1Wght300Grad0Opsz48 from '../components/VideoChatFill1Wght300Grad0Opsz48'
import IconVideoChatFill1Wght400Grad0Opsz48 from '../components/VideoChatFill1Wght400Grad0Opsz48'
import IconVideoChatFill1Wght500Grad0Opsz48 from '../components/VideoChatFill1Wght500Grad0Opsz48'
import IconVideoChatFill1Wght600Grad0Opsz48 from '../components/VideoChatFill1Wght600Grad0Opsz48'
import IconVideoChatFill1Wght700Grad0Opsz48 from '../components/VideoChatFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVideoChat = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVideoChatFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVideoChatFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVideoChatFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVideoChatFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVideoChatFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVideoChatFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVideoChatFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVideoChatFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVideoChatFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVideoChatFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVideoChatFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVideoChatFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVideoChatFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVideoChatFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
