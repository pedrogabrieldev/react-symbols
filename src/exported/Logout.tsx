import IconLogoutFill0Wght100Grad0Opsz48 from '../components/LogoutFill0Wght100Grad0Opsz48'
import IconLogoutFill0Wght200Grad0Opsz48 from '../components/LogoutFill0Wght200Grad0Opsz48'
import IconLogoutFill0Wght300Grad0Opsz48 from '../components/LogoutFill0Wght300Grad0Opsz48'
import IconLogoutFill0Wght400Grad0Opsz48 from '../components/LogoutFill0Wght400Grad0Opsz48'
import IconLogoutFill0Wght500Grad0Opsz48 from '../components/LogoutFill0Wght500Grad0Opsz48'
import IconLogoutFill0Wght600Grad0Opsz48 from '../components/LogoutFill0Wght600Grad0Opsz48'
import IconLogoutFill0Wght700Grad0Opsz48 from '../components/LogoutFill0Wght700Grad0Opsz48'
import IconLogoutFill1Wght100Grad0Opsz48 from '../components/LogoutFill1Wght100Grad0Opsz48'
import IconLogoutFill1Wght200Grad0Opsz48 from '../components/LogoutFill1Wght200Grad0Opsz48'
import IconLogoutFill1Wght300Grad0Opsz48 from '../components/LogoutFill1Wght300Grad0Opsz48'
import IconLogoutFill1Wght400Grad0Opsz48 from '../components/LogoutFill1Wght400Grad0Opsz48'
import IconLogoutFill1Wght500Grad0Opsz48 from '../components/LogoutFill1Wght500Grad0Opsz48'
import IconLogoutFill1Wght600Grad0Opsz48 from '../components/LogoutFill1Wght600Grad0Opsz48'
import IconLogoutFill1Wght700Grad0Opsz48 from '../components/LogoutFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLogout = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLogoutFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLogoutFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLogoutFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLogoutFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLogoutFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLogoutFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLogoutFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLogoutFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLogoutFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLogoutFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLogoutFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLogoutFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLogoutFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLogoutFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
