import IconWindowOpenFill0Wght100Grad0Opsz48 from '../components/WindowOpenFill0Wght100Grad0Opsz48'
import IconWindowOpenFill0Wght200Grad0Opsz48 from '../components/WindowOpenFill0Wght200Grad0Opsz48'
import IconWindowOpenFill0Wght300Grad0Opsz48 from '../components/WindowOpenFill0Wght300Grad0Opsz48'
import IconWindowOpenFill0Wght400Grad0Opsz48 from '../components/WindowOpenFill0Wght400Grad0Opsz48'
import IconWindowOpenFill0Wght500Grad0Opsz48 from '../components/WindowOpenFill0Wght500Grad0Opsz48'
import IconWindowOpenFill0Wght600Grad0Opsz48 from '../components/WindowOpenFill0Wght600Grad0Opsz48'
import IconWindowOpenFill0Wght700Grad0Opsz48 from '../components/WindowOpenFill0Wght700Grad0Opsz48'
import IconWindowOpenFill1Wght100Grad0Opsz48 from '../components/WindowOpenFill1Wght100Grad0Opsz48'
import IconWindowOpenFill1Wght200Grad0Opsz48 from '../components/WindowOpenFill1Wght200Grad0Opsz48'
import IconWindowOpenFill1Wght300Grad0Opsz48 from '../components/WindowOpenFill1Wght300Grad0Opsz48'
import IconWindowOpenFill1Wght400Grad0Opsz48 from '../components/WindowOpenFill1Wght400Grad0Opsz48'
import IconWindowOpenFill1Wght500Grad0Opsz48 from '../components/WindowOpenFill1Wght500Grad0Opsz48'
import IconWindowOpenFill1Wght600Grad0Opsz48 from '../components/WindowOpenFill1Wght600Grad0Opsz48'
import IconWindowOpenFill1Wght700Grad0Opsz48 from '../components/WindowOpenFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWindowOpen = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWindowOpenFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWindowOpenFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWindowOpenFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWindowOpenFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWindowOpenFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWindowOpenFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWindowOpenFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWindowOpenFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWindowOpenFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWindowOpenFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWindowOpenFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWindowOpenFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWindowOpenFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWindowOpenFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
