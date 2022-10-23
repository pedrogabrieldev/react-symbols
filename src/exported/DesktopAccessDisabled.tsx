import IconDesktopAccessDisabledFill0Wght100Grad0Opsz48 from '../components/DesktopAccessDisabledFill0Wght100Grad0Opsz48'
import IconDesktopAccessDisabledFill0Wght200Grad0Opsz48 from '../components/DesktopAccessDisabledFill0Wght200Grad0Opsz48'
import IconDesktopAccessDisabledFill0Wght300Grad0Opsz48 from '../components/DesktopAccessDisabledFill0Wght300Grad0Opsz48'
import IconDesktopAccessDisabledFill0Wght400Grad0Opsz48 from '../components/DesktopAccessDisabledFill0Wght400Grad0Opsz48'
import IconDesktopAccessDisabledFill0Wght500Grad0Opsz48 from '../components/DesktopAccessDisabledFill0Wght500Grad0Opsz48'
import IconDesktopAccessDisabledFill0Wght600Grad0Opsz48 from '../components/DesktopAccessDisabledFill0Wght600Grad0Opsz48'
import IconDesktopAccessDisabledFill0Wght700Grad0Opsz48 from '../components/DesktopAccessDisabledFill0Wght700Grad0Opsz48'
import IconDesktopAccessDisabledFill1Wght100Grad0Opsz48 from '../components/DesktopAccessDisabledFill1Wght100Grad0Opsz48'
import IconDesktopAccessDisabledFill1Wght200Grad0Opsz48 from '../components/DesktopAccessDisabledFill1Wght200Grad0Opsz48'
import IconDesktopAccessDisabledFill1Wght300Grad0Opsz48 from '../components/DesktopAccessDisabledFill1Wght300Grad0Opsz48'
import IconDesktopAccessDisabledFill1Wght400Grad0Opsz48 from '../components/DesktopAccessDisabledFill1Wght400Grad0Opsz48'
import IconDesktopAccessDisabledFill1Wght500Grad0Opsz48 from '../components/DesktopAccessDisabledFill1Wght500Grad0Opsz48'
import IconDesktopAccessDisabledFill1Wght600Grad0Opsz48 from '../components/DesktopAccessDisabledFill1Wght600Grad0Opsz48'
import IconDesktopAccessDisabledFill1Wght700Grad0Opsz48 from '../components/DesktopAccessDisabledFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDesktopAccessDisabled = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDesktopAccessDisabledFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDesktopAccessDisabledFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDesktopAccessDisabledFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDesktopAccessDisabledFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDesktopAccessDisabledFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDesktopAccessDisabledFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDesktopAccessDisabledFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDesktopAccessDisabledFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDesktopAccessDisabledFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDesktopAccessDisabledFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDesktopAccessDisabledFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDesktopAccessDisabledFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDesktopAccessDisabledFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDesktopAccessDisabledFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
