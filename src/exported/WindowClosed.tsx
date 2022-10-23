import IconWindowClosedFill0Wght100Grad0Opsz48 from '../components/WindowClosedFill0Wght100Grad0Opsz48'
import IconWindowClosedFill0Wght200Grad0Opsz48 from '../components/WindowClosedFill0Wght200Grad0Opsz48'
import IconWindowClosedFill0Wght300Grad0Opsz48 from '../components/WindowClosedFill0Wght300Grad0Opsz48'
import IconWindowClosedFill0Wght400Grad0Opsz48 from '../components/WindowClosedFill0Wght400Grad0Opsz48'
import IconWindowClosedFill0Wght500Grad0Opsz48 from '../components/WindowClosedFill0Wght500Grad0Opsz48'
import IconWindowClosedFill0Wght600Grad0Opsz48 from '../components/WindowClosedFill0Wght600Grad0Opsz48'
import IconWindowClosedFill0Wght700Grad0Opsz48 from '../components/WindowClosedFill0Wght700Grad0Opsz48'
import IconWindowClosedFill1Wght100Grad0Opsz48 from '../components/WindowClosedFill1Wght100Grad0Opsz48'
import IconWindowClosedFill1Wght200Grad0Opsz48 from '../components/WindowClosedFill1Wght200Grad0Opsz48'
import IconWindowClosedFill1Wght300Grad0Opsz48 from '../components/WindowClosedFill1Wght300Grad0Opsz48'
import IconWindowClosedFill1Wght400Grad0Opsz48 from '../components/WindowClosedFill1Wght400Grad0Opsz48'
import IconWindowClosedFill1Wght500Grad0Opsz48 from '../components/WindowClosedFill1Wght500Grad0Opsz48'
import IconWindowClosedFill1Wght600Grad0Opsz48 from '../components/WindowClosedFill1Wght600Grad0Opsz48'
import IconWindowClosedFill1Wght700Grad0Opsz48 from '../components/WindowClosedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWindowClosed = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWindowClosedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWindowClosedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWindowClosedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWindowClosedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWindowClosedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWindowClosedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWindowClosedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWindowClosedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWindowClosedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWindowClosedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWindowClosedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWindowClosedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWindowClosedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWindowClosedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
