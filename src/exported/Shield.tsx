import IconShieldFill0Wght100Grad0Opsz48 from '../components/ShieldFill0Wght100Grad0Opsz48'
import IconShieldFill0Wght200Grad0Opsz48 from '../components/ShieldFill0Wght200Grad0Opsz48'
import IconShieldFill0Wght300Grad0Opsz48 from '../components/ShieldFill0Wght300Grad0Opsz48'
import IconShieldFill0Wght400Grad0Opsz48 from '../components/ShieldFill0Wght400Grad0Opsz48'
import IconShieldFill0Wght500Grad0Opsz48 from '../components/ShieldFill0Wght500Grad0Opsz48'
import IconShieldFill0Wght600Grad0Opsz48 from '../components/ShieldFill0Wght600Grad0Opsz48'
import IconShieldFill0Wght700Grad0Opsz48 from '../components/ShieldFill0Wght700Grad0Opsz48'
import IconShieldFill1Wght100Grad0Opsz48 from '../components/ShieldFill1Wght100Grad0Opsz48'
import IconShieldFill1Wght200Grad0Opsz48 from '../components/ShieldFill1Wght200Grad0Opsz48'
import IconShieldFill1Wght300Grad0Opsz48 from '../components/ShieldFill1Wght300Grad0Opsz48'
import IconShieldFill1Wght400Grad0Opsz48 from '../components/ShieldFill1Wght400Grad0Opsz48'
import IconShieldFill1Wght500Grad0Opsz48 from '../components/ShieldFill1Wght500Grad0Opsz48'
import IconShieldFill1Wght600Grad0Opsz48 from '../components/ShieldFill1Wght600Grad0Opsz48'
import IconShieldFill1Wght700Grad0Opsz48 from '../components/ShieldFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconShield = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconShieldFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconShieldFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconShieldFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconShieldFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconShieldFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconShieldFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconShieldFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconShieldFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconShieldFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconShieldFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconShieldFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconShieldFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconShieldFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconShieldFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
