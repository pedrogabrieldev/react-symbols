import IconTrendingFlatFill0Wght100Grad0Opsz48 from '../components/TrendingFlatFill0Wght100Grad0Opsz48'
import IconTrendingFlatFill0Wght200Grad0Opsz48 from '../components/TrendingFlatFill0Wght200Grad0Opsz48'
import IconTrendingFlatFill0Wght300Grad0Opsz48 from '../components/TrendingFlatFill0Wght300Grad0Opsz48'
import IconTrendingFlatFill0Wght400Grad0Opsz48 from '../components/TrendingFlatFill0Wght400Grad0Opsz48'
import IconTrendingFlatFill0Wght500Grad0Opsz48 from '../components/TrendingFlatFill0Wght500Grad0Opsz48'
import IconTrendingFlatFill0Wght600Grad0Opsz48 from '../components/TrendingFlatFill0Wght600Grad0Opsz48'
import IconTrendingFlatFill0Wght700Grad0Opsz48 from '../components/TrendingFlatFill0Wght700Grad0Opsz48'
import IconTrendingFlatFill1Wght100Grad0Opsz48 from '../components/TrendingFlatFill1Wght100Grad0Opsz48'
import IconTrendingFlatFill1Wght200Grad0Opsz48 from '../components/TrendingFlatFill1Wght200Grad0Opsz48'
import IconTrendingFlatFill1Wght300Grad0Opsz48 from '../components/TrendingFlatFill1Wght300Grad0Opsz48'
import IconTrendingFlatFill1Wght400Grad0Opsz48 from '../components/TrendingFlatFill1Wght400Grad0Opsz48'
import IconTrendingFlatFill1Wght500Grad0Opsz48 from '../components/TrendingFlatFill1Wght500Grad0Opsz48'
import IconTrendingFlatFill1Wght600Grad0Opsz48 from '../components/TrendingFlatFill1Wght600Grad0Opsz48'
import IconTrendingFlatFill1Wght700Grad0Opsz48 from '../components/TrendingFlatFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTrendingFlat = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTrendingFlatFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTrendingFlatFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTrendingFlatFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTrendingFlatFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTrendingFlatFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTrendingFlatFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTrendingFlatFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTrendingFlatFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTrendingFlatFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTrendingFlatFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTrendingFlatFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTrendingFlatFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTrendingFlatFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTrendingFlatFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
