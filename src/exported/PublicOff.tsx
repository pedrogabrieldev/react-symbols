import IconPublicOffFill0Wght100Grad0Opsz48 from '../components/PublicOffFill0Wght100Grad0Opsz48'
import IconPublicOffFill0Wght200Grad0Opsz48 from '../components/PublicOffFill0Wght200Grad0Opsz48'
import IconPublicOffFill0Wght300Grad0Opsz48 from '../components/PublicOffFill0Wght300Grad0Opsz48'
import IconPublicOffFill0Wght400Grad0Opsz48 from '../components/PublicOffFill0Wght400Grad0Opsz48'
import IconPublicOffFill0Wght500Grad0Opsz48 from '../components/PublicOffFill0Wght500Grad0Opsz48'
import IconPublicOffFill0Wght600Grad0Opsz48 from '../components/PublicOffFill0Wght600Grad0Opsz48'
import IconPublicOffFill0Wght700Grad0Opsz48 from '../components/PublicOffFill0Wght700Grad0Opsz48'
import IconPublicOffFill1Wght100Grad0Opsz48 from '../components/PublicOffFill1Wght100Grad0Opsz48'
import IconPublicOffFill1Wght200Grad0Opsz48 from '../components/PublicOffFill1Wght200Grad0Opsz48'
import IconPublicOffFill1Wght300Grad0Opsz48 from '../components/PublicOffFill1Wght300Grad0Opsz48'
import IconPublicOffFill1Wght400Grad0Opsz48 from '../components/PublicOffFill1Wght400Grad0Opsz48'
import IconPublicOffFill1Wght500Grad0Opsz48 from '../components/PublicOffFill1Wght500Grad0Opsz48'
import IconPublicOffFill1Wght600Grad0Opsz48 from '../components/PublicOffFill1Wght600Grad0Opsz48'
import IconPublicOffFill1Wght700Grad0Opsz48 from '../components/PublicOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPublicOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPublicOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPublicOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPublicOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPublicOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPublicOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPublicOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPublicOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPublicOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPublicOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPublicOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPublicOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPublicOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPublicOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPublicOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
