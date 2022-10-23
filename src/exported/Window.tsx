import IconWindowFill0Wght100Grad0Opsz48 from '../components/WindowFill0Wght100Grad0Opsz48'
import IconWindowFill0Wght200Grad0Opsz48 from '../components/WindowFill0Wght200Grad0Opsz48'
import IconWindowFill0Wght300Grad0Opsz48 from '../components/WindowFill0Wght300Grad0Opsz48'
import IconWindowFill0Wght400Grad0Opsz48 from '../components/WindowFill0Wght400Grad0Opsz48'
import IconWindowFill0Wght500Grad0Opsz48 from '../components/WindowFill0Wght500Grad0Opsz48'
import IconWindowFill0Wght600Grad0Opsz48 from '../components/WindowFill0Wght600Grad0Opsz48'
import IconWindowFill0Wght700Grad0Opsz48 from '../components/WindowFill0Wght700Grad0Opsz48'
import IconWindowFill1Wght100Grad0Opsz48 from '../components/WindowFill1Wght100Grad0Opsz48'
import IconWindowFill1Wght200Grad0Opsz48 from '../components/WindowFill1Wght200Grad0Opsz48'
import IconWindowFill1Wght300Grad0Opsz48 from '../components/WindowFill1Wght300Grad0Opsz48'
import IconWindowFill1Wght400Grad0Opsz48 from '../components/WindowFill1Wght400Grad0Opsz48'
import IconWindowFill1Wght500Grad0Opsz48 from '../components/WindowFill1Wght500Grad0Opsz48'
import IconWindowFill1Wght600Grad0Opsz48 from '../components/WindowFill1Wght600Grad0Opsz48'
import IconWindowFill1Wght700Grad0Opsz48 from '../components/WindowFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWindow = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWindowFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWindowFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWindowFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWindowFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWindowFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWindowFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWindowFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWindowFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWindowFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWindowFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWindowFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWindowFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWindowFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWindowFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
