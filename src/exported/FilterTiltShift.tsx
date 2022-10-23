import IconFilterTiltShiftFill0Wght100Grad0Opsz48 from '../components/FilterTiltShiftFill0Wght100Grad0Opsz48'
import IconFilterTiltShiftFill0Wght200Grad0Opsz48 from '../components/FilterTiltShiftFill0Wght200Grad0Opsz48'
import IconFilterTiltShiftFill0Wght300Grad0Opsz48 from '../components/FilterTiltShiftFill0Wght300Grad0Opsz48'
import IconFilterTiltShiftFill0Wght400Grad0Opsz48 from '../components/FilterTiltShiftFill0Wght400Grad0Opsz48'
import IconFilterTiltShiftFill0Wght500Grad0Opsz48 from '../components/FilterTiltShiftFill0Wght500Grad0Opsz48'
import IconFilterTiltShiftFill0Wght600Grad0Opsz48 from '../components/FilterTiltShiftFill0Wght600Grad0Opsz48'
import IconFilterTiltShiftFill0Wght700Grad0Opsz48 from '../components/FilterTiltShiftFill0Wght700Grad0Opsz48'
import IconFilterTiltShiftFill1Wght100Grad0Opsz48 from '../components/FilterTiltShiftFill1Wght100Grad0Opsz48'
import IconFilterTiltShiftFill1Wght200Grad0Opsz48 from '../components/FilterTiltShiftFill1Wght200Grad0Opsz48'
import IconFilterTiltShiftFill1Wght300Grad0Opsz48 from '../components/FilterTiltShiftFill1Wght300Grad0Opsz48'
import IconFilterTiltShiftFill1Wght400Grad0Opsz48 from '../components/FilterTiltShiftFill1Wght400Grad0Opsz48'
import IconFilterTiltShiftFill1Wght500Grad0Opsz48 from '../components/FilterTiltShiftFill1Wght500Grad0Opsz48'
import IconFilterTiltShiftFill1Wght600Grad0Opsz48 from '../components/FilterTiltShiftFill1Wght600Grad0Opsz48'
import IconFilterTiltShiftFill1Wght700Grad0Opsz48 from '../components/FilterTiltShiftFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFilterTiltShift = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFilterTiltShiftFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFilterTiltShiftFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFilterTiltShiftFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFilterTiltShiftFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFilterTiltShiftFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFilterTiltShiftFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFilterTiltShiftFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFilterTiltShiftFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFilterTiltShiftFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFilterTiltShiftFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFilterTiltShiftFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFilterTiltShiftFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFilterTiltShiftFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFilterTiltShiftFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
