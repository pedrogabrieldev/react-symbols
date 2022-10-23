import IconFolderCopyFill0Wght100Grad0Opsz48 from '../components/FolderCopyFill0Wght100Grad0Opsz48'
import IconFolderCopyFill0Wght200Grad0Opsz48 from '../components/FolderCopyFill0Wght200Grad0Opsz48'
import IconFolderCopyFill0Wght300Grad0Opsz48 from '../components/FolderCopyFill0Wght300Grad0Opsz48'
import IconFolderCopyFill0Wght400Grad0Opsz48 from '../components/FolderCopyFill0Wght400Grad0Opsz48'
import IconFolderCopyFill0Wght500Grad0Opsz48 from '../components/FolderCopyFill0Wght500Grad0Opsz48'
import IconFolderCopyFill0Wght600Grad0Opsz48 from '../components/FolderCopyFill0Wght600Grad0Opsz48'
import IconFolderCopyFill0Wght700Grad0Opsz48 from '../components/FolderCopyFill0Wght700Grad0Opsz48'
import IconFolderCopyFill1Wght100Grad0Opsz48 from '../components/FolderCopyFill1Wght100Grad0Opsz48'
import IconFolderCopyFill1Wght200Grad0Opsz48 from '../components/FolderCopyFill1Wght200Grad0Opsz48'
import IconFolderCopyFill1Wght300Grad0Opsz48 from '../components/FolderCopyFill1Wght300Grad0Opsz48'
import IconFolderCopyFill1Wght400Grad0Opsz48 from '../components/FolderCopyFill1Wght400Grad0Opsz48'
import IconFolderCopyFill1Wght500Grad0Opsz48 from '../components/FolderCopyFill1Wght500Grad0Opsz48'
import IconFolderCopyFill1Wght600Grad0Opsz48 from '../components/FolderCopyFill1Wght600Grad0Opsz48'
import IconFolderCopyFill1Wght700Grad0Opsz48 from '../components/FolderCopyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFolderCopy = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFolderCopyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFolderCopyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFolderCopyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFolderCopyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFolderCopyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFolderCopyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFolderCopyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFolderCopyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFolderCopyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFolderCopyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFolderCopyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFolderCopyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFolderCopyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFolderCopyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
