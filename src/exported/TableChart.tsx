import IconTableChartFill0Wght100Grad0Opsz48 from '../components/TableChartFill0Wght100Grad0Opsz48'
import IconTableChartFill0Wght200Grad0Opsz48 from '../components/TableChartFill0Wght200Grad0Opsz48'
import IconTableChartFill0Wght300Grad0Opsz48 from '../components/TableChartFill0Wght300Grad0Opsz48'
import IconTableChartFill0Wght400Grad0Opsz48 from '../components/TableChartFill0Wght400Grad0Opsz48'
import IconTableChartFill0Wght500Grad0Opsz48 from '../components/TableChartFill0Wght500Grad0Opsz48'
import IconTableChartFill0Wght600Grad0Opsz48 from '../components/TableChartFill0Wght600Grad0Opsz48'
import IconTableChartFill0Wght700Grad0Opsz48 from '../components/TableChartFill0Wght700Grad0Opsz48'
import IconTableChartFill1Wght100Grad0Opsz48 from '../components/TableChartFill1Wght100Grad0Opsz48'
import IconTableChartFill1Wght200Grad0Opsz48 from '../components/TableChartFill1Wght200Grad0Opsz48'
import IconTableChartFill1Wght300Grad0Opsz48 from '../components/TableChartFill1Wght300Grad0Opsz48'
import IconTableChartFill1Wght400Grad0Opsz48 from '../components/TableChartFill1Wght400Grad0Opsz48'
import IconTableChartFill1Wght500Grad0Opsz48 from '../components/TableChartFill1Wght500Grad0Opsz48'
import IconTableChartFill1Wght600Grad0Opsz48 from '../components/TableChartFill1Wght600Grad0Opsz48'
import IconTableChartFill1Wght700Grad0Opsz48 from '../components/TableChartFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconTableChart = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconTableChartFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconTableChartFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconTableChartFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconTableChartFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconTableChartFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconTableChartFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconTableChartFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconTableChartFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconTableChartFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconTableChartFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconTableChartFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconTableChartFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconTableChartFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconTableChartFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
