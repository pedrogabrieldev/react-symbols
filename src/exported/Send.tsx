import IconSendFill0Wght100Grad0Opsz48 from '../components/SendFill0Wght100Grad0Opsz48'
import IconSendFill0Wght200Grad0Opsz48 from '../components/SendFill0Wght200Grad0Opsz48'
import IconSendFill0Wght300Grad0Opsz48 from '../components/SendFill0Wght300Grad0Opsz48'
import IconSendFill0Wght400Grad0Opsz48 from '../components/SendFill0Wght400Grad0Opsz48'
import IconSendFill0Wght500Grad0Opsz48 from '../components/SendFill0Wght500Grad0Opsz48'
import IconSendFill0Wght600Grad0Opsz48 from '../components/SendFill0Wght600Grad0Opsz48'
import IconSendFill0Wght700Grad0Opsz48 from '../components/SendFill0Wght700Grad0Opsz48'
import IconSendFill1Wght100Grad0Opsz48 from '../components/SendFill1Wght100Grad0Opsz48'
import IconSendFill1Wght200Grad0Opsz48 from '../components/SendFill1Wght200Grad0Opsz48'
import IconSendFill1Wght300Grad0Opsz48 from '../components/SendFill1Wght300Grad0Opsz48'
import IconSendFill1Wght400Grad0Opsz48 from '../components/SendFill1Wght400Grad0Opsz48'
import IconSendFill1Wght500Grad0Opsz48 from '../components/SendFill1Wght500Grad0Opsz48'
import IconSendFill1Wght600Grad0Opsz48 from '../components/SendFill1Wght600Grad0Opsz48'
import IconSendFill1Wght700Grad0Opsz48 from '../components/SendFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSend = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSendFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSendFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSendFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSendFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSendFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSendFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSendFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSendFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSendFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSendFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSendFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSendFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSendFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSendFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
