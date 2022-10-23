import IconBadgeFill0Wght100Grad0Opsz48 from '../components/BadgeFill0Wght100Grad0Opsz48'
import IconBadgeFill0Wght200Grad0Opsz48 from '../components/BadgeFill0Wght200Grad0Opsz48'
import IconBadgeFill0Wght300Grad0Opsz48 from '../components/BadgeFill0Wght300Grad0Opsz48'
import IconBadgeFill0Wght400Grad0Opsz48 from '../components/BadgeFill0Wght400Grad0Opsz48'
import IconBadgeFill0Wght500Grad0Opsz48 from '../components/BadgeFill0Wght500Grad0Opsz48'
import IconBadgeFill0Wght600Grad0Opsz48 from '../components/BadgeFill0Wght600Grad0Opsz48'
import IconBadgeFill0Wght700Grad0Opsz48 from '../components/BadgeFill0Wght700Grad0Opsz48'
import IconBadgeFill1Wght100Grad0Opsz48 from '../components/BadgeFill1Wght100Grad0Opsz48'
import IconBadgeFill1Wght200Grad0Opsz48 from '../components/BadgeFill1Wght200Grad0Opsz48'
import IconBadgeFill1Wght300Grad0Opsz48 from '../components/BadgeFill1Wght300Grad0Opsz48'
import IconBadgeFill1Wght400Grad0Opsz48 from '../components/BadgeFill1Wght400Grad0Opsz48'
import IconBadgeFill1Wght500Grad0Opsz48 from '../components/BadgeFill1Wght500Grad0Opsz48'
import IconBadgeFill1Wght600Grad0Opsz48 from '../components/BadgeFill1Wght600Grad0Opsz48'
import IconBadgeFill1Wght700Grad0Opsz48 from '../components/BadgeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBadge = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBadgeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBadgeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBadgeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBadgeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBadgeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBadgeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBadgeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBadgeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBadgeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBadgeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBadgeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBadgeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBadgeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBadgeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
