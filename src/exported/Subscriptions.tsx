import IconSubscriptionsFill0Wght100Grad0Opsz48 from '../components/SubscriptionsFill0Wght100Grad0Opsz48'
import IconSubscriptionsFill0Wght200Grad0Opsz48 from '../components/SubscriptionsFill0Wght200Grad0Opsz48'
import IconSubscriptionsFill0Wght300Grad0Opsz48 from '../components/SubscriptionsFill0Wght300Grad0Opsz48'
import IconSubscriptionsFill0Wght400Grad0Opsz48 from '../components/SubscriptionsFill0Wght400Grad0Opsz48'
import IconSubscriptionsFill0Wght500Grad0Opsz48 from '../components/SubscriptionsFill0Wght500Grad0Opsz48'
import IconSubscriptionsFill0Wght600Grad0Opsz48 from '../components/SubscriptionsFill0Wght600Grad0Opsz48'
import IconSubscriptionsFill0Wght700Grad0Opsz48 from '../components/SubscriptionsFill0Wght700Grad0Opsz48'
import IconSubscriptionsFill1Wght100Grad0Opsz48 from '../components/SubscriptionsFill1Wght100Grad0Opsz48'
import IconSubscriptionsFill1Wght200Grad0Opsz48 from '../components/SubscriptionsFill1Wght200Grad0Opsz48'
import IconSubscriptionsFill1Wght300Grad0Opsz48 from '../components/SubscriptionsFill1Wght300Grad0Opsz48'
import IconSubscriptionsFill1Wght400Grad0Opsz48 from '../components/SubscriptionsFill1Wght400Grad0Opsz48'
import IconSubscriptionsFill1Wght500Grad0Opsz48 from '../components/SubscriptionsFill1Wght500Grad0Opsz48'
import IconSubscriptionsFill1Wght600Grad0Opsz48 from '../components/SubscriptionsFill1Wght600Grad0Opsz48'
import IconSubscriptionsFill1Wght700Grad0Opsz48 from '../components/SubscriptionsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSubscriptions = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSubscriptionsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSubscriptionsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSubscriptionsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSubscriptionsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSubscriptionsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSubscriptionsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSubscriptionsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSubscriptionsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSubscriptionsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSubscriptionsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSubscriptionsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSubscriptionsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSubscriptionsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSubscriptionsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
