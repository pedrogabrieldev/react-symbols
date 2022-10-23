import IconDesktopMacFill0Wght100Grad0Opsz48 from '../components/DesktopMacFill0Wght100Grad0Opsz48'
import IconDesktopMacFill0Wght200Grad0Opsz48 from '../components/DesktopMacFill0Wght200Grad0Opsz48'
import IconDesktopMacFill0Wght300Grad0Opsz48 from '../components/DesktopMacFill0Wght300Grad0Opsz48'
import IconDesktopMacFill0Wght400Grad0Opsz48 from '../components/DesktopMacFill0Wght400Grad0Opsz48'
import IconDesktopMacFill0Wght500Grad0Opsz48 from '../components/DesktopMacFill0Wght500Grad0Opsz48'
import IconDesktopMacFill0Wght600Grad0Opsz48 from '../components/DesktopMacFill0Wght600Grad0Opsz48'
import IconDesktopMacFill0Wght700Grad0Opsz48 from '../components/DesktopMacFill0Wght700Grad0Opsz48'
import IconDesktopMacFill1Wght100Grad0Opsz48 from '../components/DesktopMacFill1Wght100Grad0Opsz48'
import IconDesktopMacFill1Wght200Grad0Opsz48 from '../components/DesktopMacFill1Wght200Grad0Opsz48'
import IconDesktopMacFill1Wght300Grad0Opsz48 from '../components/DesktopMacFill1Wght300Grad0Opsz48'
import IconDesktopMacFill1Wght400Grad0Opsz48 from '../components/DesktopMacFill1Wght400Grad0Opsz48'
import IconDesktopMacFill1Wght500Grad0Opsz48 from '../components/DesktopMacFill1Wght500Grad0Opsz48'
import IconDesktopMacFill1Wght600Grad0Opsz48 from '../components/DesktopMacFill1Wght600Grad0Opsz48'
import IconDesktopMacFill1Wght700Grad0Opsz48 from '../components/DesktopMacFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDesktopMac = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDesktopMacFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDesktopMacFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDesktopMacFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDesktopMacFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDesktopMacFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDesktopMacFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDesktopMacFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDesktopMacFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDesktopMacFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDesktopMacFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDesktopMacFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDesktopMacFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDesktopMacFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDesktopMacFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
