import IconDockFill0Wght100Grad0Opsz48 from '../components/DockFill0Wght100Grad0Opsz48'
import IconDockFill0Wght200Grad0Opsz48 from '../components/DockFill0Wght200Grad0Opsz48'
import IconDockFill0Wght300Grad0Opsz48 from '../components/DockFill0Wght300Grad0Opsz48'
import IconDockFill0Wght400Grad0Opsz48 from '../components/DockFill0Wght400Grad0Opsz48'
import IconDockFill0Wght500Grad0Opsz48 from '../components/DockFill0Wght500Grad0Opsz48'
import IconDockFill0Wght600Grad0Opsz48 from '../components/DockFill0Wght600Grad0Opsz48'
import IconDockFill0Wght700Grad0Opsz48 from '../components/DockFill0Wght700Grad0Opsz48'
import IconDockFill1Wght100Grad0Opsz48 from '../components/DockFill1Wght100Grad0Opsz48'
import IconDockFill1Wght200Grad0Opsz48 from '../components/DockFill1Wght200Grad0Opsz48'
import IconDockFill1Wght300Grad0Opsz48 from '../components/DockFill1Wght300Grad0Opsz48'
import IconDockFill1Wght400Grad0Opsz48 from '../components/DockFill1Wght400Grad0Opsz48'
import IconDockFill1Wght500Grad0Opsz48 from '../components/DockFill1Wght500Grad0Opsz48'
import IconDockFill1Wght600Grad0Opsz48 from '../components/DockFill1Wght600Grad0Opsz48'
import IconDockFill1Wght700Grad0Opsz48 from '../components/DockFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDock = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDockFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDockFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDockFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDockFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDockFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDockFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDockFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDockFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDockFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDockFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDockFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDockFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDockFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDockFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
