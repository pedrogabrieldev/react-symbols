import IconWorkspacesFill0Wght100Grad0Opsz48 from '../components/WorkspacesFill0Wght100Grad0Opsz48'
import IconWorkspacesFill0Wght200Grad0Opsz48 from '../components/WorkspacesFill0Wght200Grad0Opsz48'
import IconWorkspacesFill0Wght300Grad0Opsz48 from '../components/WorkspacesFill0Wght300Grad0Opsz48'
import IconWorkspacesFill0Wght400Grad0Opsz48 from '../components/WorkspacesFill0Wght400Grad0Opsz48'
import IconWorkspacesFill0Wght500Grad0Opsz48 from '../components/WorkspacesFill0Wght500Grad0Opsz48'
import IconWorkspacesFill0Wght600Grad0Opsz48 from '../components/WorkspacesFill0Wght600Grad0Opsz48'
import IconWorkspacesFill0Wght700Grad0Opsz48 from '../components/WorkspacesFill0Wght700Grad0Opsz48'
import IconWorkspacesFill1Wght100Grad0Opsz48 from '../components/WorkspacesFill1Wght100Grad0Opsz48'
import IconWorkspacesFill1Wght200Grad0Opsz48 from '../components/WorkspacesFill1Wght200Grad0Opsz48'
import IconWorkspacesFill1Wght300Grad0Opsz48 from '../components/WorkspacesFill1Wght300Grad0Opsz48'
import IconWorkspacesFill1Wght400Grad0Opsz48 from '../components/WorkspacesFill1Wght400Grad0Opsz48'
import IconWorkspacesFill1Wght500Grad0Opsz48 from '../components/WorkspacesFill1Wght500Grad0Opsz48'
import IconWorkspacesFill1Wght600Grad0Opsz48 from '../components/WorkspacesFill1Wght600Grad0Opsz48'
import IconWorkspacesFill1Wght700Grad0Opsz48 from '../components/WorkspacesFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconWorkspaces = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconWorkspacesFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconWorkspacesFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconWorkspacesFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconWorkspacesFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconWorkspacesFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconWorkspacesFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconWorkspacesFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconWorkspacesFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconWorkspacesFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconWorkspacesFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconWorkspacesFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconWorkspacesFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconWorkspacesFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconWorkspacesFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
