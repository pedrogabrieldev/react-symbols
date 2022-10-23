import IconNotificationsOffFill0Wght100Grad0Opsz48 from '../components/NotificationsOffFill0Wght100Grad0Opsz48'
import IconNotificationsOffFill0Wght200Grad0Opsz48 from '../components/NotificationsOffFill0Wght200Grad0Opsz48'
import IconNotificationsOffFill0Wght300Grad0Opsz48 from '../components/NotificationsOffFill0Wght300Grad0Opsz48'
import IconNotificationsOffFill0Wght400Grad0Opsz48 from '../components/NotificationsOffFill0Wght400Grad0Opsz48'
import IconNotificationsOffFill0Wght500Grad0Opsz48 from '../components/NotificationsOffFill0Wght500Grad0Opsz48'
import IconNotificationsOffFill0Wght600Grad0Opsz48 from '../components/NotificationsOffFill0Wght600Grad0Opsz48'
import IconNotificationsOffFill0Wght700Grad0Opsz48 from '../components/NotificationsOffFill0Wght700Grad0Opsz48'
import IconNotificationsOffFill1Wght100Grad0Opsz48 from '../components/NotificationsOffFill1Wght100Grad0Opsz48'
import IconNotificationsOffFill1Wght200Grad0Opsz48 from '../components/NotificationsOffFill1Wght200Grad0Opsz48'
import IconNotificationsOffFill1Wght300Grad0Opsz48 from '../components/NotificationsOffFill1Wght300Grad0Opsz48'
import IconNotificationsOffFill1Wght400Grad0Opsz48 from '../components/NotificationsOffFill1Wght400Grad0Opsz48'
import IconNotificationsOffFill1Wght500Grad0Opsz48 from '../components/NotificationsOffFill1Wght500Grad0Opsz48'
import IconNotificationsOffFill1Wght600Grad0Opsz48 from '../components/NotificationsOffFill1Wght600Grad0Opsz48'
import IconNotificationsOffFill1Wght700Grad0Opsz48 from '../components/NotificationsOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNotificationsOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNotificationsOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNotificationsOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNotificationsOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNotificationsOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNotificationsOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNotificationsOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNotificationsOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNotificationsOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNotificationsOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNotificationsOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNotificationsOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNotificationsOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNotificationsOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNotificationsOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
