import IconPasswordFill0Wght100Grad0Opsz48 from '../components/PasswordFill0Wght100Grad0Opsz48'
import IconPasswordFill0Wght200Grad0Opsz48 from '../components/PasswordFill0Wght200Grad0Opsz48'
import IconPasswordFill0Wght300Grad0Opsz48 from '../components/PasswordFill0Wght300Grad0Opsz48'
import IconPasswordFill0Wght400Grad0Opsz48 from '../components/PasswordFill0Wght400Grad0Opsz48'
import IconPasswordFill0Wght500Grad0Opsz48 from '../components/PasswordFill0Wght500Grad0Opsz48'
import IconPasswordFill0Wght600Grad0Opsz48 from '../components/PasswordFill0Wght600Grad0Opsz48'
import IconPasswordFill0Wght700Grad0Opsz48 from '../components/PasswordFill0Wght700Grad0Opsz48'
import IconPasswordFill1Wght100Grad0Opsz48 from '../components/PasswordFill1Wght100Grad0Opsz48'
import IconPasswordFill1Wght200Grad0Opsz48 from '../components/PasswordFill1Wght200Grad0Opsz48'
import IconPasswordFill1Wght300Grad0Opsz48 from '../components/PasswordFill1Wght300Grad0Opsz48'
import IconPasswordFill1Wght400Grad0Opsz48 from '../components/PasswordFill1Wght400Grad0Opsz48'
import IconPasswordFill1Wght500Grad0Opsz48 from '../components/PasswordFill1Wght500Grad0Opsz48'
import IconPasswordFill1Wght600Grad0Opsz48 from '../components/PasswordFill1Wght600Grad0Opsz48'
import IconPasswordFill1Wght700Grad0Opsz48 from '../components/PasswordFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPassword = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPasswordFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPasswordFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPasswordFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPasswordFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPasswordFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPasswordFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPasswordFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPasswordFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPasswordFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPasswordFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPasswordFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPasswordFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPasswordFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPasswordFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
