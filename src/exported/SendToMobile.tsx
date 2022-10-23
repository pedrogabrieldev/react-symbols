import IconSendToMobileFill0Wght100Grad0Opsz48 from '../components/SendToMobileFill0Wght100Grad0Opsz48'
import IconSendToMobileFill0Wght200Grad0Opsz48 from '../components/SendToMobileFill0Wght200Grad0Opsz48'
import IconSendToMobileFill0Wght300Grad0Opsz48 from '../components/SendToMobileFill0Wght300Grad0Opsz48'
import IconSendToMobileFill0Wght400Grad0Opsz48 from '../components/SendToMobileFill0Wght400Grad0Opsz48'
import IconSendToMobileFill0Wght500Grad0Opsz48 from '../components/SendToMobileFill0Wght500Grad0Opsz48'
import IconSendToMobileFill0Wght600Grad0Opsz48 from '../components/SendToMobileFill0Wght600Grad0Opsz48'
import IconSendToMobileFill0Wght700Grad0Opsz48 from '../components/SendToMobileFill0Wght700Grad0Opsz48'
import IconSendToMobileFill1Wght100Grad0Opsz48 from '../components/SendToMobileFill1Wght100Grad0Opsz48'
import IconSendToMobileFill1Wght200Grad0Opsz48 from '../components/SendToMobileFill1Wght200Grad0Opsz48'
import IconSendToMobileFill1Wght300Grad0Opsz48 from '../components/SendToMobileFill1Wght300Grad0Opsz48'
import IconSendToMobileFill1Wght400Grad0Opsz48 from '../components/SendToMobileFill1Wght400Grad0Opsz48'
import IconSendToMobileFill1Wght500Grad0Opsz48 from '../components/SendToMobileFill1Wght500Grad0Opsz48'
import IconSendToMobileFill1Wght600Grad0Opsz48 from '../components/SendToMobileFill1Wght600Grad0Opsz48'
import IconSendToMobileFill1Wght700Grad0Opsz48 from '../components/SendToMobileFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSendToMobile = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSendToMobileFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSendToMobileFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSendToMobileFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSendToMobileFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSendToMobileFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSendToMobileFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSendToMobileFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSendToMobileFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSendToMobileFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSendToMobileFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSendToMobileFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSendToMobileFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSendToMobileFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSendToMobileFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
