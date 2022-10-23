import IconFilterNoneFill0Wght100Grad0Opsz48 from '../components/FilterNoneFill0Wght100Grad0Opsz48'
import IconFilterNoneFill0Wght200Grad0Opsz48 from '../components/FilterNoneFill0Wght200Grad0Opsz48'
import IconFilterNoneFill0Wght300Grad0Opsz48 from '../components/FilterNoneFill0Wght300Grad0Opsz48'
import IconFilterNoneFill0Wght400Grad0Opsz48 from '../components/FilterNoneFill0Wght400Grad0Opsz48'
import IconFilterNoneFill0Wght500Grad0Opsz48 from '../components/FilterNoneFill0Wght500Grad0Opsz48'
import IconFilterNoneFill0Wght600Grad0Opsz48 from '../components/FilterNoneFill0Wght600Grad0Opsz48'
import IconFilterNoneFill0Wght700Grad0Opsz48 from '../components/FilterNoneFill0Wght700Grad0Opsz48'
import IconFilterNoneFill1Wght100Grad0Opsz48 from '../components/FilterNoneFill1Wght100Grad0Opsz48'
import IconFilterNoneFill1Wght200Grad0Opsz48 from '../components/FilterNoneFill1Wght200Grad0Opsz48'
import IconFilterNoneFill1Wght300Grad0Opsz48 from '../components/FilterNoneFill1Wght300Grad0Opsz48'
import IconFilterNoneFill1Wght400Grad0Opsz48 from '../components/FilterNoneFill1Wght400Grad0Opsz48'
import IconFilterNoneFill1Wght500Grad0Opsz48 from '../components/FilterNoneFill1Wght500Grad0Opsz48'
import IconFilterNoneFill1Wght600Grad0Opsz48 from '../components/FilterNoneFill1Wght600Grad0Opsz48'
import IconFilterNoneFill1Wght700Grad0Opsz48 from '../components/FilterNoneFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFilterNone = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFilterNoneFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFilterNoneFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFilterNoneFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFilterNoneFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFilterNoneFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFilterNoneFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFilterNoneFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFilterNoneFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFilterNoneFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFilterNoneFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFilterNoneFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFilterNoneFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFilterNoneFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFilterNoneFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
