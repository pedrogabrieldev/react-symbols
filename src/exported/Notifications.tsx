import IconNotificationsFill0Wght100Grad0Opsz48 from '../components/NotificationsFill0Wght100Grad0Opsz48'
import IconNotificationsFill0Wght200Grad0Opsz48 from '../components/NotificationsFill0Wght200Grad0Opsz48'
import IconNotificationsFill0Wght300Grad0Opsz48 from '../components/NotificationsFill0Wght300Grad0Opsz48'
import IconNotificationsFill0Wght400Grad0Opsz48 from '../components/NotificationsFill0Wght400Grad0Opsz48'
import IconNotificationsFill0Wght500Grad0Opsz48 from '../components/NotificationsFill0Wght500Grad0Opsz48'
import IconNotificationsFill0Wght600Grad0Opsz48 from '../components/NotificationsFill0Wght600Grad0Opsz48'
import IconNotificationsFill0Wght700Grad0Opsz48 from '../components/NotificationsFill0Wght700Grad0Opsz48'
import IconNotificationsFill1Wght100Grad0Opsz48 from '../components/NotificationsFill1Wght100Grad0Opsz48'
import IconNotificationsFill1Wght200Grad0Opsz48 from '../components/NotificationsFill1Wght200Grad0Opsz48'
import IconNotificationsFill1Wght300Grad0Opsz48 from '../components/NotificationsFill1Wght300Grad0Opsz48'
import IconNotificationsFill1Wght400Grad0Opsz48 from '../components/NotificationsFill1Wght400Grad0Opsz48'
import IconNotificationsFill1Wght500Grad0Opsz48 from '../components/NotificationsFill1Wght500Grad0Opsz48'
import IconNotificationsFill1Wght600Grad0Opsz48 from '../components/NotificationsFill1Wght600Grad0Opsz48'
import IconNotificationsFill1Wght700Grad0Opsz48 from '../components/NotificationsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNotifications = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNotificationsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNotificationsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNotificationsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNotificationsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNotificationsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNotificationsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNotificationsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNotificationsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNotificationsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNotificationsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNotificationsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNotificationsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNotificationsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNotificationsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
