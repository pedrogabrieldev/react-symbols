import IconCarpenterFill0Wght100Grad0Opsz48 from '../components/CarpenterFill0Wght100Grad0Opsz48'
import IconCarpenterFill0Wght200Grad0Opsz48 from '../components/CarpenterFill0Wght200Grad0Opsz48'
import IconCarpenterFill0Wght300Grad0Opsz48 from '../components/CarpenterFill0Wght300Grad0Opsz48'
import IconCarpenterFill0Wght400Grad0Opsz48 from '../components/CarpenterFill0Wght400Grad0Opsz48'
import IconCarpenterFill0Wght500Grad0Opsz48 from '../components/CarpenterFill0Wght500Grad0Opsz48'
import IconCarpenterFill0Wght600Grad0Opsz48 from '../components/CarpenterFill0Wght600Grad0Opsz48'
import IconCarpenterFill0Wght700Grad0Opsz48 from '../components/CarpenterFill0Wght700Grad0Opsz48'
import IconCarpenterFill1Wght100Grad0Opsz48 from '../components/CarpenterFill1Wght100Grad0Opsz48'
import IconCarpenterFill1Wght200Grad0Opsz48 from '../components/CarpenterFill1Wght200Grad0Opsz48'
import IconCarpenterFill1Wght300Grad0Opsz48 from '../components/CarpenterFill1Wght300Grad0Opsz48'
import IconCarpenterFill1Wght400Grad0Opsz48 from '../components/CarpenterFill1Wght400Grad0Opsz48'
import IconCarpenterFill1Wght500Grad0Opsz48 from '../components/CarpenterFill1Wght500Grad0Opsz48'
import IconCarpenterFill1Wght600Grad0Opsz48 from '../components/CarpenterFill1Wght600Grad0Opsz48'
import IconCarpenterFill1Wght700Grad0Opsz48 from '../components/CarpenterFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCarpenter = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCarpenterFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCarpenterFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCarpenterFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCarpenterFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCarpenterFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCarpenterFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCarpenterFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCarpenterFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCarpenterFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCarpenterFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCarpenterFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCarpenterFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCarpenterFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCarpenterFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
