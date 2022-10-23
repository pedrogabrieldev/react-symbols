import IconShieldMoonFill0Wght100Grad0Opsz48 from '../components/ShieldMoonFill0Wght100Grad0Opsz48'
import IconShieldMoonFill0Wght200Grad0Opsz48 from '../components/ShieldMoonFill0Wght200Grad0Opsz48'
import IconShieldMoonFill0Wght300Grad0Opsz48 from '../components/ShieldMoonFill0Wght300Grad0Opsz48'
import IconShieldMoonFill0Wght400Grad0Opsz48 from '../components/ShieldMoonFill0Wght400Grad0Opsz48'
import IconShieldMoonFill0Wght500Grad0Opsz48 from '../components/ShieldMoonFill0Wght500Grad0Opsz48'
import IconShieldMoonFill0Wght600Grad0Opsz48 from '../components/ShieldMoonFill0Wght600Grad0Opsz48'
import IconShieldMoonFill0Wght700Grad0Opsz48 from '../components/ShieldMoonFill0Wght700Grad0Opsz48'
import IconShieldMoonFill1Wght100Grad0Opsz48 from '../components/ShieldMoonFill1Wght100Grad0Opsz48'
import IconShieldMoonFill1Wght200Grad0Opsz48 from '../components/ShieldMoonFill1Wght200Grad0Opsz48'
import IconShieldMoonFill1Wght300Grad0Opsz48 from '../components/ShieldMoonFill1Wght300Grad0Opsz48'
import IconShieldMoonFill1Wght400Grad0Opsz48 from '../components/ShieldMoonFill1Wght400Grad0Opsz48'
import IconShieldMoonFill1Wght500Grad0Opsz48 from '../components/ShieldMoonFill1Wght500Grad0Opsz48'
import IconShieldMoonFill1Wght600Grad0Opsz48 from '../components/ShieldMoonFill1Wght600Grad0Opsz48'
import IconShieldMoonFill1Wght700Grad0Opsz48 from '../components/ShieldMoonFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconShieldMoon = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconShieldMoonFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconShieldMoonFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconShieldMoonFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconShieldMoonFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconShieldMoonFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconShieldMoonFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconShieldMoonFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconShieldMoonFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconShieldMoonFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconShieldMoonFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconShieldMoonFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconShieldMoonFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconShieldMoonFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconShieldMoonFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
