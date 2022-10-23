import IconFolderDeleteFill0Wght100Grad0Opsz48 from '../components/FolderDeleteFill0Wght100Grad0Opsz48'
import IconFolderDeleteFill0Wght200Grad0Opsz48 from '../components/FolderDeleteFill0Wght200Grad0Opsz48'
import IconFolderDeleteFill0Wght300Grad0Opsz48 from '../components/FolderDeleteFill0Wght300Grad0Opsz48'
import IconFolderDeleteFill0Wght400Grad0Opsz48 from '../components/FolderDeleteFill0Wght400Grad0Opsz48'
import IconFolderDeleteFill0Wght500Grad0Opsz48 from '../components/FolderDeleteFill0Wght500Grad0Opsz48'
import IconFolderDeleteFill0Wght600Grad0Opsz48 from '../components/FolderDeleteFill0Wght600Grad0Opsz48'
import IconFolderDeleteFill0Wght700Grad0Opsz48 from '../components/FolderDeleteFill0Wght700Grad0Opsz48'
import IconFolderDeleteFill1Wght100Grad0Opsz48 from '../components/FolderDeleteFill1Wght100Grad0Opsz48'
import IconFolderDeleteFill1Wght200Grad0Opsz48 from '../components/FolderDeleteFill1Wght200Grad0Opsz48'
import IconFolderDeleteFill1Wght300Grad0Opsz48 from '../components/FolderDeleteFill1Wght300Grad0Opsz48'
import IconFolderDeleteFill1Wght400Grad0Opsz48 from '../components/FolderDeleteFill1Wght400Grad0Opsz48'
import IconFolderDeleteFill1Wght500Grad0Opsz48 from '../components/FolderDeleteFill1Wght500Grad0Opsz48'
import IconFolderDeleteFill1Wght600Grad0Opsz48 from '../components/FolderDeleteFill1Wght600Grad0Opsz48'
import IconFolderDeleteFill1Wght700Grad0Opsz48 from '../components/FolderDeleteFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFolderDelete = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFolderDeleteFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFolderDeleteFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFolderDeleteFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFolderDeleteFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFolderDeleteFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFolderDeleteFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFolderDeleteFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFolderDeleteFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFolderDeleteFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFolderDeleteFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFolderDeleteFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFolderDeleteFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFolderDeleteFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFolderDeleteFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
