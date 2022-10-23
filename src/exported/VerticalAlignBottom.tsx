import IconVerticalAlignBottomFill0Wght100Grad0Opsz48 from '../components/VerticalAlignBottomFill0Wght100Grad0Opsz48'
import IconVerticalAlignBottomFill0Wght200Grad0Opsz48 from '../components/VerticalAlignBottomFill0Wght200Grad0Opsz48'
import IconVerticalAlignBottomFill0Wght300Grad0Opsz48 from '../components/VerticalAlignBottomFill0Wght300Grad0Opsz48'
import IconVerticalAlignBottomFill0Wght400Grad0Opsz48 from '../components/VerticalAlignBottomFill0Wght400Grad0Opsz48'
import IconVerticalAlignBottomFill0Wght500Grad0Opsz48 from '../components/VerticalAlignBottomFill0Wght500Grad0Opsz48'
import IconVerticalAlignBottomFill0Wght600Grad0Opsz48 from '../components/VerticalAlignBottomFill0Wght600Grad0Opsz48'
import IconVerticalAlignBottomFill0Wght700Grad0Opsz48 from '../components/VerticalAlignBottomFill0Wght700Grad0Opsz48'
import IconVerticalAlignBottomFill1Wght100Grad0Opsz48 from '../components/VerticalAlignBottomFill1Wght100Grad0Opsz48'
import IconVerticalAlignBottomFill1Wght200Grad0Opsz48 from '../components/VerticalAlignBottomFill1Wght200Grad0Opsz48'
import IconVerticalAlignBottomFill1Wght300Grad0Opsz48 from '../components/VerticalAlignBottomFill1Wght300Grad0Opsz48'
import IconVerticalAlignBottomFill1Wght400Grad0Opsz48 from '../components/VerticalAlignBottomFill1Wght400Grad0Opsz48'
import IconVerticalAlignBottomFill1Wght500Grad0Opsz48 from '../components/VerticalAlignBottomFill1Wght500Grad0Opsz48'
import IconVerticalAlignBottomFill1Wght600Grad0Opsz48 from '../components/VerticalAlignBottomFill1Wght600Grad0Opsz48'
import IconVerticalAlignBottomFill1Wght700Grad0Opsz48 from '../components/VerticalAlignBottomFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVerticalAlignBottom = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVerticalAlignBottomFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVerticalAlignBottomFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVerticalAlignBottomFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVerticalAlignBottomFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVerticalAlignBottomFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVerticalAlignBottomFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVerticalAlignBottomFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVerticalAlignBottomFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVerticalAlignBottomFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVerticalAlignBottomFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVerticalAlignBottomFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVerticalAlignBottomFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVerticalAlignBottomFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVerticalAlignBottomFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
