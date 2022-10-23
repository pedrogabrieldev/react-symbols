import IconShieldWithHeartFill0Wght100Grad0Opsz48 from '../components/ShieldWithHeartFill0Wght100Grad0Opsz48'
import IconShieldWithHeartFill0Wght200Grad0Opsz48 from '../components/ShieldWithHeartFill0Wght200Grad0Opsz48'
import IconShieldWithHeartFill0Wght300Grad0Opsz48 from '../components/ShieldWithHeartFill0Wght300Grad0Opsz48'
import IconShieldWithHeartFill0Wght400Grad0Opsz48 from '../components/ShieldWithHeartFill0Wght400Grad0Opsz48'
import IconShieldWithHeartFill0Wght500Grad0Opsz48 from '../components/ShieldWithHeartFill0Wght500Grad0Opsz48'
import IconShieldWithHeartFill0Wght600Grad0Opsz48 from '../components/ShieldWithHeartFill0Wght600Grad0Opsz48'
import IconShieldWithHeartFill0Wght700Grad0Opsz48 from '../components/ShieldWithHeartFill0Wght700Grad0Opsz48'
import IconShieldWithHeartFill1Wght100Grad0Opsz48 from '../components/ShieldWithHeartFill1Wght100Grad0Opsz48'
import IconShieldWithHeartFill1Wght200Grad0Opsz48 from '../components/ShieldWithHeartFill1Wght200Grad0Opsz48'
import IconShieldWithHeartFill1Wght300Grad0Opsz48 from '../components/ShieldWithHeartFill1Wght300Grad0Opsz48'
import IconShieldWithHeartFill1Wght400Grad0Opsz48 from '../components/ShieldWithHeartFill1Wght400Grad0Opsz48'
import IconShieldWithHeartFill1Wght500Grad0Opsz48 from '../components/ShieldWithHeartFill1Wght500Grad0Opsz48'
import IconShieldWithHeartFill1Wght600Grad0Opsz48 from '../components/ShieldWithHeartFill1Wght600Grad0Opsz48'
import IconShieldWithHeartFill1Wght700Grad0Opsz48 from '../components/ShieldWithHeartFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconShieldWithHeart = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconShieldWithHeartFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconShieldWithHeartFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconShieldWithHeartFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconShieldWithHeartFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconShieldWithHeartFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconShieldWithHeartFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconShieldWithHeartFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconShieldWithHeartFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconShieldWithHeartFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconShieldWithHeartFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconShieldWithHeartFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconShieldWithHeartFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconShieldWithHeartFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconShieldWithHeartFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
