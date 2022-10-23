import IconCastForEducationFill0Wght100Grad0Opsz48 from '../components/CastForEducationFill0Wght100Grad0Opsz48'
import IconCastForEducationFill0Wght200Grad0Opsz48 from '../components/CastForEducationFill0Wght200Grad0Opsz48'
import IconCastForEducationFill0Wght300Grad0Opsz48 from '../components/CastForEducationFill0Wght300Grad0Opsz48'
import IconCastForEducationFill0Wght400Grad0Opsz48 from '../components/CastForEducationFill0Wght400Grad0Opsz48'
import IconCastForEducationFill0Wght500Grad0Opsz48 from '../components/CastForEducationFill0Wght500Grad0Opsz48'
import IconCastForEducationFill0Wght600Grad0Opsz48 from '../components/CastForEducationFill0Wght600Grad0Opsz48'
import IconCastForEducationFill0Wght700Grad0Opsz48 from '../components/CastForEducationFill0Wght700Grad0Opsz48'
import IconCastForEducationFill1Wght100Grad0Opsz48 from '../components/CastForEducationFill1Wght100Grad0Opsz48'
import IconCastForEducationFill1Wght200Grad0Opsz48 from '../components/CastForEducationFill1Wght200Grad0Opsz48'
import IconCastForEducationFill1Wght300Grad0Opsz48 from '../components/CastForEducationFill1Wght300Grad0Opsz48'
import IconCastForEducationFill1Wght400Grad0Opsz48 from '../components/CastForEducationFill1Wght400Grad0Opsz48'
import IconCastForEducationFill1Wght500Grad0Opsz48 from '../components/CastForEducationFill1Wght500Grad0Opsz48'
import IconCastForEducationFill1Wght600Grad0Opsz48 from '../components/CastForEducationFill1Wght600Grad0Opsz48'
import IconCastForEducationFill1Wght700Grad0Opsz48 from '../components/CastForEducationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCastForEducation = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCastForEducationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCastForEducationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCastForEducationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCastForEducationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCastForEducationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCastForEducationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCastForEducationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCastForEducationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCastForEducationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCastForEducationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCastForEducationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCastForEducationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCastForEducationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCastForEducationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
