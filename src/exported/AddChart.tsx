import IconAddChartFill0Wght100Grad0Opsz48 from '../components/AddChartFill0Wght100Grad0Opsz48'
import IconAddChartFill0Wght200Grad0Opsz48 from '../components/AddChartFill0Wght200Grad0Opsz48'
import IconAddChartFill0Wght300Grad0Opsz48 from '../components/AddChartFill0Wght300Grad0Opsz48'
import IconAddChartFill0Wght400Grad0Opsz48 from '../components/AddChartFill0Wght400Grad0Opsz48'
import IconAddChartFill0Wght500Grad0Opsz48 from '../components/AddChartFill0Wght500Grad0Opsz48'
import IconAddChartFill0Wght600Grad0Opsz48 from '../components/AddChartFill0Wght600Grad0Opsz48'
import IconAddChartFill0Wght700Grad0Opsz48 from '../components/AddChartFill0Wght700Grad0Opsz48'
import IconAddChartFill1Wght100Grad0Opsz48 from '../components/AddChartFill1Wght100Grad0Opsz48'
import IconAddChartFill1Wght200Grad0Opsz48 from '../components/AddChartFill1Wght200Grad0Opsz48'
import IconAddChartFill1Wght300Grad0Opsz48 from '../components/AddChartFill1Wght300Grad0Opsz48'
import IconAddChartFill1Wght400Grad0Opsz48 from '../components/AddChartFill1Wght400Grad0Opsz48'
import IconAddChartFill1Wght500Grad0Opsz48 from '../components/AddChartFill1Wght500Grad0Opsz48'
import IconAddChartFill1Wght600Grad0Opsz48 from '../components/AddChartFill1Wght600Grad0Opsz48'
import IconAddChartFill1Wght700Grad0Opsz48 from '../components/AddChartFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAddChart = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAddChartFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAddChartFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAddChartFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAddChartFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAddChartFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAddChartFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAddChartFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAddChartFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAddChartFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAddChartFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAddChartFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAddChartFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAddChartFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAddChartFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
