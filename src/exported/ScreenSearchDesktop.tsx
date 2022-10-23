import IconScreenSearchDesktopFill0Wght100Grad0Opsz48 from '../components/ScreenSearchDesktopFill0Wght100Grad0Opsz48'
import IconScreenSearchDesktopFill0Wght200Grad0Opsz48 from '../components/ScreenSearchDesktopFill0Wght200Grad0Opsz48'
import IconScreenSearchDesktopFill0Wght300Grad0Opsz48 from '../components/ScreenSearchDesktopFill0Wght300Grad0Opsz48'
import IconScreenSearchDesktopFill0Wght400Grad0Opsz48 from '../components/ScreenSearchDesktopFill0Wght400Grad0Opsz48'
import IconScreenSearchDesktopFill0Wght500Grad0Opsz48 from '../components/ScreenSearchDesktopFill0Wght500Grad0Opsz48'
import IconScreenSearchDesktopFill0Wght600Grad0Opsz48 from '../components/ScreenSearchDesktopFill0Wght600Grad0Opsz48'
import IconScreenSearchDesktopFill0Wght700Grad0Opsz48 from '../components/ScreenSearchDesktopFill0Wght700Grad0Opsz48'
import IconScreenSearchDesktopFill1Wght100Grad0Opsz48 from '../components/ScreenSearchDesktopFill1Wght100Grad0Opsz48'
import IconScreenSearchDesktopFill1Wght200Grad0Opsz48 from '../components/ScreenSearchDesktopFill1Wght200Grad0Opsz48'
import IconScreenSearchDesktopFill1Wght300Grad0Opsz48 from '../components/ScreenSearchDesktopFill1Wght300Grad0Opsz48'
import IconScreenSearchDesktopFill1Wght400Grad0Opsz48 from '../components/ScreenSearchDesktopFill1Wght400Grad0Opsz48'
import IconScreenSearchDesktopFill1Wght500Grad0Opsz48 from '../components/ScreenSearchDesktopFill1Wght500Grad0Opsz48'
import IconScreenSearchDesktopFill1Wght600Grad0Opsz48 from '../components/ScreenSearchDesktopFill1Wght600Grad0Opsz48'
import IconScreenSearchDesktopFill1Wght700Grad0Opsz48 from '../components/ScreenSearchDesktopFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconScreenSearchDesktop = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconScreenSearchDesktopFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconScreenSearchDesktopFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconScreenSearchDesktopFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconScreenSearchDesktopFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconScreenSearchDesktopFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconScreenSearchDesktopFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconScreenSearchDesktopFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconScreenSearchDesktopFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconScreenSearchDesktopFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconScreenSearchDesktopFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconScreenSearchDesktopFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconScreenSearchDesktopFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconScreenSearchDesktopFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconScreenSearchDesktopFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
