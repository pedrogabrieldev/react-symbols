import IconHorizontalSplitFill0Wght100Grad0Opsz48 from '../components/HorizontalSplitFill0Wght100Grad0Opsz48'
import IconHorizontalSplitFill0Wght200Grad0Opsz48 from '../components/HorizontalSplitFill0Wght200Grad0Opsz48'
import IconHorizontalSplitFill0Wght300Grad0Opsz48 from '../components/HorizontalSplitFill0Wght300Grad0Opsz48'
import IconHorizontalSplitFill0Wght400Grad0Opsz48 from '../components/HorizontalSplitFill0Wght400Grad0Opsz48'
import IconHorizontalSplitFill0Wght500Grad0Opsz48 from '../components/HorizontalSplitFill0Wght500Grad0Opsz48'
import IconHorizontalSplitFill0Wght600Grad0Opsz48 from '../components/HorizontalSplitFill0Wght600Grad0Opsz48'
import IconHorizontalSplitFill0Wght700Grad0Opsz48 from '../components/HorizontalSplitFill0Wght700Grad0Opsz48'
import IconHorizontalSplitFill1Wght100Grad0Opsz48 from '../components/HorizontalSplitFill1Wght100Grad0Opsz48'
import IconHorizontalSplitFill1Wght200Grad0Opsz48 from '../components/HorizontalSplitFill1Wght200Grad0Opsz48'
import IconHorizontalSplitFill1Wght300Grad0Opsz48 from '../components/HorizontalSplitFill1Wght300Grad0Opsz48'
import IconHorizontalSplitFill1Wght400Grad0Opsz48 from '../components/HorizontalSplitFill1Wght400Grad0Opsz48'
import IconHorizontalSplitFill1Wght500Grad0Opsz48 from '../components/HorizontalSplitFill1Wght500Grad0Opsz48'
import IconHorizontalSplitFill1Wght600Grad0Opsz48 from '../components/HorizontalSplitFill1Wght600Grad0Opsz48'
import IconHorizontalSplitFill1Wght700Grad0Opsz48 from '../components/HorizontalSplitFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHorizontalSplit = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHorizontalSplitFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHorizontalSplitFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHorizontalSplitFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHorizontalSplitFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHorizontalSplitFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHorizontalSplitFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHorizontalSplitFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHorizontalSplitFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHorizontalSplitFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHorizontalSplitFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHorizontalSplitFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHorizontalSplitFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHorizontalSplitFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHorizontalSplitFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
