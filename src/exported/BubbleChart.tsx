import IconBubbleChartFill0Wght100Grad0Opsz48 from '../components/BubbleChartFill0Wght100Grad0Opsz48'
import IconBubbleChartFill0Wght200Grad0Opsz48 from '../components/BubbleChartFill0Wght200Grad0Opsz48'
import IconBubbleChartFill0Wght300Grad0Opsz48 from '../components/BubbleChartFill0Wght300Grad0Opsz48'
import IconBubbleChartFill0Wght400Grad0Opsz48 from '../components/BubbleChartFill0Wght400Grad0Opsz48'
import IconBubbleChartFill0Wght500Grad0Opsz48 from '../components/BubbleChartFill0Wght500Grad0Opsz48'
import IconBubbleChartFill0Wght600Grad0Opsz48 from '../components/BubbleChartFill0Wght600Grad0Opsz48'
import IconBubbleChartFill0Wght700Grad0Opsz48 from '../components/BubbleChartFill0Wght700Grad0Opsz48'
import IconBubbleChartFill1Wght100Grad0Opsz48 from '../components/BubbleChartFill1Wght100Grad0Opsz48'
import IconBubbleChartFill1Wght200Grad0Opsz48 from '../components/BubbleChartFill1Wght200Grad0Opsz48'
import IconBubbleChartFill1Wght300Grad0Opsz48 from '../components/BubbleChartFill1Wght300Grad0Opsz48'
import IconBubbleChartFill1Wght400Grad0Opsz48 from '../components/BubbleChartFill1Wght400Grad0Opsz48'
import IconBubbleChartFill1Wght500Grad0Opsz48 from '../components/BubbleChartFill1Wght500Grad0Opsz48'
import IconBubbleChartFill1Wght600Grad0Opsz48 from '../components/BubbleChartFill1Wght600Grad0Opsz48'
import IconBubbleChartFill1Wght700Grad0Opsz48 from '../components/BubbleChartFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBubbleChart = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBubbleChartFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBubbleChartFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBubbleChartFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBubbleChartFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBubbleChartFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBubbleChartFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBubbleChartFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBubbleChartFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBubbleChartFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBubbleChartFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBubbleChartFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBubbleChartFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBubbleChartFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBubbleChartFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
