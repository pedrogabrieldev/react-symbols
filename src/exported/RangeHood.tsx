import IconRangeHoodFill0Wght100Grad0Opsz48 from '../components/RangeHoodFill0Wght100Grad0Opsz48'
import IconRangeHoodFill0Wght200Grad0Opsz48 from '../components/RangeHoodFill0Wght200Grad0Opsz48'
import IconRangeHoodFill0Wght300Grad0Opsz48 from '../components/RangeHoodFill0Wght300Grad0Opsz48'
import IconRangeHoodFill0Wght400Grad0Opsz48 from '../components/RangeHoodFill0Wght400Grad0Opsz48'
import IconRangeHoodFill0Wght500Grad0Opsz48 from '../components/RangeHoodFill0Wght500Grad0Opsz48'
import IconRangeHoodFill0Wght600Grad0Opsz48 from '../components/RangeHoodFill0Wght600Grad0Opsz48'
import IconRangeHoodFill0Wght700Grad0Opsz48 from '../components/RangeHoodFill0Wght700Grad0Opsz48'
import IconRangeHoodFill1Wght100Grad0Opsz48 from '../components/RangeHoodFill1Wght100Grad0Opsz48'
import IconRangeHoodFill1Wght200Grad0Opsz48 from '../components/RangeHoodFill1Wght200Grad0Opsz48'
import IconRangeHoodFill1Wght300Grad0Opsz48 from '../components/RangeHoodFill1Wght300Grad0Opsz48'
import IconRangeHoodFill1Wght400Grad0Opsz48 from '../components/RangeHoodFill1Wght400Grad0Opsz48'
import IconRangeHoodFill1Wght500Grad0Opsz48 from '../components/RangeHoodFill1Wght500Grad0Opsz48'
import IconRangeHoodFill1Wght600Grad0Opsz48 from '../components/RangeHoodFill1Wght600Grad0Opsz48'
import IconRangeHoodFill1Wght700Grad0Opsz48 from '../components/RangeHoodFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRangeHood = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRangeHoodFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRangeHoodFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRangeHoodFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRangeHoodFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRangeHoodFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRangeHoodFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRangeHoodFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRangeHoodFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRangeHoodFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRangeHoodFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRangeHoodFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRangeHoodFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRangeHoodFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRangeHoodFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
