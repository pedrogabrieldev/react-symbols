import IconSendTimeExtensionFill0Wght100Grad0Opsz48 from '../components/SendTimeExtensionFill0Wght100Grad0Opsz48'
import IconSendTimeExtensionFill0Wght200Grad0Opsz48 from '../components/SendTimeExtensionFill0Wght200Grad0Opsz48'
import IconSendTimeExtensionFill0Wght300Grad0Opsz48 from '../components/SendTimeExtensionFill0Wght300Grad0Opsz48'
import IconSendTimeExtensionFill0Wght400Grad0Opsz48 from '../components/SendTimeExtensionFill0Wght400Grad0Opsz48'
import IconSendTimeExtensionFill0Wght500Grad0Opsz48 from '../components/SendTimeExtensionFill0Wght500Grad0Opsz48'
import IconSendTimeExtensionFill0Wght600Grad0Opsz48 from '../components/SendTimeExtensionFill0Wght600Grad0Opsz48'
import IconSendTimeExtensionFill0Wght700Grad0Opsz48 from '../components/SendTimeExtensionFill0Wght700Grad0Opsz48'
import IconSendTimeExtensionFill1Wght100Grad0Opsz48 from '../components/SendTimeExtensionFill1Wght100Grad0Opsz48'
import IconSendTimeExtensionFill1Wght200Grad0Opsz48 from '../components/SendTimeExtensionFill1Wght200Grad0Opsz48'
import IconSendTimeExtensionFill1Wght300Grad0Opsz48 from '../components/SendTimeExtensionFill1Wght300Grad0Opsz48'
import IconSendTimeExtensionFill1Wght400Grad0Opsz48 from '../components/SendTimeExtensionFill1Wght400Grad0Opsz48'
import IconSendTimeExtensionFill1Wght500Grad0Opsz48 from '../components/SendTimeExtensionFill1Wght500Grad0Opsz48'
import IconSendTimeExtensionFill1Wght600Grad0Opsz48 from '../components/SendTimeExtensionFill1Wght600Grad0Opsz48'
import IconSendTimeExtensionFill1Wght700Grad0Opsz48 from '../components/SendTimeExtensionFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSendTimeExtension = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSendTimeExtensionFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSendTimeExtensionFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSendTimeExtensionFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSendTimeExtensionFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSendTimeExtensionFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSendTimeExtensionFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSendTimeExtensionFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSendTimeExtensionFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSendTimeExtensionFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSendTimeExtensionFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSendTimeExtensionFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSendTimeExtensionFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSendTimeExtensionFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSendTimeExtensionFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
