import IconNotificationImportantFill0Wght100Grad0Opsz48 from '../components/NotificationImportantFill0Wght100Grad0Opsz48'
import IconNotificationImportantFill0Wght200Grad0Opsz48 from '../components/NotificationImportantFill0Wght200Grad0Opsz48'
import IconNotificationImportantFill0Wght300Grad0Opsz48 from '../components/NotificationImportantFill0Wght300Grad0Opsz48'
import IconNotificationImportantFill0Wght400Grad0Opsz48 from '../components/NotificationImportantFill0Wght400Grad0Opsz48'
import IconNotificationImportantFill0Wght500Grad0Opsz48 from '../components/NotificationImportantFill0Wght500Grad0Opsz48'
import IconNotificationImportantFill0Wght600Grad0Opsz48 from '../components/NotificationImportantFill0Wght600Grad0Opsz48'
import IconNotificationImportantFill0Wght700Grad0Opsz48 from '../components/NotificationImportantFill0Wght700Grad0Opsz48'
import IconNotificationImportantFill1Wght100Grad0Opsz48 from '../components/NotificationImportantFill1Wght100Grad0Opsz48'
import IconNotificationImportantFill1Wght200Grad0Opsz48 from '../components/NotificationImportantFill1Wght200Grad0Opsz48'
import IconNotificationImportantFill1Wght300Grad0Opsz48 from '../components/NotificationImportantFill1Wght300Grad0Opsz48'
import IconNotificationImportantFill1Wght400Grad0Opsz48 from '../components/NotificationImportantFill1Wght400Grad0Opsz48'
import IconNotificationImportantFill1Wght500Grad0Opsz48 from '../components/NotificationImportantFill1Wght500Grad0Opsz48'
import IconNotificationImportantFill1Wght600Grad0Opsz48 from '../components/NotificationImportantFill1Wght600Grad0Opsz48'
import IconNotificationImportantFill1Wght700Grad0Opsz48 from '../components/NotificationImportantFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNotificationImportant = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNotificationImportantFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNotificationImportantFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNotificationImportantFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNotificationImportantFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNotificationImportantFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNotificationImportantFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNotificationImportantFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNotificationImportantFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNotificationImportantFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNotificationImportantFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNotificationImportantFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNotificationImportantFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNotificationImportantFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNotificationImportantFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
