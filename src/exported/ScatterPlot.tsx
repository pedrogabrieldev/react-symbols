import IconScatterPlotFill0Wght100Grad0Opsz48 from '../components/ScatterPlotFill0Wght100Grad0Opsz48'
import IconScatterPlotFill0Wght200Grad0Opsz48 from '../components/ScatterPlotFill0Wght200Grad0Opsz48'
import IconScatterPlotFill0Wght300Grad0Opsz48 from '../components/ScatterPlotFill0Wght300Grad0Opsz48'
import IconScatterPlotFill0Wght400Grad0Opsz48 from '../components/ScatterPlotFill0Wght400Grad0Opsz48'
import IconScatterPlotFill0Wght500Grad0Opsz48 from '../components/ScatterPlotFill0Wght500Grad0Opsz48'
import IconScatterPlotFill0Wght600Grad0Opsz48 from '../components/ScatterPlotFill0Wght600Grad0Opsz48'
import IconScatterPlotFill0Wght700Grad0Opsz48 from '../components/ScatterPlotFill0Wght700Grad0Opsz48'
import IconScatterPlotFill1Wght100Grad0Opsz48 from '../components/ScatterPlotFill1Wght100Grad0Opsz48'
import IconScatterPlotFill1Wght200Grad0Opsz48 from '../components/ScatterPlotFill1Wght200Grad0Opsz48'
import IconScatterPlotFill1Wght300Grad0Opsz48 from '../components/ScatterPlotFill1Wght300Grad0Opsz48'
import IconScatterPlotFill1Wght400Grad0Opsz48 from '../components/ScatterPlotFill1Wght400Grad0Opsz48'
import IconScatterPlotFill1Wght500Grad0Opsz48 from '../components/ScatterPlotFill1Wght500Grad0Opsz48'
import IconScatterPlotFill1Wght600Grad0Opsz48 from '../components/ScatterPlotFill1Wght600Grad0Opsz48'
import IconScatterPlotFill1Wght700Grad0Opsz48 from '../components/ScatterPlotFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconScatterPlot = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconScatterPlotFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconScatterPlotFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconScatterPlotFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconScatterPlotFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconScatterPlotFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconScatterPlotFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconScatterPlotFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconScatterPlotFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconScatterPlotFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconScatterPlotFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconScatterPlotFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconScatterPlotFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconScatterPlotFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconScatterPlotFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
