import IconComponentExchangeFill0Wght100Grad0Opsz48 from '../components/ComponentExchangeFill0Wght100Grad0Opsz48'
import IconComponentExchangeFill0Wght200Grad0Opsz48 from '../components/ComponentExchangeFill0Wght200Grad0Opsz48'
import IconComponentExchangeFill0Wght300Grad0Opsz48 from '../components/ComponentExchangeFill0Wght300Grad0Opsz48'
import IconComponentExchangeFill0Wght400Grad0Opsz48 from '../components/ComponentExchangeFill0Wght400Grad0Opsz48'
import IconComponentExchangeFill0Wght500Grad0Opsz48 from '../components/ComponentExchangeFill0Wght500Grad0Opsz48'
import IconComponentExchangeFill0Wght600Grad0Opsz48 from '../components/ComponentExchangeFill0Wght600Grad0Opsz48'
import IconComponentExchangeFill0Wght700Grad0Opsz48 from '../components/ComponentExchangeFill0Wght700Grad0Opsz48'
import IconComponentExchangeFill1Wght100Grad0Opsz48 from '../components/ComponentExchangeFill1Wght100Grad0Opsz48'
import IconComponentExchangeFill1Wght200Grad0Opsz48 from '../components/ComponentExchangeFill1Wght200Grad0Opsz48'
import IconComponentExchangeFill1Wght300Grad0Opsz48 from '../components/ComponentExchangeFill1Wght300Grad0Opsz48'
import IconComponentExchangeFill1Wght400Grad0Opsz48 from '../components/ComponentExchangeFill1Wght400Grad0Opsz48'
import IconComponentExchangeFill1Wght500Grad0Opsz48 from '../components/ComponentExchangeFill1Wght500Grad0Opsz48'
import IconComponentExchangeFill1Wght600Grad0Opsz48 from '../components/ComponentExchangeFill1Wght600Grad0Opsz48'
import IconComponentExchangeFill1Wght700Grad0Opsz48 from '../components/ComponentExchangeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconComponentExchange = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconComponentExchangeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconComponentExchangeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconComponentExchangeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconComponentExchangeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconComponentExchangeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconComponentExchangeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconComponentExchangeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconComponentExchangeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconComponentExchangeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconComponentExchangeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconComponentExchangeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconComponentExchangeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconComponentExchangeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconComponentExchangeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
