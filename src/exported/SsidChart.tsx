import IconSsidChartFill0Wght100Grad0Opsz48 from '../components/SsidChartFill0Wght100Grad0Opsz48'
import IconSsidChartFill0Wght200Grad0Opsz48 from '../components/SsidChartFill0Wght200Grad0Opsz48'
import IconSsidChartFill0Wght300Grad0Opsz48 from '../components/SsidChartFill0Wght300Grad0Opsz48'
import IconSsidChartFill0Wght400Grad0Opsz48 from '../components/SsidChartFill0Wght400Grad0Opsz48'
import IconSsidChartFill0Wght500Grad0Opsz48 from '../components/SsidChartFill0Wght500Grad0Opsz48'
import IconSsidChartFill0Wght600Grad0Opsz48 from '../components/SsidChartFill0Wght600Grad0Opsz48'
import IconSsidChartFill0Wght700Grad0Opsz48 from '../components/SsidChartFill0Wght700Grad0Opsz48'
import IconSsidChartFill1Wght100Grad0Opsz48 from '../components/SsidChartFill1Wght100Grad0Opsz48'
import IconSsidChartFill1Wght200Grad0Opsz48 from '../components/SsidChartFill1Wght200Grad0Opsz48'
import IconSsidChartFill1Wght300Grad0Opsz48 from '../components/SsidChartFill1Wght300Grad0Opsz48'
import IconSsidChartFill1Wght400Grad0Opsz48 from '../components/SsidChartFill1Wght400Grad0Opsz48'
import IconSsidChartFill1Wght500Grad0Opsz48 from '../components/SsidChartFill1Wght500Grad0Opsz48'
import IconSsidChartFill1Wght600Grad0Opsz48 from '../components/SsidChartFill1Wght600Grad0Opsz48'
import IconSsidChartFill1Wght700Grad0Opsz48 from '../components/SsidChartFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSsidChart = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSsidChartFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSsidChartFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSsidChartFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSsidChartFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSsidChartFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSsidChartFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSsidChartFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSsidChartFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSsidChartFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSsidChartFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSsidChartFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSsidChartFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSsidChartFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSsidChartFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
