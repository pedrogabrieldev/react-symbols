import IconNatFill0Wght100Grad0Opsz48 from '../components/NatFill0Wght100Grad0Opsz48'
import IconNatFill0Wght200Grad0Opsz48 from '../components/NatFill0Wght200Grad0Opsz48'
import IconNatFill0Wght300Grad0Opsz48 from '../components/NatFill0Wght300Grad0Opsz48'
import IconNatFill0Wght400Grad0Opsz48 from '../components/NatFill0Wght400Grad0Opsz48'
import IconNatFill0Wght500Grad0Opsz48 from '../components/NatFill0Wght500Grad0Opsz48'
import IconNatFill0Wght600Grad0Opsz48 from '../components/NatFill0Wght600Grad0Opsz48'
import IconNatFill0Wght700Grad0Opsz48 from '../components/NatFill0Wght700Grad0Opsz48'
import IconNatFill1Wght100Grad0Opsz48 from '../components/NatFill1Wght100Grad0Opsz48'
import IconNatFill1Wght200Grad0Opsz48 from '../components/NatFill1Wght200Grad0Opsz48'
import IconNatFill1Wght300Grad0Opsz48 from '../components/NatFill1Wght300Grad0Opsz48'
import IconNatFill1Wght400Grad0Opsz48 from '../components/NatFill1Wght400Grad0Opsz48'
import IconNatFill1Wght500Grad0Opsz48 from '../components/NatFill1Wght500Grad0Opsz48'
import IconNatFill1Wght600Grad0Opsz48 from '../components/NatFill1Wght600Grad0Opsz48'
import IconNatFill1Wght700Grad0Opsz48 from '../components/NatFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNat = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNatFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNatFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNatFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNatFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNatFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNatFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNatFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNatFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNatFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNatFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNatFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNatFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNatFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNatFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
