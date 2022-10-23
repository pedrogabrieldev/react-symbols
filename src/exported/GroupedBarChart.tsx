import IconGroupedBarChartFill0Wght100Grad0Opsz48 from '../components/GroupedBarChartFill0Wght100Grad0Opsz48'
import IconGroupedBarChartFill0Wght200Grad0Opsz48 from '../components/GroupedBarChartFill0Wght200Grad0Opsz48'
import IconGroupedBarChartFill0Wght300Grad0Opsz48 from '../components/GroupedBarChartFill0Wght300Grad0Opsz48'
import IconGroupedBarChartFill0Wght400Grad0Opsz48 from '../components/GroupedBarChartFill0Wght400Grad0Opsz48'
import IconGroupedBarChartFill0Wght500Grad0Opsz48 from '../components/GroupedBarChartFill0Wght500Grad0Opsz48'
import IconGroupedBarChartFill0Wght600Grad0Opsz48 from '../components/GroupedBarChartFill0Wght600Grad0Opsz48'
import IconGroupedBarChartFill0Wght700Grad0Opsz48 from '../components/GroupedBarChartFill0Wght700Grad0Opsz48'
import IconGroupedBarChartFill1Wght100Grad0Opsz48 from '../components/GroupedBarChartFill1Wght100Grad0Opsz48'
import IconGroupedBarChartFill1Wght200Grad0Opsz48 from '../components/GroupedBarChartFill1Wght200Grad0Opsz48'
import IconGroupedBarChartFill1Wght300Grad0Opsz48 from '../components/GroupedBarChartFill1Wght300Grad0Opsz48'
import IconGroupedBarChartFill1Wght400Grad0Opsz48 from '../components/GroupedBarChartFill1Wght400Grad0Opsz48'
import IconGroupedBarChartFill1Wght500Grad0Opsz48 from '../components/GroupedBarChartFill1Wght500Grad0Opsz48'
import IconGroupedBarChartFill1Wght600Grad0Opsz48 from '../components/GroupedBarChartFill1Wght600Grad0Opsz48'
import IconGroupedBarChartFill1Wght700Grad0Opsz48 from '../components/GroupedBarChartFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconGroupedBarChart = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconGroupedBarChartFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconGroupedBarChartFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconGroupedBarChartFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconGroupedBarChartFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconGroupedBarChartFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconGroupedBarChartFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconGroupedBarChartFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconGroupedBarChartFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconGroupedBarChartFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconGroupedBarChartFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconGroupedBarChartFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconGroupedBarChartFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconGroupedBarChartFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconGroupedBarChartFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
