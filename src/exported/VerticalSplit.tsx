import IconVerticalSplitFill0Wght100Grad0Opsz48 from '../components/VerticalSplitFill0Wght100Grad0Opsz48'
import IconVerticalSplitFill0Wght200Grad0Opsz48 from '../components/VerticalSplitFill0Wght200Grad0Opsz48'
import IconVerticalSplitFill0Wght300Grad0Opsz48 from '../components/VerticalSplitFill0Wght300Grad0Opsz48'
import IconVerticalSplitFill0Wght400Grad0Opsz48 from '../components/VerticalSplitFill0Wght400Grad0Opsz48'
import IconVerticalSplitFill0Wght500Grad0Opsz48 from '../components/VerticalSplitFill0Wght500Grad0Opsz48'
import IconVerticalSplitFill0Wght600Grad0Opsz48 from '../components/VerticalSplitFill0Wght600Grad0Opsz48'
import IconVerticalSplitFill0Wght700Grad0Opsz48 from '../components/VerticalSplitFill0Wght700Grad0Opsz48'
import IconVerticalSplitFill1Wght100Grad0Opsz48 from '../components/VerticalSplitFill1Wght100Grad0Opsz48'
import IconVerticalSplitFill1Wght200Grad0Opsz48 from '../components/VerticalSplitFill1Wght200Grad0Opsz48'
import IconVerticalSplitFill1Wght300Grad0Opsz48 from '../components/VerticalSplitFill1Wght300Grad0Opsz48'
import IconVerticalSplitFill1Wght400Grad0Opsz48 from '../components/VerticalSplitFill1Wght400Grad0Opsz48'
import IconVerticalSplitFill1Wght500Grad0Opsz48 from '../components/VerticalSplitFill1Wght500Grad0Opsz48'
import IconVerticalSplitFill1Wght600Grad0Opsz48 from '../components/VerticalSplitFill1Wght600Grad0Opsz48'
import IconVerticalSplitFill1Wght700Grad0Opsz48 from '../components/VerticalSplitFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVerticalSplit = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVerticalSplitFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVerticalSplitFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVerticalSplitFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVerticalSplitFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVerticalSplitFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVerticalSplitFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVerticalSplitFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVerticalSplitFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVerticalSplitFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVerticalSplitFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVerticalSplitFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVerticalSplitFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVerticalSplitFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVerticalSplitFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
