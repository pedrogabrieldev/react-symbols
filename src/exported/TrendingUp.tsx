import IconTrendingUpFill0Wght100Grad0Opsz48 from '../components/TrendingUpFill0Wght100Grad0Opsz48'
import IconTrendingUpFill0Wght200Grad0Opsz48 from '../components/TrendingUpFill0Wght200Grad0Opsz48'
import IconTrendingUpFill0Wght300Grad0Opsz48 from '../components/TrendingUpFill0Wght300Grad0Opsz48'
import IconTrendingUpFill0Wght400Grad0Opsz48 from '../components/TrendingUpFill0Wght400Grad0Opsz48'
import IconTrendingUpFill0Wght500Grad0Opsz48 from '../components/TrendingUpFill0Wght500Grad0Opsz48'
import IconTrendingUpFill0Wght600Grad0Opsz48 from '../components/TrendingUpFill0Wght600Grad0Opsz48'
import IconTrendingUpFill0Wght700Grad0Opsz48 from '../components/TrendingUpFill0Wght700Grad0Opsz48'
import IconTrendingUpFill1Wght100Grad0Opsz48 from '../components/TrendingUpFill1Wght100Grad0Opsz48'
import IconTrendingUpFill1Wght200Grad0Opsz48 from '../components/TrendingUpFill1Wght200Grad0Opsz48'
import IconTrendingUpFill1Wght300Grad0Opsz48 from '../components/TrendingUpFill1Wght300Grad0Opsz48'
import IconTrendingUpFill1Wght400Grad0Opsz48 from '../components/TrendingUpFill1Wght400Grad0Opsz48'
import IconTrendingUpFill1Wght500Grad0Opsz48 from '../components/TrendingUpFill1Wght500Grad0Opsz48'
import IconTrendingUpFill1Wght600Grad0Opsz48 from '../components/TrendingUpFill1Wght600Grad0Opsz48'
import IconTrendingUpFill1Wght700Grad0Opsz48 from '../components/TrendingUpFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTrendingUp = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTrendingUpFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTrendingUpFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTrendingUpFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTrendingUpFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTrendingUpFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTrendingUpFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTrendingUpFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTrendingUpFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTrendingUpFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTrendingUpFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTrendingUpFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTrendingUpFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTrendingUpFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTrendingUpFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
