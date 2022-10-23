import IconInsightsFill0Wght100Grad0Opsz48 from '../components/InsightsFill0Wght100Grad0Opsz48'
import IconInsightsFill0Wght200Grad0Opsz48 from '../components/InsightsFill0Wght200Grad0Opsz48'
import IconInsightsFill0Wght300Grad0Opsz48 from '../components/InsightsFill0Wght300Grad0Opsz48'
import IconInsightsFill0Wght400Grad0Opsz48 from '../components/InsightsFill0Wght400Grad0Opsz48'
import IconInsightsFill0Wght500Grad0Opsz48 from '../components/InsightsFill0Wght500Grad0Opsz48'
import IconInsightsFill0Wght600Grad0Opsz48 from '../components/InsightsFill0Wght600Grad0Opsz48'
import IconInsightsFill0Wght700Grad0Opsz48 from '../components/InsightsFill0Wght700Grad0Opsz48'
import IconInsightsFill1Wght100Grad0Opsz48 from '../components/InsightsFill1Wght100Grad0Opsz48'
import IconInsightsFill1Wght200Grad0Opsz48 from '../components/InsightsFill1Wght200Grad0Opsz48'
import IconInsightsFill1Wght300Grad0Opsz48 from '../components/InsightsFill1Wght300Grad0Opsz48'
import IconInsightsFill1Wght400Grad0Opsz48 from '../components/InsightsFill1Wght400Grad0Opsz48'
import IconInsightsFill1Wght500Grad0Opsz48 from '../components/InsightsFill1Wght500Grad0Opsz48'
import IconInsightsFill1Wght600Grad0Opsz48 from '../components/InsightsFill1Wght600Grad0Opsz48'
import IconInsightsFill1Wght700Grad0Opsz48 from '../components/InsightsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconInsights = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconInsightsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconInsightsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconInsightsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconInsightsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconInsightsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconInsightsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconInsightsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconInsightsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconInsightsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconInsightsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconInsightsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconInsightsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconInsightsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconInsightsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
