import IconNotificationAddFill0Wght100Grad0Opsz48 from '../components/NotificationAddFill0Wght100Grad0Opsz48'
import IconNotificationAddFill0Wght200Grad0Opsz48 from '../components/NotificationAddFill0Wght200Grad0Opsz48'
import IconNotificationAddFill0Wght300Grad0Opsz48 from '../components/NotificationAddFill0Wght300Grad0Opsz48'
import IconNotificationAddFill0Wght400Grad0Opsz48 from '../components/NotificationAddFill0Wght400Grad0Opsz48'
import IconNotificationAddFill0Wght500Grad0Opsz48 from '../components/NotificationAddFill0Wght500Grad0Opsz48'
import IconNotificationAddFill0Wght600Grad0Opsz48 from '../components/NotificationAddFill0Wght600Grad0Opsz48'
import IconNotificationAddFill0Wght700Grad0Opsz48 from '../components/NotificationAddFill0Wght700Grad0Opsz48'
import IconNotificationAddFill1Wght100Grad0Opsz48 from '../components/NotificationAddFill1Wght100Grad0Opsz48'
import IconNotificationAddFill1Wght200Grad0Opsz48 from '../components/NotificationAddFill1Wght200Grad0Opsz48'
import IconNotificationAddFill1Wght300Grad0Opsz48 from '../components/NotificationAddFill1Wght300Grad0Opsz48'
import IconNotificationAddFill1Wght400Grad0Opsz48 from '../components/NotificationAddFill1Wght400Grad0Opsz48'
import IconNotificationAddFill1Wght500Grad0Opsz48 from '../components/NotificationAddFill1Wght500Grad0Opsz48'
import IconNotificationAddFill1Wght600Grad0Opsz48 from '../components/NotificationAddFill1Wght600Grad0Opsz48'
import IconNotificationAddFill1Wght700Grad0Opsz48 from '../components/NotificationAddFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNotificationAdd = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNotificationAddFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNotificationAddFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNotificationAddFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNotificationAddFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNotificationAddFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNotificationAddFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNotificationAddFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNotificationAddFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNotificationAddFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNotificationAddFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNotificationAddFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNotificationAddFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNotificationAddFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNotificationAddFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
