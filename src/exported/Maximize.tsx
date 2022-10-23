import IconMaximizeFill0Wght100Grad0Opsz48 from '../components/MaximizeFill0Wght100Grad0Opsz48'
import IconMaximizeFill0Wght200Grad0Opsz48 from '../components/MaximizeFill0Wght200Grad0Opsz48'
import IconMaximizeFill0Wght300Grad0Opsz48 from '../components/MaximizeFill0Wght300Grad0Opsz48'
import IconMaximizeFill0Wght400Grad0Opsz48 from '../components/MaximizeFill0Wght400Grad0Opsz48'
import IconMaximizeFill0Wght500Grad0Opsz48 from '../components/MaximizeFill0Wght500Grad0Opsz48'
import IconMaximizeFill0Wght600Grad0Opsz48 from '../components/MaximizeFill0Wght600Grad0Opsz48'
import IconMaximizeFill0Wght700Grad0Opsz48 from '../components/MaximizeFill0Wght700Grad0Opsz48'
import IconMaximizeFill1Wght100Grad0Opsz48 from '../components/MaximizeFill1Wght100Grad0Opsz48'
import IconMaximizeFill1Wght200Grad0Opsz48 from '../components/MaximizeFill1Wght200Grad0Opsz48'
import IconMaximizeFill1Wght300Grad0Opsz48 from '../components/MaximizeFill1Wght300Grad0Opsz48'
import IconMaximizeFill1Wght400Grad0Opsz48 from '../components/MaximizeFill1Wght400Grad0Opsz48'
import IconMaximizeFill1Wght500Grad0Opsz48 from '../components/MaximizeFill1Wght500Grad0Opsz48'
import IconMaximizeFill1Wght600Grad0Opsz48 from '../components/MaximizeFill1Wght600Grad0Opsz48'
import IconMaximizeFill1Wght700Grad0Opsz48 from '../components/MaximizeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMaximize = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMaximizeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMaximizeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMaximizeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMaximizeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMaximizeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMaximizeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMaximizeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMaximizeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMaximizeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMaximizeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMaximizeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMaximizeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMaximizeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMaximizeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
