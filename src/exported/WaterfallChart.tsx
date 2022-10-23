import IconWaterfallChartFill0Wght100Grad0Opsz48 from '../components/WaterfallChartFill0Wght100Grad0Opsz48'
import IconWaterfallChartFill0Wght200Grad0Opsz48 from '../components/WaterfallChartFill0Wght200Grad0Opsz48'
import IconWaterfallChartFill0Wght300Grad0Opsz48 from '../components/WaterfallChartFill0Wght300Grad0Opsz48'
import IconWaterfallChartFill0Wght400Grad0Opsz48 from '../components/WaterfallChartFill0Wght400Grad0Opsz48'
import IconWaterfallChartFill0Wght500Grad0Opsz48 from '../components/WaterfallChartFill0Wght500Grad0Opsz48'
import IconWaterfallChartFill0Wght600Grad0Opsz48 from '../components/WaterfallChartFill0Wght600Grad0Opsz48'
import IconWaterfallChartFill0Wght700Grad0Opsz48 from '../components/WaterfallChartFill0Wght700Grad0Opsz48'
import IconWaterfallChartFill1Wght100Grad0Opsz48 from '../components/WaterfallChartFill1Wght100Grad0Opsz48'
import IconWaterfallChartFill1Wght200Grad0Opsz48 from '../components/WaterfallChartFill1Wght200Grad0Opsz48'
import IconWaterfallChartFill1Wght300Grad0Opsz48 from '../components/WaterfallChartFill1Wght300Grad0Opsz48'
import IconWaterfallChartFill1Wght400Grad0Opsz48 from '../components/WaterfallChartFill1Wght400Grad0Opsz48'
import IconWaterfallChartFill1Wght500Grad0Opsz48 from '../components/WaterfallChartFill1Wght500Grad0Opsz48'
import IconWaterfallChartFill1Wght600Grad0Opsz48 from '../components/WaterfallChartFill1Wght600Grad0Opsz48'
import IconWaterfallChartFill1Wght700Grad0Opsz48 from '../components/WaterfallChartFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWaterfallChart = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWaterfallChartFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWaterfallChartFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWaterfallChartFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWaterfallChartFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWaterfallChartFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWaterfallChartFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWaterfallChartFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWaterfallChartFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWaterfallChartFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWaterfallChartFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWaterfallChartFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWaterfallChartFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWaterfallChartFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWaterfallChartFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
