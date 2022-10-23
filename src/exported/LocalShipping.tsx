import IconLocalShippingFill0Wght100Grad0Opsz48 from '../components/LocalShippingFill0Wght100Grad0Opsz48'
import IconLocalShippingFill0Wght200Grad0Opsz48 from '../components/LocalShippingFill0Wght200Grad0Opsz48'
import IconLocalShippingFill0Wght300Grad0Opsz48 from '../components/LocalShippingFill0Wght300Grad0Opsz48'
import IconLocalShippingFill0Wght400Grad0Opsz48 from '../components/LocalShippingFill0Wght400Grad0Opsz48'
import IconLocalShippingFill0Wght500Grad0Opsz48 from '../components/LocalShippingFill0Wght500Grad0Opsz48'
import IconLocalShippingFill0Wght600Grad0Opsz48 from '../components/LocalShippingFill0Wght600Grad0Opsz48'
import IconLocalShippingFill0Wght700Grad0Opsz48 from '../components/LocalShippingFill0Wght700Grad0Opsz48'
import IconLocalShippingFill1Wght100Grad0Opsz48 from '../components/LocalShippingFill1Wght100Grad0Opsz48'
import IconLocalShippingFill1Wght200Grad0Opsz48 from '../components/LocalShippingFill1Wght200Grad0Opsz48'
import IconLocalShippingFill1Wght300Grad0Opsz48 from '../components/LocalShippingFill1Wght300Grad0Opsz48'
import IconLocalShippingFill1Wght400Grad0Opsz48 from '../components/LocalShippingFill1Wght400Grad0Opsz48'
import IconLocalShippingFill1Wght500Grad0Opsz48 from '../components/LocalShippingFill1Wght500Grad0Opsz48'
import IconLocalShippingFill1Wght600Grad0Opsz48 from '../components/LocalShippingFill1Wght600Grad0Opsz48'
import IconLocalShippingFill1Wght700Grad0Opsz48 from '../components/LocalShippingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLocalShipping = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLocalShippingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLocalShippingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLocalShippingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLocalShippingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLocalShippingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLocalShippingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLocalShippingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLocalShippingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLocalShippingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLocalShippingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLocalShippingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLocalShippingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLocalShippingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLocalShippingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
