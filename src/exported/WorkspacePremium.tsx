import IconWorkspacePremiumFill0Wght100Grad0Opsz48 from '../components/WorkspacePremiumFill0Wght100Grad0Opsz48'
import IconWorkspacePremiumFill0Wght200Grad0Opsz48 from '../components/WorkspacePremiumFill0Wght200Grad0Opsz48'
import IconWorkspacePremiumFill0Wght300Grad0Opsz48 from '../components/WorkspacePremiumFill0Wght300Grad0Opsz48'
import IconWorkspacePremiumFill0Wght400Grad0Opsz48 from '../components/WorkspacePremiumFill0Wght400Grad0Opsz48'
import IconWorkspacePremiumFill0Wght500Grad0Opsz48 from '../components/WorkspacePremiumFill0Wght500Grad0Opsz48'
import IconWorkspacePremiumFill0Wght600Grad0Opsz48 from '../components/WorkspacePremiumFill0Wght600Grad0Opsz48'
import IconWorkspacePremiumFill0Wght700Grad0Opsz48 from '../components/WorkspacePremiumFill0Wght700Grad0Opsz48'
import IconWorkspacePremiumFill1Wght100Grad0Opsz48 from '../components/WorkspacePremiumFill1Wght100Grad0Opsz48'
import IconWorkspacePremiumFill1Wght200Grad0Opsz48 from '../components/WorkspacePremiumFill1Wght200Grad0Opsz48'
import IconWorkspacePremiumFill1Wght300Grad0Opsz48 from '../components/WorkspacePremiumFill1Wght300Grad0Opsz48'
import IconWorkspacePremiumFill1Wght400Grad0Opsz48 from '../components/WorkspacePremiumFill1Wght400Grad0Opsz48'
import IconWorkspacePremiumFill1Wght500Grad0Opsz48 from '../components/WorkspacePremiumFill1Wght500Grad0Opsz48'
import IconWorkspacePremiumFill1Wght600Grad0Opsz48 from '../components/WorkspacePremiumFill1Wght600Grad0Opsz48'
import IconWorkspacePremiumFill1Wght700Grad0Opsz48 from '../components/WorkspacePremiumFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWorkspacePremium = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWorkspacePremiumFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWorkspacePremiumFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWorkspacePremiumFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWorkspacePremiumFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWorkspacePremiumFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWorkspacePremiumFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWorkspacePremiumFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWorkspacePremiumFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWorkspacePremiumFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWorkspacePremiumFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWorkspacePremiumFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWorkspacePremiumFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWorkspacePremiumFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWorkspacePremiumFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
