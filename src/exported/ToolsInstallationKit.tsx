import IconToolsInstallationKitFill0Wght100Grad0Opsz48 from '../components/ToolsInstallationKitFill0Wght100Grad0Opsz48'
import IconToolsInstallationKitFill0Wght200Grad0Opsz48 from '../components/ToolsInstallationKitFill0Wght200Grad0Opsz48'
import IconToolsInstallationKitFill0Wght300Grad0Opsz48 from '../components/ToolsInstallationKitFill0Wght300Grad0Opsz48'
import IconToolsInstallationKitFill0Wght400Grad0Opsz48 from '../components/ToolsInstallationKitFill0Wght400Grad0Opsz48'
import IconToolsInstallationKitFill0Wght500Grad0Opsz48 from '../components/ToolsInstallationKitFill0Wght500Grad0Opsz48'
import IconToolsInstallationKitFill0Wght600Grad0Opsz48 from '../components/ToolsInstallationKitFill0Wght600Grad0Opsz48'
import IconToolsInstallationKitFill0Wght700Grad0Opsz48 from '../components/ToolsInstallationKitFill0Wght700Grad0Opsz48'
import IconToolsInstallationKitFill1Wght100Grad0Opsz48 from '../components/ToolsInstallationKitFill1Wght100Grad0Opsz48'
import IconToolsInstallationKitFill1Wght200Grad0Opsz48 from '../components/ToolsInstallationKitFill1Wght200Grad0Opsz48'
import IconToolsInstallationKitFill1Wght300Grad0Opsz48 from '../components/ToolsInstallationKitFill1Wght300Grad0Opsz48'
import IconToolsInstallationKitFill1Wght400Grad0Opsz48 from '../components/ToolsInstallationKitFill1Wght400Grad0Opsz48'
import IconToolsInstallationKitFill1Wght500Grad0Opsz48 from '../components/ToolsInstallationKitFill1Wght500Grad0Opsz48'
import IconToolsInstallationKitFill1Wght600Grad0Opsz48 from '../components/ToolsInstallationKitFill1Wght600Grad0Opsz48'
import IconToolsInstallationKitFill1Wght700Grad0Opsz48 from '../components/ToolsInstallationKitFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconToolsInstallationKit = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconToolsInstallationKitFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconToolsInstallationKitFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconToolsInstallationKitFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconToolsInstallationKitFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconToolsInstallationKitFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconToolsInstallationKitFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconToolsInstallationKitFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconToolsInstallationKitFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconToolsInstallationKitFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconToolsInstallationKitFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconToolsInstallationKitFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconToolsInstallationKitFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconToolsInstallationKitFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconToolsInstallationKitFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
