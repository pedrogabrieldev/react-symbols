import IconBarChartFill0Wght100Grad0Opsz48 from '../components/BarChartFill0Wght100Grad0Opsz48'
import IconBarChartFill0Wght200Grad0Opsz48 from '../components/BarChartFill0Wght200Grad0Opsz48'
import IconBarChartFill0Wght300Grad0Opsz48 from '../components/BarChartFill0Wght300Grad0Opsz48'
import IconBarChartFill0Wght400Grad0Opsz48 from '../components/BarChartFill0Wght400Grad0Opsz48'
import IconBarChartFill0Wght500Grad0Opsz48 from '../components/BarChartFill0Wght500Grad0Opsz48'
import IconBarChartFill0Wght600Grad0Opsz48 from '../components/BarChartFill0Wght600Grad0Opsz48'
import IconBarChartFill0Wght700Grad0Opsz48 from '../components/BarChartFill0Wght700Grad0Opsz48'
import IconBarChartFill1Wght100Grad0Opsz48 from '../components/BarChartFill1Wght100Grad0Opsz48'
import IconBarChartFill1Wght200Grad0Opsz48 from '../components/BarChartFill1Wght200Grad0Opsz48'
import IconBarChartFill1Wght300Grad0Opsz48 from '../components/BarChartFill1Wght300Grad0Opsz48'
import IconBarChartFill1Wght400Grad0Opsz48 from '../components/BarChartFill1Wght400Grad0Opsz48'
import IconBarChartFill1Wght500Grad0Opsz48 from '../components/BarChartFill1Wght500Grad0Opsz48'
import IconBarChartFill1Wght600Grad0Opsz48 from '../components/BarChartFill1Wght600Grad0Opsz48'
import IconBarChartFill1Wght700Grad0Opsz48 from '../components/BarChartFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBarChart = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBarChartFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBarChartFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBarChartFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBarChartFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBarChartFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBarChartFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBarChartFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBarChartFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBarChartFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBarChartFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBarChartFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBarChartFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBarChartFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBarChartFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
