import IconFullStackedBarChartFill0Wght100Grad0Opsz48 from '../components/FullStackedBarChartFill0Wght100Grad0Opsz48'
import IconFullStackedBarChartFill0Wght200Grad0Opsz48 from '../components/FullStackedBarChartFill0Wght200Grad0Opsz48'
import IconFullStackedBarChartFill0Wght300Grad0Opsz48 from '../components/FullStackedBarChartFill0Wght300Grad0Opsz48'
import IconFullStackedBarChartFill0Wght400Grad0Opsz48 from '../components/FullStackedBarChartFill0Wght400Grad0Opsz48'
import IconFullStackedBarChartFill0Wght500Grad0Opsz48 from '../components/FullStackedBarChartFill0Wght500Grad0Opsz48'
import IconFullStackedBarChartFill0Wght600Grad0Opsz48 from '../components/FullStackedBarChartFill0Wght600Grad0Opsz48'
import IconFullStackedBarChartFill0Wght700Grad0Opsz48 from '../components/FullStackedBarChartFill0Wght700Grad0Opsz48'
import IconFullStackedBarChartFill1Wght100Grad0Opsz48 from '../components/FullStackedBarChartFill1Wght100Grad0Opsz48'
import IconFullStackedBarChartFill1Wght200Grad0Opsz48 from '../components/FullStackedBarChartFill1Wght200Grad0Opsz48'
import IconFullStackedBarChartFill1Wght300Grad0Opsz48 from '../components/FullStackedBarChartFill1Wght300Grad0Opsz48'
import IconFullStackedBarChartFill1Wght400Grad0Opsz48 from '../components/FullStackedBarChartFill1Wght400Grad0Opsz48'
import IconFullStackedBarChartFill1Wght500Grad0Opsz48 from '../components/FullStackedBarChartFill1Wght500Grad0Opsz48'
import IconFullStackedBarChartFill1Wght600Grad0Opsz48 from '../components/FullStackedBarChartFill1Wght600Grad0Opsz48'
import IconFullStackedBarChartFill1Wght700Grad0Opsz48 from '../components/FullStackedBarChartFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFullStackedBarChart = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFullStackedBarChartFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFullStackedBarChartFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFullStackedBarChartFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFullStackedBarChartFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFullStackedBarChartFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFullStackedBarChartFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFullStackedBarChartFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFullStackedBarChartFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFullStackedBarChartFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFullStackedBarChartFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFullStackedBarChartFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFullStackedBarChartFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFullStackedBarChartFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFullStackedBarChartFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
