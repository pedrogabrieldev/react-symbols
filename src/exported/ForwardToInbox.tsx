import IconForwardToInboxFill0Wght100Grad0Opsz48 from '../components/ForwardToInboxFill0Wght100Grad0Opsz48'
import IconForwardToInboxFill0Wght200Grad0Opsz48 from '../components/ForwardToInboxFill0Wght200Grad0Opsz48'
import IconForwardToInboxFill0Wght300Grad0Opsz48 from '../components/ForwardToInboxFill0Wght300Grad0Opsz48'
import IconForwardToInboxFill0Wght400Grad0Opsz48 from '../components/ForwardToInboxFill0Wght400Grad0Opsz48'
import IconForwardToInboxFill0Wght500Grad0Opsz48 from '../components/ForwardToInboxFill0Wght500Grad0Opsz48'
import IconForwardToInboxFill0Wght600Grad0Opsz48 from '../components/ForwardToInboxFill0Wght600Grad0Opsz48'
import IconForwardToInboxFill0Wght700Grad0Opsz48 from '../components/ForwardToInboxFill0Wght700Grad0Opsz48'
import IconForwardToInboxFill1Wght100Grad0Opsz48 from '../components/ForwardToInboxFill1Wght100Grad0Opsz48'
import IconForwardToInboxFill1Wght200Grad0Opsz48 from '../components/ForwardToInboxFill1Wght200Grad0Opsz48'
import IconForwardToInboxFill1Wght300Grad0Opsz48 from '../components/ForwardToInboxFill1Wght300Grad0Opsz48'
import IconForwardToInboxFill1Wght400Grad0Opsz48 from '../components/ForwardToInboxFill1Wght400Grad0Opsz48'
import IconForwardToInboxFill1Wght500Grad0Opsz48 from '../components/ForwardToInboxFill1Wght500Grad0Opsz48'
import IconForwardToInboxFill1Wght600Grad0Opsz48 from '../components/ForwardToInboxFill1Wght600Grad0Opsz48'
import IconForwardToInboxFill1Wght700Grad0Opsz48 from '../components/ForwardToInboxFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconForwardToInbox = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconForwardToInboxFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconForwardToInboxFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconForwardToInboxFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconForwardToInboxFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconForwardToInboxFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconForwardToInboxFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconForwardToInboxFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconForwardToInboxFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconForwardToInboxFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconForwardToInboxFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconForwardToInboxFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconForwardToInboxFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconForwardToInboxFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconForwardToInboxFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
