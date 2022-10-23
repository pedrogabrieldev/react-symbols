import IconCandlestickChartFill0Wght100Grad0Opsz48 from '../components/CandlestickChartFill0Wght100Grad0Opsz48'
import IconCandlestickChartFill0Wght200Grad0Opsz48 from '../components/CandlestickChartFill0Wght200Grad0Opsz48'
import IconCandlestickChartFill0Wght300Grad0Opsz48 from '../components/CandlestickChartFill0Wght300Grad0Opsz48'
import IconCandlestickChartFill0Wght400Grad0Opsz48 from '../components/CandlestickChartFill0Wght400Grad0Opsz48'
import IconCandlestickChartFill0Wght500Grad0Opsz48 from '../components/CandlestickChartFill0Wght500Grad0Opsz48'
import IconCandlestickChartFill0Wght600Grad0Opsz48 from '../components/CandlestickChartFill0Wght600Grad0Opsz48'
import IconCandlestickChartFill0Wght700Grad0Opsz48 from '../components/CandlestickChartFill0Wght700Grad0Opsz48'
import IconCandlestickChartFill1Wght100Grad0Opsz48 from '../components/CandlestickChartFill1Wght100Grad0Opsz48'
import IconCandlestickChartFill1Wght200Grad0Opsz48 from '../components/CandlestickChartFill1Wght200Grad0Opsz48'
import IconCandlestickChartFill1Wght300Grad0Opsz48 from '../components/CandlestickChartFill1Wght300Grad0Opsz48'
import IconCandlestickChartFill1Wght400Grad0Opsz48 from '../components/CandlestickChartFill1Wght400Grad0Opsz48'
import IconCandlestickChartFill1Wght500Grad0Opsz48 from '../components/CandlestickChartFill1Wght500Grad0Opsz48'
import IconCandlestickChartFill1Wght600Grad0Opsz48 from '../components/CandlestickChartFill1Wght600Grad0Opsz48'
import IconCandlestickChartFill1Wght700Grad0Opsz48 from '../components/CandlestickChartFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCandlestickChart = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCandlestickChartFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCandlestickChartFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCandlestickChartFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCandlestickChartFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCandlestickChartFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCandlestickChartFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCandlestickChartFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCandlestickChartFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCandlestickChartFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCandlestickChartFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCandlestickChartFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCandlestickChartFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCandlestickChartFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCandlestickChartFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
