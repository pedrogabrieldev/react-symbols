import IconReorderFill0Wght100Grad0Opsz48 from '../components/ReorderFill0Wght100Grad0Opsz48'
import IconReorderFill0Wght200Grad0Opsz48 from '../components/ReorderFill0Wght200Grad0Opsz48'
import IconReorderFill0Wght300Grad0Opsz48 from '../components/ReorderFill0Wght300Grad0Opsz48'
import IconReorderFill0Wght400Grad0Opsz48 from '../components/ReorderFill0Wght400Grad0Opsz48'
import IconReorderFill0Wght500Grad0Opsz48 from '../components/ReorderFill0Wght500Grad0Opsz48'
import IconReorderFill0Wght600Grad0Opsz48 from '../components/ReorderFill0Wght600Grad0Opsz48'
import IconReorderFill0Wght700Grad0Opsz48 from '../components/ReorderFill0Wght700Grad0Opsz48'
import IconReorderFill1Wght100Grad0Opsz48 from '../components/ReorderFill1Wght100Grad0Opsz48'
import IconReorderFill1Wght200Grad0Opsz48 from '../components/ReorderFill1Wght200Grad0Opsz48'
import IconReorderFill1Wght300Grad0Opsz48 from '../components/ReorderFill1Wght300Grad0Opsz48'
import IconReorderFill1Wght400Grad0Opsz48 from '../components/ReorderFill1Wght400Grad0Opsz48'
import IconReorderFill1Wght500Grad0Opsz48 from '../components/ReorderFill1Wght500Grad0Opsz48'
import IconReorderFill1Wght600Grad0Opsz48 from '../components/ReorderFill1Wght600Grad0Opsz48'
import IconReorderFill1Wght700Grad0Opsz48 from '../components/ReorderFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconReorder = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconReorderFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconReorderFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconReorderFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconReorderFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconReorderFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconReorderFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconReorderFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconReorderFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconReorderFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconReorderFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconReorderFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconReorderFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconReorderFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconReorderFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
