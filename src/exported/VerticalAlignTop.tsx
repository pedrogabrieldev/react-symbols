import IconVerticalAlignTopFill0Wght100Grad0Opsz48 from '../components/VerticalAlignTopFill0Wght100Grad0Opsz48'
import IconVerticalAlignTopFill0Wght200Grad0Opsz48 from '../components/VerticalAlignTopFill0Wght200Grad0Opsz48'
import IconVerticalAlignTopFill0Wght300Grad0Opsz48 from '../components/VerticalAlignTopFill0Wght300Grad0Opsz48'
import IconVerticalAlignTopFill0Wght400Grad0Opsz48 from '../components/VerticalAlignTopFill0Wght400Grad0Opsz48'
import IconVerticalAlignTopFill0Wght500Grad0Opsz48 from '../components/VerticalAlignTopFill0Wght500Grad0Opsz48'
import IconVerticalAlignTopFill0Wght600Grad0Opsz48 from '../components/VerticalAlignTopFill0Wght600Grad0Opsz48'
import IconVerticalAlignTopFill0Wght700Grad0Opsz48 from '../components/VerticalAlignTopFill0Wght700Grad0Opsz48'
import IconVerticalAlignTopFill1Wght100Grad0Opsz48 from '../components/VerticalAlignTopFill1Wght100Grad0Opsz48'
import IconVerticalAlignTopFill1Wght200Grad0Opsz48 from '../components/VerticalAlignTopFill1Wght200Grad0Opsz48'
import IconVerticalAlignTopFill1Wght300Grad0Opsz48 from '../components/VerticalAlignTopFill1Wght300Grad0Opsz48'
import IconVerticalAlignTopFill1Wght400Grad0Opsz48 from '../components/VerticalAlignTopFill1Wght400Grad0Opsz48'
import IconVerticalAlignTopFill1Wght500Grad0Opsz48 from '../components/VerticalAlignTopFill1Wght500Grad0Opsz48'
import IconVerticalAlignTopFill1Wght600Grad0Opsz48 from '../components/VerticalAlignTopFill1Wght600Grad0Opsz48'
import IconVerticalAlignTopFill1Wght700Grad0Opsz48 from '../components/VerticalAlignTopFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconVerticalAlignTop = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconVerticalAlignTopFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconVerticalAlignTopFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconVerticalAlignTopFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconVerticalAlignTopFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconVerticalAlignTopFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconVerticalAlignTopFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconVerticalAlignTopFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconVerticalAlignTopFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconVerticalAlignTopFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconVerticalAlignTopFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconVerticalAlignTopFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconVerticalAlignTopFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconVerticalAlignTopFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconVerticalAlignTopFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
