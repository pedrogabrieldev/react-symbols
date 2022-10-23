import IconShowChartFill0Wght100Grad0Opsz48 from '../components/ShowChartFill0Wght100Grad0Opsz48'
import IconShowChartFill0Wght200Grad0Opsz48 from '../components/ShowChartFill0Wght200Grad0Opsz48'
import IconShowChartFill0Wght300Grad0Opsz48 from '../components/ShowChartFill0Wght300Grad0Opsz48'
import IconShowChartFill0Wght400Grad0Opsz48 from '../components/ShowChartFill0Wght400Grad0Opsz48'
import IconShowChartFill0Wght500Grad0Opsz48 from '../components/ShowChartFill0Wght500Grad0Opsz48'
import IconShowChartFill0Wght600Grad0Opsz48 from '../components/ShowChartFill0Wght600Grad0Opsz48'
import IconShowChartFill0Wght700Grad0Opsz48 from '../components/ShowChartFill0Wght700Grad0Opsz48'
import IconShowChartFill1Wght100Grad0Opsz48 from '../components/ShowChartFill1Wght100Grad0Opsz48'
import IconShowChartFill1Wght200Grad0Opsz48 from '../components/ShowChartFill1Wght200Grad0Opsz48'
import IconShowChartFill1Wght300Grad0Opsz48 from '../components/ShowChartFill1Wght300Grad0Opsz48'
import IconShowChartFill1Wght400Grad0Opsz48 from '../components/ShowChartFill1Wght400Grad0Opsz48'
import IconShowChartFill1Wght500Grad0Opsz48 from '../components/ShowChartFill1Wght500Grad0Opsz48'
import IconShowChartFill1Wght600Grad0Opsz48 from '../components/ShowChartFill1Wght600Grad0Opsz48'
import IconShowChartFill1Wght700Grad0Opsz48 from '../components/ShowChartFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconShowChart = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconShowChartFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconShowChartFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconShowChartFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconShowChartFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconShowChartFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconShowChartFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconShowChartFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconShowChartFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconShowChartFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconShowChartFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconShowChartFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconShowChartFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconShowChartFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconShowChartFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
