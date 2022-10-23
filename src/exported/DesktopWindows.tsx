import IconDesktopWindowsFill0Wght100Grad0Opsz48 from '../components/DesktopWindowsFill0Wght100Grad0Opsz48'
import IconDesktopWindowsFill0Wght200Grad0Opsz48 from '../components/DesktopWindowsFill0Wght200Grad0Opsz48'
import IconDesktopWindowsFill0Wght300Grad0Opsz48 from '../components/DesktopWindowsFill0Wght300Grad0Opsz48'
import IconDesktopWindowsFill0Wght400Grad0Opsz48 from '../components/DesktopWindowsFill0Wght400Grad0Opsz48'
import IconDesktopWindowsFill0Wght500Grad0Opsz48 from '../components/DesktopWindowsFill0Wght500Grad0Opsz48'
import IconDesktopWindowsFill0Wght600Grad0Opsz48 from '../components/DesktopWindowsFill0Wght600Grad0Opsz48'
import IconDesktopWindowsFill0Wght700Grad0Opsz48 from '../components/DesktopWindowsFill0Wght700Grad0Opsz48'
import IconDesktopWindowsFill1Wght100Grad0Opsz48 from '../components/DesktopWindowsFill1Wght100Grad0Opsz48'
import IconDesktopWindowsFill1Wght200Grad0Opsz48 from '../components/DesktopWindowsFill1Wght200Grad0Opsz48'
import IconDesktopWindowsFill1Wght300Grad0Opsz48 from '../components/DesktopWindowsFill1Wght300Grad0Opsz48'
import IconDesktopWindowsFill1Wght400Grad0Opsz48 from '../components/DesktopWindowsFill1Wght400Grad0Opsz48'
import IconDesktopWindowsFill1Wght500Grad0Opsz48 from '../components/DesktopWindowsFill1Wght500Grad0Opsz48'
import IconDesktopWindowsFill1Wght600Grad0Opsz48 from '../components/DesktopWindowsFill1Wght600Grad0Opsz48'
import IconDesktopWindowsFill1Wght700Grad0Opsz48 from '../components/DesktopWindowsFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDesktopWindows = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDesktopWindowsFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDesktopWindowsFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDesktopWindowsFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDesktopWindowsFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDesktopWindowsFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDesktopWindowsFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDesktopWindowsFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDesktopWindowsFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDesktopWindowsFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDesktopWindowsFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDesktopWindowsFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDesktopWindowsFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDesktopWindowsFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDesktopWindowsFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
