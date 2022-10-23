import IconNotificationsActiveFill0Wght100Grad0Opsz48 from '../components/NotificationsActiveFill0Wght100Grad0Opsz48'
import IconNotificationsActiveFill0Wght200Grad0Opsz48 from '../components/NotificationsActiveFill0Wght200Grad0Opsz48'
import IconNotificationsActiveFill0Wght300Grad0Opsz48 from '../components/NotificationsActiveFill0Wght300Grad0Opsz48'
import IconNotificationsActiveFill0Wght400Grad0Opsz48 from '../components/NotificationsActiveFill0Wght400Grad0Opsz48'
import IconNotificationsActiveFill0Wght500Grad0Opsz48 from '../components/NotificationsActiveFill0Wght500Grad0Opsz48'
import IconNotificationsActiveFill0Wght600Grad0Opsz48 from '../components/NotificationsActiveFill0Wght600Grad0Opsz48'
import IconNotificationsActiveFill0Wght700Grad0Opsz48 from '../components/NotificationsActiveFill0Wght700Grad0Opsz48'
import IconNotificationsActiveFill1Wght100Grad0Opsz48 from '../components/NotificationsActiveFill1Wght100Grad0Opsz48'
import IconNotificationsActiveFill1Wght200Grad0Opsz48 from '../components/NotificationsActiveFill1Wght200Grad0Opsz48'
import IconNotificationsActiveFill1Wght300Grad0Opsz48 from '../components/NotificationsActiveFill1Wght300Grad0Opsz48'
import IconNotificationsActiveFill1Wght400Grad0Opsz48 from '../components/NotificationsActiveFill1Wght400Grad0Opsz48'
import IconNotificationsActiveFill1Wght500Grad0Opsz48 from '../components/NotificationsActiveFill1Wght500Grad0Opsz48'
import IconNotificationsActiveFill1Wght600Grad0Opsz48 from '../components/NotificationsActiveFill1Wght600Grad0Opsz48'
import IconNotificationsActiveFill1Wght700Grad0Opsz48 from '../components/NotificationsActiveFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNotificationsActive = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNotificationsActiveFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNotificationsActiveFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNotificationsActiveFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNotificationsActiveFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNotificationsActiveFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNotificationsActiveFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNotificationsActiveFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNotificationsActiveFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNotificationsActiveFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNotificationsActiveFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNotificationsActiveFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNotificationsActiveFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNotificationsActiveFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNotificationsActiveFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
