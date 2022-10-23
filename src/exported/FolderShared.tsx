import IconFolderSharedFill0Wght100Grad0Opsz48 from '../components/FolderSharedFill0Wght100Grad0Opsz48'
import IconFolderSharedFill0Wght200Grad0Opsz48 from '../components/FolderSharedFill0Wght200Grad0Opsz48'
import IconFolderSharedFill0Wght300Grad0Opsz48 from '../components/FolderSharedFill0Wght300Grad0Opsz48'
import IconFolderSharedFill0Wght400Grad0Opsz48 from '../components/FolderSharedFill0Wght400Grad0Opsz48'
import IconFolderSharedFill0Wght500Grad0Opsz48 from '../components/FolderSharedFill0Wght500Grad0Opsz48'
import IconFolderSharedFill0Wght600Grad0Opsz48 from '../components/FolderSharedFill0Wght600Grad0Opsz48'
import IconFolderSharedFill0Wght700Grad0Opsz48 from '../components/FolderSharedFill0Wght700Grad0Opsz48'
import IconFolderSharedFill1Wght100Grad0Opsz48 from '../components/FolderSharedFill1Wght100Grad0Opsz48'
import IconFolderSharedFill1Wght200Grad0Opsz48 from '../components/FolderSharedFill1Wght200Grad0Opsz48'
import IconFolderSharedFill1Wght300Grad0Opsz48 from '../components/FolderSharedFill1Wght300Grad0Opsz48'
import IconFolderSharedFill1Wght400Grad0Opsz48 from '../components/FolderSharedFill1Wght400Grad0Opsz48'
import IconFolderSharedFill1Wght500Grad0Opsz48 from '../components/FolderSharedFill1Wght500Grad0Opsz48'
import IconFolderSharedFill1Wght600Grad0Opsz48 from '../components/FolderSharedFill1Wght600Grad0Opsz48'
import IconFolderSharedFill1Wght700Grad0Opsz48 from '../components/FolderSharedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFolderShared = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFolderSharedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFolderSharedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFolderSharedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFolderSharedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFolderSharedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFolderSharedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFolderSharedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFolderSharedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFolderSharedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFolderSharedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFolderSharedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFolderSharedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFolderSharedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFolderSharedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
