import IconFilterBAndWFill0Wght100Grad0Opsz48 from '../components/FilterBAndWFill0Wght100Grad0Opsz48'
import IconFilterBAndWFill0Wght200Grad0Opsz48 from '../components/FilterBAndWFill0Wght200Grad0Opsz48'
import IconFilterBAndWFill0Wght300Grad0Opsz48 from '../components/FilterBAndWFill0Wght300Grad0Opsz48'
import IconFilterBAndWFill0Wght400Grad0Opsz48 from '../components/FilterBAndWFill0Wght400Grad0Opsz48'
import IconFilterBAndWFill0Wght500Grad0Opsz48 from '../components/FilterBAndWFill0Wght500Grad0Opsz48'
import IconFilterBAndWFill0Wght600Grad0Opsz48 from '../components/FilterBAndWFill0Wght600Grad0Opsz48'
import IconFilterBAndWFill0Wght700Grad0Opsz48 from '../components/FilterBAndWFill0Wght700Grad0Opsz48'
import IconFilterBAndWFill1Wght100Grad0Opsz48 from '../components/FilterBAndWFill1Wght100Grad0Opsz48'
import IconFilterBAndWFill1Wght200Grad0Opsz48 from '../components/FilterBAndWFill1Wght200Grad0Opsz48'
import IconFilterBAndWFill1Wght300Grad0Opsz48 from '../components/FilterBAndWFill1Wght300Grad0Opsz48'
import IconFilterBAndWFill1Wght400Grad0Opsz48 from '../components/FilterBAndWFill1Wght400Grad0Opsz48'
import IconFilterBAndWFill1Wght500Grad0Opsz48 from '../components/FilterBAndWFill1Wght500Grad0Opsz48'
import IconFilterBAndWFill1Wght600Grad0Opsz48 from '../components/FilterBAndWFill1Wght600Grad0Opsz48'
import IconFilterBAndWFill1Wght700Grad0Opsz48 from '../components/FilterBAndWFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFilterBAndW = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFilterBAndWFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFilterBAndWFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFilterBAndWFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFilterBAndWFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFilterBAndWFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFilterBAndWFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFilterBAndWFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFilterBAndWFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFilterBAndWFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFilterBAndWFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFilterBAndWFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFilterBAndWFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFilterBAndWFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFilterBAndWFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
