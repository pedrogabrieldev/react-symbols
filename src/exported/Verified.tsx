import IconVerifiedFill0Wght100Grad0Opsz48 from '../components/VerifiedFill0Wght100Grad0Opsz48'
import IconVerifiedFill0Wght200Grad0Opsz48 from '../components/VerifiedFill0Wght200Grad0Opsz48'
import IconVerifiedFill0Wght300Grad0Opsz48 from '../components/VerifiedFill0Wght300Grad0Opsz48'
import IconVerifiedFill0Wght400Grad0Opsz48 from '../components/VerifiedFill0Wght400Grad0Opsz48'
import IconVerifiedFill0Wght500Grad0Opsz48 from '../components/VerifiedFill0Wght500Grad0Opsz48'
import IconVerifiedFill0Wght600Grad0Opsz48 from '../components/VerifiedFill0Wght600Grad0Opsz48'
import IconVerifiedFill0Wght700Grad0Opsz48 from '../components/VerifiedFill0Wght700Grad0Opsz48'
import IconVerifiedFill1Wght100Grad0Opsz48 from '../components/VerifiedFill1Wght100Grad0Opsz48'
import IconVerifiedFill1Wght200Grad0Opsz48 from '../components/VerifiedFill1Wght200Grad0Opsz48'
import IconVerifiedFill1Wght300Grad0Opsz48 from '../components/VerifiedFill1Wght300Grad0Opsz48'
import IconVerifiedFill1Wght400Grad0Opsz48 from '../components/VerifiedFill1Wght400Grad0Opsz48'
import IconVerifiedFill1Wght500Grad0Opsz48 from '../components/VerifiedFill1Wght500Grad0Opsz48'
import IconVerifiedFill1Wght600Grad0Opsz48 from '../components/VerifiedFill1Wght600Grad0Opsz48'
import IconVerifiedFill1Wght700Grad0Opsz48 from '../components/VerifiedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVerified = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVerifiedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVerifiedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVerifiedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVerifiedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVerifiedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVerifiedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVerifiedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVerifiedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVerifiedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVerifiedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVerifiedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVerifiedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVerifiedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVerifiedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
