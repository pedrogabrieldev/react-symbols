import IconProcessChartFill0Wght100Grad0Opsz48 from '../components/ProcessChartFill0Wght100Grad0Opsz48'
import IconProcessChartFill0Wght200Grad0Opsz48 from '../components/ProcessChartFill0Wght200Grad0Opsz48'
import IconProcessChartFill0Wght300Grad0Opsz48 from '../components/ProcessChartFill0Wght300Grad0Opsz48'
import IconProcessChartFill0Wght400Grad0Opsz48 from '../components/ProcessChartFill0Wght400Grad0Opsz48'
import IconProcessChartFill0Wght500Grad0Opsz48 from '../components/ProcessChartFill0Wght500Grad0Opsz48'
import IconProcessChartFill0Wght600Grad0Opsz48 from '../components/ProcessChartFill0Wght600Grad0Opsz48'
import IconProcessChartFill0Wght700Grad0Opsz48 from '../components/ProcessChartFill0Wght700Grad0Opsz48'
import IconProcessChartFill1Wght100Grad0Opsz48 from '../components/ProcessChartFill1Wght100Grad0Opsz48'
import IconProcessChartFill1Wght200Grad0Opsz48 from '../components/ProcessChartFill1Wght200Grad0Opsz48'
import IconProcessChartFill1Wght300Grad0Opsz48 from '../components/ProcessChartFill1Wght300Grad0Opsz48'
import IconProcessChartFill1Wght400Grad0Opsz48 from '../components/ProcessChartFill1Wght400Grad0Opsz48'
import IconProcessChartFill1Wght500Grad0Opsz48 from '../components/ProcessChartFill1Wght500Grad0Opsz48'
import IconProcessChartFill1Wght600Grad0Opsz48 from '../components/ProcessChartFill1Wght600Grad0Opsz48'
import IconProcessChartFill1Wght700Grad0Opsz48 from '../components/ProcessChartFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconProcessChart = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconProcessChartFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconProcessChartFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconProcessChartFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconProcessChartFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconProcessChartFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconProcessChartFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconProcessChartFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconProcessChartFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconProcessChartFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconProcessChartFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconProcessChartFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconProcessChartFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconProcessChartFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconProcessChartFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
