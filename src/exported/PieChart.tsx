import IconPieChartFill0Wght100Grad0Opsz48 from '../components/PieChartFill0Wght100Grad0Opsz48'
import IconPieChartFill0Wght200Grad0Opsz48 from '../components/PieChartFill0Wght200Grad0Opsz48'
import IconPieChartFill0Wght300Grad0Opsz48 from '../components/PieChartFill0Wght300Grad0Opsz48'
import IconPieChartFill0Wght400Grad0Opsz48 from '../components/PieChartFill0Wght400Grad0Opsz48'
import IconPieChartFill0Wght500Grad0Opsz48 from '../components/PieChartFill0Wght500Grad0Opsz48'
import IconPieChartFill0Wght600Grad0Opsz48 from '../components/PieChartFill0Wght600Grad0Opsz48'
import IconPieChartFill0Wght700Grad0Opsz48 from '../components/PieChartFill0Wght700Grad0Opsz48'
import IconPieChartFill1Wght100Grad0Opsz48 from '../components/PieChartFill1Wght100Grad0Opsz48'
import IconPieChartFill1Wght200Grad0Opsz48 from '../components/PieChartFill1Wght200Grad0Opsz48'
import IconPieChartFill1Wght300Grad0Opsz48 from '../components/PieChartFill1Wght300Grad0Opsz48'
import IconPieChartFill1Wght400Grad0Opsz48 from '../components/PieChartFill1Wght400Grad0Opsz48'
import IconPieChartFill1Wght500Grad0Opsz48 from '../components/PieChartFill1Wght500Grad0Opsz48'
import IconPieChartFill1Wght600Grad0Opsz48 from '../components/PieChartFill1Wght600Grad0Opsz48'
import IconPieChartFill1Wght700Grad0Opsz48 from '../components/PieChartFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPieChart = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPieChartFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPieChartFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPieChartFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPieChartFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPieChartFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPieChartFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPieChartFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPieChartFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPieChartFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPieChartFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPieChartFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPieChartFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPieChartFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPieChartFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
