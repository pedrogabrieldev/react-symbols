import IconNotificationsPausedFill0Wght100Grad0Opsz48 from '../components/NotificationsPausedFill0Wght100Grad0Opsz48'
import IconNotificationsPausedFill0Wght200Grad0Opsz48 from '../components/NotificationsPausedFill0Wght200Grad0Opsz48'
import IconNotificationsPausedFill0Wght300Grad0Opsz48 from '../components/NotificationsPausedFill0Wght300Grad0Opsz48'
import IconNotificationsPausedFill0Wght400Grad0Opsz48 from '../components/NotificationsPausedFill0Wght400Grad0Opsz48'
import IconNotificationsPausedFill0Wght500Grad0Opsz48 from '../components/NotificationsPausedFill0Wght500Grad0Opsz48'
import IconNotificationsPausedFill0Wght600Grad0Opsz48 from '../components/NotificationsPausedFill0Wght600Grad0Opsz48'
import IconNotificationsPausedFill0Wght700Grad0Opsz48 from '../components/NotificationsPausedFill0Wght700Grad0Opsz48'
import IconNotificationsPausedFill1Wght100Grad0Opsz48 from '../components/NotificationsPausedFill1Wght100Grad0Opsz48'
import IconNotificationsPausedFill1Wght200Grad0Opsz48 from '../components/NotificationsPausedFill1Wght200Grad0Opsz48'
import IconNotificationsPausedFill1Wght300Grad0Opsz48 from '../components/NotificationsPausedFill1Wght300Grad0Opsz48'
import IconNotificationsPausedFill1Wght400Grad0Opsz48 from '../components/NotificationsPausedFill1Wght400Grad0Opsz48'
import IconNotificationsPausedFill1Wght500Grad0Opsz48 from '../components/NotificationsPausedFill1Wght500Grad0Opsz48'
import IconNotificationsPausedFill1Wght600Grad0Opsz48 from '../components/NotificationsPausedFill1Wght600Grad0Opsz48'
import IconNotificationsPausedFill1Wght700Grad0Opsz48 from '../components/NotificationsPausedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNotificationsPaused = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNotificationsPausedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNotificationsPausedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNotificationsPausedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNotificationsPausedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNotificationsPausedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNotificationsPausedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNotificationsPausedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNotificationsPausedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNotificationsPausedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNotificationsPausedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNotificationsPausedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNotificationsPausedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNotificationsPausedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNotificationsPausedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
