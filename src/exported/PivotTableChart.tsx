import IconPivotTableChartFill0Wght100Grad0Opsz48 from '../components/PivotTableChartFill0Wght100Grad0Opsz48'
import IconPivotTableChartFill0Wght200Grad0Opsz48 from '../components/PivotTableChartFill0Wght200Grad0Opsz48'
import IconPivotTableChartFill0Wght300Grad0Opsz48 from '../components/PivotTableChartFill0Wght300Grad0Opsz48'
import IconPivotTableChartFill0Wght400Grad0Opsz48 from '../components/PivotTableChartFill0Wght400Grad0Opsz48'
import IconPivotTableChartFill0Wght500Grad0Opsz48 from '../components/PivotTableChartFill0Wght500Grad0Opsz48'
import IconPivotTableChartFill0Wght600Grad0Opsz48 from '../components/PivotTableChartFill0Wght600Grad0Opsz48'
import IconPivotTableChartFill0Wght700Grad0Opsz48 from '../components/PivotTableChartFill0Wght700Grad0Opsz48'
import IconPivotTableChartFill1Wght100Grad0Opsz48 from '../components/PivotTableChartFill1Wght100Grad0Opsz48'
import IconPivotTableChartFill1Wght200Grad0Opsz48 from '../components/PivotTableChartFill1Wght200Grad0Opsz48'
import IconPivotTableChartFill1Wght300Grad0Opsz48 from '../components/PivotTableChartFill1Wght300Grad0Opsz48'
import IconPivotTableChartFill1Wght400Grad0Opsz48 from '../components/PivotTableChartFill1Wght400Grad0Opsz48'
import IconPivotTableChartFill1Wght500Grad0Opsz48 from '../components/PivotTableChartFill1Wght500Grad0Opsz48'
import IconPivotTableChartFill1Wght600Grad0Opsz48 from '../components/PivotTableChartFill1Wght600Grad0Opsz48'
import IconPivotTableChartFill1Wght700Grad0Opsz48 from '../components/PivotTableChartFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPivotTableChart = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPivotTableChartFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPivotTableChartFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPivotTableChartFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPivotTableChartFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPivotTableChartFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPivotTableChartFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPivotTableChartFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPivotTableChartFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPivotTableChartFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPivotTableChartFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPivotTableChartFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPivotTableChartFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPivotTableChartFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPivotTableChartFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
