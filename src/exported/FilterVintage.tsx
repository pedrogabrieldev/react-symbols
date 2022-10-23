import IconFilterVintageFill0Wght100Grad0Opsz48 from '../components/FilterVintageFill0Wght100Grad0Opsz48'
import IconFilterVintageFill0Wght200Grad0Opsz48 from '../components/FilterVintageFill0Wght200Grad0Opsz48'
import IconFilterVintageFill0Wght300Grad0Opsz48 from '../components/FilterVintageFill0Wght300Grad0Opsz48'
import IconFilterVintageFill0Wght400Grad0Opsz48 from '../components/FilterVintageFill0Wght400Grad0Opsz48'
import IconFilterVintageFill0Wght500Grad0Opsz48 from '../components/FilterVintageFill0Wght500Grad0Opsz48'
import IconFilterVintageFill0Wght600Grad0Opsz48 from '../components/FilterVintageFill0Wght600Grad0Opsz48'
import IconFilterVintageFill0Wght700Grad0Opsz48 from '../components/FilterVintageFill0Wght700Grad0Opsz48'
import IconFilterVintageFill1Wght100Grad0Opsz48 from '../components/FilterVintageFill1Wght100Grad0Opsz48'
import IconFilterVintageFill1Wght200Grad0Opsz48 from '../components/FilterVintageFill1Wght200Grad0Opsz48'
import IconFilterVintageFill1Wght300Grad0Opsz48 from '../components/FilterVintageFill1Wght300Grad0Opsz48'
import IconFilterVintageFill1Wght400Grad0Opsz48 from '../components/FilterVintageFill1Wght400Grad0Opsz48'
import IconFilterVintageFill1Wght500Grad0Opsz48 from '../components/FilterVintageFill1Wght500Grad0Opsz48'
import IconFilterVintageFill1Wght600Grad0Opsz48 from '../components/FilterVintageFill1Wght600Grad0Opsz48'
import IconFilterVintageFill1Wght700Grad0Opsz48 from '../components/FilterVintageFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFilterVintage = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFilterVintageFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFilterVintageFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFilterVintageFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFilterVintageFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFilterVintageFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFilterVintageFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFilterVintageFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFilterVintageFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFilterVintageFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFilterVintageFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFilterVintageFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFilterVintageFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFilterVintageFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFilterVintageFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
