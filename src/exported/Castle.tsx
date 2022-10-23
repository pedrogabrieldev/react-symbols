import IconCastleFill0Wght100Grad0Opsz48 from '../components/CastleFill0Wght100Grad0Opsz48'
import IconCastleFill0Wght200Grad0Opsz48 from '../components/CastleFill0Wght200Grad0Opsz48'
import IconCastleFill0Wght300Grad0Opsz48 from '../components/CastleFill0Wght300Grad0Opsz48'
import IconCastleFill0Wght400Grad0Opsz48 from '../components/CastleFill0Wght400Grad0Opsz48'
import IconCastleFill0Wght500Grad0Opsz48 from '../components/CastleFill0Wght500Grad0Opsz48'
import IconCastleFill0Wght600Grad0Opsz48 from '../components/CastleFill0Wght600Grad0Opsz48'
import IconCastleFill0Wght700Grad0Opsz48 from '../components/CastleFill0Wght700Grad0Opsz48'
import IconCastleFill1Wght100Grad0Opsz48 from '../components/CastleFill1Wght100Grad0Opsz48'
import IconCastleFill1Wght200Grad0Opsz48 from '../components/CastleFill1Wght200Grad0Opsz48'
import IconCastleFill1Wght300Grad0Opsz48 from '../components/CastleFill1Wght300Grad0Opsz48'
import IconCastleFill1Wght400Grad0Opsz48 from '../components/CastleFill1Wght400Grad0Opsz48'
import IconCastleFill1Wght500Grad0Opsz48 from '../components/CastleFill1Wght500Grad0Opsz48'
import IconCastleFill1Wght600Grad0Opsz48 from '../components/CastleFill1Wght600Grad0Opsz48'
import IconCastleFill1Wght700Grad0Opsz48 from '../components/CastleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCastle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCastleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCastleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCastleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCastleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCastleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCastleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCastleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCastleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCastleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCastleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCastleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCastleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCastleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCastleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
