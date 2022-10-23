import IconPublicFill0Wght100Grad0Opsz48 from '../components/PublicFill0Wght100Grad0Opsz48'
import IconPublicFill0Wght200Grad0Opsz48 from '../components/PublicFill0Wght200Grad0Opsz48'
import IconPublicFill0Wght300Grad0Opsz48 from '../components/PublicFill0Wght300Grad0Opsz48'
import IconPublicFill0Wght400Grad0Opsz48 from '../components/PublicFill0Wght400Grad0Opsz48'
import IconPublicFill0Wght500Grad0Opsz48 from '../components/PublicFill0Wght500Grad0Opsz48'
import IconPublicFill0Wght600Grad0Opsz48 from '../components/PublicFill0Wght600Grad0Opsz48'
import IconPublicFill0Wght700Grad0Opsz48 from '../components/PublicFill0Wght700Grad0Opsz48'
import IconPublicFill1Wght100Grad0Opsz48 from '../components/PublicFill1Wght100Grad0Opsz48'
import IconPublicFill1Wght200Grad0Opsz48 from '../components/PublicFill1Wght200Grad0Opsz48'
import IconPublicFill1Wght300Grad0Opsz48 from '../components/PublicFill1Wght300Grad0Opsz48'
import IconPublicFill1Wght400Grad0Opsz48 from '../components/PublicFill1Wght400Grad0Opsz48'
import IconPublicFill1Wght500Grad0Opsz48 from '../components/PublicFill1Wght500Grad0Opsz48'
import IconPublicFill1Wght600Grad0Opsz48 from '../components/PublicFill1Wght600Grad0Opsz48'
import IconPublicFill1Wght700Grad0Opsz48 from '../components/PublicFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPublic = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPublicFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPublicFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPublicFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPublicFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPublicFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPublicFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPublicFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPublicFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPublicFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPublicFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPublicFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPublicFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPublicFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPublicFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
