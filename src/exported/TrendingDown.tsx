import IconTrendingDownFill0Wght100Grad0Opsz48 from '../components/TrendingDownFill0Wght100Grad0Opsz48'
import IconTrendingDownFill0Wght200Grad0Opsz48 from '../components/TrendingDownFill0Wght200Grad0Opsz48'
import IconTrendingDownFill0Wght300Grad0Opsz48 from '../components/TrendingDownFill0Wght300Grad0Opsz48'
import IconTrendingDownFill0Wght400Grad0Opsz48 from '../components/TrendingDownFill0Wght400Grad0Opsz48'
import IconTrendingDownFill0Wght500Grad0Opsz48 from '../components/TrendingDownFill0Wght500Grad0Opsz48'
import IconTrendingDownFill0Wght600Grad0Opsz48 from '../components/TrendingDownFill0Wght600Grad0Opsz48'
import IconTrendingDownFill0Wght700Grad0Opsz48 from '../components/TrendingDownFill0Wght700Grad0Opsz48'
import IconTrendingDownFill1Wght100Grad0Opsz48 from '../components/TrendingDownFill1Wght100Grad0Opsz48'
import IconTrendingDownFill1Wght200Grad0Opsz48 from '../components/TrendingDownFill1Wght200Grad0Opsz48'
import IconTrendingDownFill1Wght300Grad0Opsz48 from '../components/TrendingDownFill1Wght300Grad0Opsz48'
import IconTrendingDownFill1Wght400Grad0Opsz48 from '../components/TrendingDownFill1Wght400Grad0Opsz48'
import IconTrendingDownFill1Wght500Grad0Opsz48 from '../components/TrendingDownFill1Wght500Grad0Opsz48'
import IconTrendingDownFill1Wght600Grad0Opsz48 from '../components/TrendingDownFill1Wght600Grad0Opsz48'
import IconTrendingDownFill1Wght700Grad0Opsz48 from '../components/TrendingDownFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTrendingDown = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTrendingDownFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTrendingDownFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTrendingDownFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTrendingDownFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTrendingDownFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTrendingDownFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTrendingDownFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTrendingDownFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTrendingDownFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTrendingDownFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTrendingDownFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTrendingDownFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTrendingDownFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTrendingDownFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
