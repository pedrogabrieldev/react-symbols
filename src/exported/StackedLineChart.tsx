import IconStackedLineChartFill0Wght100Grad0Opsz48 from '../components/StackedLineChartFill0Wght100Grad0Opsz48'
import IconStackedLineChartFill0Wght200Grad0Opsz48 from '../components/StackedLineChartFill0Wght200Grad0Opsz48'
import IconStackedLineChartFill0Wght300Grad0Opsz48 from '../components/StackedLineChartFill0Wght300Grad0Opsz48'
import IconStackedLineChartFill0Wght400Grad0Opsz48 from '../components/StackedLineChartFill0Wght400Grad0Opsz48'
import IconStackedLineChartFill0Wght500Grad0Opsz48 from '../components/StackedLineChartFill0Wght500Grad0Opsz48'
import IconStackedLineChartFill0Wght600Grad0Opsz48 from '../components/StackedLineChartFill0Wght600Grad0Opsz48'
import IconStackedLineChartFill0Wght700Grad0Opsz48 from '../components/StackedLineChartFill0Wght700Grad0Opsz48'
import IconStackedLineChartFill1Wght100Grad0Opsz48 from '../components/StackedLineChartFill1Wght100Grad0Opsz48'
import IconStackedLineChartFill1Wght200Grad0Opsz48 from '../components/StackedLineChartFill1Wght200Grad0Opsz48'
import IconStackedLineChartFill1Wght300Grad0Opsz48 from '../components/StackedLineChartFill1Wght300Grad0Opsz48'
import IconStackedLineChartFill1Wght400Grad0Opsz48 from '../components/StackedLineChartFill1Wght400Grad0Opsz48'
import IconStackedLineChartFill1Wght500Grad0Opsz48 from '../components/StackedLineChartFill1Wght500Grad0Opsz48'
import IconStackedLineChartFill1Wght600Grad0Opsz48 from '../components/StackedLineChartFill1Wght600Grad0Opsz48'
import IconStackedLineChartFill1Wght700Grad0Opsz48 from '../components/StackedLineChartFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconStackedLineChart = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconStackedLineChartFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconStackedLineChartFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconStackedLineChartFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconStackedLineChartFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconStackedLineChartFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconStackedLineChartFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconStackedLineChartFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconStackedLineChartFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconStackedLineChartFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconStackedLineChartFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconStackedLineChartFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconStackedLineChartFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconStackedLineChartFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconStackedLineChartFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
