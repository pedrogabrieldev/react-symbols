import IconIcecreamFill0Wght100Grad0Opsz48 from '../components/IcecreamFill0Wght100Grad0Opsz48'
import IconIcecreamFill0Wght200Grad0Opsz48 from '../components/IcecreamFill0Wght200Grad0Opsz48'
import IconIcecreamFill0Wght300Grad0Opsz48 from '../components/IcecreamFill0Wght300Grad0Opsz48'
import IconIcecreamFill0Wght400Grad0Opsz48 from '../components/IcecreamFill0Wght400Grad0Opsz48'
import IconIcecreamFill0Wght500Grad0Opsz48 from '../components/IcecreamFill0Wght500Grad0Opsz48'
import IconIcecreamFill0Wght600Grad0Opsz48 from '../components/IcecreamFill0Wght600Grad0Opsz48'
import IconIcecreamFill0Wght700Grad0Opsz48 from '../components/IcecreamFill0Wght700Grad0Opsz48'
import IconIcecreamFill1Wght100Grad0Opsz48 from '../components/IcecreamFill1Wght100Grad0Opsz48'
import IconIcecreamFill1Wght200Grad0Opsz48 from '../components/IcecreamFill1Wght200Grad0Opsz48'
import IconIcecreamFill1Wght300Grad0Opsz48 from '../components/IcecreamFill1Wght300Grad0Opsz48'
import IconIcecreamFill1Wght400Grad0Opsz48 from '../components/IcecreamFill1Wght400Grad0Opsz48'
import IconIcecreamFill1Wght500Grad0Opsz48 from '../components/IcecreamFill1Wght500Grad0Opsz48'
import IconIcecreamFill1Wght600Grad0Opsz48 from '../components/IcecreamFill1Wght600Grad0Opsz48'
import IconIcecreamFill1Wght700Grad0Opsz48 from '../components/IcecreamFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconIcecream = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconIcecreamFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconIcecreamFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconIcecreamFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconIcecreamFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconIcecreamFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconIcecreamFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconIcecreamFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconIcecreamFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconIcecreamFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconIcecreamFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconIcecreamFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconIcecreamFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconIcecreamFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconIcecreamFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
