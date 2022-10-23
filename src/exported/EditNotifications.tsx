import IconEditNotificationsFill0Wght100Grad0Opsz48 from '../components/EditNotificationsFill0Wght100Grad0Opsz48'
import IconEditNotificationsFill0Wght200Grad0Opsz48 from '../components/EditNotificationsFill0Wght200Grad0Opsz48'
import IconEditNotificationsFill0Wght300Grad0Opsz48 from '../components/EditNotificationsFill0Wght300Grad0Opsz48'
import IconEditNotificationsFill0Wght400Grad0Opsz48 from '../components/EditNotificationsFill0Wght400Grad0Opsz48'
import IconEditNotificationsFill0Wght500Grad0Opsz48 from '../components/EditNotificationsFill0Wght500Grad0Opsz48'
import IconEditNotificationsFill0Wght600Grad0Opsz48 from '../components/EditNotificationsFill0Wght600Grad0Opsz48'
import IconEditNotificationsFill0Wght700Grad0Opsz48 from '../components/EditNotificationsFill0Wght700Grad0Opsz48'
import IconEditNotificationsFill1Wght100Grad0Opsz48 from '../components/EditNotificationsFill1Wght100Grad0Opsz48'
import IconEditNotificationsFill1Wght200Grad0Opsz48 from '../components/EditNotificationsFill1Wght200Grad0Opsz48'
import IconEditNotificationsFill1Wght300Grad0Opsz48 from '../components/EditNotificationsFill1Wght300Grad0Opsz48'
import IconEditNotificationsFill1Wght400Grad0Opsz48 from '../components/EditNotificationsFill1Wght400Grad0Opsz48'
import IconEditNotificationsFill1Wght500Grad0Opsz48 from '../components/EditNotificationsFill1Wght500Grad0Opsz48'
import IconEditNotificationsFill1Wght600Grad0Opsz48 from '../components/EditNotificationsFill1Wght600Grad0Opsz48'
import IconEditNotificationsFill1Wght700Grad0Opsz48 from '../components/EditNotificationsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEditNotifications = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEditNotificationsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEditNotificationsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEditNotificationsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEditNotificationsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEditNotificationsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEditNotificationsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEditNotificationsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEditNotificationsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEditNotificationsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEditNotificationsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEditNotificationsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEditNotificationsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEditNotificationsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEditNotificationsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
