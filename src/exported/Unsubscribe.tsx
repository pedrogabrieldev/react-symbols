import IconUnsubscribeFill0Wght100Grad0Opsz48 from '../components/UnsubscribeFill0Wght100Grad0Opsz48'
import IconUnsubscribeFill0Wght200Grad0Opsz48 from '../components/UnsubscribeFill0Wght200Grad0Opsz48'
import IconUnsubscribeFill0Wght300Grad0Opsz48 from '../components/UnsubscribeFill0Wght300Grad0Opsz48'
import IconUnsubscribeFill0Wght400Grad0Opsz48 from '../components/UnsubscribeFill0Wght400Grad0Opsz48'
import IconUnsubscribeFill0Wght500Grad0Opsz48 from '../components/UnsubscribeFill0Wght500Grad0Opsz48'
import IconUnsubscribeFill0Wght600Grad0Opsz48 from '../components/UnsubscribeFill0Wght600Grad0Opsz48'
import IconUnsubscribeFill0Wght700Grad0Opsz48 from '../components/UnsubscribeFill0Wght700Grad0Opsz48'
import IconUnsubscribeFill1Wght100Grad0Opsz48 from '../components/UnsubscribeFill1Wght100Grad0Opsz48'
import IconUnsubscribeFill1Wght200Grad0Opsz48 from '../components/UnsubscribeFill1Wght200Grad0Opsz48'
import IconUnsubscribeFill1Wght300Grad0Opsz48 from '../components/UnsubscribeFill1Wght300Grad0Opsz48'
import IconUnsubscribeFill1Wght400Grad0Opsz48 from '../components/UnsubscribeFill1Wght400Grad0Opsz48'
import IconUnsubscribeFill1Wght500Grad0Opsz48 from '../components/UnsubscribeFill1Wght500Grad0Opsz48'
import IconUnsubscribeFill1Wght600Grad0Opsz48 from '../components/UnsubscribeFill1Wght600Grad0Opsz48'
import IconUnsubscribeFill1Wght700Grad0Opsz48 from '../components/UnsubscribeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconUnsubscribe = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconUnsubscribeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconUnsubscribeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconUnsubscribeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconUnsubscribeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconUnsubscribeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconUnsubscribeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconUnsubscribeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconUnsubscribeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconUnsubscribeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconUnsubscribeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconUnsubscribeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconUnsubscribeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconUnsubscribeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconUnsubscribeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
