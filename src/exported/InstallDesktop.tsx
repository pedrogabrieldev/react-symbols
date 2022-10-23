import IconInstallDesktopFill0Wght100Grad0Opsz48 from '../components/InstallDesktopFill0Wght100Grad0Opsz48'
import IconInstallDesktopFill0Wght200Grad0Opsz48 from '../components/InstallDesktopFill0Wght200Grad0Opsz48'
import IconInstallDesktopFill0Wght300Grad0Opsz48 from '../components/InstallDesktopFill0Wght300Grad0Opsz48'
import IconInstallDesktopFill0Wght400Grad0Opsz48 from '../components/InstallDesktopFill0Wght400Grad0Opsz48'
import IconInstallDesktopFill0Wght500Grad0Opsz48 from '../components/InstallDesktopFill0Wght500Grad0Opsz48'
import IconInstallDesktopFill0Wght600Grad0Opsz48 from '../components/InstallDesktopFill0Wght600Grad0Opsz48'
import IconInstallDesktopFill0Wght700Grad0Opsz48 from '../components/InstallDesktopFill0Wght700Grad0Opsz48'
import IconInstallDesktopFill1Wght100Grad0Opsz48 from '../components/InstallDesktopFill1Wght100Grad0Opsz48'
import IconInstallDesktopFill1Wght200Grad0Opsz48 from '../components/InstallDesktopFill1Wght200Grad0Opsz48'
import IconInstallDesktopFill1Wght300Grad0Opsz48 from '../components/InstallDesktopFill1Wght300Grad0Opsz48'
import IconInstallDesktopFill1Wght400Grad0Opsz48 from '../components/InstallDesktopFill1Wght400Grad0Opsz48'
import IconInstallDesktopFill1Wght500Grad0Opsz48 from '../components/InstallDesktopFill1Wght500Grad0Opsz48'
import IconInstallDesktopFill1Wght600Grad0Opsz48 from '../components/InstallDesktopFill1Wght600Grad0Opsz48'
import IconInstallDesktopFill1Wght700Grad0Opsz48 from '../components/InstallDesktopFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconInstallDesktop = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconInstallDesktopFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconInstallDesktopFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconInstallDesktopFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconInstallDesktopFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconInstallDesktopFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconInstallDesktopFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconInstallDesktopFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconInstallDesktopFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconInstallDesktopFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconInstallDesktopFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconInstallDesktopFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconInstallDesktopFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconInstallDesktopFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconInstallDesktopFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
