import IconChatAddOnFill0Wght100Grad0Opsz48 from '../components/ChatAddOnFill0Wght100Grad0Opsz48'
import IconChatAddOnFill0Wght200Grad0Opsz48 from '../components/ChatAddOnFill0Wght200Grad0Opsz48'
import IconChatAddOnFill0Wght300Grad0Opsz48 from '../components/ChatAddOnFill0Wght300Grad0Opsz48'
import IconChatAddOnFill0Wght400Grad0Opsz48 from '../components/ChatAddOnFill0Wght400Grad0Opsz48'
import IconChatAddOnFill0Wght500Grad0Opsz48 from '../components/ChatAddOnFill0Wght500Grad0Opsz48'
import IconChatAddOnFill0Wght600Grad0Opsz48 from '../components/ChatAddOnFill0Wght600Grad0Opsz48'
import IconChatAddOnFill0Wght700Grad0Opsz48 from '../components/ChatAddOnFill0Wght700Grad0Opsz48'
import IconChatAddOnFill1Wght100Grad0Opsz48 from '../components/ChatAddOnFill1Wght100Grad0Opsz48'
import IconChatAddOnFill1Wght200Grad0Opsz48 from '../components/ChatAddOnFill1Wght200Grad0Opsz48'
import IconChatAddOnFill1Wght300Grad0Opsz48 from '../components/ChatAddOnFill1Wght300Grad0Opsz48'
import IconChatAddOnFill1Wght400Grad0Opsz48 from '../components/ChatAddOnFill1Wght400Grad0Opsz48'
import IconChatAddOnFill1Wght500Grad0Opsz48 from '../components/ChatAddOnFill1Wght500Grad0Opsz48'
import IconChatAddOnFill1Wght600Grad0Opsz48 from '../components/ChatAddOnFill1Wght600Grad0Opsz48'
import IconChatAddOnFill1Wght700Grad0Opsz48 from '../components/ChatAddOnFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconChatAddOn = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconChatAddOnFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconChatAddOnFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconChatAddOnFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconChatAddOnFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconChatAddOnFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconChatAddOnFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconChatAddOnFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconChatAddOnFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconChatAddOnFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconChatAddOnFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconChatAddOnFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconChatAddOnFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconChatAddOnFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconChatAddOnFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
