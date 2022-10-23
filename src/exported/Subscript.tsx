import IconSubscriptFill0Wght100Grad0Opsz48 from '../components/SubscriptFill0Wght100Grad0Opsz48'
import IconSubscriptFill0Wght200Grad0Opsz48 from '../components/SubscriptFill0Wght200Grad0Opsz48'
import IconSubscriptFill0Wght300Grad0Opsz48 from '../components/SubscriptFill0Wght300Grad0Opsz48'
import IconSubscriptFill0Wght400Grad0Opsz48 from '../components/SubscriptFill0Wght400Grad0Opsz48'
import IconSubscriptFill0Wght500Grad0Opsz48 from '../components/SubscriptFill0Wght500Grad0Opsz48'
import IconSubscriptFill0Wght600Grad0Opsz48 from '../components/SubscriptFill0Wght600Grad0Opsz48'
import IconSubscriptFill0Wght700Grad0Opsz48 from '../components/SubscriptFill0Wght700Grad0Opsz48'
import IconSubscriptFill1Wght100Grad0Opsz48 from '../components/SubscriptFill1Wght100Grad0Opsz48'
import IconSubscriptFill1Wght200Grad0Opsz48 from '../components/SubscriptFill1Wght200Grad0Opsz48'
import IconSubscriptFill1Wght300Grad0Opsz48 from '../components/SubscriptFill1Wght300Grad0Opsz48'
import IconSubscriptFill1Wght400Grad0Opsz48 from '../components/SubscriptFill1Wght400Grad0Opsz48'
import IconSubscriptFill1Wght500Grad0Opsz48 from '../components/SubscriptFill1Wght500Grad0Opsz48'
import IconSubscriptFill1Wght600Grad0Opsz48 from '../components/SubscriptFill1Wght600Grad0Opsz48'
import IconSubscriptFill1Wght700Grad0Opsz48 from '../components/SubscriptFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSubscript = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSubscriptFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSubscriptFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSubscriptFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSubscriptFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSubscriptFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSubscriptFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSubscriptFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSubscriptFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSubscriptFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSubscriptFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSubscriptFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSubscriptFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSubscriptFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSubscriptFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
