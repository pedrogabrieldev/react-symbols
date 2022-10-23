import IconEdgesensorLowFill0Wght100Grad0Opsz48 from '../components/EdgesensorLowFill0Wght100Grad0Opsz48'
import IconEdgesensorLowFill0Wght200Grad0Opsz48 from '../components/EdgesensorLowFill0Wght200Grad0Opsz48'
import IconEdgesensorLowFill0Wght300Grad0Opsz48 from '../components/EdgesensorLowFill0Wght300Grad0Opsz48'
import IconEdgesensorLowFill0Wght400Grad0Opsz48 from '../components/EdgesensorLowFill0Wght400Grad0Opsz48'
import IconEdgesensorLowFill0Wght500Grad0Opsz48 from '../components/EdgesensorLowFill0Wght500Grad0Opsz48'
import IconEdgesensorLowFill0Wght600Grad0Opsz48 from '../components/EdgesensorLowFill0Wght600Grad0Opsz48'
import IconEdgesensorLowFill0Wght700Grad0Opsz48 from '../components/EdgesensorLowFill0Wght700Grad0Opsz48'
import IconEdgesensorLowFill1Wght100Grad0Opsz48 from '../components/EdgesensorLowFill1Wght100Grad0Opsz48'
import IconEdgesensorLowFill1Wght200Grad0Opsz48 from '../components/EdgesensorLowFill1Wght200Grad0Opsz48'
import IconEdgesensorLowFill1Wght300Grad0Opsz48 from '../components/EdgesensorLowFill1Wght300Grad0Opsz48'
import IconEdgesensorLowFill1Wght400Grad0Opsz48 from '../components/EdgesensorLowFill1Wght400Grad0Opsz48'
import IconEdgesensorLowFill1Wght500Grad0Opsz48 from '../components/EdgesensorLowFill1Wght500Grad0Opsz48'
import IconEdgesensorLowFill1Wght600Grad0Opsz48 from '../components/EdgesensorLowFill1Wght600Grad0Opsz48'
import IconEdgesensorLowFill1Wght700Grad0Opsz48 from '../components/EdgesensorLowFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEdgesensorLow = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEdgesensorLowFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEdgesensorLowFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEdgesensorLowFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEdgesensorLowFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEdgesensorLowFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEdgesensorLowFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEdgesensorLowFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEdgesensorLowFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEdgesensorLowFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEdgesensorLowFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEdgesensorLowFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEdgesensorLowFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEdgesensorLowFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEdgesensorLowFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
