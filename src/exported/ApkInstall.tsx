import IconApkInstallFill0Wght100Grad0Opsz48 from '../components/ApkInstallFill0Wght100Grad0Opsz48'
import IconApkInstallFill0Wght200Grad0Opsz48 from '../components/ApkInstallFill0Wght200Grad0Opsz48'
import IconApkInstallFill0Wght300Grad0Opsz48 from '../components/ApkInstallFill0Wght300Grad0Opsz48'
import IconApkInstallFill0Wght400Grad0Opsz48 from '../components/ApkInstallFill0Wght400Grad0Opsz48'
import IconApkInstallFill0Wght500Grad0Opsz48 from '../components/ApkInstallFill0Wght500Grad0Opsz48'
import IconApkInstallFill0Wght600Grad0Opsz48 from '../components/ApkInstallFill0Wght600Grad0Opsz48'
import IconApkInstallFill0Wght700Grad0Opsz48 from '../components/ApkInstallFill0Wght700Grad0Opsz48'
import IconApkInstallFill1Wght100Grad0Opsz48 from '../components/ApkInstallFill1Wght100Grad0Opsz48'
import IconApkInstallFill1Wght200Grad0Opsz48 from '../components/ApkInstallFill1Wght200Grad0Opsz48'
import IconApkInstallFill1Wght300Grad0Opsz48 from '../components/ApkInstallFill1Wght300Grad0Opsz48'
import IconApkInstallFill1Wght400Grad0Opsz48 from '../components/ApkInstallFill1Wght400Grad0Opsz48'
import IconApkInstallFill1Wght500Grad0Opsz48 from '../components/ApkInstallFill1Wght500Grad0Opsz48'
import IconApkInstallFill1Wght600Grad0Opsz48 from '../components/ApkInstallFill1Wght600Grad0Opsz48'
import IconApkInstallFill1Wght700Grad0Opsz48 from '../components/ApkInstallFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconApkInstall = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconApkInstallFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconApkInstallFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconApkInstallFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconApkInstallFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconApkInstallFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconApkInstallFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconApkInstallFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconApkInstallFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconApkInstallFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconApkInstallFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconApkInstallFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconApkInstallFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconApkInstallFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconApkInstallFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
