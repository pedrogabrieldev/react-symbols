import IconVerifiedUserFill0Wght100Grad0Opsz48 from '../components/VerifiedUserFill0Wght100Grad0Opsz48'
import IconVerifiedUserFill0Wght200Grad0Opsz48 from '../components/VerifiedUserFill0Wght200Grad0Opsz48'
import IconVerifiedUserFill0Wght300Grad0Opsz48 from '../components/VerifiedUserFill0Wght300Grad0Opsz48'
import IconVerifiedUserFill0Wght400Grad0Opsz48 from '../components/VerifiedUserFill0Wght400Grad0Opsz48'
import IconVerifiedUserFill0Wght500Grad0Opsz48 from '../components/VerifiedUserFill0Wght500Grad0Opsz48'
import IconVerifiedUserFill0Wght600Grad0Opsz48 from '../components/VerifiedUserFill0Wght600Grad0Opsz48'
import IconVerifiedUserFill0Wght700Grad0Opsz48 from '../components/VerifiedUserFill0Wght700Grad0Opsz48'
import IconVerifiedUserFill1Wght100Grad0Opsz48 from '../components/VerifiedUserFill1Wght100Grad0Opsz48'
import IconVerifiedUserFill1Wght200Grad0Opsz48 from '../components/VerifiedUserFill1Wght200Grad0Opsz48'
import IconVerifiedUserFill1Wght300Grad0Opsz48 from '../components/VerifiedUserFill1Wght300Grad0Opsz48'
import IconVerifiedUserFill1Wght400Grad0Opsz48 from '../components/VerifiedUserFill1Wght400Grad0Opsz48'
import IconVerifiedUserFill1Wght500Grad0Opsz48 from '../components/VerifiedUserFill1Wght500Grad0Opsz48'
import IconVerifiedUserFill1Wght600Grad0Opsz48 from '../components/VerifiedUserFill1Wght600Grad0Opsz48'
import IconVerifiedUserFill1Wght700Grad0Opsz48 from '../components/VerifiedUserFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVerifiedUser = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVerifiedUserFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVerifiedUserFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVerifiedUserFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVerifiedUserFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVerifiedUserFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVerifiedUserFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVerifiedUserFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVerifiedUserFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVerifiedUserFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVerifiedUserFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVerifiedUserFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVerifiedUserFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVerifiedUserFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVerifiedUserFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
