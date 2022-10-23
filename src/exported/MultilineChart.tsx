import IconMultilineChartFill0Wght100Grad0Opsz48 from '../components/MultilineChartFill0Wght100Grad0Opsz48'
import IconMultilineChartFill0Wght200Grad0Opsz48 from '../components/MultilineChartFill0Wght200Grad0Opsz48'
import IconMultilineChartFill0Wght300Grad0Opsz48 from '../components/MultilineChartFill0Wght300Grad0Opsz48'
import IconMultilineChartFill0Wght400Grad0Opsz48 from '../components/MultilineChartFill0Wght400Grad0Opsz48'
import IconMultilineChartFill0Wght500Grad0Opsz48 from '../components/MultilineChartFill0Wght500Grad0Opsz48'
import IconMultilineChartFill0Wght600Grad0Opsz48 from '../components/MultilineChartFill0Wght600Grad0Opsz48'
import IconMultilineChartFill0Wght700Grad0Opsz48 from '../components/MultilineChartFill0Wght700Grad0Opsz48'
import IconMultilineChartFill1Wght100Grad0Opsz48 from '../components/MultilineChartFill1Wght100Grad0Opsz48'
import IconMultilineChartFill1Wght200Grad0Opsz48 from '../components/MultilineChartFill1Wght200Grad0Opsz48'
import IconMultilineChartFill1Wght300Grad0Opsz48 from '../components/MultilineChartFill1Wght300Grad0Opsz48'
import IconMultilineChartFill1Wght400Grad0Opsz48 from '../components/MultilineChartFill1Wght400Grad0Opsz48'
import IconMultilineChartFill1Wght500Grad0Opsz48 from '../components/MultilineChartFill1Wght500Grad0Opsz48'
import IconMultilineChartFill1Wght600Grad0Opsz48 from '../components/MultilineChartFill1Wght600Grad0Opsz48'
import IconMultilineChartFill1Wght700Grad0Opsz48 from '../components/MultilineChartFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMultilineChart = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMultilineChartFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMultilineChartFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMultilineChartFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMultilineChartFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMultilineChartFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMultilineChartFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMultilineChartFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMultilineChartFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMultilineChartFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMultilineChartFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMultilineChartFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMultilineChartFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMultilineChartFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMultilineChartFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
