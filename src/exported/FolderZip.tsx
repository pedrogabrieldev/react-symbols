import IconFolderZipFill0Wght100Grad0Opsz48 from '../components/FolderZipFill0Wght100Grad0Opsz48'
import IconFolderZipFill0Wght200Grad0Opsz48 from '../components/FolderZipFill0Wght200Grad0Opsz48'
import IconFolderZipFill0Wght300Grad0Opsz48 from '../components/FolderZipFill0Wght300Grad0Opsz48'
import IconFolderZipFill0Wght400Grad0Opsz48 from '../components/FolderZipFill0Wght400Grad0Opsz48'
import IconFolderZipFill0Wght500Grad0Opsz48 from '../components/FolderZipFill0Wght500Grad0Opsz48'
import IconFolderZipFill0Wght600Grad0Opsz48 from '../components/FolderZipFill0Wght600Grad0Opsz48'
import IconFolderZipFill0Wght700Grad0Opsz48 from '../components/FolderZipFill0Wght700Grad0Opsz48'
import IconFolderZipFill1Wght100Grad0Opsz48 from '../components/FolderZipFill1Wght100Grad0Opsz48'
import IconFolderZipFill1Wght200Grad0Opsz48 from '../components/FolderZipFill1Wght200Grad0Opsz48'
import IconFolderZipFill1Wght300Grad0Opsz48 from '../components/FolderZipFill1Wght300Grad0Opsz48'
import IconFolderZipFill1Wght400Grad0Opsz48 from '../components/FolderZipFill1Wght400Grad0Opsz48'
import IconFolderZipFill1Wght500Grad0Opsz48 from '../components/FolderZipFill1Wght500Grad0Opsz48'
import IconFolderZipFill1Wght600Grad0Opsz48 from '../components/FolderZipFill1Wght600Grad0Opsz48'
import IconFolderZipFill1Wght700Grad0Opsz48 from '../components/FolderZipFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFolderZip = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFolderZipFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFolderZipFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFolderZipFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFolderZipFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFolderZipFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFolderZipFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFolderZipFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFolderZipFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFolderZipFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFolderZipFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFolderZipFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFolderZipFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFolderZipFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFolderZipFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
