import IconOutboundFill0Wght100Grad0Opsz48 from '../components/OutboundFill0Wght100Grad0Opsz48'
import IconOutboundFill0Wght200Grad0Opsz48 from '../components/OutboundFill0Wght200Grad0Opsz48'
import IconOutboundFill0Wght300Grad0Opsz48 from '../components/OutboundFill0Wght300Grad0Opsz48'
import IconOutboundFill0Wght400Grad0Opsz48 from '../components/OutboundFill0Wght400Grad0Opsz48'
import IconOutboundFill0Wght500Grad0Opsz48 from '../components/OutboundFill0Wght500Grad0Opsz48'
import IconOutboundFill0Wght600Grad0Opsz48 from '../components/OutboundFill0Wght600Grad0Opsz48'
import IconOutboundFill0Wght700Grad0Opsz48 from '../components/OutboundFill0Wght700Grad0Opsz48'
import IconOutboundFill1Wght100Grad0Opsz48 from '../components/OutboundFill1Wght100Grad0Opsz48'
import IconOutboundFill1Wght200Grad0Opsz48 from '../components/OutboundFill1Wght200Grad0Opsz48'
import IconOutboundFill1Wght300Grad0Opsz48 from '../components/OutboundFill1Wght300Grad0Opsz48'
import IconOutboundFill1Wght400Grad0Opsz48 from '../components/OutboundFill1Wght400Grad0Opsz48'
import IconOutboundFill1Wght500Grad0Opsz48 from '../components/OutboundFill1Wght500Grad0Opsz48'
import IconOutboundFill1Wght600Grad0Opsz48 from '../components/OutboundFill1Wght600Grad0Opsz48'
import IconOutboundFill1Wght700Grad0Opsz48 from '../components/OutboundFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconOutbound = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconOutboundFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconOutboundFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconOutboundFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconOutboundFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconOutboundFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconOutboundFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconOutboundFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconOutboundFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconOutboundFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconOutboundFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconOutboundFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconOutboundFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconOutboundFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconOutboundFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
