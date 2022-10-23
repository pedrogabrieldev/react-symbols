import IconFolderFill0Wght100Grad0Opsz48 from '../components/FolderFill0Wght100Grad0Opsz48'
import IconFolderFill0Wght200Grad0Opsz48 from '../components/FolderFill0Wght200Grad0Opsz48'
import IconFolderFill0Wght300Grad0Opsz48 from '../components/FolderFill0Wght300Grad0Opsz48'
import IconFolderFill0Wght400Grad0Opsz48 from '../components/FolderFill0Wght400Grad0Opsz48'
import IconFolderFill0Wght500Grad0Opsz48 from '../components/FolderFill0Wght500Grad0Opsz48'
import IconFolderFill0Wght600Grad0Opsz48 from '../components/FolderFill0Wght600Grad0Opsz48'
import IconFolderFill0Wght700Grad0Opsz48 from '../components/FolderFill0Wght700Grad0Opsz48'
import IconFolderFill1Wght100Grad0Opsz48 from '../components/FolderFill1Wght100Grad0Opsz48'
import IconFolderFill1Wght200Grad0Opsz48 from '../components/FolderFill1Wght200Grad0Opsz48'
import IconFolderFill1Wght300Grad0Opsz48 from '../components/FolderFill1Wght300Grad0Opsz48'
import IconFolderFill1Wght400Grad0Opsz48 from '../components/FolderFill1Wght400Grad0Opsz48'
import IconFolderFill1Wght500Grad0Opsz48 from '../components/FolderFill1Wght500Grad0Opsz48'
import IconFolderFill1Wght600Grad0Opsz48 from '../components/FolderFill1Wght600Grad0Opsz48'
import IconFolderFill1Wght700Grad0Opsz48 from '../components/FolderFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFolder = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFolderFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFolderFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFolderFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFolderFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFolderFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFolderFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFolderFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFolderFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFolderFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFolderFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFolderFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFolderFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFolderFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFolderFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
