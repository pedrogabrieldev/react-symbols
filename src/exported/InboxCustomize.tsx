import IconInboxCustomizeFill0Wght100Grad0Opsz48 from '../components/InboxCustomizeFill0Wght100Grad0Opsz48'
import IconInboxCustomizeFill0Wght200Grad0Opsz48 from '../components/InboxCustomizeFill0Wght200Grad0Opsz48'
import IconInboxCustomizeFill0Wght300Grad0Opsz48 from '../components/InboxCustomizeFill0Wght300Grad0Opsz48'
import IconInboxCustomizeFill0Wght400Grad0Opsz48 from '../components/InboxCustomizeFill0Wght400Grad0Opsz48'
import IconInboxCustomizeFill0Wght500Grad0Opsz48 from '../components/InboxCustomizeFill0Wght500Grad0Opsz48'
import IconInboxCustomizeFill0Wght600Grad0Opsz48 from '../components/InboxCustomizeFill0Wght600Grad0Opsz48'
import IconInboxCustomizeFill0Wght700Grad0Opsz48 from '../components/InboxCustomizeFill0Wght700Grad0Opsz48'
import IconInboxCustomizeFill1Wght100Grad0Opsz48 from '../components/InboxCustomizeFill1Wght100Grad0Opsz48'
import IconInboxCustomizeFill1Wght200Grad0Opsz48 from '../components/InboxCustomizeFill1Wght200Grad0Opsz48'
import IconInboxCustomizeFill1Wght300Grad0Opsz48 from '../components/InboxCustomizeFill1Wght300Grad0Opsz48'
import IconInboxCustomizeFill1Wght400Grad0Opsz48 from '../components/InboxCustomizeFill1Wght400Grad0Opsz48'
import IconInboxCustomizeFill1Wght500Grad0Opsz48 from '../components/InboxCustomizeFill1Wght500Grad0Opsz48'
import IconInboxCustomizeFill1Wght600Grad0Opsz48 from '../components/InboxCustomizeFill1Wght600Grad0Opsz48'
import IconInboxCustomizeFill1Wght700Grad0Opsz48 from '../components/InboxCustomizeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconInboxCustomize = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconInboxCustomizeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconInboxCustomizeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconInboxCustomizeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconInboxCustomizeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconInboxCustomizeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconInboxCustomizeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconInboxCustomizeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconInboxCustomizeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconInboxCustomizeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconInboxCustomizeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconInboxCustomizeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconInboxCustomizeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconInboxCustomizeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconInboxCustomizeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
