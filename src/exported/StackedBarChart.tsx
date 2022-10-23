import IconStackedBarChartFill0Wght100Grad0Opsz48 from '../components/StackedBarChartFill0Wght100Grad0Opsz48'
import IconStackedBarChartFill0Wght200Grad0Opsz48 from '../components/StackedBarChartFill0Wght200Grad0Opsz48'
import IconStackedBarChartFill0Wght300Grad0Opsz48 from '../components/StackedBarChartFill0Wght300Grad0Opsz48'
import IconStackedBarChartFill0Wght400Grad0Opsz48 from '../components/StackedBarChartFill0Wght400Grad0Opsz48'
import IconStackedBarChartFill0Wght500Grad0Opsz48 from '../components/StackedBarChartFill0Wght500Grad0Opsz48'
import IconStackedBarChartFill0Wght600Grad0Opsz48 from '../components/StackedBarChartFill0Wght600Grad0Opsz48'
import IconStackedBarChartFill0Wght700Grad0Opsz48 from '../components/StackedBarChartFill0Wght700Grad0Opsz48'
import IconStackedBarChartFill1Wght100Grad0Opsz48 from '../components/StackedBarChartFill1Wght100Grad0Opsz48'
import IconStackedBarChartFill1Wght200Grad0Opsz48 from '../components/StackedBarChartFill1Wght200Grad0Opsz48'
import IconStackedBarChartFill1Wght300Grad0Opsz48 from '../components/StackedBarChartFill1Wght300Grad0Opsz48'
import IconStackedBarChartFill1Wght400Grad0Opsz48 from '../components/StackedBarChartFill1Wght400Grad0Opsz48'
import IconStackedBarChartFill1Wght500Grad0Opsz48 from '../components/StackedBarChartFill1Wght500Grad0Opsz48'
import IconStackedBarChartFill1Wght600Grad0Opsz48 from '../components/StackedBarChartFill1Wght600Grad0Opsz48'
import IconStackedBarChartFill1Wght700Grad0Opsz48 from '../components/StackedBarChartFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconStackedBarChart = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconStackedBarChartFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconStackedBarChartFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconStackedBarChartFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconStackedBarChartFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconStackedBarChartFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconStackedBarChartFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconStackedBarChartFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconStackedBarChartFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconStackedBarChartFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconStackedBarChartFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconStackedBarChartFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconStackedBarChartFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconStackedBarChartFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconStackedBarChartFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
