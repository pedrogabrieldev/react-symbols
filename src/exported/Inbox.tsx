import IconInboxFill0Wght100Grad0Opsz48 from '../components/InboxFill0Wght100Grad0Opsz48'
import IconInboxFill0Wght200Grad0Opsz48 from '../components/InboxFill0Wght200Grad0Opsz48'
import IconInboxFill0Wght300Grad0Opsz48 from '../components/InboxFill0Wght300Grad0Opsz48'
import IconInboxFill0Wght400Grad0Opsz48 from '../components/InboxFill0Wght400Grad0Opsz48'
import IconInboxFill0Wght500Grad0Opsz48 from '../components/InboxFill0Wght500Grad0Opsz48'
import IconInboxFill0Wght600Grad0Opsz48 from '../components/InboxFill0Wght600Grad0Opsz48'
import IconInboxFill0Wght700Grad0Opsz48 from '../components/InboxFill0Wght700Grad0Opsz48'
import IconInboxFill1Wght100Grad0Opsz48 from '../components/InboxFill1Wght100Grad0Opsz48'
import IconInboxFill1Wght200Grad0Opsz48 from '../components/InboxFill1Wght200Grad0Opsz48'
import IconInboxFill1Wght300Grad0Opsz48 from '../components/InboxFill1Wght300Grad0Opsz48'
import IconInboxFill1Wght400Grad0Opsz48 from '../components/InboxFill1Wght400Grad0Opsz48'
import IconInboxFill1Wght500Grad0Opsz48 from '../components/InboxFill1Wght500Grad0Opsz48'
import IconInboxFill1Wght600Grad0Opsz48 from '../components/InboxFill1Wght600Grad0Opsz48'
import IconInboxFill1Wght700Grad0Opsz48 from '../components/InboxFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconInbox = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconInboxFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconInboxFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconInboxFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconInboxFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconInboxFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconInboxFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconInboxFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconInboxFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconInboxFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconInboxFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconInboxFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconInboxFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconInboxFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconInboxFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
