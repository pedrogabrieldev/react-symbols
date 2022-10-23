import IconFilterDramaFill0Wght100Grad0Opsz48 from '../components/FilterDramaFill0Wght100Grad0Opsz48'
import IconFilterDramaFill0Wght200Grad0Opsz48 from '../components/FilterDramaFill0Wght200Grad0Opsz48'
import IconFilterDramaFill0Wght300Grad0Opsz48 from '../components/FilterDramaFill0Wght300Grad0Opsz48'
import IconFilterDramaFill0Wght400Grad0Opsz48 from '../components/FilterDramaFill0Wght400Grad0Opsz48'
import IconFilterDramaFill0Wght500Grad0Opsz48 from '../components/FilterDramaFill0Wght500Grad0Opsz48'
import IconFilterDramaFill0Wght600Grad0Opsz48 from '../components/FilterDramaFill0Wght600Grad0Opsz48'
import IconFilterDramaFill0Wght700Grad0Opsz48 from '../components/FilterDramaFill0Wght700Grad0Opsz48'
import IconFilterDramaFill1Wght100Grad0Opsz48 from '../components/FilterDramaFill1Wght100Grad0Opsz48'
import IconFilterDramaFill1Wght200Grad0Opsz48 from '../components/FilterDramaFill1Wght200Grad0Opsz48'
import IconFilterDramaFill1Wght300Grad0Opsz48 from '../components/FilterDramaFill1Wght300Grad0Opsz48'
import IconFilterDramaFill1Wght400Grad0Opsz48 from '../components/FilterDramaFill1Wght400Grad0Opsz48'
import IconFilterDramaFill1Wght500Grad0Opsz48 from '../components/FilterDramaFill1Wght500Grad0Opsz48'
import IconFilterDramaFill1Wght600Grad0Opsz48 from '../components/FilterDramaFill1Wght600Grad0Opsz48'
import IconFilterDramaFill1Wght700Grad0Opsz48 from '../components/FilterDramaFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFilterDrama = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFilterDramaFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFilterDramaFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFilterDramaFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFilterDramaFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFilterDramaFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFilterDramaFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFilterDramaFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFilterDramaFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFilterDramaFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFilterDramaFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFilterDramaFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFilterDramaFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFilterDramaFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFilterDramaFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
