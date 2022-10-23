import IconShieldWithHouseFill0Wght100Grad0Opsz48 from '../components/ShieldWithHouseFill0Wght100Grad0Opsz48'
import IconShieldWithHouseFill0Wght200Grad0Opsz48 from '../components/ShieldWithHouseFill0Wght200Grad0Opsz48'
import IconShieldWithHouseFill0Wght300Grad0Opsz48 from '../components/ShieldWithHouseFill0Wght300Grad0Opsz48'
import IconShieldWithHouseFill0Wght400Grad0Opsz48 from '../components/ShieldWithHouseFill0Wght400Grad0Opsz48'
import IconShieldWithHouseFill0Wght500Grad0Opsz48 from '../components/ShieldWithHouseFill0Wght500Grad0Opsz48'
import IconShieldWithHouseFill0Wght600Grad0Opsz48 from '../components/ShieldWithHouseFill0Wght600Grad0Opsz48'
import IconShieldWithHouseFill0Wght700Grad0Opsz48 from '../components/ShieldWithHouseFill0Wght700Grad0Opsz48'
import IconShieldWithHouseFill1Wght100Grad0Opsz48 from '../components/ShieldWithHouseFill1Wght100Grad0Opsz48'
import IconShieldWithHouseFill1Wght200Grad0Opsz48 from '../components/ShieldWithHouseFill1Wght200Grad0Opsz48'
import IconShieldWithHouseFill1Wght300Grad0Opsz48 from '../components/ShieldWithHouseFill1Wght300Grad0Opsz48'
import IconShieldWithHouseFill1Wght400Grad0Opsz48 from '../components/ShieldWithHouseFill1Wght400Grad0Opsz48'
import IconShieldWithHouseFill1Wght500Grad0Opsz48 from '../components/ShieldWithHouseFill1Wght500Grad0Opsz48'
import IconShieldWithHouseFill1Wght600Grad0Opsz48 from '../components/ShieldWithHouseFill1Wght600Grad0Opsz48'
import IconShieldWithHouseFill1Wght700Grad0Opsz48 from '../components/ShieldWithHouseFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconShieldWithHouse = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconShieldWithHouseFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconShieldWithHouseFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconShieldWithHouseFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconShieldWithHouseFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconShieldWithHouseFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconShieldWithHouseFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconShieldWithHouseFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconShieldWithHouseFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconShieldWithHouseFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconShieldWithHouseFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconShieldWithHouseFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconShieldWithHouseFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconShieldWithHouseFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconShieldWithHouseFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
