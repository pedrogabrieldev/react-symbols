import IconCastFill0Wght100Grad0Opsz48 from '../components/CastFill0Wght100Grad0Opsz48'
import IconCastFill0Wght200Grad0Opsz48 from '../components/CastFill0Wght200Grad0Opsz48'
import IconCastFill0Wght300Grad0Opsz48 from '../components/CastFill0Wght300Grad0Opsz48'
import IconCastFill0Wght400Grad0Opsz48 from '../components/CastFill0Wght400Grad0Opsz48'
import IconCastFill0Wght500Grad0Opsz48 from '../components/CastFill0Wght500Grad0Opsz48'
import IconCastFill0Wght600Grad0Opsz48 from '../components/CastFill0Wght600Grad0Opsz48'
import IconCastFill0Wght700Grad0Opsz48 from '../components/CastFill0Wght700Grad0Opsz48'
import IconCastFill1Wght100Grad0Opsz48 from '../components/CastFill1Wght100Grad0Opsz48'
import IconCastFill1Wght200Grad0Opsz48 from '../components/CastFill1Wght200Grad0Opsz48'
import IconCastFill1Wght300Grad0Opsz48 from '../components/CastFill1Wght300Grad0Opsz48'
import IconCastFill1Wght400Grad0Opsz48 from '../components/CastFill1Wght400Grad0Opsz48'
import IconCastFill1Wght500Grad0Opsz48 from '../components/CastFill1Wght500Grad0Opsz48'
import IconCastFill1Wght600Grad0Opsz48 from '../components/CastFill1Wght600Grad0Opsz48'
import IconCastFill1Wght700Grad0Opsz48 from '../components/CastFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCast = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCastFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCastFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCastFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCastFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCastFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCastFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCastFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCastFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCastFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCastFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCastFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCastFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCastFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCastFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
