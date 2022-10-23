import IconMarkAsUnreadFill0Wght100Grad0Opsz48 from '../components/MarkAsUnreadFill0Wght100Grad0Opsz48'
import IconMarkAsUnreadFill0Wght200Grad0Opsz48 from '../components/MarkAsUnreadFill0Wght200Grad0Opsz48'
import IconMarkAsUnreadFill0Wght300Grad0Opsz48 from '../components/MarkAsUnreadFill0Wght300Grad0Opsz48'
import IconMarkAsUnreadFill0Wght400Grad0Opsz48 from '../components/MarkAsUnreadFill0Wght400Grad0Opsz48'
import IconMarkAsUnreadFill0Wght500Grad0Opsz48 from '../components/MarkAsUnreadFill0Wght500Grad0Opsz48'
import IconMarkAsUnreadFill0Wght600Grad0Opsz48 from '../components/MarkAsUnreadFill0Wght600Grad0Opsz48'
import IconMarkAsUnreadFill0Wght700Grad0Opsz48 from '../components/MarkAsUnreadFill0Wght700Grad0Opsz48'
import IconMarkAsUnreadFill1Wght100Grad0Opsz48 from '../components/MarkAsUnreadFill1Wght100Grad0Opsz48'
import IconMarkAsUnreadFill1Wght200Grad0Opsz48 from '../components/MarkAsUnreadFill1Wght200Grad0Opsz48'
import IconMarkAsUnreadFill1Wght300Grad0Opsz48 from '../components/MarkAsUnreadFill1Wght300Grad0Opsz48'
import IconMarkAsUnreadFill1Wght400Grad0Opsz48 from '../components/MarkAsUnreadFill1Wght400Grad0Opsz48'
import IconMarkAsUnreadFill1Wght500Grad0Opsz48 from '../components/MarkAsUnreadFill1Wght500Grad0Opsz48'
import IconMarkAsUnreadFill1Wght600Grad0Opsz48 from '../components/MarkAsUnreadFill1Wght600Grad0Opsz48'
import IconMarkAsUnreadFill1Wght700Grad0Opsz48 from '../components/MarkAsUnreadFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMarkAsUnread = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMarkAsUnreadFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMarkAsUnreadFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMarkAsUnreadFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMarkAsUnreadFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMarkAsUnreadFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMarkAsUnreadFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMarkAsUnreadFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMarkAsUnreadFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMarkAsUnreadFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMarkAsUnreadFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMarkAsUnreadFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMarkAsUnreadFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMarkAsUnreadFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMarkAsUnreadFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
