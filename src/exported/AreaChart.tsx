import IconAreaChartFill0Wght100Grad0Opsz48 from '../components/AreaChartFill0Wght100Grad0Opsz48'
import IconAreaChartFill0Wght200Grad0Opsz48 from '../components/AreaChartFill0Wght200Grad0Opsz48'
import IconAreaChartFill0Wght300Grad0Opsz48 from '../components/AreaChartFill0Wght300Grad0Opsz48'
import IconAreaChartFill0Wght400Grad0Opsz48 from '../components/AreaChartFill0Wght400Grad0Opsz48'
import IconAreaChartFill0Wght500Grad0Opsz48 from '../components/AreaChartFill0Wght500Grad0Opsz48'
import IconAreaChartFill0Wght600Grad0Opsz48 from '../components/AreaChartFill0Wght600Grad0Opsz48'
import IconAreaChartFill0Wght700Grad0Opsz48 from '../components/AreaChartFill0Wght700Grad0Opsz48'
import IconAreaChartFill1Wght100Grad0Opsz48 from '../components/AreaChartFill1Wght100Grad0Opsz48'
import IconAreaChartFill1Wght200Grad0Opsz48 from '../components/AreaChartFill1Wght200Grad0Opsz48'
import IconAreaChartFill1Wght300Grad0Opsz48 from '../components/AreaChartFill1Wght300Grad0Opsz48'
import IconAreaChartFill1Wght400Grad0Opsz48 from '../components/AreaChartFill1Wght400Grad0Opsz48'
import IconAreaChartFill1Wght500Grad0Opsz48 from '../components/AreaChartFill1Wght500Grad0Opsz48'
import IconAreaChartFill1Wght600Grad0Opsz48 from '../components/AreaChartFill1Wght600Grad0Opsz48'
import IconAreaChartFill1Wght700Grad0Opsz48 from '../components/AreaChartFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAreaChart = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAreaChartFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAreaChartFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAreaChartFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAreaChartFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAreaChartFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAreaChartFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAreaChartFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAreaChartFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAreaChartFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAreaChartFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAreaChartFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAreaChartFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAreaChartFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAreaChartFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
