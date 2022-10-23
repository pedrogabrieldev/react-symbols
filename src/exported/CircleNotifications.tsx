import IconCircleNotificationsFill0Wght100Grad0Opsz48 from '../components/CircleNotificationsFill0Wght100Grad0Opsz48'
import IconCircleNotificationsFill0Wght200Grad0Opsz48 from '../components/CircleNotificationsFill0Wght200Grad0Opsz48'
import IconCircleNotificationsFill0Wght300Grad0Opsz48 from '../components/CircleNotificationsFill0Wght300Grad0Opsz48'
import IconCircleNotificationsFill0Wght400Grad0Opsz48 from '../components/CircleNotificationsFill0Wght400Grad0Opsz48'
import IconCircleNotificationsFill0Wght500Grad0Opsz48 from '../components/CircleNotificationsFill0Wght500Grad0Opsz48'
import IconCircleNotificationsFill0Wght600Grad0Opsz48 from '../components/CircleNotificationsFill0Wght600Grad0Opsz48'
import IconCircleNotificationsFill0Wght700Grad0Opsz48 from '../components/CircleNotificationsFill0Wght700Grad0Opsz48'
import IconCircleNotificationsFill1Wght100Grad0Opsz48 from '../components/CircleNotificationsFill1Wght100Grad0Opsz48'
import IconCircleNotificationsFill1Wght200Grad0Opsz48 from '../components/CircleNotificationsFill1Wght200Grad0Opsz48'
import IconCircleNotificationsFill1Wght300Grad0Opsz48 from '../components/CircleNotificationsFill1Wght300Grad0Opsz48'
import IconCircleNotificationsFill1Wght400Grad0Opsz48 from '../components/CircleNotificationsFill1Wght400Grad0Opsz48'
import IconCircleNotificationsFill1Wght500Grad0Opsz48 from '../components/CircleNotificationsFill1Wght500Grad0Opsz48'
import IconCircleNotificationsFill1Wght600Grad0Opsz48 from '../components/CircleNotificationsFill1Wght600Grad0Opsz48'
import IconCircleNotificationsFill1Wght700Grad0Opsz48 from '../components/CircleNotificationsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCircleNotifications = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCircleNotificationsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCircleNotificationsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCircleNotificationsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCircleNotificationsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCircleNotificationsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCircleNotificationsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCircleNotificationsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCircleNotificationsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCircleNotificationsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCircleNotificationsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCircleNotificationsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCircleNotificationsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCircleNotificationsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCircleNotificationsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
