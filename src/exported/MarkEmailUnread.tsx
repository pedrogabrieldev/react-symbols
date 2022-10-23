import IconMarkEmailUnreadFill0Wght100Grad0Opsz48 from '../components/MarkEmailUnreadFill0Wght100Grad0Opsz48'
import IconMarkEmailUnreadFill0Wght200Grad0Opsz48 from '../components/MarkEmailUnreadFill0Wght200Grad0Opsz48'
import IconMarkEmailUnreadFill0Wght300Grad0Opsz48 from '../components/MarkEmailUnreadFill0Wght300Grad0Opsz48'
import IconMarkEmailUnreadFill0Wght400Grad0Opsz48 from '../components/MarkEmailUnreadFill0Wght400Grad0Opsz48'
import IconMarkEmailUnreadFill0Wght500Grad0Opsz48 from '../components/MarkEmailUnreadFill0Wght500Grad0Opsz48'
import IconMarkEmailUnreadFill0Wght600Grad0Opsz48 from '../components/MarkEmailUnreadFill0Wght600Grad0Opsz48'
import IconMarkEmailUnreadFill0Wght700Grad0Opsz48 from '../components/MarkEmailUnreadFill0Wght700Grad0Opsz48'
import IconMarkEmailUnreadFill1Wght100Grad0Opsz48 from '../components/MarkEmailUnreadFill1Wght100Grad0Opsz48'
import IconMarkEmailUnreadFill1Wght200Grad0Opsz48 from '../components/MarkEmailUnreadFill1Wght200Grad0Opsz48'
import IconMarkEmailUnreadFill1Wght300Grad0Opsz48 from '../components/MarkEmailUnreadFill1Wght300Grad0Opsz48'
import IconMarkEmailUnreadFill1Wght400Grad0Opsz48 from '../components/MarkEmailUnreadFill1Wght400Grad0Opsz48'
import IconMarkEmailUnreadFill1Wght500Grad0Opsz48 from '../components/MarkEmailUnreadFill1Wght500Grad0Opsz48'
import IconMarkEmailUnreadFill1Wght600Grad0Opsz48 from '../components/MarkEmailUnreadFill1Wght600Grad0Opsz48'
import IconMarkEmailUnreadFill1Wght700Grad0Opsz48 from '../components/MarkEmailUnreadFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMarkEmailUnread = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMarkEmailUnreadFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMarkEmailUnreadFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMarkEmailUnreadFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMarkEmailUnreadFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMarkEmailUnreadFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMarkEmailUnreadFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMarkEmailUnreadFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMarkEmailUnreadFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMarkEmailUnreadFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMarkEmailUnreadFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMarkEmailUnreadFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMarkEmailUnreadFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMarkEmailUnreadFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMarkEmailUnreadFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
