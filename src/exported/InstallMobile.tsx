import IconInstallMobileFill0Wght100Grad0Opsz48 from '../components/InstallMobileFill0Wght100Grad0Opsz48'
import IconInstallMobileFill0Wght200Grad0Opsz48 from '../components/InstallMobileFill0Wght200Grad0Opsz48'
import IconInstallMobileFill0Wght300Grad0Opsz48 from '../components/InstallMobileFill0Wght300Grad0Opsz48'
import IconInstallMobileFill0Wght400Grad0Opsz48 from '../components/InstallMobileFill0Wght400Grad0Opsz48'
import IconInstallMobileFill0Wght500Grad0Opsz48 from '../components/InstallMobileFill0Wght500Grad0Opsz48'
import IconInstallMobileFill0Wght600Grad0Opsz48 from '../components/InstallMobileFill0Wght600Grad0Opsz48'
import IconInstallMobileFill0Wght700Grad0Opsz48 from '../components/InstallMobileFill0Wght700Grad0Opsz48'
import IconInstallMobileFill1Wght100Grad0Opsz48 from '../components/InstallMobileFill1Wght100Grad0Opsz48'
import IconInstallMobileFill1Wght200Grad0Opsz48 from '../components/InstallMobileFill1Wght200Grad0Opsz48'
import IconInstallMobileFill1Wght300Grad0Opsz48 from '../components/InstallMobileFill1Wght300Grad0Opsz48'
import IconInstallMobileFill1Wght400Grad0Opsz48 from '../components/InstallMobileFill1Wght400Grad0Opsz48'
import IconInstallMobileFill1Wght500Grad0Opsz48 from '../components/InstallMobileFill1Wght500Grad0Opsz48'
import IconInstallMobileFill1Wght600Grad0Opsz48 from '../components/InstallMobileFill1Wght600Grad0Opsz48'
import IconInstallMobileFill1Wght700Grad0Opsz48 from '../components/InstallMobileFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconInstallMobile = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconInstallMobileFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconInstallMobileFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconInstallMobileFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconInstallMobileFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconInstallMobileFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconInstallMobileFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconInstallMobileFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconInstallMobileFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconInstallMobileFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconInstallMobileFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconInstallMobileFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconInstallMobileFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconInstallMobileFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconInstallMobileFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
