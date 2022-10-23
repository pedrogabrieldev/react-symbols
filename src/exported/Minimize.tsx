import IconMinimizeFill0Wght100Grad0Opsz48 from '../components/MinimizeFill0Wght100Grad0Opsz48'
import IconMinimizeFill0Wght200Grad0Opsz48 from '../components/MinimizeFill0Wght200Grad0Opsz48'
import IconMinimizeFill0Wght300Grad0Opsz48 from '../components/MinimizeFill0Wght300Grad0Opsz48'
import IconMinimizeFill0Wght400Grad0Opsz48 from '../components/MinimizeFill0Wght400Grad0Opsz48'
import IconMinimizeFill0Wght500Grad0Opsz48 from '../components/MinimizeFill0Wght500Grad0Opsz48'
import IconMinimizeFill0Wght600Grad0Opsz48 from '../components/MinimizeFill0Wght600Grad0Opsz48'
import IconMinimizeFill0Wght700Grad0Opsz48 from '../components/MinimizeFill0Wght700Grad0Opsz48'
import IconMinimizeFill1Wght100Grad0Opsz48 from '../components/MinimizeFill1Wght100Grad0Opsz48'
import IconMinimizeFill1Wght200Grad0Opsz48 from '../components/MinimizeFill1Wght200Grad0Opsz48'
import IconMinimizeFill1Wght300Grad0Opsz48 from '../components/MinimizeFill1Wght300Grad0Opsz48'
import IconMinimizeFill1Wght400Grad0Opsz48 from '../components/MinimizeFill1Wght400Grad0Opsz48'
import IconMinimizeFill1Wght500Grad0Opsz48 from '../components/MinimizeFill1Wght500Grad0Opsz48'
import IconMinimizeFill1Wght600Grad0Opsz48 from '../components/MinimizeFill1Wght600Grad0Opsz48'
import IconMinimizeFill1Wght700Grad0Opsz48 from '../components/MinimizeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMinimize = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMinimizeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMinimizeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMinimizeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMinimizeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMinimizeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMinimizeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMinimizeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMinimizeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMinimizeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMinimizeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMinimizeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMinimizeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMinimizeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMinimizeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
