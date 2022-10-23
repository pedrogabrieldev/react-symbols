import IconLooksTwoFill0Wght100Grad0Opsz48 from '../components/LooksTwoFill0Wght100Grad0Opsz48'
import IconLooksTwoFill0Wght200Grad0Opsz48 from '../components/LooksTwoFill0Wght200Grad0Opsz48'
import IconLooksTwoFill0Wght300Grad0Opsz48 from '../components/LooksTwoFill0Wght300Grad0Opsz48'
import IconLooksTwoFill0Wght400Grad0Opsz48 from '../components/LooksTwoFill0Wght400Grad0Opsz48'
import IconLooksTwoFill0Wght500Grad0Opsz48 from '../components/LooksTwoFill0Wght500Grad0Opsz48'
import IconLooksTwoFill0Wght600Grad0Opsz48 from '../components/LooksTwoFill0Wght600Grad0Opsz48'
import IconLooksTwoFill0Wght700Grad0Opsz48 from '../components/LooksTwoFill0Wght700Grad0Opsz48'
import IconLooksTwoFill1Wght100Grad0Opsz48 from '../components/LooksTwoFill1Wght100Grad0Opsz48'
import IconLooksTwoFill1Wght200Grad0Opsz48 from '../components/LooksTwoFill1Wght200Grad0Opsz48'
import IconLooksTwoFill1Wght300Grad0Opsz48 from '../components/LooksTwoFill1Wght300Grad0Opsz48'
import IconLooksTwoFill1Wght400Grad0Opsz48 from '../components/LooksTwoFill1Wght400Grad0Opsz48'
import IconLooksTwoFill1Wght500Grad0Opsz48 from '../components/LooksTwoFill1Wght500Grad0Opsz48'
import IconLooksTwoFill1Wght600Grad0Opsz48 from '../components/LooksTwoFill1Wght600Grad0Opsz48'
import IconLooksTwoFill1Wght700Grad0Opsz48 from '../components/LooksTwoFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLooksTwo = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLooksTwoFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLooksTwoFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLooksTwoFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLooksTwoFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLooksTwoFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLooksTwoFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLooksTwoFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLooksTwoFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLooksTwoFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLooksTwoFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLooksTwoFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLooksTwoFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLooksTwoFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLooksTwoFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
