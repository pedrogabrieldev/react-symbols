import IconLoginFill0Wght100Grad0Opsz48 from '../components/LoginFill0Wght100Grad0Opsz48'
import IconLoginFill0Wght200Grad0Opsz48 from '../components/LoginFill0Wght200Grad0Opsz48'
import IconLoginFill0Wght300Grad0Opsz48 from '../components/LoginFill0Wght300Grad0Opsz48'
import IconLoginFill0Wght400Grad0Opsz48 from '../components/LoginFill0Wght400Grad0Opsz48'
import IconLoginFill0Wght500Grad0Opsz48 from '../components/LoginFill0Wght500Grad0Opsz48'
import IconLoginFill0Wght600Grad0Opsz48 from '../components/LoginFill0Wght600Grad0Opsz48'
import IconLoginFill0Wght700Grad0Opsz48 from '../components/LoginFill0Wght700Grad0Opsz48'
import IconLoginFill1Wght100Grad0Opsz48 from '../components/LoginFill1Wght100Grad0Opsz48'
import IconLoginFill1Wght200Grad0Opsz48 from '../components/LoginFill1Wght200Grad0Opsz48'
import IconLoginFill1Wght300Grad0Opsz48 from '../components/LoginFill1Wght300Grad0Opsz48'
import IconLoginFill1Wght400Grad0Opsz48 from '../components/LoginFill1Wght400Grad0Opsz48'
import IconLoginFill1Wght500Grad0Opsz48 from '../components/LoginFill1Wght500Grad0Opsz48'
import IconLoginFill1Wght600Grad0Opsz48 from '../components/LoginFill1Wght600Grad0Opsz48'
import IconLoginFill1Wght700Grad0Opsz48 from '../components/LoginFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLogin = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLoginFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLoginFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLoginFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLoginFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLoginFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLoginFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLoginFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLoginFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLoginFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLoginFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLoginFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLoginFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLoginFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLoginFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
